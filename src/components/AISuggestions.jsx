import { Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const iconMap = {
  Lightbulb,
  Rocket,
  TrendingUp,
};

export default function AISuggestions({ suggestions }) {
  return (
    <div className="flex flex-col gap-3.5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-text-primary">
          Suggestions IA pour toi ✨
        </h2>
        <NavLink to="/business-plan">
          <button className="text-[13px] font-semibold text-accent hover:underline cursor-pointer">
            Voir tout
          </button>
        </NavLink>
      </div>

      {/* Cards row */}
      <div className="flex gap-3">
        {suggestions.map((card) => {
          const Icon = iconMap[card.icon];
          return (
            <button
              key={card.id}
              className="flex flex-col gap-2.5 p-4 rounded-[18px] flex-1 text-left transition-opacity hover:opacity-90 cursor-pointer"
              style={{
                minHeight: '160px',
                backgroundColor: card.color,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              {/* Tag */}
              <span className="text-[10px] font-bold text-white/80 tracking-widest uppercase">
                {card.tag}
              </span>

              {/* Icon */}
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/20">
                {Icon && <Icon size={18} color="white" />}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 mt-auto">
                <span className="text-white text-[14px] font-bold leading-tight">
                  {card.title}
                </span>
                <span className="text-white/70 text-[12px] leading-snug">
                  {card.description}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
