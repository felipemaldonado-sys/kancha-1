"use client";

import Link from "next/link";
import { useState } from "react";
import { NavDrawer } from "./NavDrawer";

interface HeaderProps {
  showLocation?: boolean;
  title?: string;
  backHref?: string;
  rightAction?: React.ReactNode;
}

export function Header({
  showLocation = false,
  title,
  backHref,
  rightAction,
}: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-kancha-border/50 bg-kancha-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-4">
          {backHref ? (
            <Link
              href={backHref}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-kancha-surface"
              aria-label="Volver"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>
          ) : (
            <Link href="/" className="text-lg font-black tracking-wider text-white">
              KANCHA
            </Link>
          )}

          {title ? (
            <h1 className="flex-1 text-center text-sm font-bold uppercase tracking-widest text-white">
              {title}
            </h1>
          ) : showLocation ? (
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-medium text-white"
            >
              <span className="text-base">📍</span>
              Bogotá
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>
          ) : (
            <div className="flex-1" />
          )}

          {rightAction ?? (
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-kancha-surface"
              aria-label="Menú"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </header>

      <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
