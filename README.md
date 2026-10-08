# React JS Learning Repository

A collection of React mini-projects and practice apps covering the fundamentals of front-end development: hooks, state management, API integration, routing, and full-stack work with Node.js and Express.

Each folder is a separate project focused on one concept.

## Table of Contents

- [Project Structure](#project-structure)
- [Projects](#projects)
- [React Hooks Practiced](#react-hooks-practiced)
- [Tools and Libraries](#tools-and-libraries)
- [How to Run a Project](#how-to-run-a-project)
- [Author](#author)

## Project Structure

```
React-JS/
├── usestatehook/        ├── axiosapi/
├── useeffecthook/       ├── axiosjson/
├── userefhook/          ├── fetchingapi/
├── usecontexthook/      ├── todoapp/
├── usememohook/         ├── redux/
├── usecallbackhook/     ├── routing/
├── usereducehook/       ├── lifecycle/
├── customhook/          ├── OneIT/
├── Three-js/            └── README.md
```

## Projects

### Hooks and Core Concepts

| Folder | Topic |
| --- | --- |
| `usestatehook` | `useState`: counters, form inputs, toggles |
| `useeffecthook` | `useEffect`: side effects such as data fetching |
| `userefhook` | `useRef`: DOM access and values that don't trigger re-renders |
| `usecontexthook` | `useContext`: sharing data without prop drilling |
| `usememohook` | `useMemo`: memoizing expensive calculations |
| `usecallbackhook` | `useCallback`: memoizing functions |
| `usereducehook` | `useReducer`: complex state logic |
| `customhook` | Custom hooks for reusable logic |
| `lifecycle` | Component lifecycle: creation, update, and removal |

### API and Data Handling

| Folder | Topic |
| --- | --- |
| `fetchingapi` | Fetching data with the Fetch API |
| `axiosapi` | Calling APIs with Axios |
| `axiosjson` | Axios with a JSON mock API |
| `todoapp` | To-do app built with React |

### State Management and Routing

| Folder | Topic |
| --- | --- |
| `redux` | Global state management with Redux |
| `routing` | Page navigation with React Router |

### Other

| Folder | Topic |
| --- | --- |
| `OneIT` | Full-stack project with a React frontend and Node.js/Express backend (see also [OneIT](https://github.com/AmanPatil2002/OneIT)) |
| `Three-js` | Three.js practice |

## React Hooks Practiced

| Hook | Purpose |
| --- | --- |
| `useState` | Create and manage state in a component |
| `useEffect` | Run side effects such as fetching data |
| `useRef` | Store values without triggering re-renders |
| `useReducer` | Manage complex state logic |
| `useContext` | Share data globally without prop drilling |
| `useMemo` | Memoize expensive calculations |
| `useCallback` | Memoize functions to avoid recreation |
| Custom hooks | Reuse logic across components |

## Tools and Libraries

- **Vite**: development setup
- **React Router**: page navigation
- **Axios**: HTTP requests
- **Redux**: state management
- **Tailwind CSS / Bootstrap**: styling
- **JSON Server**: mock API
- **Node.js and Express**: backend APIs (in the full-stack projects)
- **JWT**: authentication (in the full-stack projects)

## How to Run a Project

1. Clone the repository:
   ```bash
   git clone https://github.com/AmanPatil2002/React-JS.git
   cd React-JS
   ```
2. Go into a project folder, for example:
   ```bash
   cd usestatehook
   ```
3. Install dependencies and start it:
   ```bash
   npm install
   npm run dev
   ```

Backend projects (Node.js/Express) may use `npm start` or `npm run dev` instead. Check the `scripts` section of each project's `package.json` for the exact command. Projects that use JSON Server need it running in a second terminal.

## Author

**Aman Patil** — [@AmanPatil2002](https://github.com/AmanPatil2002)
