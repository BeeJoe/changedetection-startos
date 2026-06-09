# Contributing

This is a StartOS service-package repository for changedetection.io.

## Local development

Install dependencies and run the TypeScript check:

```sh
npm ci
npm run check
```

Build the SDK JavaScript bundle:

```sh
npm run build
```

Build StartOS packages:

```sh
make
```

Use `UPDATING.md` when changing the upstream changedetection.io image pin. Keep `README.md` and `instructions.md` in sync with runtime behavior, interfaces, volumes, actions, dependencies, and limitations.
