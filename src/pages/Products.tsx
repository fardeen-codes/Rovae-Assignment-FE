import { useState, useMemo } from "react";
import { Search, ChevronUp, ChevronDown } from "lucide-react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";

const categoryFilters = ["All Products", "electronics", "jewelery", "men's clothing", "women's clothing"];
const priceRanges = [
  { label: "$0 - $50", min: 0, max: 50 },
  { label: "$51 - $100", min: 51, max: 100 },
  { label: "$101 - $200", min: 101, max: 200 },
  { label: "$201 - $500", min: 201, max: 500 },
  { label: "$501+", min: 501, max: Infinity },
];

const Products = () => {
  const { data: products, isLoading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [catOpen, setCatOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  const filtered = useMemo(() => {
    if (!products) return [];
    return products.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All Products" || p.category === selectedCategory;
      const matchesPrice = !selectedPriceRange || (() => {
        const range = priceRanges.find((r) => r.label === selectedPriceRange);
        return range ? p.price >= range.min && p.price <= range.max : true;
      })();
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, search, selectedCategory, selectedPriceRange]);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="bg-background min-h-screen">
        {/* Page Title */}
        <div className="py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground">Explore Our Shop</h1>
        </div>

        <div className="container pb-16">
          {/* Search Bar */}
          <div className="mb-8 max-w-md">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground"
                aria-label="Search products by name"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 shrink-0" aria-label="Product filters">
              {/* Categories */}
              <div className="border border-border p-5 mb-4">
                <button
                  onClick={() => setCatOpen(!catOpen)}
                  className="flex items-center justify-between w-full text-sm font-bold text-foreground"
                  aria-expanded={catOpen}
                >
                  Categories
                  {catOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {catOpen && (
                  <div className="mt-4 space-y-3">
                    {categoryFilters.map((cat) => (
                      <button key={cat} onClick={() => setSelectedCategory(cat)} className="flex items-center gap-3 cursor-pointer group w-full text-left">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedCategory === cat ? "border-foreground bg-foreground" : "border-border group-hover:border-muted-foreground"
                        }`}>
                          {selectedCategory === cat && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" className="text-background" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-foreground capitalize">{cat}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Ranges */}
              <div className="border border-border p-5">
                <button
                  onClick={() => setPriceOpen(!priceOpen)}
                  className="flex items-center justify-between w-full text-sm font-bold text-foreground"
                  aria-expanded={priceOpen}
                >
                  Price Ranges
                  {priceOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {priceOpen && (
                  <div className="mt-4 space-y-3">
                    {priceRanges.map((range) => (
                      <button key={range.label} onClick={() => setSelectedPriceRange(selectedPriceRange === range.label ? null : range.label)} className="flex items-center gap-3 cursor-pointer group w-full text-left">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedPriceRange === range.label ? "border-foreground bg-foreground" : "border-border group-hover:border-muted-foreground"
                        }`}>
                          {selectedPriceRange === range.label && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" className="text-background" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-foreground">{range.label}</span>
                      </button>
                    ))}
                    {selectedPriceRange && (
                      <button
                        onClick={() => setSelectedPriceRange(null)}
                        className="text-xs text-muted-foreground hover:text-foreground mt-1"
                      >
                        Clear price filter
                      </button>
                    )}
                  </div>
                )}
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {error ? (
                <div className="text-center py-20">
                  <p className="text-destructive text-lg font-semibold">Failed to load products</p>
                  <p className="text-muted-foreground text-sm mt-2">Please try again later.</p>
                </div>
              ) : isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-secondary aspect-square mb-3" />
                      <div className="h-4 bg-secondary w-3/4 mb-2" />
                      <div className="h-4 bg-secondary w-1/2" />
                    </div>
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-lg font-semibold text-foreground">No products found</p>
                  <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
