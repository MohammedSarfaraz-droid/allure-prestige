import { cn } from "@/lib/utils";

interface MonogramProps {
  size?: number;
  className?: string;
  color?: string;
}

/**
 * APG Monogram — two overlapping geometric "A" letterforms.
 * Drawn purely in SVG, renders sharp at any size.
 */
export const Monogram = ({ size = 28, className, color = "currentColor" }: MonogramProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", className)}
      aria-label="Allure Properties Group monogram"
    >
      {/* Left A */}
      <path
        d="M4 34 L14 6 L24 34"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M8.5 24 L19.5 24" stroke={color} strokeWidth="1" />
      {/* Right A — offset, overlapping */}
      <path
        d="M16 34 L26 6 L36 34"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="square"
        fill="none"
        opacity="0.85"
      />
      <path d="M20.5 24 L31.5 24" stroke={color} strokeWidth="1" opacity="0.85" />
    </svg>
  );
};
