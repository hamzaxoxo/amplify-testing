"use client";
import React, { useState } from "react";
import AWS from "aws-sdk";
import Image from "next/image";

// AWS S3 Configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  region: process.env.NEXT_PUBLIC_AWS_REGION!,
});

interface S3Object {
  Key: string;
  LastModified: Date;
  ETag: string;
  Size: number;
  StorageClass: string;
}

interface ImagesBucket {
  contents: S3Object[];
}

const UploadImage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadResult, setUploadResult] = useState<string | null>(null);
  const [images, setImages] = React.useState<ImagesBucket | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
      Key: file.name,
      Body: file,
      ContentType: file.type,
      ACL: "public-read",
    };

    try {
      const data = await s3.upload(params).promise();
      setUploadResult(`File uploaded successfully. URL: ${data.Location}`);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadResult("Error uploading file");
    }

    setUploading(false);
  };

  React.useEffect(() => {
    const getImagesFromBucket = async () => {
      const params = {
        Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
      };

      try {
        const data = await s3.listObjectsV2(params).promise();

        const contents =
          data.Contents?.map((item) => ({
            Key: item.Key!,
            LastModified: item.LastModified!,
            ETag: item.ETag!,
            Size: item.Size!,
            StorageClass: item.StorageClass!,
          })) || [];

        setImages({ contents });
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    getImagesFromBucket();
  }, []);

  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold">Images in Bucket</h1>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="text-sm bg-[#FDDD88] px-4 py-4"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {uploadResult && <p>{uploadResult}</p>}

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-black rounded-full"
              role="status"
            ></div>
          </div>
        ) : (
          <div className="-m-1 flex flex-wrap md:-m-2">
            {images && images.contents.length > 0 ? (
              images.contents.map((image) => (
                <div
                  key={image.Key}
                  className="flex w-1/3 flex-wrap gap-2 border"
                >
                  <div className="w-full p-1 md:p-2">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={`https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${image.Key}`}
                      width={2080}
                      height={720}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center w-full h-64">
                <p className="text-gray-500">No images found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
