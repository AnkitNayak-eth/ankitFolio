"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { TracingBeam } from "@/components/tracing-beam";
import { SpotlightNew } from "@/components/spotlight-new";

type BlogPost = {
  title: string;
  content: string;
  thumbnail: string;
};

const BlogDetailPage = () => {
  const params = useParams(); // Unwrapping params correctly
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ankit.exe"
        );
        const data = await response.json();
        // Find the specific blog post based on the slug (GUID)
        const blog = data.items.find(
          (item: any) => item.guid === decodeURIComponent(params.slug as string)
        );

        if (blog) {
          setPost({
            title: blog.title,
            content: blog.content, // Full blog HTML content
            thumbnail:
              blog.content.match(/<img[^>]+src="([^">]+)"/)?.[1] ||
              "/placeholder.jpg",
          });
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) fetchBlogPost();
  }, [params.slug]);

  if (loading)
    return <p className="text-center mt-10 text-white text-lg">Loading...</p>;

  if (!post)
    return (
      <p className="text-center mt-10 text-red-500 text-lg">Blog not found!</p>
    );

  return (
    <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.05] relative overflow-hidden">
      <div className="container mx-auto p-6">
        <SpotlightNew />

        <Link href="/blogs">
          <button className="mt-24 relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span
              className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
              style={{
                animation: "spin 4s linear infinite",
              }}
            />

            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-md">
              ← Back to Blogs
            </span>
          </button>
        </Link>
        <TracingBeam className="-ml-4">
          <div className="prose prose-lg pl-10 py-6 text-gray-200 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-4 block md:hidden">{post.title}</h1>

            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="
        [&>h1]:text-5xl [&>h1]:font-bold [&>h1]:mt-6 [&>h1]:mb-4 [&>h1]:text-gray-100
        [&>h2]:text-4xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:text-gray-200
        [&>h3]:text-4xl [&>h3]:font-bold [&>h3]:mt-5 [&>h3]:mb-3 [&>h3]:text-gray-300
        [&>p]:text-xl [&>p]:leading-relaxed [&>p]:mt-3 [&>p]:mb-4 [&>p]:text-gray-400

        [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mt-3 [&>ul]:mb-4 [&>ul]:text-lg
        [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mt-3 [&>ol]:mb-4 [&>ol]:text-lg
        [&>li]:text-lg [&>li]:text-gray-300 [&>li]:mt-1 [&>li]:mb-1

        [&>code]:bg-gray-200 [&>code]:text-red-500 [&>code]:font-mono [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:border [&>code]:border-gray-600
        [&>pre]:bg-gray-900 [&>pre]:text-white [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:border [&>pre]:border-gray-500
        [&>figure]:mt-4 [&>figure]:mb-4 [&>figure]:text-center [&>figure]:bg-gray-800 [&>figure]:p-4 [&>figure]:rounded-3xl
        [&>figcaption]:text-xl [&>figcaption]:text-gray-400 [&>figcaption]:mt-2
      "
            />
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};

export default BlogDetailPage;
