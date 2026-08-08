import type { ProgramIcon } from "@/lib/data";

const gradients: Record<ProgramIcon, [string, string]> = {
  data: ["#3B2E4A", "#3C7A6A"],
  ai: ["#3B2E4A", "#4E8FA8"],
  product: ["#3B2E4A", "#A87A3C"],
  marketing: ["#3B2E4A", "#A8447A"],
};

function Glyph({ icon }: { icon: ProgramIcon }) {
  const stroke = "rgba(255,255,255,0.85)";
  switch (icon) {
    case "data":
      return (
        <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" fill="none">
          <path d="M12 30 L12 20" />
          <path d="M20 30 L20 12" />
          <path d="M28 30 L28 22" />
          <path d="M36 30 L36 8" />
        </g>
      );
    case "ai":
      return (
        <g stroke={stroke} strokeWidth="2.5" fill="none">
          <circle cx="12" cy="12" r="3" />
          <circle cx="36" cy="12" r="3" />
          <circle cx="24" cy="24" r="3.5" />
          <circle cx="12" cy="34" r="3" />
          <circle cx="36" cy="34" r="3" />
          <path d="M14.5 13.5 L21 22" strokeLinecap="round" />
          <path d="M33.5 13.5 L27 22" strokeLinecap="round" />
          <path d="M14.5 32.5 L21 26" strokeLinecap="round" />
          <path d="M33.5 32.5 L27 26" strokeLinecap="round" />
        </g>
      );
    case "product":
      return (
        <g stroke={stroke} strokeWidth="2.5" fill="none">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <rect x="26" y="9" width="13" height="13" rx="2" />
          <rect x="9" y="26" width="13" height="13" rx="2" />
          <rect x="26" y="26" width="13" height="13" rx="2" opacity="0.5" />
        </g>
      );
    case "marketing":
      return (
        <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M9 22 L20 22 L32 12 L32 34 L20 24 L9 24 Z" />
          <path d="M35 17 Q40 22 35 27" />
        </g>
      );
  }
}

export default function ProgramImage({ icon, label }: { icon: ProgramIcon; label: string }) {
  const [from, to] = gradients[icon];
  return (
    <div
      role="img"
      aria-label={`${label} program illustration`}
      className="relative h-36 w-full overflow-hidden rounded-xl"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <svg
        className="absolute -right-3 -bottom-3 opacity-90"
        width="120"
        height="120"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <Glyph icon={icon} />
      </svg>
    </div>
  );
}
