<p align="center">
  <img src="icon.svg" alt="ChangeDetection.io Logo" width="21%">
</p>

# ChangeDetection.io on StartOS

> **Upstream docs:** <https://github.com/dgtlmoon/changedetection.io>
>
> Everything not listed in this document should behave the same as upstream
> changedetection.io. If a feature, setting, or behavior is not mentioned here,
> the upstream documentation is accurate and fully applicable.

ChangeDetection.io monitors web pages, JSON APIs, and documents for changes, then sends alerts through its upstream notification integrations.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Dependencies](#dependencies)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

| Property      | Value                                                 |
| ------------- | ----------------------------------------------------- |
| Image         | LinuxServer `lscr.io/linuxserver/changedetection.io` image |
| Architectures | x86_64, aarch64                                      |
| Entrypoint    | Upstream image entrypoint and default command via SDK |
| Managed env   | User ID, group ID, timezone, and version-check behavior |

---

## Volume and Data Layout

| Volume | Mount Point  | Purpose                                                     |
| ------ | ------------ | ----------------------------------------------------------- |
| `main` | `/config` | Watch list, history, screenshots, app settings, and imports |

---

## Installation and First-Run Flow

Install and start the service, then open the **Web UI** interface from the StartOS dashboard.

The upstream app starts with its standard first-run behavior. By default the web UI is open to anyone who can reach its address — run the **Manage Access** action to require a password. Configure watch defaults, notifications, and any API keys inside the changedetection.io web UI.

---

## Configuration Management

| StartOS-Managed                           | Upstream-Managed                                                 |
| ----------------------------------------- | ---------------------------------------------------------------- |
| Container image, daemon, port, volume, user/group IDs, timezone, version-check behavior, and the optional web UI login password (Manage Access action) | Watches, notification URLs, proxy settings, API keys, import/export, and UI settings |

---

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose                                |
| --------- | ---- | -------- | -------------------------------------- |
| Web UI    | 5000 | HTTP     | changedetection.io web interface and API |

**Access methods:**

- LAN IP with unique port
- `<hostname>.local` with unique port
- Tor `.onion` address
- Custom domains (if configured)

---

## Actions (StartOS UI)

| Action        | Purpose                                                                |
| ------------- | ---------------------------------------------------------------------- |
| Manage Access | Require a password to log in to the web UI, or keep it open. Uses changedetection.io's own login (injected via `SALTED_PASS`); only the salted hash is stored on the StartOS side, never the plaintext. |

All other settings are handled in the upstream web UI.

---

## Backups and Restore

**Included in backup:**

- `main` volume, including watch data, history, screenshots, settings, and imports stored by the upstream app

**Restore behavior:** Volume is fully restored before the service starts.

---

## Health Checks

| Check         | Method         | Messages                                                           |
| ------------- | -------------- | ------------------------------------------------------------------ |
| Web Interface | Port listening | Success: "The web interface is ready" / Error: "The web interface is not ready" |

---

## Dependencies

None.

---

## Limitations and Differences

1. **LinuxServer container wrapper** - the package uses LinuxServer's changedetection.io image because it includes the Playwright content fetcher and supports the StartOS target architectures. The application itself remains changedetection.io.
2. **Minimal StartOS configuration** - watches, notification URLs, proxy settings, and API keys are managed in changedetection.io itself. The one exception is the web UI login password, which you set via the **Manage Access** action.
3. **External browser drivers are not managed by StartOS** - the bundled Playwright fetcher is available, but any separate WebDriver or remote Playwright service must be configured manually in changedetection.io.
4. **Notification delivery depends on network reachability** - outbound notification integrations must be reachable from the StartOS device.
5. **Website monitoring responsibility remains with the user** - users are responsible for complying with site terms, robots policies, and applicable law when monitoring remote content.

---

## What Is Unchanged from Upstream

The package runs a prebuilt changedetection.io container image without rebuilding it. Core watch management, HTML/text/JSON/PDF monitoring, Playwright-backed fetching, filters, history, import/export, API, and notification integrations behave as documented upstream unless limited above.

---

## Quick Reference for AI Consumers

```yaml
package_id: changedetection
image: lscr.io/linuxserver/changedetection.io
architectures: [x86_64, aarch64]
volumes:
  main: /config
ports:
  ui: 5000
dependencies: none
startos_managed_env_vars:
  - PUID
  - PGID
  - TZ
  - DISABLE_VERSION_CHECK
  - SALTED_PASS # only when a web UI password is set via Manage Access
actions:
  - manage-access # require a login for the web UI, or keep it open
```
