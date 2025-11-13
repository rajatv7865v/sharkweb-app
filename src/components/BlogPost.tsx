import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center text-header-primary hover:text-header-primary-dark mb-8 font-medium transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Header Image */}
        <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-6 left-6">
            <span className="bg-header-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-header-text mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-header-text-light mb-6">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <p className="text-base md:text-lg text-header-text-light leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.trim() === "") return null;
            
            // Headers
            if (paragraph.startsWith("# ")) {
              return <h1 key={idx} className="text-2xl md:text-3xl font-bold text-header-text mt-8 mb-4">{paragraph.substring(2)}</h1>;
            }
            if (paragraph.startsWith("## ")) {
              return <h2 key={idx} className="text-xl md:text-2xl font-bold text-header-text mt-8 mb-4">{paragraph.substring(3)}</h2>;
            }
            if (paragraph.startsWith("### ")) {
              return <h3 key={idx} className="text-2xl font-bold text-header-text mt-6 mb-3">{paragraph.substring(4)}</h3>;
            }
            
            // Lists
            if (paragraph.includes("\n- ")) {
              const lines = paragraph.split("\n");
              const listItems = lines.filter(line => line.startsWith("- "));
              if (listItems.length > 0) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 my-6 text-header-text-light">
                    {listItems.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item.substring(2)}</li>
                    ))}
                  </ul>
                );
              }
            }
            
            // Regular paragraphs
            const processed = paragraph
              .split("\n")
              .map(line => {
                // Bold text
                line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-header-text font-semibold">$1</strong>');
                return line;
              })
              .join(" ");
            
            return (
              <p key={idx} className="text-header-text-light leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: processed }} />
            );
          })}
        </div>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-header-text mb-4">Share this article</h3>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://sharkwave.com/blog/${post.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-header-gray rounded-lg text-header-text hover:bg-header-primary hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sharkwave.com/blog/${post.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-header-gray rounded-lg text-header-text hover:bg-header-primary hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

