interface IconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const IconButton = ({
  children,
  onClick,
  className,
}: IconButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
