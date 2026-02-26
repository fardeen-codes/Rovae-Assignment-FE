import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Star, ArrowRight, ArrowLeft, Recycle, Shield, Truck, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { useProduct, useProducts } from "@/hooks/useProducts";
import { useCart } from "@/context/CartContext";

const sizes = ["S", "M", "L", "XL", "XXL"];

const features = [
  { icon: Recycle, title: "Sustainable Materials", desc: "We believe great style shouldn't come at the planet's expense." },
  { icon: Shield, title: "Warranty Included", desc: "Every pair comes with a hassle-free 6-month warranty" },
  { icon: Truck, title: "Delivery & Shipping", desc: "Your shoes will be dispatched within 1–2 business days" },
  { icon: Leaf, title: "Eco-Friendly Fabrics", desc: "Crafted with sustainability in mind, our shoes feature eco-friendly fabrics" },
];

const reviews = [
  {
    name: "Harper Jackson",
    avatar: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg",
    date: "3 months ago",
    rating: 5,
    title: "Exactly What I Was Looking For",
    text: "I recently upgraded to the luminatech smart home system, and it has completely transformed my living space. The ease of control through the app and voice commands has made managing my home a breeze.",
  },
  {
    name: "Harper Jackson",
    avatar: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68935d2912795d5a43a13801_Ellipse%202%20(1).png",
    date: "4 months ago",
    rating: 4.5,
    title: "Beautiful And Easy Use",
    text: "I've been using the techpulse fitness tracker for the past month, and it's been a game-changer for my health and wellness journey. The accurate heart rate monitoring keeps me motivated.",
  },
  {
    name: "Avery Wyatt",
    avatar: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a09cad8bbd3e84a18dc902_6f59301a62fbf9bc224efbfdc89a3d0a2e0790a4.png",
    date: "5 months ago",
    rating: 5,
    title: "I just received my new shoe",
    text: "I recently upgraded to the luminatech smart home system, and it has completely transformed my living space. The ease of control through the app makes it a breeze.",
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useProduct(id || "");
  const { data: allProducts } = useProducts();
  const { addToCart, cartCount } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [optimisticCount, setOptimisticCount] = useState<number | null>(null);

  const displayCount = optimisticCount ?? cartCount;

  const handleAddToCart = () => {
    if (!product) return;
    // Optimistic UI
    setOptimisticCount(cartCount + quantity);
    // Simulate async then commit
    setTimeout(() => {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setOptimisticCount(null);
    }, 300);
  };

  const similarProducts = allProducts?.filter((p) => p.id !== product?.id && p.category === product?.category).slice(0, 4) || [];

  if (isLoading) {
    return (
      <>
        <AnnouncementBar />
        <Header />
        <main className="container py-16 min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-secondary aspect-square animate-pulse" />
            <div className="space-y-4">
              <div className="h-6 bg-secondary w-1/3 animate-pulse" />
              <div className="h-10 bg-secondary w-2/3 animate-pulse" />
              <div className="h-6 bg-secondary w-1/2 animate-pulse" />
              <div className="h-20 bg-secondary animate-pulse" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <AnnouncementBar />
        <Header />
        <main className="container py-16 min-h-screen text-center">
          <p className="text-destructive text-lg font-semibold">Product not found</p>
          <Link to="/products" className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-foreground hover:underline">
            <ArrowLeft size={16} /> Back to Shop
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const oldPrice = (product.price * 1.15).toFixed(2);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="bg-background min-h-screen">
        <div className="container py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-foreground">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.title}</span>
          </div>

          {/* Product Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-card-product flex items-center justify-center p-12 aspect-square"
            >
              <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating.rate) ? "fill-star text-star" : "text-border"}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.rating.count} reviews)</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-display text-foreground mb-4">{product.title}</h1>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-foreground">$ {product.price.toFixed(2)} USD</span>
                <span className="text-lg text-price-old line-through">$ {oldPrice} USD</span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                We have this product in United States warehouse. If destination means you can receive the parcel faster and earlier than expected.
              </p>

              {/* Size Selector */}
              <div className="flex gap-3 mb-6">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                    aria-label={`Size ${size}`}
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 h-12 border border-border text-center text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  aria-label="Quantity"
                />
                <button
                  onClick={handleAddToCart}
                  className="inline-flex items-center gap-2 px-8 h-12 bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Add to cart"
                >
                  Add to Cart <ArrowRight size={16} />
                </button>
              </div>

              {/* More Info */}
              <div>
                <h3 className="font-bold text-base text-foreground mb-3">More Info</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Available in a comprehensive range of sizes</li>
                  <li>Pre-softened for enhanced comfort and flexibility</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Product Overview */}
          <section className="mb-16 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">Product Overview</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>{product.description}</p>
              <p>Made with premium materials and breathable lining, each pair ensures all-day comfort without compromising on design. The lightweight sole offers superior flexibility and shock absorption.</p>
              <ul className="list-disc list-inside space-y-1 font-semibold text-foreground">
                <li>All-day comfort with soft cushioning and ergonomic design</li>
                <li>Breathable materials to keep your feet cool and fresh</li>
                <li>Versatile style — perfect for work, weekends, or travel</li>
                <li>Lightweight sole for easy movement and reduced fatigue</li>
                <li>Premium craftsmanship with durable stitching and finishes</li>
              </ul>
            </div>
          </section>

          {/* Product Specification */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">Product Specification</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: "Material", value: "Premium Blend" },
                { label: "Product Type", value: product.category },
                { label: "Heel Type", value: "Flat / Low-rise" },
                { label: "Available Sizes", value: "S - XXL" },
                { label: "Rating", value: `${product.rating.rate}/5` },
              ].map((spec) => (
                <div key={spec.label} className="border border-border p-4">
                  <span className="text-xs text-muted-foreground block mb-1">{spec.label}:</span>
                  <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="text-center border border-border p-6">
                  <f.icon size={28} className="mx-auto mb-3 text-foreground" />
                  <h4 className="font-bold text-sm text-foreground mb-1">{f.title}</h4>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">Product Reviews</h2>
            <div className="space-y-6">
              {reviews.map((r, i) => (
                <div key={i} className="border border-border p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <span className="font-bold text-sm text-foreground">{r.name}</span>
                      <span className="text-xs text-muted-foreground ml-3">{r.date}</span>
                    </div>
                    <div className="flex gap-0.5 ml-auto">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} className={j < Math.floor(r.rating) ? "fill-star text-star" : "text-border"} />
                      ))}
                    </div>
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-2">{r.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">Similar Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {similarProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
