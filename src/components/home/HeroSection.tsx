import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[hsl(25,30%,55%)]">
    {/* Background image */}
    <img
      src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891dcf26e965d2e8a4c0fef_hero-image.jpg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

    <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display leading-[0.95] tracking-tight text-white mb-8">
          Explore<br />Premium<br />Shoes
        </h1>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-colors"
          >
            Shop Now <ArrowRight size={16} />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 text-white border border-white/30 font-semibold text-sm hover:bg-white/30 transition-colors backdrop-blur-sm"
          >
            Categories <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>

      {/* Floating product card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden lg:block"
      >
        <Link to="/products" className="block bg-white p-4 shadow-2xl hover:shadow-3xl transition-shadow">
          <img
            src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891ed3ee3d93ad17e2c0430_hero-product.jpg"
            alt="New arrival shoes"
            className="w-48 h-48 object-cover"
          />
          <div className="flex items-center gap-2 mt-3 text-sm font-medium text-foreground">
            Explore New Arrivals <ArrowRight size={14} />
          </div>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
