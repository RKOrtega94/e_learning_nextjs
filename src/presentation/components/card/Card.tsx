export function Card({
  className,
  children,
}: {
  className?: String;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={`bg-white p-4 shadow rounded-lg ${className}`}>
      {children}
    </div>
  );
}
