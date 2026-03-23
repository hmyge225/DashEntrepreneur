import { Award, Lock, GraduationCap } from 'lucide-react';

const iconMap = {
  Award,
  Lock,
  GraduationCap,
};

export default function BadgesCard({ badges }) {
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-3.5"
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <h2 className="text-[20px] font-bold text-text-primary">Mes badges</h2>

      <div className="flex gap-3">
        {badges.map((badge) => {
          const Icon = iconMap[badge.icon];
          return (
            <div
              key={badge.id}
              className="flex-1 flex flex-col items-center justify-center gap-2 py-4 rounded-xl"
              style={{
                backgroundColor: badge.unlocked ? '#D1FAE5' : '#F3F4F6',
              }}
            >
              {/* Icon */}
              {Icon && (
                <Icon
                  size={22}
                  color={badge.unlocked ? '#16A34A' : '#9CA3AF'}
                />
              )}

              {/* Label */}
              <span
                className="text-[13px] font-semibold"
                style={{ color: badge.unlocked ? '#1A1A1A' : '#9CA3AF' }}
              >
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
