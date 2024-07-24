import HotTopic from "@/component/Layout/HotTopic";
import Latest from "@/component/Layout/Latest";
import Trending from "@/component/Layout/Trending";

export default function Home() {
  const articles = [
    {
      category: "Movies",
      time: "2 Hours ago",
      title: "Christina Milian to Play Collette Jones in Starz’s 'Step Up'",
      image: "https://source.unsplash.com/random/400x300?person",
      content:
        "Since Naya Rivera’s passing in 2020, fans of Starz’s 'Step Up' series have eagerly waited to know who’ll star as Collette Jones, the character played by Naya. Finally, Hollywood actress Christina Milian has been unveiled as the role’s new cast in the forthcoming season for which production is set to begin this month.",
    },
    {
      category: "Business",
      time: "2 Hours ago",
      title:
        "Elon Musk's Tesla Buys $1.5 Billion in Bitcoin, affecting Bitcoin's growth and Everyone is Talking About It",
      image: "https://source.unsplash.com/random/400x300?elonmusk",
      content:
        "American electric vehicle company, Tesla, Inc. has become the first automaker to acquire bitcoins worth $1.5 billion for the company to enable 'more flexibility to further diversify and maximize returns on our cash.'",
    },
    {
      category: "Careers",
      time: "10 Hours ago",
      title:
        "ShareYourHustle: Show Your Special Someone how Sweet You are with Chemi’s Cakes",
      image: "https://source.unsplash.com/random/400x300?cake",
      content:
        "How can you show that special person just how sweet you are? Treat them to a sweet Chemi’s Cake! This local bakery has everything you think they are and offers something just as sweet from Chemi’s Cakes.",
    },
  ];
  return (
    <div className="relative mx-auto m-4 grid gap-4 min-h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 flex-1 min-h-screen">
        <Trending />
        <HotTopic />
        <Latest />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
