import { useState } from 'react';
import {
  User, Bell, Palette, Lock, Trash2,
  ChevronRight, Check, Moon, Sun, Monitor,
} from 'lucide-react';
import mockData from '../data/mockData.json';

const TABS = [
  { id: 'profil',        label: 'Profil',        icon: User    },
  { id: 'notifications', label: 'Notifications',  icon: Bell    },
  { id: 'apparence',     label: 'Apparence',      icon: Palette },
  { id: 'securite',      label: 'Sécurité',       icon: Lock    },
  { id: 'danger',        label: 'Compte',         icon: Trash2  },
];

export default function Parametres() {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex gap-6 px-8 py-6 h-full">
        {/* Sidebar tabs */}
        <div
          className="flex flex-col w-[220px] shrink-0 rounded-2xl p-3 gap-1 self-start"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
        >
          <p className="text-[10px] font-bold tracking-widest px-3 pb-2 pt-1" style={{ color: '#9CA3AF' }}>
            PARAMÈTRES
          </p>
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors text-left cursor-pointer"
              style={{
                backgroundColor: activeTab === id ? '#EFF6FF' : 'transparent',
                color: activeTab === id ? '#2563EB' : '#374151',
              }}
            >
              <Icon size={16} style={{ color: activeTab === id ? '#2563EB' : '#9CA3AF' }} />
              {label}
              {activeTab === id && <ChevronRight size={14} className="ml-auto" style={{ color: '#2563EB' }} />}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <TabContent activeTab={activeTab} />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-4 p-4 pb-24 lg:hidden">
        {/* Tab pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium shrink-0 cursor-pointer transition-colors"
              style={{
                backgroundColor: activeTab === id ? '#2563EB' : '#F3F4F6',
                color: activeTab === id ? '#fff' : '#374151',
              }}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>
        <TabContent activeTab={activeTab} />
      </div>
    </>
  );
}

/* ─── Tab content ─────────────────────────────────────────── */

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'profil':        return <TabProfil />;
    case 'notifications': return <TabNotifications />;
    case 'apparence':     return <TabApparence />;
    case 'securite':      return <TabSecurite />;
    case 'danger':        return <TabDanger />;
    default:              return null;
  }
}

/* ─── Section card wrapper ────────────────────────────────── */
function Card({ title, children }) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-5"
      style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
    >
      {title && <h3 className="text-[15px] font-bold" style={{ color: '#1A1A1A' }}>{title}</h3>}
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold" style={{ color: '#6B7280' }}>{label}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, type = 'text', placeholder }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full h-10 px-3 rounded-xl text-[13px] outline-none transition-all"
      style={{
        backgroundColor: '#F9FAFB',
        border: '1px solid #E5E7EB',
        color: '#1A1A1A',
      }}
      onFocus={e  => (e.target.style.borderColor = '#2563EB')}
      onBlur={e   => (e.target.style.borderColor = '#E5E7EB')}
    />
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="w-11 h-6 rounded-full relative transition-colors shrink-0 cursor-pointer"
      style={{ backgroundColor: checked ? '#2563EB' : '#E5E7EB' }}
    >
      <span
        className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-200 flex items-center justify-center"
        style={{ left: checked ? '1.375rem' : '0.125rem', boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
      />
    </button>
  );
}

function SaveButton({ label = 'Enregistrer' }) {
  const [saved, setSaved] = useState(false);
  function handleClick() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-5 py-2 rounded-xl text-white text-[13px] font-semibold transition-all cursor-pointer self-start"
      style={{
        backgroundColor: saved ? '#16A34A' : '#2563EB',
        boxShadow: `0 4px 12px ${saved ? 'rgba(22,163,74,0.35)' : 'rgba(37,99,235,0.35)'}`,
      }}
    >
      {saved && <Check size={14} />}
      {saved ? 'Enregistré !' : label}
    </button>
  );
}

/* ─── Tab: Profil ─────────────────────────────────────────── */
function TabProfil() {
  const u = mockData.user;
  const [form, setForm] = useState({
    fullName: u.fullName,
    role:     u.role,
    domain:   u.domain,
    email:    'serge.mbouya@email.com',
  });
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  return (
    <div className="flex flex-col gap-4">
      <Card title="Informations personnelles">
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[24px] font-bold shrink-0"
            style={{ backgroundColor: '#2563EB' }}
          >
            {form.fullName.charAt(0)}
          </div>
          <div>
            <p className="text-[13px] font-semibold" style={{ color: '#1A1A1A' }}>{form.fullName}</p>
            <p className="text-[12px]" style={{ color: '#9CA3AF' }}>{form.role} · {u.level}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nom complet">
            <Input value={form.fullName} onChange={set('fullName')} />
          </Field>
          <Field label="Email">
            <Input value={form.email} onChange={set('email')} type="email" />
          </Field>
          <Field label="Rôle">
            <Input value={form.role} onChange={set('role')} />
          </Field>
          <Field label="Domaine">
            <Input value={form.domain} onChange={set('domain')} />
          </Field>
        </div>

        <SaveButton />
      </Card>

      {/* Stats */}
      <Card title="Statistiques">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Score',  value: u.score },
            { label: 'Streak', value: `${u.streak}j` },
            { label: 'Rang',   value: u.rank },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 py-4 rounded-xl"
              style={{ backgroundColor: '#F9FAFB' }}
            >
              <span className="text-[20px] font-extrabold" style={{ color: '#2563EB' }}>{value}</span>
              <span className="text-[11px]" style={{ color: '#9CA3AF' }}>{label}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ─── Tab: Notifications ──────────────────────────────────── */
function TabNotifications() {
  const [prefs, setPrefs] = useState({
    streak:    true,
    badge:     true,
    mentor:    false,
    progress:  true,
    email:     false,
    push:      true,
  });
  const toggle = key => val => setPrefs(p => ({ ...p, [key]: val }));

  const rows = [
    { key: 'streak',   label: 'Alertes streak',         desc: 'Rappel si ton streak est en danger' },
    { key: 'badge',    label: 'Nouveaux badges',         desc: 'Notification quand tu débloque un badge' },
    { key: 'mentor',   label: 'Nouveaux mentors',        desc: 'Quand un mentor rejoint la plateforme' },
    { key: 'progress', label: 'Progression des modules', desc: 'Résumé de ta progression hebdomadaire' },
  ];
  const channels = [
    { key: 'email', label: 'Notifications par email' },
    { key: 'push',  label: 'Notifications push' },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Card title="Préférences de notifications">
        <div className="flex flex-col gap-4">
          {rows.map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[13px] font-semibold" style={{ color: '#1A1A1A' }}>{label}</p>
                <p className="text-[11px]" style={{ color: '#9CA3AF' }}>{desc}</p>
              </div>
              <Toggle checked={prefs[key]} onChange={toggle(key)} />
            </div>
          ))}
        </div>
        <SaveButton />
      </Card>

      <Card title="Canaux">
        <div className="flex flex-col gap-4">
          {channels.map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between">
              <p className="text-[13px] font-semibold" style={{ color: '#1A1A1A' }}>{label}</p>
              <Toggle checked={prefs[key]} onChange={toggle(key)} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ─── Tab: Apparence ──────────────────────────────────────── */
function TabApparence() {
  const [theme, setTheme] = useState('system');
  const themes = [
    { id: 'light',  label: 'Clair',   icon: Sun     },
    { id: 'dark',   label: 'Sombre',  icon: Moon    },
    { id: 'system', label: 'Système', icon: Monitor },
  ];

  return (
    <Card title="Apparence">
      <p className="text-[12px]" style={{ color: '#9CA3AF' }}>Choisissez le thème de l'interface.</p>
      <div className="grid grid-cols-3 gap-3">
        {themes.map(({ id, label, icon: Icon }) => {
          const active = theme === id;
          return (
            <button
              key={id}
              onClick={() => setTheme(id)}
              className="flex flex-col items-center gap-2 py-5 rounded-xl border-2 transition-all cursor-pointer"
              style={{
                borderColor:      active ? '#2563EB' : '#E5E7EB',
                backgroundColor:  active ? '#EFF6FF' : '#F9FAFB',
              }}
            >
              <Icon size={22} style={{ color: active ? '#2563EB' : '#9CA3AF' }} />
              <span className="text-[12px] font-semibold" style={{ color: active ? '#2563EB' : '#374151' }}>
                {label}
              </span>
              {active && (
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#2563EB' }}
                >
                  <Check size={10} color="white" />
                </span>
              )}
            </button>
          );
        })}
      </div>
      <SaveButton />
    </Card>
  );
}

/* ─── Tab: Sécurité ───────────────────────────────────────── */
function TabSecurite() {
  const [form, setForm] = useState({ current: '', next: '', confirm: '' });
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));
  const match = form.next && form.next === form.confirm;

  return (
    <div className="flex flex-col gap-4">
      <Card title="Changer le mot de passe">
        <Field label="Mot de passe actuel">
          <Input type="password" value={form.current} onChange={set('current')} placeholder="••••••••" />
        </Field>
        <Field label="Nouveau mot de passe">
          <Input type="password" value={form.next} onChange={set('next')} placeholder="••••••••" />
        </Field>
        <Field label="Confirmer le nouveau mot de passe">
          <Input type="password" value={form.confirm} onChange={set('confirm')} placeholder="••••••••" />
          {form.confirm && !match && (
            <p className="text-[11px]" style={{ color: '#DC2626' }}>Les mots de passe ne correspondent pas.</p>
          )}
          {match && (
            <p className="text-[11px]" style={{ color: '#16A34A' }}>Les mots de passe correspondent.</p>
          )}
        </Field>
        <SaveButton label="Mettre à jour" />
      </Card>

      <Card title="Sessions actives">
        {[
          { device: 'Chrome · Windows 11', location: 'Paris, France',   current: true  },
          { device: 'Safari · iPhone 15',  location: 'Lyon, France',    current: false },
        ].map(({ device, location, current }) => (
          <div key={device} className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold" style={{ color: '#1A1A1A' }}>{device}</p>
              <p className="text-[11px]" style={{ color: '#9CA3AF' }}>{location}</p>
            </div>
            {current
              ? <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>Actuelle</span>
              : <button className="text-[12px] font-medium cursor-pointer" style={{ color: '#DC2626' }}>Révoquer</button>
            }
          </div>
        ))}
      </Card>
    </div>
  );
}

/* ─── Tab: Danger ─────────────────────────────────────────── */
function TabDanger() {
  const [confirm, setConfirm] = useState('');
  const expected = 'SUPPRIMER';

  return (
    <div className="flex flex-col gap-4">
      <Card title="Exporter mes données">
        <p className="text-[13px]" style={{ color: '#6B7280' }}>
          Téléchargez une copie de toutes vos données (profil, progression, badges).
        </p>
        <button
          className="flex items-center gap-2 px-5 py-2 rounded-xl text-[13px] font-semibold transition-all cursor-pointer self-start"
          style={{ backgroundColor: '#F3F4F6', color: '#374151' }}
        >
          Exporter en JSON
        </button>
      </Card>

      <Card>
        <div
          className="flex flex-col gap-4 p-4 rounded-xl"
          style={{ border: '1px solid #FEE2E2', backgroundColor: '#FFF5F5' }}
        >
          <div className="flex items-center gap-2">
            <Trash2 size={16} color="#DC2626" />
            <h4 className="text-[14px] font-bold" style={{ color: '#DC2626' }}>Supprimer le compte</h4>
          </div>
          <p className="text-[12px]" style={{ color: '#6B7280' }}>
            Cette action est <strong>irréversible</strong>. Toutes vos données seront définitivement supprimées.
            Tapez <strong>{expected}</strong> pour confirmer.
          </p>
          <Input
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            placeholder={expected}
          />
          <button
            disabled={confirm !== expected}
            className="px-5 py-2 rounded-xl text-[13px] font-semibold text-white transition-all cursor-pointer self-start"
            style={{
              backgroundColor: confirm === expected ? '#DC2626' : '#FCA5A5',
              boxShadow: confirm === expected ? '0 4px 12px rgba(220,38,38,0.35)' : 'none',
            }}
          >
            Supprimer définitivement
          </button>
        </div>
      </Card>
    </div>
  );
}
