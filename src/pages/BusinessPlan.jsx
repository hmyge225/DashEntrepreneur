import { Sparkles, CheckCircle, Circle, ChevronRight, Target, Users, TrendingUp, DollarSign, Rocket } from 'lucide-react';

const business_setps = [
  { id: 1, icon: Target,     
    title: 'Vision & Problème',           
    desc: 'Définir votre idée et le problème résolu',  
    done: true  
  },
  { id: 2, icon: Users,      
    title: 'Marché cible',                 
    desc: 'Identifier vos clients et segments',        
    done: true  
  },
  { id: 3, icon: TrendingUp, 
    title: 'Modèle économique',            
    desc: 'Revenus, coûts et proposition de valeur',   
    done: false 
  },
  { id: 4, icon: DollarSign, 
    title: 'Finances prévisionnelles',     
    desc: 'Projections sur 3 ans',                     
    done: false 
  },
  { id: 5, icon: Rocket,     
    title: 'Plan de lancement',            
    desc: 'Roadmap et jalons clés',                    
    done: false 
  },
];


function PageHeader({ done, total, pct }) {
  return (
    <div
      className="rounded-2xl px-6 py-6 flex items-center justify-between"
      style={{ background: 'linear-gradient(135deg, #16A34A 0%, #2563EB 100%)' }}
    >
      <div>
        <h1 className="text-white text-[20px] font-extrabold">Business Plan IA</h1>
        <p className="text-white/70 text-[13px] mt-1">Générez votre plan complet en quelques minutes</p>
        <div className="flex items-center gap-3 mt-4">
          <div className="w-40 h-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}>
            <div className="h-2 rounded-full bg-white" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-white text-[13px] font-semibold">{done}/{total} étapes</span>
        </div>
      </div>
      <div
        className="hidden xl:flex w-14 h-14 rounded-2xl items-center justify-center"
        style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
      >
        <Sparkles size={28} color="white" />
      </div>
    </div>
  );
}

function StepItem({ step, last }) {
  const Icon = step.icon;
  return (
    <div>
      <div className="flex items-center gap-3 py-4">
        {step.done ? <CheckCircle size={22} color="#16A34A" /> : <Circle size={22} color="#D1D5DB" />}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: step.done ? '#DCFCE7' : '#F3F4F6' }}
        >
          <Icon size={16} color={step.done ? '#16A34A' : '#9CA3AF'} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-semibold" style={{ color: '#1A1A1A' }}>{step.title}</p>
          <p className="text-[12px]" style={{ color: '#9CA3AF' }}>{step.desc}</p>
        </div>
        <button
          className="hidden sm:flex shrink-0 items-center gap-1 px-3 py-1.5 rounded-lg text-[12px] font-semibold cursor-pointer"
          style={{ backgroundColor: step.done ? '#F3F4F6' : '#2563EB', color: step.done ? '#6B7280' : '#fff' }}
        >
          {step.done ? 'Modifier' : 'Commencer'} <ChevronRight size={13} />
        </button>
      </div>
      {!last && <div className="ml-14 h-px" style={{ backgroundColor: '#F3F4F6' }} />}
    </div>
  );
}

export default function BusinessPlan() {
  const done  = business_setps.filter(s => s.done).length;
  const pct   = Math.round((done / business_setps.length) * 100);

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex gap-6 px-8 py-6">
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <PageHeader done={done} total={business_setps.length} pct={pct} />
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          >
            <h3 className="text-[15px] font-bold mb-2" style={{ color: '#1A1A1A' }}>Étapes du business plan</h3>
            {business_setps.map((s, i) => <StepItem key={s.id} step={s} last={i === business_setps.length - 1} />)}
          </div>
        </div>

      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-4 p-4 pb-24 lg:hidden">
        <PageHeader done={done} total={business_setps.length} pct={pct} />
        <div className="rounded-2xl p-5" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          {business_setps.map((s, i) => <StepItem key={s.id} step={s} last={i === business_setps.length - 1} />)}
        </div>
      </div>
    </>
  );
}
