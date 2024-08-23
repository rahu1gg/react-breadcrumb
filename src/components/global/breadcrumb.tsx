import { Link, useLocation } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import React from 'react';

export function Breadcrumbs() {
  const location = useLocation();
  const breadcrumb = location.pathname.split('/').filter((val) => val);

  return (
    <div className='flex items-center justify-start gap-x-1 mb-5 font-medium'>
      {breadcrumb.length > 0 && (
        <Link to='/' className='hover:underline'>
          Home
        </Link>
      )}
      {breadcrumb.map((val, index) => {
        const breadcrumbPath = `/${breadcrumb.slice(0, index + 1).join('/')}`;

        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <React.Fragment key={index}>
            <ChevronRight size={20} className='relative top-px' />
            {index === breadcrumb.length - 1 ? (
              <span className='capitalize inline-block'>{val}</span>
            ) : (
              <Link to={breadcrumbPath} className='capitalize inline-block hover:underline'>
                {val}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
