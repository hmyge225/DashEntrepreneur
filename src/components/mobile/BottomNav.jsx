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
  profile:    '/parametres',
};

export default function BottomNav({ navItems }) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden items-center justify-around px-5 border-t"
      style={{ 
        backgroundColor: '#FFFFFF', 
        borderColor: '#E5E7EB',
        paddingBottom: 'env(safe-area-inset-bottom)',
        height: 'calc(64px + env(safe-area-inset-bottom))'
      }}
    >
      {navItems.map((item) => {
        const Icon = iconMap[item.icon];
        const to = ROUTES[item.id] ?? '/';
        return (
          <NavLink
            key={item.id}
            to={to}
            end={to === '/'}
            className="flex flex-col items-center justify-center gap-[3px] min-w-[64px] h-full cursor-pointer"
          >
            {({ isActive }) => (
              <>
                {Icon && <Icon size={22} color={isActive ? '#2563EB' : '#9CA3AF'} />}
                <span 
                  className="text-[10px] font-medium leading-none"
                  style={{ color: isActive ? '#2563EB' : '#9CA3AF' }}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
