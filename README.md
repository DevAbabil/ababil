# Ababil Hossain — CLI Portfolio

A beautifully styled **Command Line Interface (CLI)** portfolio showcasing **Ababil Hossain**, a passionate **Web Developer & Programmer** from **Bangladesh**.  
This terminal-based experience provides a **vibrant**, **elegant**, and **colorful** way to explore Ababil’s background, skills, and featured projects — all right from your console!

## Features

- **Vibrant UI** powered by [chalk](https://www.npmjs.com/package/chalk) and [gradient-string](https://www.npmjs.com/package/gradient-string)
- **Clean, structured layout** using [boxen](https://www.npmjs.com/package/boxen)
- Displays **About**, **Skills**, **Projects**
- Single global CLI command — `ababil`
- **Fast**, **lightweight**, and **easy to customize**

## Installation

Install the CLI globally using your favorite package manager:

### **npm**

```bash
npm install -g ababil
```

### **yarn**

```bash
yarn global add ababil
```

### **pnpm**

```bash
pnpm add -g ababil
```

### **bun**

```bash
bun add -g ababil
```

Then run the CLI from anywhere in your terminal:

```bash
ababil
```

## Run Without Global Install

You can also run the CLI directly using one of the following:

### **npx**

```bash
npx ababil
```

### **yarn dlx**

```bash
yarn dlx ababil
```

### **pnpm dlx**

```bash
pnpm dlx ababil
```

### **bunx**

```bash
bunx ababil
```

Sit back and enjoy the colorful interactive experience!

## Development Setup

If you'd like to modify or contribute to this project, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/DevAbabil/ababil.git
   cd ababil
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run in development mode**

   ```bash
   npm run dev
   ```

## Project Structure

```
ababil
├── scripts
│   ├── build.sh
│   └── publish.sh
├── src
│   ├── components
│   │   ├── _about.ts
│   │   ├── _footer.ts
│   │   ├── _header.ts
│   │   ├── _skills.ts
│   │   ├── _projects.ts
│   │   └── index.ts
│   ├── data
│   │   └── index.ts
│   ├── utils
│   └── index.ts
├── .vscode
│   └── settings.json
├── banner.ts
├── .gitignore
├── LICENSE
├── .npmignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── tsup.config.ts
```

## Tech Stack

| Category         | Technologies                     |
| ---------------- | -------------------------------- |
| **CLI Styling**  | chalk, boxen, gradient-string    |
| **Language**     | TypeScript (Node.js, ES Modules) |
| **Bundler**      | tsup                             |
| **Dev Runner**   | tsx                              |
| **Package Tool** | npm, yarn, pnpm, bun             |

## Inspiration

This project reflects my love for **clean terminal experiences**, **minimalist design**, and **developer creativity**.
A single command — `ababil` — brings my portfolio to life, right inside your console.

## License

This project is licensed under the **MIT License**.
You’re free to use, modify, and distribute it with attribution.

© 2025 **Ababil Hossain** · [devababil.com](https://devababil.com)
