import NavItem from "./NavItem";
import { NavItemData } from "@/types/core/navItem";

interface NavBarProps {
  items: NavItemData[];
  activePage?: string;
}

export default function NavBar({ 
  items,
  activePage
}: NavBarProps) {
    return (
    <nav className="flex items-center space-x-4">
      {items.map((item) => (
        <NavItem
          key={item.label}
          href={item.href}
          label={item.label}
          icon={item.icon}
          isActive={item.label.toLowerCase() === activePage?.toLowerCase()}
        />
      ))}
    </nav>
    );
}