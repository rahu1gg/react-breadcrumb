import { useParams } from '@tanstack/react-router';
import { useQuery } from 'react-query';
import { Breadcrumbs } from '../global/breadcrumb';
import type { TProduct } from './products';

export function Product() {
  const { productId } = useParams({ strict: false });
  const { isLoading, isError, data } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      return data as TProduct;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error while loading products</div>;

  if (!data) return <div>No products found</div>;

  return (
    <div className='px-5 py-10'>
      <Breadcrumbs />
      <h2 className='text-2xl font-bold'>{data.title}</h2>
      <p className='text-sm text-muted-foreground mt-1.5'>{data.description}</p>
    </div>
  );
}
