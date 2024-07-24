"use client";
import UploadImage from "@/component/UploadImage";
import axios from "axios";
import React from "react";

export default function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://ijqqc5bs48.execute-api.us-east-1.amazonaws.com/prod"
        );
        const result = res.data;
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Lambda Function</h1>
      <pre>{JSON.stringify(data)}</pre>

      <UploadImage />
    </div>
  );
}
