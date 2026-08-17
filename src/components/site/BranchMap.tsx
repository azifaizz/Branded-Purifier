import { useState, useEffect, lazy, Suspense } from "react";

// Dynamically import the map to avoid SSR issues with Leaflet
const MapClient = lazy(() => import("./MapClient"));

export function BranchMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative h-[400px] w-full rounded-[10px] overflow-hidden border border-border bg-muted shadow-xl">
      {!mounted ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand border-t-transparent" />
        </div>
      ) : (
        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand border-t-transparent" />
          </div>
        }>
          <MapClient />
        </Suspense>
      )}
    </div>
  );
}
