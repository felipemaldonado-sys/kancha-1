# KANCHA

Website MVP para reservar canchas de fútbol y pádel.

- **B2C (jugadores):** home, reservar, partidos abiertos, perfil tipo player card
- **B2B (dueños):** Kancha Partners para marcar disponibilidad/ocupación

Primera versión con datos mock y estado en memoria (sin auth ni base de datos).

## Correr en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Home jugador |
| `/reservar` | Buscar y reservar cancha |
| `/partidos-abiertos` | Unirse a partidos con cupos |
| `/perfil` | Perfil / player card |
| `/partners` | Panel B2B de sede |

Los cambios de horarios en `/partners` se reflejan en `/reservar`.
