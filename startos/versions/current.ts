import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.60.8:0',
  releaseNotes: {
    en_US: `Updated ChangeDetection.io to 0.60.8.

- Refreshes the watch list and group settings UI, and adds progressive web app support.
- Improves AI change summaries, including per-watch/group prompts, non-blocking requests, and safer API-key editing.
- Fixes browser-step selection, restock detection, RSS timestamps, watch history, and scheduler timezone handling.
- Includes upstream fixes for cross-site scripting, CSS injection, and CSRF protection when adding watches.
- Improves import/API validation, page-title extraction, UI caching, and translations.
- Manage Access explains what each access option means, and that a saved password is shown only once.
- Manage Access shows its results in your StartOS language.

Full upstream changes: https://github.com/dgtlmoon/changedetection.io/compare/0.55.8...0.60.8`,
    es_ES: `Actualiza ChangeDetection.io a 0.60.8.

- Renueva la interfaz de la lista de vigilancias y de los grupos, y añade compatibilidad con aplicaciones web progresivas.
- Mejora los resúmenes de cambios con IA, incluidas las instrucciones por vigilancia o grupo, las solicitudes sin bloqueo y la edición más segura de claves API.
- Corrige la selección de pasos del navegador, la detección de reposición, las fechas RSS, el historial y el manejo de zonas horarias del planificador.
- Incluye correcciones de upstream para scripts entre sitios, inyección de CSS y protección CSRF al añadir vigilancias.
- Mejora la validación de importaciones y API, la extracción de títulos, la caché de la interfaz y las traducciones.
- Gestionar acceso explica qué significa cada opción de acceso y que una contraseña guardada se muestra una sola vez.
- Gestionar acceso muestra sus resultados en el idioma de StartOS.

Todos los cambios de upstream: https://github.com/dgtlmoon/changedetection.io/compare/0.55.8...0.60.8`,
    de_DE: `Aktualisiert ChangeDetection.io auf 0.60.8.

- Überarbeitet die Oberfläche der Überwachungsliste und Gruppeneinstellungen und unterstützt progressive Web-Apps.
- Verbessert KI-Zusammenfassungen mit Anweisungen pro Überwachung oder Gruppe, nicht blockierenden Anfragen und sichererem Bearbeiten von API-Schlüsseln.
- Behebt die Auswahl von Browserschritten, Wiederauffüllungserkennung, RSS-Zeitstempel, Überwachungsverlauf und Zeitzonenbehandlung des Zeitplaners.
- Enthält Upstream-Korrekturen für Cross-Site-Scripting, CSS-Injektion und CSRF-Schutz beim Hinzufügen von Überwachungen.
- Verbessert Import- und API-Validierung, Seitentitelextraktion, Oberflächen-Caching und Übersetzungen.
- „Zugriff verwalten“ erklärt, was jede Zugriffsoption bedeutet und dass ein gespeichertes Passwort nur einmal angezeigt wird.
- „Zugriff verwalten“ zeigt seine Ergebnisse in Ihrer StartOS-Sprache an.

Alle Upstream-Änderungen: https://github.com/dgtlmoon/changedetection.io/compare/0.55.8...0.60.8`,
    pl_PL: `Aktualizuje ChangeDetection.io do 0.60.8.

- Odświeża interfejs listy obserwacji i ustawień grup oraz dodaje obsługę progresywnych aplikacji internetowych.
- Ulepsza podsumowania zmian przez AI: instrukcje dla obserwacji i grup, nieblokujące żądania oraz bezpieczniejszą edycję kluczy API.
- Naprawia wybór kroków przeglądarki, wykrywanie uzupełnienia zapasów, znaczniki czasu RSS, historię obserwacji i obsługę stref czasowych w harmonogramie.
- Zawiera poprawki upstream dotyczące skryptów między witrynami, wstrzykiwania CSS i ochrony CSRF przy dodawaniu obserwacji.
- Ulepsza walidację importu i API, wyodrębnianie tytułów, pamięć podręczną interfejsu i tłumaczenia.
- „Zarządzaj dostępem” wyjaśnia, co oznacza każda opcja dostępu i że zapisane hasło jest wyświetlane tylko raz.
- „Zarządzaj dostępem” wyświetla wyniki w języku StartOS.

Wszystkie zmiany upstream: https://github.com/dgtlmoon/changedetection.io/compare/0.55.8...0.60.8`,
    fr_FR: `Met à jour ChangeDetection.io vers 0.60.8.

- Actualise l'interface de la liste des surveillances et des groupes, et ajoute la prise en charge des applications web progressives.
- Améliore les résumés de changements par IA : consignes par surveillance ou groupe, requêtes non bloquantes et modification plus sûre des clés API.
- Corrige la sélection des étapes du navigateur, la détection de réapprovisionnement, les dates RSS, l'historique et la gestion des fuseaux horaires du planificateur.
- Inclut les correctifs upstream contre les scripts intersites, l'injection CSS et les failles CSRF lors de l'ajout de surveillances.
- Améliore la validation des imports et de l'API, l'extraction des titres, le cache de l'interface et les traductions.
- Gérer l'accès explique ce que signifie chaque option d'accès, et qu'un mot de passe enregistré n'est affiché qu'une seule fois.
- Gérer l'accès affiche ses résultats dans la langue de StartOS.

Tous les changements upstream : https://github.com/dgtlmoon/changedetection.io/compare/0.55.8...0.60.8`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
