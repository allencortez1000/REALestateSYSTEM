type ButtonProps = {
  children: any;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({ children, className = '', type = 'button' }: ButtonProps) {
  return (
    <button type={type} className={`rounded-full bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white shadow-luxury transition hover:bg-navy-900 ${className}`}>
      {children}
    </button>
  );
}
