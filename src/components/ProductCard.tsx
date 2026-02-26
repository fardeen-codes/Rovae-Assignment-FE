import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const oldPrice = (product.price * 1.15).toFixed(2);

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      aria-label={`View ${product.title}`}
    >
      <div className="bg-card-product aspect-square flex items-center justify-center p-8 mb-3 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-sm text-foreground line-clamp-1">{product.title}</h3>
        <div className="flex items-center gap-1 shrink-0">
          <Star size={14} className="fill-star text-star" />
          <span className="text-xs text-muted-foreground">({product.rating.rate})</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="font-bold text-sm text-foreground">$ {product.price.toFixed(2)} USD</span>
        <span className="text-sm text-price-old line-through">$ {oldPrice} USD</span>
      </div>
    </Link>
  );
};

export default ProductCard;
