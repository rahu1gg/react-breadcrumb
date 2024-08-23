import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { useQuery } from 'react-query';

export type TProduct = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
};

export function ProductsList() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      return data as { products: TProduct[] };
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error while loading products</div>;

  if (!data) return <div>No products found</div>;

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {data.products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

function ProductCard({ id, title, thumbnail, description }: TProduct) {
  return (
    <div>
      <Card>
        <CardContent className='bg-muted'>
          <div className='text-center'>
            <img className='inline-block' src={thumbnail} alt={title} />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>
            <Link to={'/products/$productId'} params={{ productId: id.toString() }}>
              View
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
