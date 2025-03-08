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
                    <h2 className="text-2xl font-semibold text-gray-100">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mt-2 flex-grow">
                      {post.description.slice(0, 100)}...
                    </p>
                    <Link href={`/blogs/${encodeURIComponent(post.guid)}`}>
                      <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-300">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* "More" Button */}
          <div className="flex justify-center mt-12">
            <Link href="/blogs">
              <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-700 transition duration-300">
                View More Blogs →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};