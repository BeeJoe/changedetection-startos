import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.55.7:0',
  releaseNotes: {
    en_US: 'Initial StartOS package for changedetection.io.',
    es_ES: 'Paquete inicial de StartOS para changedetection.io.',
    de_DE: 'Erstes StartOS-Paket fuer changedetection.io.',
    pl_PL: 'Pierwszy pakiet StartOS dla changedetection.io.',
    fr_FR: 'Paquet StartOS initial pour changedetection.io.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
