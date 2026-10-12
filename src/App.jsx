import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import FileExplorer from './pages/FileExplorer'
import GridLight from './pages/GridLight'
import OTPInput from './pages/OTPInput'
import KanbanBoard from './pages/KanbanBoard'
import TabFormComponent from './pages/TabFormComponent'
import AutoCompleteSearch from './pages/AutoCompleteSearch'
import InputChip from './pages/InputChip'
import Accordion from './pages/Accordion'
import NestedCheckboxes from './pages/NestedCheckboxes'
import ProgressBar from './pages/ProgressBar'
import Pagination from './pages/Pagination'
import ToDoList from './pages/ToDoList'
import fileExplorerCode from './pages/FileExplorer.jsx?raw'
import gridLightCode from './pages/GridLight.jsx?raw'
import otpInputCode from './pages/OTPInput.jsx?raw'
import kanbanBoardCode from './pages/KanbanBoard.jsx?raw'
import tabFormComponentCode from './pages/TabFormComponent.jsx?raw'
import autoCompleteSearchCode from './pages/AutoCompleteSearch.jsx?raw'
import inputChipCode from './pages/InputChip.jsx?raw'
import accordionCode from './pages/Accordion.jsx?raw'
import nestedCheckboxesCode from './pages/NestedCheckboxes.jsx?raw'
import progressBarCode from './pages/ProgressBar.jsx?raw'
import paginationCode from './pages/Pagination.jsx?raw'
import toDoListCode from './pages/ToDoList.jsx?raw'
import './App.css'

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2h7.5A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-10z" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  )
}

function OtpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="2" y="7" width="4" height="10" rx="1" />
      <rect x="7.5" y="7" width="4" height="10" rx="1" />
      <rect x="13" y="7" width="4" height="10" rx="1" />
      <rect x="18.5" y="7" width="3.5" height="10" rx="1" />
    </svg>
  )
}

function KanbanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="4" width="5" height="16" rx="1.25" />
      <rect x="10" y="4" width="5" height="10" rx="1.25" />
      <rect x="17" y="4" width="4" height="13" rx="1.25" />
    </svg>
  )
}

function TabFormComponentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.25V7.15A1.4 1.4 0 0 1 4.4 5.75H8.6A1.4 1.4 0 0 1 10 7.15V9.25H19.1A1.75 1.75 0 0 1 20.85 11v6.6a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 17.6V9.25z" />
      <path d="M11.35 9.25V7.15A1.15 1.15 0 0 1 12.5 6h2.1a1.15 1.15 0 0 1 1.15 1.15V9.25" />
      <path d="M17.1 9.25V7.15A1.15 1.15 0 0 1 18.25 6h1.45A1.15 1.15 0 0 1 20.85 7.15V9.25" />
      <path d="M6.25 13h9.5" />
      <path d="M6.25 16.25h6" />
    </svg>
  )
}

function AutoCompleteSearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.2 15.2 4.8 4.8" />
      <path d="M7.75 10.5h5.5" />
    </svg>
  )
}

function InputChipIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3.5" width="18" height="6.5" rx="1.75" />
      <path d="M6.5 6.75h7" />
      <rect x="3" y="13" width="8" height="6.5" rx="3.25" />
      <rect x="13" y="13" width="8" height="6.5" rx="3.25" />
    </svg>
  )
}

function AccordionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="2.75" width="18" height="5" rx="1.25" />
      <path d="M16.4 5.25h2.2" />
      <path d="M17.5 4.15v2.2" />
      <rect x="3" y="9" width="18" height="6.5" rx="1.25" />
      <path d="M6 11.25h6.5" />
      <path d="M6 13.5h4" />
      <path d="M16.4 12.25h2.2" />
      <rect x="3" y="16.75" width="18" height="5" rx="1.25" />
      <path d="M16.4 19.25h2.2" />
      <path d="M17.5 18.15v2.2" />
    </svg>
  )
}

function NestedCheckboxesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="4.5" height="4.5" rx="1" />
      <path d="m4.1 5.25 1.05 1.1 1.6-2" />
      <path d="M10 5.25h10" />
      <path d="M5.25 7.5v8.5" />
      <path d="M5.25 11.9h2" />
      <rect x="7.25" y="9.75" width="4.25" height="4.25" rx="1" />
      <path d="M13.75 11.9h6.5" />
      <path d="M5.25 16h2" />
      <rect x="7.25" y="16.25" width="4.25" height="4.25" rx="1" />
      <path d="m8.3 18.4 1 1.05 1.5-1.9" />
      <path d="M13.75 18.4h6.5" />
    </svg>
  )
}

function ProgressBarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="8.75" width="19" height="6.5" rx="3.25" />
      <path d="M5.5 12h8.5" strokeWidth="2.5" />
    </svg>
  )
}

function PaginationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.6 8.75 2.6 12l2 3.25" />
      <rect x="6.5" y="8" width="3.2" height="8" rx="1" />
      <rect x="10.7" y="8" width="3.2" height="8" rx="1" fill="currentColor" stroke="none" />
      <rect x="14.9" y="8" width="3.2" height="8" rx="1" />
      <path d="M19.4 8.75 21.4 12l-2 3.25" />
    </svg>
  )
}

function ToDoListIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3.5" width="4.75" height="4.75" rx="1" />
      <path d="m4.15 5.9 1.15 1.2 1.7-2.1" />
      <path d="M10.5 5.9h9" />
      <rect x="3" y="9.6" width="4.75" height="4.75" rx="1" />
      <path d="m4.15 12 1.15 1.2 1.7-2.1" />
      <path d="M10.5 12h7" />
      <rect x="3" y="15.75" width="4.75" height="4.75" rx="1" />
      <path d="M10.5 18.1h5.5" />
    </svg>
  )
}

const pages = [
  {
    path: "/file-explorer",
    name: "File Explorer",
    description: "Open folders, then add or delete files",
    icon: FolderIcon,
    Component: FileExplorer,
    code: fileExplorerCode,
  },
  {
    path: "/grid-light",
    name: "Grid Light",
    description: "Light each cell, then watch them clear",
    icon: GridIcon,
    Component: GridLight,
    code: gridLightCode,
  },
  {
    path: "/otp-input",
    name: "OTP Input",
    description: "Type a 6-digit code, one box at a time",
    icon: OtpIcon,
    Component: OTPInput,
    code: otpInputCode,
  },
  {
    path: "/kanban-board",
    name: "Kanban Board",
    description: "Move tasks across columns",
    icon: KanbanIcon,
    Component: KanbanBoard,
    code: kanbanBoardCode,
  },
  {
    path: "/tab-form-component",
    name: "Tab Form Component",
    description: "Create a tab form component",
    icon: TabFormComponentIcon,
    Component: TabFormComponent,
    code: tabFormComponentCode,
  },
  {
    path: "/auto-complete-search",
    name: "Auto Complete Search",
    description: "Search for a word, then see suggestions",
    icon: AutoCompleteSearchIcon,
    Component: AutoCompleteSearch,
    code: autoCompleteSearchCode,
  },
  {
    path: "/input-chip",
    name: "Input Chip",
    description: "Create a input chip component",
    icon: InputChipIcon,
    Component: InputChip,
    code: inputChipCode,
  },
  {
    path: "/accordion",
    name: "Accordion",
    description: "Create a accordion component",
    icon: AccordionIcon,
    Component: Accordion,
    code: accordionCode,
  },
  {
    path: "/nested-checkboxes",
    name: "Nested Checkboxes",
    description: "Create a nested checkboxes component",
    icon: NestedCheckboxesIcon,
    Component: NestedCheckboxes,
    code: nestedCheckboxesCode,
  },
  {
    path: "/progress-bar",
    name: "ProgressBar",
    description: "Create a progress bar component",
    icon: ProgressBarIcon,
    Component: ProgressBar,
    code: progressBarCode,
  },
  {
    path: "/pagination",
    name: "Pagination",
    description: "Create a pagination component",
    icon: PaginationIcon,
    Component: Pagination,
    code: paginationCode,
  },
  {
    path: "/to-do-list",
    name: "To Do List",
    description: "Create a to do list component",
    icon: ToDoListIcon,
    Component: ToDoList,
    code: toDoListCode,
  },
];

function Home() {
  return (
    <section className="home">
      <header className="home-header">
        <p className="home-kicker">Practice problems</p>
        <h1>Frontend Machine Coding</h1>
        <p className="home-lead">
          Try the live UI, then switch to Code to read how it is built.
        </p>
      </header>
      <ul className="page-list">
        {pages.map((page) => {
          const Icon = page.icon
          return (
            <li key={page.path}>
              <Link to={page.path}>
                <span className="page-card-icon">
                  <Icon />
                </span>
                <span className="page-card-text">
                  <span className="page-card-name">{page.name}</span>
                  <span className="page-card-desc">{page.description}</span>
                </span>
                <span className="page-card-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function ProblemPage({ Component, code }) {
  const [view, setView] = useState('ui')

  return (
    <section className="page">
      <div className="page-toolbar">
        <Link to="/" className="back-link">
          Home
        </Link>
        <div className="view-toggle" role="group" aria-label="View">
          <button
            type="button"
            aria-pressed={view === 'ui'}
            onClick={() => setView('ui')}
          >
            UI
          </button>
          <button
            type="button"
            aria-pressed={view === 'code'}
            onClick={() => setView('code')}
          >
            Code
          </button>
        </div>
      </div>
      {view === 'ui' ? (
        <Component />
      ) : (
        <pre className="code-view">
          <code>{code}</code>
        </pre>
      )}
    </section>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-copy">
          <span>
            © {currentYear}
            <span className="site-footer-name"><a
            href="https://avinash-sah.netlify.app/"
            aria-label="Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-name-link"
          > Avinash Sah </a></span>All rights reserved
          </span>
        </div>
        <div className="site-footer-social">
          <a
            href="https://linkedin.com/in/avinashsah995"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0z" />
            </svg>
          </a>
          <a
            href="https://x.com/avinashsah995"
            aria-label="X (formerly Twitter)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.727-8.828L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
          <a
            href="https://avinash-sah.netlify.app/"
            aria-label="Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 17.93A8.01 8.01 0 0 1 4 12c0-.62.08-1.21.21-1.79L9 15v1a2 2 0 0 0 2 2v1.93zm6.9-2.54A2 2 0 0 0 17 15.99h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41A8.01 8.01 0 0 1 20 12a7.96 7.96 0 0 1-2.1 5.39z" />
            </svg>
          </a>
          <a
            href="https://github.com/avinashsah995"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="app-shell">
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map(({ path, Component, code }) => (
            <Route
              key={path}
              path={path}
              element={<ProblemPage Component={Component} code={code} />}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
