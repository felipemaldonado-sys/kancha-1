"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
}

const playerLinks = [
  { href: "/reservar", label: "Reservar Cancha", icon: "⚽", highlight: true },
  { href: "/partidos-abiertos", label: "Partidos Abiertos (+1)", icon: "⚔️" },
  { href: "/perfil", label: "Mi Perfil y Reservas", icon: "👤" },
];

export function NavDrawer({ open, onClose }: NavDrawerProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Cerrar menú"
      />
      <aside className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col bg-kancha-bg shadow-2xl">
        <div className="flex items-center justify-between border-b border-kancha-border px-5 py-5">
          <span className="text-lg font-black tracking-wider text-white">KANCHA</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-kancha-green hover:bg-kancha-surface"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-widest text-kancha-muted">
            Para Jugadores
          </p>
          <ul className="space-y-2">
            {playerLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                      link.highlight || active
                        ? "bg-kancha-green/10 text-kancha-green"
                        : "text-white hover:bg-kancha-surface"
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="my-6 border-t border-kancha-border" />

          <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-widest text-kancha-muted">
            Para Dueños de Canchas
          </p>
          <Link
            href="/partners"
            onClick={onClose}
            className="block rounded-xl border border-kancha-blue/40 bg-kancha-blue/5 p-4 transition hover:bg-kancha-blue/10"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl">🏢</span>
              <div>
                <p className="font-bold text-kancha-blue">Kancha Partners</p>
                <p className="mt-0.5 text-xs text-kancha-muted">
                  Gestiona tu sede y horarios
                </p>
              </div>
            </div>
          </Link>

          <div className="my-6 border-t border-kancha-border" />

          <Link
            href="#"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white hover:bg-kancha-surface"
          >
            <span className="text-lg">❓</span>
            Centro de Ayuda
          </Link>
        </nav>
      </aside>
    </div>
  );
}
