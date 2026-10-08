import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.55.8:3',
  releaseNotes: {
    en_US: `- Manage Access explains what each access option means, and that a saved password is shown only once.
- Manage Access shows its results in your StartOS language.`,
    es_ES: `- Gestionar acceso explica qué significa cada opción de acceso y que una contraseña guardada se muestra una sola vez.
- Gestionar acceso muestra sus resultados en el idioma de StartOS.`,
    de_DE: `- „Zugriff verwalten“ erklärt, was jede Zugriffsoption bedeutet und dass ein gespeichertes Passwort nur einmal angezeigt wird.
- „Zugriff verwalten“ zeigt seine Ergebnisse in Ihrer StartOS-Sprache an.`,
    pl_PL: `- „Zarządzaj dostępem” wyjaśnia, co oznacza każda opcja dostępu i że zapisane hasło jest wyświetlane tylko raz.
- „Zarządzaj dostępem” wyświetla wyniki w języku StartOS.`,
    fr_FR: `- Gérer l'accès explique ce que signifie chaque option d'accès, et qu'un mot de passe enregistré n'est affiché qu'une seule fois.
- Gérer l'accès affiche ses résultats dans la langue de StartOS.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
