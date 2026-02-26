import { Link } from "react-router-dom";

const categories = [
  { name: "Sneakers", image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a047ce177dc57b2dce4588_image%20(25).png" },
  { name: "Boots", image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03bff072e0fa8cbf853a5_boots.png" },
  { name: "Formal", image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03c0f6d4da41861947a6c_formal.png" },
  { name: "Running", image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03c1da2a187c96be8892b_running.png" },
  { name: "Oxford", image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03c29072e0fa8cbf8580b_oxford.png" },
  { name: "Sports Shoe", image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03c38e31a6bf91056ec46_sports.png" },
  { name: "High Neck", image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03c909608dcdaf09a9693_high-neck.png" },
  { name: "Loafers", image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03ca00cb7900d5765835a_loafer.png" },
];

const CategoriesSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display text-center mb-10 text-foreground">Our Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to="/products"
            className="group text-center"
          >
            <div className="bg-card-product aspect-square flex items-center justify-center p-6 mb-3 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <span className="text-sm font-semibold text-foreground">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
