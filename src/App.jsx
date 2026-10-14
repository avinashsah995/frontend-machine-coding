import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import FileExplorer from "./pages/FileExplorer";
import GridLight from "./pages/GridLight";
import OTPInput from "./pages/OTPInput";
import KanbanBoard from "./pages/KanbanBoard";
import TabFormComponent from "./pages/TabFormComponent";
import AutoCompleteSearch from "./pages/AutoCompleteSearch";
import InputChip from "./pages/InputChip";
import Accordion from "./pages/Accordion";
import NestedCheckboxes from "./pages/NestedCheckboxes";
import ProgressBar from "./pages/ProgressBar";
import Pagination from "./pages/Pagination";
import ToDoList from "./pages/ToDoList";
import fileExplorerCode from "./pages/FileExplorer.jsx?raw";
import gridLightCode from "./pages/GridLight.jsx?raw";
import otpInputCode from "./pages/OTPInput.jsx?raw";
import kanbanBoardCode from "./pages/KanbanBoard.jsx?raw";
import tabFormComponentCode from "./pages/TabFormComponent.jsx?raw";
import autoCompleteSearchCode from "./pages/AutoCompleteSearch.jsx?raw";
import inputChipCode from "./pages/InputChip.jsx?raw";
import accordionCode from "./pages/Accordion.jsx?raw";
import nestedCheckboxesCode from "./pages/NestedCheckboxes.jsx?raw";
import progressBarCode from "./pages/ProgressBar.jsx?raw";
import paginationCode from "./pages/Pagination.jsx?raw";
import toDoListCode from "./pages/ToDoList.jsx?raw";
import "./App.css";

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
  );
}

function FolderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2h7.5A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-10z" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function OtpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <rect x="2" y="7" width="4" height="10" rx="1" />
      <rect x="7.5" y="7" width="4" height="10" rx="1" />
      <rect x="13" y="7" width="4" height="10" rx="1" />
      <rect x="18.5" y="7" width="3.5" height="10" rx="1" />
    </svg>
  );
}

function KanbanIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <rect x="3" y="4" width="5" height="16" rx="1.25" />
      <rect x="10" y="4" width="5" height="10" rx="1.25" />
      <rect x="17" y="4" width="4" height="13" rx="1.25" />
    </svg>
  );
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
  );
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
  );
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
  );
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
  );
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
  );
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
  );
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
      <rect
        x="10.7"
        y="8"
        width="3.2"
        height="8"
        rx="1"
        fill="currentColor"
        stroke="none"
      />
      <rect x="14.9" y="8" width="3.2" height="8" rx="1" />
      <path d="M19.4 8.75 21.4 12l-2 3.25" />
    </svg>
  );
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
  );
}

const pages = [
  {
    path: "/file-explorer",
    name: "File Explorer",
    description: "Open folders, then add or delete files",
    icon: FolderIcon,
    Component: FileExplorer,
    code: fileExplorerCode,
    problem: {
      summary:
        "Build a file explorer from nested folder and file data. A folder can be opened and closed. Inside a folder, add a new folder or file, and delete any file or folder.",
      expected: [
        "Recursive Rendering: Folders can contain nested folders/files to any depth, handled with recursion.", "Expand/Collapse UI: Each folder has toggle icons (using react-icons) to show/hide its contents.",
        "Add Items: Users can add a file or folder inside any existing folder dynamically.",
        "Remove Items: Files or folders (and their children) can be removed instantly.",
        "State Management: The file tree is managed using React useState, and state updates propagate through the recursive structure.",
        "Minimal Styling: Clean, readable layout using inline styles and icons for better UX.",
      ],
    },
  },
  {
    path: "/grid-light",
    name: "Grid Light",
    description: "Light each cell, then watch them clear",
    icon: GridIcon,
    Component: GridLight,
    code: gridLightCode,
    problem: {
      summary:
        "Build a grid of lights from a config. Some cells can be selected and some are empty. Click the selectable cells in any order, then watch them turn off again.",
      expected: [
        "Render the grid from the config. Empty cells are not clickable.",
        "Clicking a cell lights it. Clicking a lit cell does nothing.",
        "Remember the order the cells were lit.",
        "When every selectable cell is lit, turn them off one by one in reverse order.",
      ],
    },
  },
  {
    path: "/otp-input",
    name: "OTP Input",
    description: "Type a 6-digit code, one box at a time",
    icon: OtpIcon,
    Component: OTPInput,
    code: otpInputCode,
    problem: {
      summary:
        "Build a 6-digit OTP input. Each digit has its own box, and focus moves as the user types, deletes, or presses the arrow keys.",
      expected: [
        "Show 6 boxes and focus the first one on load.",
        "Accept one digit per box. Ignore letters and extra characters.",
        "After a digit is entered, move focus to the next box.",
        "Arrow keys move between boxes. Backspace on an empty box moves to the previous one.",
      ],
    },
  },
  {
    path: "/kanban-board",
    name: "Kanban Board",
    description: "Move tasks across columns",
    icon: KanbanIcon,
    Component: KanbanBoard,
    code: kanbanBoardCode,
    problem: {
      summary:
        "Build a kanban board with Todo, In Progress, and Done columns. Add tasks, delete them, and drag a task from one column to another.",
      expected: [
        "Show each column with its tasks and a count.",
        "Add a task to the chosen column. Ignore an empty title.",
        "Delete a task from its column.",
        "Drag a task onto another column. Dropping it on the same column does nothing.",
        "The count updates when a task is added, moved, or deleted.",
      ],
    },
  },
  // {
  //   path: "/tab-form-component",
  //   name: "Tab Form Component",
  //   description: "Create a tab form component",
  //   icon: TabFormComponentIcon,
  //   Component: TabFormComponent,
  //   code: tabFormComponentCode,
  //   problem: {
  //     summary:
  //       "Build a form split into Profile, Interests, and Settings. The user moves through the tabs with Previous and Next, and each step keeps what they already typed.",
  //     expected: [
  //       "Show one tab at a time, with the active tab clearly marked.",
  //       "Keep entered values when moving between tabs.",
  //       "Next stays on the current tab until that step is valid, and shows what is wrong.",
  //       "Profile requires every field: a name of at least 3 characters, a valid email, a phone of at least 10 digits, an address of at least 10 characters, and a city of at least 3 characters.",
  //       "Interests and Settings cannot move on until every field is filled.",
  //       "Previous goes back without clearing data. Save is available on the last tab.",
  //     ],
  //   },
  // },
  {
    path: "/auto-complete-search",
    name: "Auto Complete Search",
    description: "Search for a word, then see suggestions",
    icon: AutoCompleteSearchIcon,
    Component: AutoCompleteSearch,
    code: autoCompleteSearchCode,
    problem: {
      summary:
        "Build a search box that suggests matching products as the user types. Suggestions should feel quick, and the user can move through them with the keyboard.",
      expected: [
        "Fetch suggestions for the current query, and wait briefly so each keystroke does not call the API.",
        "Reuse suggestions for a query that was already fetched.",
        "Show the list while the input is focused, and hide it when focus leaves.",
        "Arrow up and arrow down move the highlight, and keep the highlighted item in view.",
      ],
    },
  },
  {
    path: "/input-chip",
    name: "Input Chip",
    description: "Create a input chip component",
    icon: InputChipIcon,
    Component: InputChip,
    code: inputChipCode,
    problem: {
      summary:
        "Build a tag input. The user types a label and presses Enter to add it as a chip, and can remove any chip.",
      expected: [
        "Start with a few chips already shown.",
        "Pressing Enter adds the trimmed text as a new chip and clears the input.",
        "Ignore an empty value.",
        "Clicking the remove control deletes only that chip.",
      ],
    },
  },
  {
    path: "/accordion",
    name: "Accordion",
    description: "Create a accordion component",
    icon: AccordionIcon,
    Component: Accordion,
    code: accordionCode,
    problem: {
      summary:
        "Build an accordion from a list of titles and content. Opening one item shows its content, and only one item is open at a time.",
      expected: [
        "Show each item as a header. Content stays hidden until that item is opened.",
        "Click a closed item to open it and close whichever item was open.",
        "Click the open item to close it.",
        "The open item is visually distinct, and an empty list shows an empty state.",
      ],
    },
  },
  // {
  //   path: "/nested-checkboxes",
  //   name: "Nested Checkboxes",
  //   description: "Create a nested checkboxes component",
  //   icon: NestedCheckboxesIcon,
  //   Component: NestedCheckboxes,
  //   code: nestedCheckboxesCode,
  //   problem: {
  //     summary:
  //       "Build a tree of checkboxes. Checking or unchecking a parent updates every item nested under it.",
  //     expected: [
  //       "Render the nested data with children indented under their parent.",
  //       "Checking a parent checks all of its descendants.",
  //       "Unchecking a parent unchecks all of its descendants.",
  //       "A checkbox with no children toggles only itself.",
  //     ],
  //   },
  // },
  // {
  //   path: "/progress-bar",
  //   name: "ProgressBar",
  //   description: "Create a progress bar component",
  //   icon: ProgressBarIcon,
  //   Component: ProgressBar,
  //   code: progressBarCode,
  //   problem: {
  //     summary:
  //       "Build a progress bar that fills from 0 to 100. The user can start it and see how far it has gone.",
  //     expected: [
  //       "Show a track with the filled portion and the current percent.",
  //       "Progress increases over time after it starts, and never goes past 100.",
  //       "At 100, progress stops and the bar shows that it is complete.",
  //       "Starting again resets the bar to 0 before it runs.",
  //     ],
  //   },
  // },
  // {
  //   path: "/pagination",
  //   name: "Pagination",
  //   description: "Create a pagination component",
  //   icon: PaginationIcon,
  //   Component: Pagination,
  //   code: paginationCode,
  //   problem: {
  //     summary:
  //       "Build pagination for a long list. Only one page of items is shown, and the user can move between pages.",
  //     expected: [
  //       "Split the list into pages of a fixed size and show only the current page.",
  //       "Show previous, next, and the page numbers, with the current page marked.",
  //       "Previous does nothing on the first page, and next does nothing on the last page.",
  //       "Choosing a page shows that page's items and updates the current page.",
  //     ],
  //   },
  // },
  // {
  //   path: "/to-do-list",
  //   name: "To Do List",
  //   description: "Create a to do list component",
  //   icon: ToDoListIcon,
  //   Component: ToDoList,
  //   code: toDoListCode,
  //   problem: {
  //     summary:
  //       "Build a to-do list. The user can add a task, mark it done or not done, and delete it.",
  //     expected: [
  //       "Add a task from the input. Ignore an empty title and clear the input after adding.",
  //       "Click a task to toggle it between done and not done.",
  //       "A done task stays in the list and looks completed.",
  //       "Delete removes only that task.",
  //     ],
  //   },
  // },
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
          const Icon = page.icon;
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
          );
        })}
      </ul>
    </section>
  );
}

function ProblemStatement({ problem }) {
  const [open, setOpen] = useState(true);

  return (
    <section className="problem-brief">
      <button
        type="button"
        className="problem-brief-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>Problem</span>
        <span className="problem-brief-chevron" aria-hidden="true" />
      </button>
      {open ? (
        <div className="problem-brief-body">
          <p>{problem.summary}</p>
          <h3>Expected</h3>
          <ul>
            {problem.expected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

function ProblemPage({ name, Component, code, problem }) {
  const [view, setView] = useState("ui");

  return (
    <section className="page">
      <div className="page-toolbar">
        <Link to="/" className="back-link">
          Home
        </Link>
        <div className="view-toggle" role="group" aria-label="View">
          <button
            type="button"
            aria-pressed={view === "ui"}
            onClick={() => setView("ui")}
          >
            UI
          </button>
          <button
            type="button"
            aria-pressed={view === "code"}
            onClick={() => setView("code")}
          >
            Code
          </button>
        </div>
      </div>
      <h1 className="page-title">{name}</h1>
      {view === "ui" ? (
        <>
          {problem ? <ProblemStatement problem={problem} /> : null}
          <p className="section-kicker">Preview</p>
          <div className="page-preview">
            <Component />
          </div>
        </>
      ) : (
        <pre className="code-view">
          <code>{code}</code>
        </pre>
      )}
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-copy">
          <span>
            © {currentYear}
            <span className="site-footer-name">
              <a
                href="https://avinash-sah.netlify.app/"
                aria-label="Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer-name-link"
              >
                {" "}
                Avinash Sah{" "}
              </a>
            </span>
            All rights reserved
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
  );
}

function App() {
  return (
    <div className="app-shell">
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map(({ path, name, Component, code, problem }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProblemPage
                  name={name}
                  Component={Component}
                  code={code}
                  problem={problem}
                />
              }
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
