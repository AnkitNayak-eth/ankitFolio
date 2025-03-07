"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Spotlight } from "@/components/Spotlight";
import { Card } from "@/components/Card";

type MediumPost = {
  guid: string;
  title: string;
  description: string;
  thumbnail: string;
};

const extractThumbnail = (content: string) => {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : "/placeholder.jpg"; // Default image if no thumbnail found
};

const extractSubtitle = (content: string) => {
  const pMatch = content.match(/<p>(.*?)<\/p>/); // Extract first <p> tag
  if (pMatch) {
    const text = pMatch[1].replace(/<[^>]+>/g, ""); // Remove HTML tags
    const words = text.split(" ");
    return words.length > 140 ? words.slice(0, 140).join(" ") + "..." : text;
  }
  return "No subtitle available.";
};

const shortenTitle = (title: string) => {
  const words = title.split(" ");
  return words.length > 7 ? words.slice(0, 7).join(" ") + "..." : title;
};

const BlogPage = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ankit.exe"
        );
        const data = await response.json();
        console.log(data);
        if (data.items) {
          setPosts(
            data.items.map((item: any) => ({
              guid: item.guid,
              title: shortenTitle(item.title),
              description: extractSubtitle(item.content),
              thumbnail: extractThumbnail(item.content),
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching Medium blog:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <>
      <div className="min-h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.05] relative overflow-hidden py-16">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
          <div className="m-4 p-4">
            <h1 className="text-5xl p-4 md:text-7xl sm:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Latest Blogs
            </h1>
            <p className="m-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto">
              I am fetching these blogs from my Medium account. <br></br>Check
              out my latest articles on{" "}
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.guid}
                className="bg-gray-900 hover:bg-black ease-in-out shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <Card>
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-400">
                      {post.title}
                    </h2>
                    <p className="text-gray-200 mt-2">
                      {post.description.slice(0, 120)}...
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
        </div>
      </div>
    </>
  );
};

export default BlogPage;
