import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/types/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="group h-full flex flex-col overflow-hidden border-0 bg-card transition-all duration-300 hover:shadow-lg">
      <Link to={`/products/${product.id}`} className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.original_price && (
          <Badge className="absolute left-3 top-3 bg-destructive text-destructive-foreground">
            Sale
          </Badge>
        )}
      </Link>
      <CardContent className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs text-muted-foreground">{product.rating}</span>
        </div>
        <Link to={`/products/${product.id}`}>
          <h3 className="text-sm font-semibold leading-tight text-foreground transition-colors hover:text-primary line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold">${product.price}</span>
            {product.original_price && (
              <span className="text-xs text-muted-foreground line-through">${product.original_price}</span>
            )}
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="h-8 w-8 p-0"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
