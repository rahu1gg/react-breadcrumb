import { ProductsList } from '@/components/app/products';
import { Breadcrumbs } from '@/components/global/breadcrumb';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/products/')({
  component: Products,
});

function Products() {
  return (
    <section>
      <div className='p-5'>
        <Breadcrumbs />
        <h1 className='text-3xl font-bold mb-5'>Products</h1>
        <ProductsList />
      </div>
    </section>
  );
}
