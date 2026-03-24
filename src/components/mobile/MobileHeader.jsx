import { useState } from 'react';
import { Bell } from 'lucide-react';
import MobileNotifications from './MobileNotifications';

export default function MobileHeader({ user, notifications = [], onMenuClick }) {
  const [open, setOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <header className="flex lg:hidden items-center justify-between h-16 px-5 bg-bg-topbar border-b border-border shrink-0">
        {/* Left: Avatar + Greeting */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="w-12 h-12 rounded-full overflow-hidden shrink-0 cursor-pointer border-[1.5px] border-border bg-gray-100 flex items-center justify-center shadow-md active:scale-95 transition-transform"
          >
            <img 
              src={user.avatar} 
              alt={user.fullName} 
              className="w-full h-full object-contain relative z-10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.outerHTML = `<div style="background-color: #2563EB; color: white; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 16px;">${user.fullName.charAt(0)}</div>`;
              }}
            />
          </button>
        </div>

        {/* Right: Bell */}
        <button
          onClick={() => setOpen(true)}
          className="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 cursor-pointer"
          style={{ backgroundColor: '#F3F4F6' }}
        >
          <Bell size={18} color="#6B7280" />
          {unreadCount > 0 && (
            <span
              className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
              style={{ backgroundColor: '#2563EB' }}
            >
              {unreadCount}
            </span>
          )}
        </button>
      </header>

      {open && (
        <MobileNotifications
          notifications={notifications}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
