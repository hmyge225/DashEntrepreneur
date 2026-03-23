import { Play, Sparkles, HeartHandshake, ChevronRight } from 'lucide-react';

const iconMap = {
  Play,
  Sparkles,
  HeartHandshake,
};

export default function QuickActions({ actions }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h2 className="text-[16px] font-semibold text-text-primary mb-1">Actions rapides</h2>
      <div className="flex flex-wrap gap-3">
        {actions.map((action) => {
          const Icon = iconMap[action.icon];
          return (
            <button
              key={action.id}
              className="flex items-center gap-[14px] h-[72px] px-4 rounded-lg flex-1 min-w-[220px] text-left transition-opacity hover:opacity-90 cursor-pointer"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              {/* Icon container */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: action.color }}
              >
                {Icon && <Icon size={20} color="white" />}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span className="text-[14px] font-semibold text-text-primary truncate">
                  {action.title}
                </span>
                <span className="text-[12px] text-text-secondary truncate">
                  {action.subtitle}
                </span>
              </div>

              {/* Chevron */}
              <ChevronRight size={20} color={action.chevronColor} className="shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
