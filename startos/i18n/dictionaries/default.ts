export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting ChangeDetection.io': 0,
  'Web Interface': 1,
  'The web interface is ready': 2,
  'The web interface is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'The ChangeDetection.io web interface': 5,

  // actions/manageAccess.ts
  'Manage Access': 6,
  'Require a password to access the changedetection.io web UI, or keep it open to anyone with the address.': 7,
  Access: 8,
  'Choose who can use your changedetection.io instance. Public: anyone with the address can use it. Private: require a password to log in.': 9,
  Public: 10,
  'Private (require login)': 11,
  Password: 12,
  'The password for logging in to the web UI. Use the generate button for a strong random password, or type your own.': 13,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
