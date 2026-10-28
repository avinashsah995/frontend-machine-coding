import { useEffect, useRef, useState } from "react";
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
import StarRating from "./pages/StarRating";
import Modal from "./pages/Modal";
import Stopwatch from "./pages/Stopwatch";
import ImageCarousel from "./pages/ImageCarousel";
import ToastNotification from "./pages/ToastNotification";
import InfiniteScroll from "./pages/InfiniteScroll";
import DragAndDropList from "./pages/DragAndDropList";
import MultiSelectDropdown from "./pages/MultiSelectDropdown";
import TreeView from "./pages/TreeView";
import DataTable from "./pages/DataTable";
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
import starRatingCode from "./pages/StarRating.jsx?raw";
import modalCode from "./pages/Modal.jsx?raw";
import stopwatchCode from "./pages/Stopwatch.jsx?raw";
import imageCarouselCode from "./pages/ImageCarousel.jsx?raw";
import toastNotificationCode from "./pages/ToastNotification.jsx?raw";
import infiniteScrollCode from "./pages/InfiniteScroll.jsx?raw";
import dragAndDropListCode from "./pages/DragAndDropList.jsx?raw";
import multiSelectDropdownCode from "./pages/MultiSelectDropdown.jsx?raw";
import treeViewCode from "./pages/TreeView.jsx?raw";
import dataTableCode from "./pages/DataTable.jsx?raw";
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

function StarRatingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3.2 14.4 8.7l6 .55-4.55 3.9 1.4 5.75L12 16.15 6.75 18.9l1.4-5.75L3.6 9.25l6-.55L12 3.2z" />
    </svg>
  );
}

function ModalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M15.2 7.6 17.2 9.6" />
      <path d="M17.2 7.6 15.2 9.6" />
      <path d="M6.5 12.5h7" />
      <path d="M6.5 15.5h4.5" />
    </svg>
  );
}

function StopwatchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="13.25" r="6.75" />
      <path d="M12 13.25V9.6" />
      <path d="M12 13.25h2.8" />
      <path d="M10 3.5h4" />
      <path d="M12 3.5v3" />
      <path d="m16.8 6.2 1.5-1.5" />
    </svg>
  );
}

function ImageCarouselIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6.25" y="5.5" width="11.5" height="13" rx="1.75" />
      <path d="M3.4 12 5.2 10.2" />
      <path d="M3.4 12 5.2 13.8" />
      <path d="M20.6 12 18.8 10.2" />
      <path d="M20.6 12 18.8 13.8" />
    </svg>
  );
}

function ToastNotificationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3.5" width="18" height="7" rx="1.75" />
      <path d="M6.5 7h7" />
      <rect x="5" y="13" width="16" height="7" rx="1.75" />
      <path d="M8.5 16.5h7" />
    </svg>
  );
}

function InfiniteScrollIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 4.5h14" />
      <path d="M5 8.5h14" />
      <path d="M5 12.5h14" />
      <path d="M12 15.5v4.5" />
      <path d="m9.2 17.8 2.8 2.8 2.8-2.8" />
    </svg>
  );
}

function DragDropListIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h2.2" />
      <path d="M4 8.6h2.2" />
      <path d="M9 7.3h11" />
      <path d="M4 12h2.2" />
      <path d="M4 14.6h2.2" />
      <path d="M9 13.3h9" />
      <path d="M4 18h2.2" />
      <path d="M4 20.6h2.2" />
      <path d="M9 19.3h7" />
    </svg>
  );
}

function MultiSelectDropdownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3.5" width="18" height="7" rx="1.75" />
      <rect x="5.2" y="5.4" width="5.2" height="3.2" rx="1.6" />
      <rect x="11.4" y="5.4" width="4" height="3.2" rx="1.6" />
      <path d="m16.8 6 1.5 1.5L16.8 9" />
      <path d="M6 14h12" />
      <path d="M6 17.5h8" />
    </svg>
  );
}

function TreeViewIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 6v12" />
      <path d="M5 6h3" />
      <path d="M5 12h3" />
      <path d="M5 18h3" />
      <rect x="8.5" y="4" width="11" height="4" rx="1" />
      <rect x="8.5" y="10" width="9" height="4" rx="1" />
      <rect x="8.5" y="16" width="7.5" height="4" rx="1" />
    </svg>
  );
}

function DataTableIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="1.75" />
      <path d="M3 9h18" />
      <path d="M3 14h18" />
      <path d="M9 4v16" />
      <path d="M15 4v16" />
    </svg>
  );
}

const pages = [
  {
    id: "FM01",
    path: "/file-explorer",
    name: "File Explorer",
    description: "Open folders, then add or delete files",
    difficulty: "hard",
    icon: FolderIcon,
    Component: FileExplorer,
    code: fileExplorerCode,
    problem: {
      summary:
        "Build a file explorer from nested folder and file data. A folder can be opened and closed. Inside a folder, add a new folder or file, and delete any file or folder.",
      expected: [
        "Recursive Rendering: Folders can contain nested folders/files to any depth, handled with recursion.",
        "Expand/Collapse UI: Each folder has toggle icons (using react-icons) to show/hide its contents.",
        "Add Items: Users can add a file or folder inside any existing folder dynamically.",
        "Remove Items: Files or folders (and their children) can be removed instantly.",
        "State Management: The file tree is managed using React useState, and state updates propagate through the recursive structure.",
        "Minimal Styling: Clean, readable layout using inline styles and icons for better UX.",
      ],
    },
  },
  {
    id: "FM02",
    path: "/grid-light",
    name: "Grid Light",
    description: "Light each cell, then watch them clear",
    difficulty: "medium",
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
    id: "FM03",
    path: "/otp-input",
    name: "OTP Input",
    description: "Type a 6-digit code, one box at a time",
    difficulty: "medium",
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
    id: "FM04",
    path: "/kanban-board",
    name: "Kanban Board",
    description: "Move tasks across columns",
    difficulty: "hard",
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
  {
    id: "FM05",
    path: "/auto-complete-search",
    name: "Auto Complete Search",
    description: "Search for a word, then see suggestions",
    difficulty: "medium",
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
    id: "FM06",
    path: "/input-chip",
    name: "Input Chip",
    description: "Create a input chip component",
    difficulty: "easy",
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
    id: "FM07",
    path: "/accordion",
    name: "Accordion",
    description: "Create a accordion component",
    difficulty: "easy",
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
  //   id: "FM08",
  //   path: "/tab-form-component",
  //   name: "Tab Form Component",
  //   description: "Create a tab form component",
  //   difficulty: "medium",
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
  // {
  //   id: "FM09",
  //   path: "/nested-checkboxes",
  //   name: "Nested Checkboxes",
  //   description: "Create a nested checkboxes component",
  //   difficulty: "hard",
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
  //   id: "FM10",
  //   path: "/progress-bar",
  //   name: "ProgressBar",
  //   description: "Create a progress bar component",
  //   difficulty: "medium",
  //   icon: ProgressBarIcon,
  //   Component: ProgressBar,
  //   code: progressBarCode,
  //   problem: {
  //     summary:
  //       'Build a dynamic progress bar application where clicking the "Add" button creates a new progress bar that automatically fills from 0% to 100%.',
  //     expected: [
  //       'Display an "Add" button to create new progress bars.',
  //       "Each click adds a new progress bar to the page.",
  //       "Each progress bar starts at 0% and automatically fills to 100%.",
  //       "Each progress bar should take approximately 4000ms (4 seconds) to complete.",
  //       "The filling animation should be smooth and continuous.",
  //       "Multiple progress bars should animate independently and simultaneously.",
  //       "Completed progress bars should remain visible at 100%.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM11",
  //   path: "/pagination",
  //   name: "Pagination",
  //   description: "Create a pagination component",
  //   difficulty: "medium",
  //   icon: PaginationIcon,
  //   Component: Pagination,
  //   code: paginationCode,
  //   problem: {
  //     summary:
  //       "Given a list of users, build a user data table that displays users in a paginated format.",
  //     expected: [
  //       "The user data table should display the following columns: Id, Name, Age, Occupation.",
  //       "Each row in the table represents a single user.",
  //       "The pagination controls should allow the user to navigate to previous and next pages.",
  //       "The pagination controls should display the current page number and the total number of pages.",
  //       "Disable the previous-page control on the first page and the next-page control on the last page.",
  //       "The table should update dynamically when the user navigates to a different page.",
  //       "Provide an option to select the number of users displayed per page (e.g., 5, 10, 20).",
  //     ],
  //   },
  // },
  // {
  //   id: "FM12",
  //   path: "/star-rating",
  //   name: "Star Rating",
  //   description: "Build an interactive star rating component",
  //   difficulty: "easy",
  //   icon: StarRatingIcon,
  //   Component: StarRating,
  //   code: starRatingCode,
  //   problem: {
  //     summary:
  //       "Create a star rating widget that allows users to select a rating value.",
  //     expected: [
  //       "The widget accepts three parameters: the maximum number of stars, the number of currently filled stars, and a callback fired with the new value whenever the rating changes.",
  //       "When a star is clicked, it is filled along with all the stars to its left, and the change callback is fired with the new rating.",
  //       "The widget may start with zero filled stars. Clicking a star selects a rating from 1 to the maximum; clicking the selected star again keeps that rating. Clearing the rating back to zero is not required.",
  //       "Hovering over a star fills that star and all stars to its left.",
  //       "The stars that need to be filled during hover take priority over the existing filled state.",
  //       "If the cursor leaves the widget and no new selection is made, the appropriate stars revert to the filled state before hovering.",
  //       "Make the star rating widget reusable such that multiple instances can be rendered within the same page.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM13",
  //   path: "/modal",
  //   name: "Modal",
  //   description: "Create a reusable modal dialog",
  //   difficulty: "easy",
  //   icon: ModalIcon,
  //   Component: Modal,
  //   code: modalCode,
  //   problem: {
  //     summary:
  //       "Build a reusable modal that opens on button click and can be closed using multiple interactions.",
  //     expected: [
  //       "Clicking a button opens the modal.",
  //       "Display a backdrop behind the modal.",
  //       "Clicking the close button closes the modal.",
  //       "Clicking outside the modal closes it.",
  //       "Pressing Escape closes the modal.",
  //       // "Keep keyboard focus inside the modal while it is open.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM14",
  //   path: "/stopwatch",
  //   name: "Stopwatch",
  //   description: "Build a stopwatch with start, pause, and reset",
  //   difficulty: "medium",
  //   icon: StopwatchIcon,
  //   Component: Stopwatch,
  //   code: stopwatchCode,
  //   problem: {
  //     summary:
  //       "Build a stopwatch that tracks elapsed time and supports starting, pausing, resuming, and resetting.",
  //     expected: [
  //       "Display elapsed time in HH:MM:SS format.",
  //       "Start begins counting elapsed time.",
  //       "Pause freezes the current elapsed time.",
  //       "Resume continues from the paused time.",
  //       "Reset returns the stopwatch to zero.",
  //       "Prevent multiple timers from running simultaneously.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM15",
  //   path: "/image-carousel",
  //   name: "Image Carousel",
  //   description: "Navigate images with arrows and indicators",
  //   difficulty: "medium",
  //   icon: ImageCarouselIcon,
  //   Component: ImageCarousel,
  //   code: imageCarouselCode,
  //   problem: {
  //     summary:
  //       "Build an image carousel that displays one image at a time and supports manual and automatic navigation.",
  //     expected: [
  //       "Display one image from the provided image list.",
  //       "Previous and Next buttons navigate between images.",
  //       "Navigation wraps from last to first and vice versa.",
  //       "Show indicators for the active image.",
  //       "Automatically change images after a fixed interval.",
  //       "Pause automatic navigation while hovering.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM16",
  //   path: "/toast-notification",
  //   name: "Toast Notification",
  //   description: "Show temporary success and error messages",
  //   difficulty: "medium",
  //   icon: ToastNotificationIcon,
  //   Component: ToastNotification,
  //   code: toastNotificationCode,
  //   problem: {
  //     summary:
  //       "Build a toast notification system that displays temporary messages and supports multiple notifications.",
  //     expected: [
  //       "Show success, error, warning, and info notifications.",
  //       "Each toast displays a message and close button.",
  //       "Automatically dismiss notifications after a delay.",
  //       "Allow multiple toasts to appear simultaneously.",
  //       "Manually closing a toast removes only that toast.",
  //       "Clear timers when notifications are removed.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM17",
  //   path: "/infinite-scroll",
  //   name: "Infinite Scroll",
  //   description: "Load more content automatically while scrolling",
  //   difficulty: "hard",
  //   icon: InfiniteScrollIcon,
  //   Component: InfiniteScroll,
  //   code: infiniteScrollCode,
  //   problem: {
  //     summary:
  //       "Build an infinite scrolling list that fetches more data when the user reaches the bottom.",
  //     expected: [
  //       "Fetch and display the initial page of items.",
  //       "Detect when the user approaches the bottom.",
  //       "Automatically fetch the next page.",
  //       "Append new items without replacing existing items.",
  //       "Show a loading indicator during API requests.",
  //       "Prevent duplicate or overlapping API requests.",
  //       "Stop fetching when no more data is available.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM18",
  //   path: "/drag-drop-list",
  //   name: "Drag And Drop List",
  //   description: "Reorder list items using drag and drop",
  //   difficulty: "hard",
  //   icon: DragDropListIcon,
  //   Component: DragAndDropList,
  //   code: dragAndDropListCode,
  //   problem: {
  //     summary:
  //       "Build a sortable list where users can drag items and drop them into a different position.",
  //     expected: [
  //       "Render a list of draggable items.",
  //       "Allow dragging an item from its current position.",
  //       "Highlight the potential drop position.",
  //       "Update the list order after dropping.",
  //       "Maintain the updated order in React state.",
  //       "Dragging an item onto itself leaves the order unchanged.",
  //       "Support keyboard-based reordering.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM19",
  //   path: "/multi-select-dropdown",
  //   name: "Multi Select Dropdown",
  //   description: "Select multiple options with search and filtering",
  //   difficulty: "hard",
  //   icon: MultiSelectDropdownIcon,
  //   Component: MultiSelectDropdown,
  //   code: multiSelectDropdownCode,
  //   problem: {
  //     summary:
  //       "Build a searchable multi-select dropdown where users can select multiple options and remove selected values.",
  //     expected: [
  //       "Display a dropdown containing selectable options.",
  //       "Allow selecting multiple options.",
  //       "Display selected options as removable chips.",
  //       "Filter options based on the search input.",
  //       "Prevent duplicate selections.",
  //       "Provide a Clear All button.",
  //       "Close the dropdown when clicking outside.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM20",
  //   path: "/tree-view",
  //   name: "Tree View",
  //   description: "Render expandable hierarchical data",
  //   difficulty: "hard",
  //   icon: TreeViewIcon,
  //   Component: TreeView,
  //   code: treeViewCode,
  //   problem: {
  //     summary:
  //       "Build a hierarchical tree view that supports nested nodes, expanding and collapsing branches, and selecting items.",
  //     expected: [
  //       "Render nested tree data recursively.",
  //       "Allow expanding and collapsing individual nodes.",
  //       "Display different icons for parent and leaf nodes.",
  //       "Highlight the currently selected node.",
  //       "Support expanding and collapsing all nodes.",
  //       "Allow keyboard navigation through visible nodes.",
  //       "Handle deeply nested structures.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM21",
  //   path: "/data-table",
  //   name: "Data Table",
  //   description: "Build a sortable, searchable, paginated data table",
  //   difficulty: "hard",
  //   icon: DataTableIcon,
  //   Component: DataTable,
  //   code: dataTableCode,
  //   problem: {
  //     summary:
  //       "Build an interactive data table with sorting, searching, filtering, and pagination.",
  //     expected: [
  //       "Render tabular data with column headers.",
  //       "Click a column header to sort ascending or descending.",
  //       "Search records using a text input.",
  //       "Filter records based on selected criteria.",
  //       "Paginate the filtered results.",
  //       "Allow changing the number of rows per page.",
  //       "Show an empty state when no records match.",
  //       "Keep sorting, filtering, and pagination in sync.",
  //     ],
  //   },
  // },
  // {
  //   id: "FM22",
  //   path: "/to-do-list",
  //   name: "To Do List",
  //   description: "Create a to do list component",
  //   difficulty: "hard",
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

function ListLayoutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function GridLayoutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.25" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.25" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.25" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.25" />
    </svg>
  );
}

const difficulties = ["all", "easy", "medium", "hard"];
const layouts = ["list", "grid"];

function readChoice(key, allowed, fallback) {
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function DifficultyMenu({ difficulty, onChange }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const close = (event) => {
      if (!menuRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  return (
    <div className="difficulty-menu" ref={menuRef}>
      <button
        type="button"
        className="difficulty-menu-trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        {difficulty.toUpperCase()}
        <span className="difficulty-menu-chevron" aria-hidden="true" />
      </button>
      {open ? (
        <div className="difficulty-menu-list" role="listbox" aria-label="Difficulty">
          {difficulties.map((level) => (
            <button
              key={level}
              type="button"
              role="option"
              aria-selected={difficulty === level}
              onClick={() => {
                onChange(level);
                setOpen(false);
              }}
            >
              {level.toUpperCase()}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Home() {
  const homeRef = useRef(null);
  const sentinelRef = useRef(null);
  const [stuck, setStuck] = useState(false);
  const [layout, setLayout] = useState(() =>
    readChoice("home-layout", layouts, "grid"),
  );
  const [difficulty, setDifficulty] = useState(() =>
    readChoice("home-difficulty", difficulties, "all"),
  );
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("home-layout", layout);
    localStorage.setItem("home-difficulty", difficulty);
  }, [layout, difficulty]);

  useEffect(() => {
    const root = homeRef.current;
    const sentinel = sentinelRef.current;
    if (!root || !sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { root, threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const visiblePages = pages.filter((page) => {
    const matchesDifficulty =
      difficulty === "all" || page.difficulty === difficulty;
    const haystack = `${page.id} ${page.name} ${page.description}`.toLowerCase();
    const matchesQuery =
      normalizedQuery === "" || haystack.includes(normalizedQuery);
    return matchesDifficulty && matchesQuery;
  });

  return (
    <section className="home" ref={homeRef}>
      <header className="home-header">
        <p className="home-kicker">Practice problems</p>
        <p className="home-lead">
          Try the live UI, then switch to Code to read how it is built.
        </p>
      </header>
      <div className="home-sticky-sentinel" ref={sentinelRef} />
      <div className={`home-sticky${stuck ? " is-stuck" : ""}`}>
        <h1>Frontend Machine Coding</h1>
        <div className="home-toolbar">
        <input
          type="search"
          className="home-search"
          placeholder="Search"
          aria-label="Search problems"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="home-toolbar-actions">
          <div
            className="view-toggle difficulty-toggle"
            role="group"
            aria-label="Difficulty"
          >
            {difficulties.map((level) => (
              <button
                key={level}
                type="button"
                aria-pressed={difficulty === level}
                onClick={() => setDifficulty(level)}
              >
                {level.toUpperCase()}
              </button>
            ))}
          </div>
          <DifficultyMenu difficulty={difficulty} onChange={setDifficulty} />
          <div className="view-toggle" role="group" aria-label="Layout">
            <button
              type="button"
              aria-label="List"
              aria-pressed={layout === "list"}
              onClick={() => setLayout("list")}
            >
              <ListLayoutIcon />
            </button>
            <button
              type="button"
              aria-label="Grid"
              aria-pressed={layout === "grid"}
              onClick={() => setLayout("grid")}
            >
              <GridLayoutIcon />
            </button>
          </div>
        </div>
        </div>
      </div>
      {visiblePages.length === 0 ? (
        <p className="home-empty">No problems match.</p>
      ) : (
        <ul className={`page-list${layout === "list" ? " is-list" : ""}`}>
          {visiblePages.map((page) => {
            const Icon = page.icon;
            return (
              <li key={page.path}>
                <Link to={page.path}>
                  <span className="page-card-index">{page.id}</span>
                  <span
                    className={`page-card-difficulty page-card-difficulty-${page.difficulty}`}
                  >
                    {page.difficulty.toUpperCase()}
                  </span>
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
      )}
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

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M4 16V6a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

function WrapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16" />
      <path d="M4 12h11a4 4 0 0 1 0 8H9" />
      <path d="m12 17-3 3 3 3" />
    </svg>
  );
}

function ProblemPage({ name, Component, code, problem }) {
  const [view, setView] = useState("ui");
  const [wrap, setWrap] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

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
      <div className="page-title-row">
        <h1 className="page-title">{name}</h1>
        {view === "code" ? (
          <div className="code-actions">
            <button
              type="button"
              className={copied ? "is-copied" : undefined}
              aria-label={copied ? "Copied" : "Copy code"}
              onClick={copyCode}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
            <button
              type="button"
              aria-label="Wrap lines"
              aria-pressed={wrap}
              onClick={() => setWrap((value) => !value)}
            >
              <WrapIcon />
            </button>
          </div>
        ) : null}
      </div>
      {view === "ui" ? (
        <>
          {problem ? <ProblemStatement problem={problem} /> : null}
          <p className="section-kicker">Preview</p>
          <div className="page-preview">
            <Component />
          </div>
        </>
      ) : (
        <pre className={`code-view${wrap ? " is-wrapped" : ""}`}>
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
