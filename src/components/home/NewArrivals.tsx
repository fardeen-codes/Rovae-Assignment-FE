import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";

const NewArrivals = () => {
  const { data: products, isLoading } = useProducts();
  const newArrivals = products?.slice(8, 16) || products?.slice(0, 8) || [];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-10 text-foreground">New Arrivals</h2>
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-secondary aspect-square mb-3" />
                <div className="h-4 bg-secondary w-3/4 mb-2" />
                <div className="h-4 bg-secondary w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
