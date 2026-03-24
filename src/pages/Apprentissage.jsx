import { useState } from 'react';
import { BookOpen, Play, Lock, CheckCircle, Clock, Star } from 'lucide-react';

const modules = [
  { id: 1, num: '01', title: "Les bases de l'entrepreneuriat", lessons: 8,  duration: '2h30', progress: 100, status: 'done'   },
  { id: 2, num: '02', title: 'Validation de votre idée',       lessons: 6,  duration: '1h45', progress: 100, status: 'done'   },
  { id: 3, num: '03', title: 'Construire son business model',  lessons: 10, duration: '3h00', progress: 45,  status: 'active' },
  { id: 4, num: '04', title: 'Stratégie marketing & acquisition', lessons: 9, duration: '2h50', progress: 0, status: 'locked' },
  { id: 5, num: '05', title: 'Financement & levée de fonds',   lessons: 7,  duration: '2h15', progress: 0,   status: 'locked' },
  { id: 6, num: '06', title: 'Lancement & croissance',         lessons: 12, duration: '4h00', progress: 0,   status: 'locked' },
];

const FILTERS = [
  { label: 'Tous',        match: () => true              },
  { label: 'En cours',   match: m => m.status === 'active' },
  { label: 'Terminés',   match: m => m.status === 'done'   },
  { label: 'Verrouillés',match: m => m.status === 'locked' },
];

const Header = () => (
  <div
    className="rounded-2xl px-6 py-6 flex items-center justify-between"
    style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)' }}
  >
    <div>
      <h1 className="text-white text-[20px] font-extrabold">Parcours Entrepreneuriat</h1>
      <p className="text-white/70 text-[13px] mt-1">6 modules · 52 leçons · ~16h</p>
      <div className="flex items-center gap-3 mt-4">
        <div className="w-40 h-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}>
          <div className="h-2 rounded-full bg-white" style={{ width: '45%' }} />
        </div>
        <span className="text-white text-[13px] font-semibold">45% complété</span>
      </div>
    </div>
    <div
      className="hidden xl:flex w-14 h-14 rounded-2xl items-center justify-center"
      style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
    >
      <BookOpen size={28} color="white" />
    </div>
  </div>
);

function ModuleCard({ mod }) {
  const isDone   = mod.status === 'done';
  const isActive = mod.status === 'active';
  const isLocked = mod.status === 'locked';

  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', opacity: isLocked ? 0.6 : 1 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-extrabold shrink-0"
            style={{
              backgroundColor: isDone ? '#DCFCE7' : isActive ? '#EFF6FF' : '#F3F4F6',
              color:           isDone ? '#16A34A' : isActive ? '#2563EB' : '#9CA3AF',
            }}
          >
            {mod.num}
          </div>
          <div>
            <p className="text-[14px] font-bold" style={{ color: isLocked ? '#9CA3AF' : '#1A1A1A' }}>
              {mod.title}
            </p>
            <div className="flex items-center gap-3 mt-0.5">
              <span className="text-[11px] flex items-center gap-1" style={{ color: '#9CA3AF' }}>
                <Star size={11} /> {mod.lessons} leçons
              </span>
              <span className="text-[11px] flex items-center gap-1" style={{ color: '#9CA3AF' }}>
                <Clock size={11} /> {mod.duration}
              </span>
            </div>
          </div>
        </div>

        <div className="shrink-0">
          {isDone   && <CheckCircle size={20} color="#16A34A" />}
          {isActive && (
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-[12px] font-semibold cursor-pointer"
              style={{ backgroundColor: '#2563EB' }}
            >
              <Play size={12} /> Continuer
            </button>
          )}
          {isLocked && <Lock size={18} color="#D1D5DB" />}
        </div>
      </div>

      {isActive && (
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-[11px]" style={{ color: '#6B7280' }}>Progression</span>
            <span className="text-[11px] font-semibold" style={{ color: '#7C3AED' }}>{mod.progress}%</span>
          </div>
          <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#E5E7EB' }}>
            <div
              className="h-2 rounded-full"
              style={{ width: `${mod.progress}%`, background: 'linear-gradient(90deg, #2563EB, #7C3AED)' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Apprentissage() {
  const [active, setActive] = useState(0);
  const filtered = modules.filter(FILTERS[active].match);

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex flex-col gap-5 px-8 py-6">
        <Header />

        {/* Filter pills */}
        <div className="flex gap-2">
          {FILTERS.map((f, i) => (
            <button
              key={f.label}
              onClick={() => setActive(i)}
              className="px-4 py-1.5 rounded-full text-[12px] font-semibold cursor-pointer transition-colors"
              style={{
                backgroundColor: active === i ? '#2563EB' : '#F3F4F6',
                color:           active === i ? '#fff'    : '#374151',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {filtered.map(mod => <ModuleCard key={mod.id} mod={mod} />)}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-4 p-4 pb-24 lg:hidden">
        <Header />

        <div className="flex gap-2 overflow-x-auto pb-1">
          {FILTERS.map((f, i) => (
            <button
              key={f.label}
              onClick={() => setActive(i)}
              className="px-3 py-1.5 rounded-full text-[12px] font-semibold shrink-0 cursor-pointer transition-colors"
              style={{
                backgroundColor: active === i ? '#2563EB' : '#F3F4F6',
                color:           active === i ? '#fff'    : '#374151',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.map(mod => <ModuleCard key={mod.id} mod={mod} />)}
      </div>
    </>
  );
}


