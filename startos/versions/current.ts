import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.55.8:3',
  releaseNotes: {
    en_US: `Updated ChangeDetection.io to 0.55.8.

- Renames the restock field "original price" to "last price", and raises the restock LLM content limit from 8,000 to 15,000 characters (now configurable).
- Fixes page titles not being extracted from pages with large HTML head sections.
- Fixes tag RSS feeds ignoring the security token when password protection is enabled.
- Fixes URL validation rejecting valid URLs containing "|" in the anchor/fragment.
- Fixes watches erroring when the Content-Type is JSON but the body is not parsable, and makes restock notification tokens work for any watch.
- Adds a Russian translation, refreshes the Czech translation, and translates JavaScript UI strings that were previously untranslated.

Full release notes: https://github.com/dgtlmoon/changedetection.io/releases/tag/0.55.8

- Manage Access explains what each access option means, and that a saved password is shown only once.
- Manage Access shows its results in your StartOS language.`,
    es_ES: `Actualiza ChangeDetection.io a 0.55.8.

- Cambia el nombre del campo de reposición «precio original» a «último precio» y eleva el límite de contenido del LLM de reposición de 8.000 a 15.000 caracteres (ahora configurable).
- Corrige la extracción de títulos en páginas con secciones head de HTML de gran tamaño.
- Corrige que las fuentes RSS de etiquetas ignoraran el token de seguridad cuando la protección por contraseña está activada.
- Corrige la validación de URL, que rechazaba URL válidas con «|» en el ancla o fragmento.
- Corrige los errores en las vigilancias cuando el Content-Type es JSON pero el cuerpo no se puede analizar, y hace que los tokens de notificación de reposición funcionen en cualquier vigilancia.
- Añade la traducción al ruso, actualiza la traducción al checo y traduce las cadenas de la interfaz en JavaScript que antes no estaban traducidas.

Notas de la versión completas: https://github.com/dgtlmoon/changedetection.io/releases/tag/0.55.8

- Gestionar acceso explica qué significa cada opción de acceso y que una contraseña guardada se muestra una sola vez.
- Gestionar acceso muestra sus resultados en el idioma de StartOS.`,
    de_DE: `Aktualisiert ChangeDetection.io auf 0.55.8.

- Benennt das Wiederauffüllungsfeld „Originalpreis“ in „Letzter Preis“ um und erhöht die Inhaltsgrenze des Wiederauffüllungs-LLM von 8.000 auf 15.000 Zeichen (jetzt konfigurierbar).
- Behebt, dass Seitentitel bei Seiten mit großen HTML-head-Abschnitten nicht extrahiert wurden.
- Behebt, dass Tag-RSS-Feeds das Sicherheitstoken ignorierten, wenn der Passwortschutz aktiviert ist.
- Behebt die URL-Validierung, die gültige URLs mit „|“ im Anker bzw. Fragment ablehnte.
- Behebt Fehler bei Überwachungen, wenn der Content-Type JSON ist, der Body aber nicht analysierbar ist, und sorgt dafür, dass Wiederauffüllungs-Benachrichtigungstoken für jede Überwachung funktionieren.
- Fügt eine russische Übersetzung hinzu, aktualisiert die tschechische Übersetzung und übersetzt bisher nicht übersetzte JavaScript-Oberflächentexte.

Vollständige Versionshinweise: https://github.com/dgtlmoon/changedetection.io/releases/tag/0.55.8

- „Zugriff verwalten“ erklärt, was jede Zugriffsoption bedeutet und dass ein gespeichertes Passwort nur einmal angezeigt wird.
- „Zugriff verwalten“ zeigt seine Ergebnisse in Ihrer StartOS-Sprache an.`,
    pl_PL: `Aktualizuje ChangeDetection.io do 0.55.8.

- Zmienia nazwę pola uzupełnienia zapasów z „cena pierwotna” na „ostatnia cena” oraz podnosi limit treści LLM dla uzupełnienia zapasów z 8000 do 15 000 znaków (teraz konfigurowalny).
- Naprawia wyodrębnianie tytułów stron zawierających duże sekcje head w HTML.
- Naprawia kanały RSS tagów, które ignorowały token zabezpieczający przy włączonej ochronie hasłem.
- Naprawia walidację adresów URL, która odrzucała prawidłowe adresy zawierające „|” w kotwicy lub fragmencie.
- Naprawia błędy obserwacji, gdy Content-Type to JSON, ale treści nie da się przeanalizować, oraz sprawia, że tokeny powiadomień o uzupełnieniu zapasów działają dla każdej obserwacji.
- Dodaje tłumaczenie rosyjskie, odświeża tłumaczenie czeskie i tłumaczy dotychczas nieprzetłumaczone teksty interfejsu w JavaScripcie.

Pełne informacje o wydaniu: https://github.com/dgtlmoon/changedetection.io/releases/tag/0.55.8

- „Zarządzaj dostępem” wyjaśnia, co oznacza każda opcja dostępu i że zapisane hasło jest wyświetlane tylko raz.
- „Zarządzaj dostępem” wyświetla wyniki w języku StartOS.`,
    fr_FR: `Met à jour ChangeDetection.io vers 0.55.8.

- Renomme le champ de réapprovisionnement « prix d'origine » en « dernier prix » et porte la limite de contenu du LLM de réapprovisionnement de 8 000 à 15 000 caractères (désormais configurable).
- Corrige l'extraction des titres sur les pages comportant de grandes sections head HTML.
- Corrige les flux RSS de tags qui ignoraient le jeton de sécurité lorsque la protection par mot de passe est activée.
- Corrige la validation d'URL qui rejetait des URL valides contenant « | » dans l'ancre ou le fragment.
- Corrige les erreurs de surveillance lorsque le Content-Type est JSON mais que le corps n'est pas analysable, et fait fonctionner les jetons de notification de réapprovisionnement pour toute surveillance.
- Ajoute une traduction russe, actualise la traduction tchèque et traduit les textes d'interface JavaScript jusque-là non traduits.

Notes de version complètes : https://github.com/dgtlmoon/changedetection.io/releases/tag/0.55.8

- Gérer l'accès explique ce que signifie chaque option d'accès, et qu'un mot de passe enregistré n'est affiché qu'une seule fois.
- Gérer l'accès affiche ses résultats dans la langue de StartOS.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
