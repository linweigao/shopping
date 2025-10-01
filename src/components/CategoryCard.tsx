import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export function CategoryCard({ title, description, image, onClick }: CategoryCardProps) {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}