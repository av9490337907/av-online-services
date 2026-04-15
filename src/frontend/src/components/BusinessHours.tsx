interface BusinessHoursProps {
  compact?: boolean;
}

const OPEN_HOUR = 9; // 9:00 AM
const CLOSE_HOUR = 21; // 9:00 PM

function isOpenNow(): boolean {
  const now = new Date();
  const hour = now.getHours();
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
}

export default function BusinessHours({ compact = false }: BusinessHoursProps) {
  const open = isOpenNow();

  if (compact) {
    return (
      <span className="flex items-center gap-1.5">
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${open ? "bg-green-400" : "bg-red-400"}`}
          aria-hidden="true"
        />
        <span
          className={
            open ? "text-green-400 font-medium" : "text-red-400 font-medium"
          }
        >
          {open ? "Open Now" : "Closed"}
        </span>
        <span className="opacity-60 hidden sm:inline">
          · Mon–Sun: 9 AM – 9 PM
        </span>
      </span>
    );
  }

  return (
    <div className="flex flex-col gap-1" data-ocid="business-hours">
      <div className="flex items-center gap-2">
        <span
          className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${open ? "bg-green-400" : "bg-red-400"}`}
          aria-hidden="true"
        />
        <span
          className={`text-sm font-semibold ${open ? "text-green-400" : "text-red-400"}`}
        >
          {open ? "Open Now" : "Closed"}
        </span>
      </div>
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
        Mon – Sun: 9:00 AM to 9:00 PM
      </p>
    </div>
  );
}
