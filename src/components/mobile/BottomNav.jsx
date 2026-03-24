import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BarChart3, User } from 'lucide-react';

const iconMap = {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  User,
};

const ROUTES = {
  dashboard:  '/',
  learn:      '/apprentissage',
  stats:      '/statistiques',
  profile:    '/profil',
};

export default function BottomNav({ navItems }) {
  return (
    <nav
      className="flex lg:hidden items-center justify-around h-16 px-5 border-t border-border shrink-0"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {navItems.map((item) => {
        const Icon = iconMap[item.icon];
        const to = ROUTES[item.id] ?? '/';
        return (
          <NavLink
            key={item.id}
            to={to}
            end={to === '/'}
            className="flex flex-col items-center gap-1 py-1 px-3 cursor-pointer"
          >
            {({ isActive }) => (
              <>
                {Icon && <Icon size={24} color={isActive ? '#2563EB' : '#9CA3AF'} />}
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: isActive ? '#2563EB' : 'transparent' }}
                />
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
