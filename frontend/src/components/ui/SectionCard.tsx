import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type SectionCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  padded?: boolean;
};

export default function SectionCard<T extends ElementType = 'section'>({
  as,
  children,
  className = '',
  padded = true,
  ...props
}: SectionCardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof SectionCardProps<T>>) {
  const Component = as ?? 'section';

  return (
    <Component
      className={`rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white/92 shadow-[0_18px_50px_rgba(9,21,64,0.08)] ${padded ? 'p-5 sm:p-6 lg:p-8' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
