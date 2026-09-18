export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={120}
      height={120}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Secret Pass Spot</title>
      <circle
        cx="32"
        cy="32"
        r="26"
        strokeWidth="10"
        className="stroke-black dark:stroke-white fill-white dark:fill-black"
      />
      <line
        x1="14"
        y1="50"
        x2="50"
        y2="14"
        strokeWidth="4"
        strokeLinecap="round"
        className="stroke-white dark:stroke-black"
      />
      <circle cx="32" cy="32" r="12" className="fill-black dark:fill-white" />
    </svg>
  );
}
