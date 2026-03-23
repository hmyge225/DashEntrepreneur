export default function Progress({ progressItems }) {
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-4"
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <h2 className="text-[16px] font-semibold text-text-primary">Ma progression</h2>

      <div className="flex flex-col gap-4">
        {progressItems.map((item) => (
          <div key={item.id} className="flex flex-col gap-1.5">
            {/* Label + % */}
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-text-primary">{item.label}</span>
              <span className="text-[13px] font-semibold" style={{ color: item.color }}>
                {item.percentage}%
              </span>
            </div>
            {/* Progress bar */}
            <div
              className="w-full h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: '#E2E8F0' }}
            >
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
