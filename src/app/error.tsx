"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-kancha-bg px-4 text-center">
      <h1 className="text-xl font-bold text-white">Algo salió mal</h1>
      <p className="mt-2 text-sm text-kancha-muted">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="kancha-btn-primary mt-6"
      >
        Reintentar
      </button>
    </div>
  );
}
