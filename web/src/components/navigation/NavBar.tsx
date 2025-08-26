import NavItem from "./NavItem";

interface NavBarProps {
    activePage?: 'tasks' | 'focus' | 'settings';
}

export default function NavBar({ activePage = 'tasks' }: NavBarProps) {
    return (
    <nav className="flex items-center space-x-4">
      <NavItem
        href="#"
        label="All Tasks"
        isActive={activePage === 'tasks'}
      />
      <NavItem
        href="#"
        label="Focus"
        isActive={activePage === 'focus'}
      />
      <NavItem
        href="#"
        label="Settings"
        isActive={activePage === 'settings'}
      />
    </nav>
    );
}