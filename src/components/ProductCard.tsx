import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  onClick?: () => void;
  onAddToCart?: () => void;
  onToggleWishlist?: () => void;
}

export function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  isNew,
  isSale,
  onClick,
  onAddToCart,
  onToggleWishlist
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={onClick}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
          {isSale && <Badge variant="destructive">Sale</Badge>}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist?.();
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.();
            }}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium mb-2 line-clamp-2 cursor-pointer hover:text-primary transition-colors" onClick={onClick}>
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}