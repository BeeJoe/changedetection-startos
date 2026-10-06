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
  '- Public: anyone who can reach the address can use the web UI.\n- Private (require login): the web UI asks for a password before it can be used.': 9,
  Public: 10,
  'Private (require login)': 11,
  Password: 12,
  'Saving replaces any previous password. Only a hash of it is kept, so it is shown once after saving and cannot be retrieved later.': 13,
  'Login Required': 14,
  'Your changedetection.io now requires this password to access the web UI. Log in at the app screen with the password below.': 15,
  'Now Open': 16,
  'Your changedetection.io web UI is now open — anyone with the address can use it.': 17,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
