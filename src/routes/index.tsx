import { Breadcrumbs } from '@/components/global/breadcrumb';
import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='p-2'>
      <Breadcrumbs />
      <h3>Welcome Home!</h3>
      <div>
        <Button asChild>
          <Link to='/products'>Products</Link>
        </Button>
      </div>
    </div>
  );
}
