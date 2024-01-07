interface EmptyCardProps {
  message: String;
}

export default function EmptyCard(props: EmptyCardProps) {
  return (
    <div className="text-gray-500 dark:text-gray-400 text-center p-4 border border-dotted rounded-md">
      {props.message}
    </div>
  );
}
