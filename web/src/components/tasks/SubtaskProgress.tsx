interface SubtaskProgressProps {
  completed: number;
  total: number;
}

export const SubtaskProgress: React.FC<SubtaskProgressProps> = ({ completed, total }) => {
  if (total === 0) return null;
  return (
    <span className="text-s px-3 py-2 rounded-full bg-primary-medium/20 text-primary-dark">
      {completed}/{total}
    </span>
  );
};