import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const posts = [
  { id: 1, title: "The Art of Leather Crafting", date: "Jan 15, 2026", excerpt: "Discover the meticulous process behind every pair of SNIKEI shoes and why quality leather matters." },
  { id: 2, title: "5 Ways to Style Your Sneakers", date: "Feb 3, 2026", excerpt: "From casual weekends to smart-casual offices, here's how to make sneakers work for any occasion." },
  { id: 3, title: "Sustainability in Footwear", date: "Feb 20, 2026", excerpt: "How SNIKEI is working towards a more sustainable future with eco-friendly materials and practices." },
];

const Blog = () => (
  <>
    <AnnouncementBar />
    <Header />
    <main className="bg-background min-h-screen">
      <div className="container py-20 md:py-32 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-display text-foreground mb-12">Blog</h1>
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-border pb-8">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{post.date}</p>
              <h2 className="text-2xl font-display text-foreground mb-3">{post.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Blog;
