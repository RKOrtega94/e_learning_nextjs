"use client";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const IconButton = ({ icon, onClick, className }: IconButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  );
};
