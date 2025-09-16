import Link from 'next/link';
import { Star, MapPin, Thermometer, Package } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Generate star rating display
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-amber-200 text-amber-400" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white rounded-card shadow-elegant overflow-hidden card-hover cursor-pointer">
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-accent-primary via-accent-secondary to-orange-400 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
            <Package className="w-16 h-16 text-white/80" />
          </div>
          
          {/* Temperature Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-xs font-medium">
            <Thermometer className="w-3 h-3 text-blue-600" />
            <span>{product.current_temperature}°C</span>
          </div>

          {/* Cold Chain Badge */}
          {product.cold_chain_certified && (
            <div className="absolute top-3 left-3 bg-green-600 text-white rounded-full px-2 py-1 text-xs font-medium">
              Cold Chain ✓
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6">
          {/* Origin */}
          <div className="flex items-center gap-1 text-sm text-text-muted mb-2">
            <MapPin className="w-3 h-3" />
            <span>{product.origin_region}, {product.origin_country}</span>
          </div>

          {/* Product Name */}
          <h3 className="heading-secondary text-xl text-foreground mb-2 group-hover:text-accent-primary transition-colors duration-300">
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-text-muted text-sm mb-3 line-clamp-2">
            {product.tagline}
          </p>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {renderStars(product.average_rating)}
            </div>
            <span className="text-sm text-text-muted">
              ({product.review_count})
            </span>
            <span className="text-sm font-medium text-foreground">
              {product.average_rating.toFixed(1)}
            </span>
          </div>

          {/* Producer */}
          <p className="text-sm text-text-muted mb-4">
            by <span className="font-medium text-foreground">{product.producer_name}</span>
          </p>

          {/* Dietary Tags */}
          <div className="flex flex-wrap gap-1">
            {product.dietary_tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-neutral-cool text-xs px-2 py-1 rounded-full text-text-muted"
              >
                {tag}
              </span>
            ))}
            {product.dietary_tags.length > 3 && (
              <span className="text-xs text-text-muted px-2 py-1">
                +{product.dietary_tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
