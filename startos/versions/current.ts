import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.55.7:2',
  releaseNotes: {
    en_US:
      'Updates the LinuxServer image to the latest 0.55.7 build.',
    es_ES:
      'Actualiza la imagen de LinuxServer a la compilación 0.55.7 más reciente.',
    de_DE:
      'Aktualisiert das LinuxServer-Image auf den neuesten 0.55.7-Build.',
    pl_PL:
      'Aktualizuje obraz LinuxServer do najnowszej kompilacji 0.55.7.',
    fr_FR:
      "Met à jour l'image LinuxServer vers la dernière build 0.55.7.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
