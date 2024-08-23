import { Product } from '@/components/app/product';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/products/$productId')({
  component: Product,
});
