import { Header } from "@/components/kancha/Header";
import { PLAYER_PROFILE } from "@/lib/kancha/data";
import { sportAccent } from "@/lib/kancha/utils";

export default function PerfilPage() {
  const profile = PLAYER_PROFILE;

  return (
    <div className="kancha-shell pb-10">
      <Header
        title="Mi Perfil"
        backHref="/"
        rightAction={
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-kancha-surface"
            aria-label="Configuración"
          >
            ⚙️
          </button>
        }
      />

      <main className="px-4 pt-4">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-kancha-border bg-kancha-surface text-sm font-bold text-kancha-muted">
            FOTO
          </div>
          <h2 className="mt-4 text-xl font-bold text-white">{profile.name}</h2>
          <p className="mt-1 text-sm text-kancha-muted">
            📍 {profile.city} • {profile.age} años
          </p>
          {profile.agePublic && (
            <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-kancha-border bg-kancha-surface px-3 py-1 text-xs text-kancha-muted">
              👁 Edad Pública
            </span>
          )}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="kancha-card text-center animate-fade-up">
            <p className="text-lg font-black text-white">{profile.matches}</p>
            <p className="text-[10px] uppercase tracking-wide text-kancha-muted">
              Partidos
            </p>
          </div>
          <div className="kancha-card text-center animate-fade-up">
            <p className="text-lg font-black text-kancha-green">
              {profile.attendance}%
            </p>
            <p className="text-[10px] uppercase tracking-wide text-kancha-muted">
              Asistencia
            </p>
          </div>
          <div className="kancha-card text-center animate-fade-up">
            <p className="text-lg font-black text-yellow-400">⭐</p>
            <p className="text-[10px] uppercase tracking-wide text-kancha-muted">
              {profile.reliability}
            </p>
          </div>
        </div>

        <section className="mt-8">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-kancha-muted">
            Mis Deportes
          </h3>
          <div className="space-y-3">
            {profile.sports.map((s) => {
              const accent = sportAccent(s.sport);
              return (
                <article
                  key={s.sport}
                  className={`kancha-card animate-fade-up ${
                    s.sport === "futbol"
                      ? "border-kancha-green/50"
                      : "border-kancha-blue/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden>
                      {s.sport === "futbol" ? "⚽" : "🎾"}
                    </span>
                    <div>
                      <h4 className="font-bold text-white">
                        {s.sport === "futbol" ? "Fútbol 5 y 8" : "Pádel"}
                      </h4>
                      <p className={`text-xs font-medium ${accent.text}`}>
                        {s.level}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {s.positions.map((pos) => (
                          <span
                            key={pos}
                            className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${accent.soft}`}
                          >
                            {pos}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-8">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-kancha-muted">
            Reputación Kancha
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.badges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-kancha-border bg-kancha-surface px-4 py-2 text-sm font-medium text-white"
              >
                <span aria-hidden>{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
