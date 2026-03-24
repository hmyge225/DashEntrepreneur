import { X, Flame, Award, Users, TrendingUp } from 'lucide-react';

const TYPE_ICONS = {
  streak:   { icon: Flame,      bg: '#FEF3C7', color: '#D97706' },
  badge:    { icon: Award,      bg: '#EDE9FE', color: '#7C3AED' },
  mentor:   { icon: Users,      bg: '#DBEAFE', color: '#2563EB' },
  progress: { icon: TrendingUp, bg: '#D1FAE5', color: '#059669' },
};

export default function NotificationsPanel({ notifications, onClose }) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div
        className="fixed top-[77px] right-6 z-50 w-[360px] rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #E2E8F0' }}>
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-bold" style={{ color: '#1A1A1A' }}>Notifications</span>
            {unreadCount > 0 && (
              <span
                className="px-2 py-0.5 rounded-full text-[11px] font-bold text-white"
                style={{ backgroundColor: '#2563EB' }}
              >
                {unreadCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-colors"
            style={{ backgroundColor: '#F3F4F6' }}
          >
            <X size={14} color="#6B7280" />
          </button>
        </div>

        {/* Liste */}
        <div className="flex flex-col divide-y" style={{ divideColor: '#F3F4F6' }}>
          {notifications.map(notif => {
            const meta = TYPE_ICONS[notif.type] ?? TYPE_ICONS.progress;
            const Icon = meta.icon;
            return (
              <div
                key={notif.id}
                className="flex items-start gap-3 px-5 py-4 cursor-pointer transition-colors"
                style={{ backgroundColor: notif.read ? '#FFFFFF' : '#F8FAFF' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F1F5F9'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = notif.read ? '#FFFFFF' : '#F8FAFF'}
              >
                {/* Icône */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: meta.bg }}
                >
                  <Icon size={16} color={meta.color} />
                </div>

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[13px] font-semibold leading-tight" style={{ color: '#1A1A1A' }}>
                      {notif.title}
                    </p>
                    {!notif.read && (
                      <span
                        className="w-2 h-2 rounded-full shrink-0 mt-1"
                        style={{ backgroundColor: '#2563EB' }}
                      />
                    )}
                  </div>
                  <p className="text-[12px] mt-0.5 leading-snug" style={{ color: '#6B7280' }}>
                    {notif.description}
                  </p>
                  <p className="text-[11px] mt-1" style={{ color: '#9CA3AF' }}>
                    {notif.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-5 py-3" style={{ borderTop: '1px solid #E2E8F0' }}>
          <button
            className="w-full text-[12px] font-semibold text-center py-1.5 rounded-lg transition-colors cursor-pointer"
            style={{ color: '#2563EB' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#EFF6FF'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Tout marquer comme lu
          </button>
        </div>
      </div>
    </>
  );
}
