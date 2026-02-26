const articles = [
  {
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68936f69d26c6e5db9cc1769_image%20(21).png",
    category: "Entertainment",
    date: "April 20, 2025",
    title: "Budget Travel: Exploring the World Affordably",
  },
  {
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68aadb260f8df4cb22ccfd94_image.png",
    category: "Technology",
    date: "May 1, 2025",
    title: "Improving Sleep Hygiene for Better Rest",
  },
  {
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68936ff678d0bc75fa61f4b1_image%20(23).png",
    category: "Social Issues",
    date: "June 12, 2025",
    title: "Top 10 Rendering Software for Stunning Visuals",
  },
  {
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/6893702aa38c9ed97b708268_image%20(24).png",
    category: "Fashion Guide",
    date: "July 7, 2025",
    title: "10 must-have wardrobe staples every fashion Lover",
  },
];

const ArticlesSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display text-center mb-10 text-foreground">Articles & Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((a, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
              <span className="font-medium">{a.category}</span>
              <span>•</span>
              <span>{a.date}</span>
            </div>
            <h3 className="font-bold text-sm text-foreground group-hover:underline leading-snug">{a.title}</h3>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ArticlesSection;
