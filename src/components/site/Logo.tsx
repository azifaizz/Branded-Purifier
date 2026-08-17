export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center">
      <img
        src="/logo/logo.png"
        alt="Branded Purifier"
        className="h-10 w-auto object-contain"
      />
    </span>
  );
}
