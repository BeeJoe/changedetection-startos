import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

// Stores only changedetection.io's salted PBKDF2 hash — never plaintext.
// Read reactively in main.ts so setting or clearing it (via the "Manage
// Access" action) restarts the service to apply the new SALTED_PASS.
const shape = z.object({
  uiPasswordHash: z.string().optional().catch(undefined),
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: 'store.json' },
  shape,
)
