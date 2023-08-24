
## Proj-kakehi-const-hp

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Conventions

- [Git conventions](https://gitlab.demetio.com/external/know-hows/-/blob/main/internal-process/Git-Conventions.md)
- Coding conventions:
  - Follow eslint, prettier settings and rules
  - Use strongly typed typescript, declare data type or interface for every piece of data
  - CSS: [Tailwindcss](https://tailwindcss.com/)
  - Project folder structure:
    - `components`: Minimal, reusable components such as Button, NavBar, TextField.
    - `organisms`: Larger parts of the UI such as form, list. 
    - `layouts`: Reusable page layouts
  - Extract **custom hooks** for reusable and sharable app logic
- UI conventions: The app UI must match the design on figma.