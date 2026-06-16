# ChangeDetection.io

You've installed ChangeDetection.io, a web page and API change monitoring service. Use the web UI to add watches, review diffs, and configure notifications.

## Documentation

- [changedetection.io upstream docs](https://github.com/dgtlmoon/changedetection.io) - upstream usage, notifications, filters, API, and browser fetcher documentation.
- [changedetection.io tutorials](https://changedetection.io/tutorials) - practical examples for watches, alerts, and filters.

## What you get on StartOS

- **A persistent ChangeDetection.io instance** with its datastore backed up by StartOS.
- **A web UI and API** exposed through the service's **Web UI** interface.
- **Bundled Playwright content fetching** from the LinuxServer container image for browser-backed watches.
- **Upstream notification integrations** configured inside changedetection.io.
- **Optional login** — require a password for the web UI via the **Manage Access** action (off by default).

## Getting set up

1. Open the service's **Dashboard** tab.
2. Click the **Web UI** interface.
3. Add a watch URL, choose the content filters you need, and run a manual recheck to confirm the first snapshot.
4. Configure notification settings in changedetection.io.

## Requiring a login

By default the changedetection.io web UI is open to anyone who can reach its address. To require a password:

1. Run the **Manage Access** action.
2. Choose **Private (require login)** and set a password (or generate one). The password is shown once — save it.
3. changedetection.io now prompts for that password at its login screen.

Run **Manage Access** again and choose **Public** to remove the requirement. Manage the login password from this action rather than changedetection.io's own Settings page — StartOS injects it via `SALTED_PASS`, which takes precedence over a password set in the app.

## Backups

StartOS backs up the changedetection.io datastore. This includes watches, history, screenshots, settings, and imported data stored by the upstream app.

## Limitations

- The package does not manage separate WebDriver, remote Playwright, or sockpuppetbrowser companion containers. The bundled Playwright fetcher is available for browser-backed watches.
- Most changedetection.io settings are managed in the web UI; the web UI login password is the exception (set it via the **Manage Access** action).
- Notification integrations must be reachable from your StartOS device.
- You are responsible for complying with the terms, robots policies, and laws that apply to the sites you monitor.
