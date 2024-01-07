export function Card({
  className,
  children,
}: {
  className?: String;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className={`bg-white dark:bg-gray-800 p-4 shadow rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}
