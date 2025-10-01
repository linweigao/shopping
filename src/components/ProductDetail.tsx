import { useState } from "react";
import { Heart, ShoppingCart, Truck, RotateCcw, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageGallery } from "./ImageGallery";

interface ProductDetailProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    images: string[];
    sizes: string[];
    colors: string[];
    inStock: boolean;
    isNew?: boolean;
    isSale?: boolean;
    rating: number;
    reviewCount: number;
    sku: string;
    brand: string;
    material: string;
  };
  onAddToCart?: (size: string, color: string) => void;
  onToggleWishlist?: () => void;
}

export function ProductDetail({ product, onAddToCart, onToggleWishlist }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      onAddToCart?.(selectedSize, selectedColor);
    }
  };

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <ImageGallery images={product.images} alt={product.title} />
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
              {product.isSale && <Badge variant="destructive">Sale -{discountPercent}%</Badge>}
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-muted-foreground mb-4">{product.brand}</p>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">★★★★★</span>
                <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Color</label>
            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                {product.colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button
                className="flex-1"
                size="lg"
                onClick={handleAddToCart}
                disabled={!selectedSize || !selectedColor || !product.inStock}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onToggleWishlist}
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            
            {(!selectedSize || !selectedColor) && product.inStock && (
              <p className="text-sm text-muted-foreground">Please select size and color</p>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Truck className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-muted-foreground">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <RotateCcw className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Easy Returns</p>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Shield className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Authenticity Guarantee</p>
                <p className="text-sm text-muted-foreground">100% authentic products</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="returns">Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">SKU:</span> {product.sku}
                </div>
                <div>
                  <span className="font-medium">Material:</span> {product.material}
                </div>
                <div>
                  <span className="font-medium">Brand:</span> {product.brand}
                </div>
                <div>
                  <span className="font-medium">In Stock:</span> {product.inStock ? "Yes" : "No"}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping">
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>• Free standard shipping on orders over $100</p>
                <p>• Express shipping available for $15</p>
                <p>• Standard delivery: 3-5 business days</p>
                <p>• Express delivery: 1-2 business days</p>
                <p>• International shipping available</p>
              </div>
            </TabsContent>
            <TabsContent value="returns">
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>• 30-day return policy from date of delivery</p>
                <p>• Items must be in original condition with tags</p>
                <p>• Free returns for defective items</p>
                <p>• Return shipping fee applies for exchanges</p>
                <p>• Refunds processed within 5-7 business days</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}