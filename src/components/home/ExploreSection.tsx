import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ExploreSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Formal Shoes */}
        <div className="relative overflow-hidden group min-h-[400px] flex items-end">
          <img
            src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68b5f21c578e1569fb31492f_explore-img.png"
            alt="Formal shoes collection"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative z-10 p-8">
            <span className="text-white/80 text-sm font-medium">20% OFF</span>
            <h3 className="text-2xl font-display text-white mt-1 mb-4">Explore All Formal Shoes</h3>
            <Link to="/products" className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all">
              Shop Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Running Shoes */}
        <div className="relative overflow-hidden group min-h-[400px] flex items-end">
          <img
            src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6dcb3e0d08d8984287ad_Explore-Right-Frame.png"
            alt="Running shoes collection"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative z-10 p-8">
            <span className="text-white/80 text-sm font-medium">25% OFF</span>
            <h3 className="text-2xl font-display text-white mt-1 mb-4">Grab The Latest Running Shoes</h3>
            <Link to="/products" className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all">
              Shop Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExploreSection;
