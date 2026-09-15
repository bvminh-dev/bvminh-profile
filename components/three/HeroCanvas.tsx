"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-full bg-muted" />,
});

const REDUCE_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(REDUCE_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(REDUCE_MOTION_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function HeroCanvas() {
  const reduceMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="aspect-square w-full max-w-md">
      <Scene reduceMotion={reduceMotion} />
    </div>
  );
}
