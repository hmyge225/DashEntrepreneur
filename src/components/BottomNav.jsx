import { LayoutDashboard, BookOpen, BarChart3, User } from 'lucide-react';

const iconMap = {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  User,
};

export default function BottomNav({ navItems }) {
  return (
    <nav
      className="flex lg:hidden items-center justify-around h-16 px-5 border-t border-border shrink-0"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {navItems.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <button
            key={item.id}
            className="flex flex-col items-center gap-1 py-1 px-3 cursor-pointer"
          >
            {Icon && (
              <Icon
                size={24}
                color={item.active ? '#2563EB' : '#9CA3AF'}
              />
            )}
            {/* Active indicator dot */}
            {item.active && (
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: '#2563EB' }}
              />
            )}
            {!item.active && <div className="w-1.5 h-1.5" />}
          </button>
        );
      })}
    </nav>
  );
}
