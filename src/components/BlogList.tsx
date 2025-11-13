import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: "ai-transformation-2024",
    title: "The Future of AI in Software Development: Trends Shaping 2024",
    excerpt: "Explore how artificial intelligence is revolutionizing software development, from automated code generation to intelligent testing and deployment strategies.",
    category: "Technology",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "cloud-architecture-best-practices",
    title: "Cloud Architecture Best Practices: Building Scalable Systems",
    excerpt: "Learn the essential principles and patterns for designing cloud-native applications that scale seamlessly with your business growth.",
    category: "Cloud Computing",
    date: "March 10, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: "microservices-vs-monolith",
    title: "Microservices vs Monolith: Choosing the Right Architecture",
    excerpt: "A comprehensive guide to understanding when to use microservices architecture versus monolithic systems, with real-world examples and trade-offs.",
    category: "Software Architecture",
    date: "March 5, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "algorithmic-trading-systems",
    title: "Building Robust Algorithmic Trading Systems: A Technical Deep Dive",
    excerpt: "Discover the technical foundations of algorithmic trading systems, including backtesting frameworks, risk management, and real-time execution strategies.",
    category: "Algorithmic Trading",
    date: "February 28, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

export default function BlogList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-header-gray rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-header-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-header-text-light mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-header-text mb-3 group-hover:text-header-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-header-text-light leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-header-primary font-medium group-hover:gap-2 transition-all">
                  Read more
                  <svg
                    className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

