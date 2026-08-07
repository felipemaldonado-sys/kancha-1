# KANCHA

Plataforma web para reservar canchas de **fútbol** y **pádel** en Colombia.

Dos interfaces en una sola app:

- **B2C (Jugadores):** reservar canchas, unirse a partidos abiertos y perfil de jugador estilo EA Sports.
- **B2B (Partners):** dueños de sedes gestionan disponibilidad y ocupación de sus canchas.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio — bienvenida y próximos partidos |
| `/reservar` | Buscar y reservar canchas |
| `/partidos-abiertos` | Unirse a partidos que buscan jugadores |
| `/perfil` | Perfil del jugador |
| `/partners` | Panel B2B para dueños de canchas |

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Estructura

```
src/
  app/              # Páginas y layout
  components/kancha # UI reutilizable
  lib/kancha/       # Tipos, datos mock y contexto
```
