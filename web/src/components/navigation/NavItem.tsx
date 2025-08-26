interface NavItemProps {
    href: string;
    label: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    className?: string;
}

export default function NavItem({ href, label, icon, isActive = false, className = '' }: NavItemProps) {
  return (
    <a
      href={href}
      className={`px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
        isActive
          ? 'text-action-green bg-white/50 font:bold hover:text-action-green/90 hover:bg-white/70'
          : 'text-primary-dark font:bold hover:text-primary-dark/100 hover:bg-action-green/60'
      } ${className}`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}