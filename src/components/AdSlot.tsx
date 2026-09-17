/**
 * Placeholder for a Google AdSense ad unit.
 *
 * Not wired up to AdSense yet — renders a labeled placeholder box so the
 * layout reserves space (avoids CLS once real ads are added) and so the
 * ad zones are visible during design/review.
 *
 * To go live once AdSense approves this site:
 * 1. Add the AdSense script to `src/app/layout.tsx` (see the TODO comment
 *    there).
 * 2. Replace the placeholder `<div>` below with the real
 *    `<ins className="adsbygoogle" ... />` unit for this `slot`, keeping
 *    the same `minHeight`/wrapper so surrounding spacing doesn't shift.
 */

interface AdSlotProps {
  /** Identifies which placement this is (e.g. "top-banner", "sidebar"). */
  slot: string;
  /** Reserved height in pixels to prevent layout shift. */
  minHeight?: number;
  className?: string;
}

export default function AdSlot({ slot, minHeight = 90, className = "" }: AdSlotProps) {
  return (
    <div
      data-ad-slot={slot}
      className={`flex w-full items-center justify-center rounded-xl border border-dashed border-surface-border bg-foreground/[0.03] text-xs text-foreground/40 ${className}`}
      style={{ minHeight }}
      aria-hidden="true"
    >
      Ad · {slot}
    </div>
  );
}
