import { useState } from 'react';
import { X, Flame, Award, Users, TrendingUp } from 'lucide-react';

const typeIcon = {
  streak:   { Icon: Flame,      bg: '#FEF3C7', color: '#D97706' },
  badge:    { Icon: Award,      bg: '#EDE9FE', color: '#7C3AED' },
  mentor:   { Icon: Users,      bg: '#DBEAFE', color: '#2563EB' },
  progress: { Icon: TrendingUp, bg: '#DCFCE7', color: '#059669' },
};

export default function MobileNotifications({ notifications, onClose }) {
  const [items, setItems] = useState(notifications);

  function markAllRead() {
    setItems(prev => prev.map(n => ({ ...n, read: true })));
  }

  const unreadCount = items.filter(n => !n.read).length;

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="w-full rounded-b-2xl overflow-hidden"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-[17px] font-bold text-text-primary">Notifications</span>
            {unreadCount > 0 && (
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: '#2563EB' }}
              >
                {unreadCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="text-[12px] font-medium"
                style={{ color: '#2563EB' }}
              >
                Tout lire
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#F3F4F6' }}
            >
              <X size={16} color="#6B7280" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col divide-y divide-[#F3F4F6] max-h-[70vh] overflow-y-auto">
          {items.map(notif => {
            const meta = typeIcon[notif.type] ?? typeIcon.progress;
            const { Icon } = meta;
            return (
              <div
                key={notif.id}
                className="flex items-start gap-3 px-5 py-4"
                style={{ backgroundColor: notif.read ? '#FFFFFF' : '#F8FAFF' }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: meta.bg }}
                >
                  <Icon size={18} color={meta.color} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-[13px] font-semibold truncate"
                      style={{ color: notif.read ? '#374151' : '#1A1A1A' }}
                    >
                      {notif.title}
                    </span>
                    <span className="text-[11px] shrink-0" style={{ color: '#9CA3AF' }}>
                      {notif.time}
                    </span>
                  </div>
                  <p className="text-[12px] mt-0.5 leading-snug" style={{ color: '#6B7280' }}>
                    {notif.description}
                  </p>
                </div>

                {/* Unread dot */}
                {!notif.read && (
                  <div
                    className="w-2 h-2 rounded-full shrink-0 mt-1.5"
                    style={{ backgroundColor: '#2563EB' }}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="h-5" />
      </div>
    </div>
  );
}
