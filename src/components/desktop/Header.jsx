import { useState } from 'react';
import { Bell } from 'lucide-react';
import NotificationsPanel from './NotificationsPanel';
import ProfileModal from './ProfileModal';

export default function Header({ user, notifications }) {
  const [showNotifs, setShowNotifs] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const unreadCount = notifications?.filter(n => !n.read).length ?? 0;

  return (
    <>
      <header className="hidden lg:flex items-center justify-between h-[100px] px-10 bg-bg-topbar border-b border-border shrink-0">

        <div className="flex flex-col gap-1">
          <h1 className="text-[26px] font-bold text-text-primary leading-tight">
            Bonjour, {user.fullName} 
          </h1>
          <p className="text-[14px] text-text-secondary font-medium">
           {user.domain}
          </p>
        </div>

        <div className="flex items-center gap-5">
          {/* Bouton Notifications */}
          <div className="relative shrink-0">
            <button
              onClick={() => setShowNotifs(v => !v)}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer hover:bg-gray-200"
              style={{ backgroundColor: '#F3F4F6' }}
            >
              <Bell size={22} color="#6B7280" />
            </button>
            {unreadCount > 0 && (
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[11px] font-bold text-white flex items-center justify-center ring-2 ring-white"
                style={{ backgroundColor: '#2563EB' }}
              >
                {unreadCount}
              </span>
            )}
          </div>

          {/* Profil */}
          <div 
            onClick={() => setShowProfile(v => !v)}
            className="w-14 h-14 rounded-full overflow-hidden shrink-0 cursor-pointer border-2 border-border bg-gray-100 flex items-center justify-center shadow-md transition-transform hover:scale-105"
          >
            <img 
              src={user.avatar} 
              alt={user.fullName} 
              className="w-full h-full object-contain relative z-10"
              onError={(e) => {
                e.target.onerror = null;
                // Fallback avec initiales si l'image ne charge pas
                e.target.outerHTML = `<div style="background-color: #2563EB; color: white; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">${user.fullName.charAt(0)}</div>`;
              }}
            />
          </div>
        </div>
      </header>

      {showNotifs && (
        <NotificationsPanel notifications={notifications} onClose={() => setShowNotifs(false)} />
      )}

      {showProfile && (
        <ProfileModal 
          user={user} 
          pos={{ top: '105px', right: '20px' }} 
          onClose={() => setShowProfile(false)} 
        />
      )}

    </>
  );
}
