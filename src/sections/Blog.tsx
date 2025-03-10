"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { useEffect, useState } from "react";

export const BlogSection = () => {
  type MediumPost = {
    guid: string;
    title: string;
    description: string;
    thumbnail: string;
  };

  const extractThumbnail = (content: string) => {
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : "/placeholder.jpg";
  };

  const extractSubtitle = (content: string) => {
    const pMatch = content.match(/<p>(.*?)<\/p>/);
    if (pMatch) {
      const text = pMatch[1].replace(/<[^>]+>/g, "");
      const words = text.split(" ");
      return words.length > 140 ? words.slice(0, 140).join(" ") + "..." : text;
    }
    return "No subtitle available.";
  };

  const shortenTitle = (title: string) => {
    const words = title.split(" ");
    return words.length > 7 ? words.slice(0, 7).join(" ") + "..." : title;
  };

  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ankit.exe"
        );
        const data = await response.json();
        if (data.items) {
          // Slice the array to get only the latest 3 posts
          const latestPosts = data.items.slice(0, 3).map((item: any) => ({
            guid: item.guid,
            title: shortenTitle(item.title),
            description: extractSubtitle(item.content),
            thumbnail: extractThumbnail(item.content),
          }));
          setPosts(latestPosts);
        }
      } catch (error) {
        console.error("Error fetching Medium blog:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-16 lg:py-24" id="blog">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Latest Blogs"
          title="Latest Blogs"
          description="Check out my latest blogs"
        />
        <p className="m-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto">
          I am fetching these blogs from my Medium account. <br />
          Check out my latest articles on{" "}
          <a
            href="https://medium.com/@ankit.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            @ankit.exe
          </a>
          .
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.guid}
                className="bg-gray-900 hover:bg-black ease-in-out shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <Card className="h-full">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col h-full">
                    <h2 className="font-serif text-xl mt-3 md:mt-5 md:text-3xl font-bold">
                      {post.title}
                    </h2>
                    <p className="m-4 font-normal text-lg text-neutral-300 max-w-lg text-left mx-auto">
                      {post.description.slice(0, 100)}...
                    </p>
                    <Link href={`/blogs/${encodeURIComponent(post.guid)}`}>
                      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span
                          className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                          style={{
                            animation: "spin 4s linear infinite",
                          }}
                        />

                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-md">
                          Read More →
                        </span>
                      </button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 relative z-10">
            <Link href="/blogs">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span
                  className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                  style={{
                    animation: "spin 4s linear infinite",
                  }}
                />

                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-md">
                  View More Blogs →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
