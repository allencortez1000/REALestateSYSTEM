import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ResponsiveGridProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  columns?: 'auto' | 'two' | 'three' | 'four';
  className?: string;
};

const columnClasses = {
  auto: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
  two: 'grid-cols-1 xl:grid-cols-2',
  three: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
  four: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
};

export default function ResponsiveGrid<T extends ElementType = 'div'>({
  as,
  children,
  columns = 'auto',
  className = '',
  ...props
}: ResponsiveGridProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ResponsiveGridProps<T>>) {
  const Component = as ?? 'div';

  return (
    <Component className={`grid min-w-0 gap-4 ${columnClasses[columns]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
