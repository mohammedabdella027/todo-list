# Todo List

A responsive todo-list application built with React, Vite, and Tailwind CSS. Create, search, filter, complete, edit, and delete tasks, with preferences and tasks automatically saved in the browser.

## Features

- Add and edit todo items
- Mark todos as complete or incomplete
- Delete individual todos
- Search todos by text
- Filter todos by all, complete, or incomplete
- Switch between light and dark themes
- Responsive layout for desktop and mobile
- Automatic local storage persistence

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- JavaScript
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd todo-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Data Storage

The app uses the browser's `localStorage`:

- `todos` stores the task list and completion status
- `theme` stores the selected light or dark theme

Clearing the site's browser data will reset the todos and theme.

## Project Structure

```text
todo-list/
├── src/
│   ├── Components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Search.jsx
│   │   │   └── DropdownSelection.jsx
│   │   └── Main/
│   │       ├── NewTodo.jsx
│   │       └── TodoList.jsx
│   ├── assets/
│   ├── App.jsx
│   └── App.css
├── package.json
└── vite.config.js
```
