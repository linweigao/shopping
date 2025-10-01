import { Button } from "./ui/button";
import { CategoryCard } from "./CategoryCard";
import { ProductCard } from "./ProductCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onCategoryClick?: (category: string) => void;
  onProductClick?: (productId: string) => void;
}

export function HomePage({ onCategoryClick, onProductClick }: HomePageProps) {
  const categories = [
    {
      id: "women",
      title: "Women's Fashion",
      description: "Elegant dresses, stylish tops, and contemporary wear",
      image: "https://images.unsplash.com/photo-1678637803638-0bcc1e13ecae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBlbGVnYW50JTIwd29tYW58ZW58MXx8fHwxNzU5MjgyNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "men",
      title: "Men's Collection",
      description: "Sophisticated suits, casual wear, and formal attire",
      image: "https://images.unsplash.com/photo-1758518731296-20e24e58846f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmb3JtYWwlMjB3ZWFyJTIwc3VpdHN8ZW58MXx8fHwxNzU5MjgyNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "accessories",
      title: "Luxury Accessories",
      description: "Premium bags, shoes, jewelry, and more",
      image: "https://images.unsplash.com/photo-1673377441728-23e984e70521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhY2Nlc3NvcmllcyUyMGJhZ3MlMjBzaG9lc3xlbnwxfHx8fDE3NTkyODI0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const featuredProducts = [
    {
      id: "1",
      title: "Elegant Black Designer Dress",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1758387813664-5cd1211304f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRyZXNzJTIwZWxlZ2FudCUyMGJsYWNrfGVufDF8fHx8MTc1OTI4MjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isSale: true
    },
    {
      id: "2",
      title: "Luxury Leather Handbag",
      price: 459,
      image: "https://images.unsplash.com/photo-1758542988969-39a10168b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kYmFnJTIwbGVhdGhlciUyMGJsYWNrfGVufDF8fHx8MTc1OTE2NDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isNew: true
    },
    {
      id: "3",
      title: "Designer High Heels",
      price: 189,
      image: "https://images.unsplash.com/photo-1562687848-c1664eff566d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNob2VzJTIwaGVlbHMlMjBlbGVnYW50fGVufDF8fHx8MTc1OTI4MjQ5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "4",
      title: "Luxury Men's Watch",
      price: 899,
      image: "https://images.unsplash.com/photo-1662724174411-06358407f6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB3YXRjaCUyMGx1eHVyeSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc1OTI4MjQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1619027131391-87eadec6a398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNhc3VhbCUyMHdlYXIlMjBqZWFuc3xlbnwxfHx8fDE3NTkyODI0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Fashion Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Luxury Fashion
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Curated collection of premium designer clothing and accessories
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Shop Collection
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collections designed for the modern, sophisticated individual.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                image={category.image}
                onClick={() => onCategoryClick?.(category.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground">
              Handpicked items from our latest collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => onProductClick?.(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in Style</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for exclusive offers and the latest fashion trends.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <Button className="bg-white text-black hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}