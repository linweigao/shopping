import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ProductDetail } from "./components/ProductDetail";

type View = "home" | "product";

// Mock product data for detailed view
const mockProduct = {
  id: "1",
  title: "Elegant Black Designer Dress",
  description: "This stunning black designer dress embodies timeless elegance and modern sophistication. Crafted from premium silk blend fabric, it features a flattering silhouette that drapes beautifully on the body. Perfect for evening events, cocktail parties, or any special occasion where you want to make a lasting impression.",
  price: 299,
  originalPrice: 399,
  images: [
    "https://images.unsplash.com/photo-1758387813664-5cd1211304f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRyZXNzJTIwZWxlZ2FudCUyMGJsYWNrfGVufDF8fHx8MTc1OTI4MjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1678637803638-0bcc1e13ecae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBlbGVnYW50JTIwd29tYW58ZW58MXx8fHwxNzU5MjgyNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1619027131391-87eadec6a398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNhc3VhbCUyMHdlYXIlMjBqZWFuc3xlbnwxfHx8fDE3NTkyODI0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["Black", "Navy", "Burgundy"],
  inStock: true,
  isNew: false,
  isSale: true,
  rating: 4.8,
  reviewCount: 127,
  sku: "ED-001-BLK",
  brand: "LUXE Design",
  material: "Silk Blend (70% Silk, 30% Polyester)"
};

export default function App() {
  const [currentView, setCurrentView] = useState<View>("home");
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleProductClick = (productId: string) => {
    setCurrentView("product");
  };

  const handleCategoryClick = (category: string) => {
    // In a real app, this would navigate to category page
    console.log("Navigate to category:", category);
  };

  const handleAddToCart = (size: string, color: string) => {
    setCartItemCount(prev => prev + 1);
    console.log("Added to cart:", { size, color });
  };

  const handleToggleWishlist = () => {
    console.log("Toggle wishlist");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={cartItemCount} />
      
      {currentView === "home" && (
        <HomePage
          onCategoryClick={handleCategoryClick}
          onProductClick={handleProductClick}
        />
      )}
      
      {currentView === "product" && (
        <div>
          <div className="container mx-auto px-4 py-4">
            <button
              onClick={handleBackToHome}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Home
            </button>
          </div>
          <ProductDetail
            product={mockProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
          />
        </div>
      )}
    </div>
  );
}