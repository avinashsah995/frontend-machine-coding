import { useState } from 'react'

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const GridLight = () => {
   const [activeCells, setActiveCells] = useState([]);

   const handleCellClick = (index) => {
     if (activeCells.includes(index)) return;

     const updatedCells = [...activeCells, index];

     setActiveCells(updatedCells);

     if (updatedCells.length === config.flat().filter((cell) => cell).length) {
       const interval = setInterval(() => {
         setActiveCells((prev) => {
           if (prev.length === 0) {
             clearInterval(interval);
             return prev;
           }

           return prev.slice(0, -1);
         });
       }, 300);
     }
   };

   return (
     <>
       <h1>Grid Lights</h1>
       <div className="grid">
         {config.flat().map((cell, index) => {
           return cell ? (
             <div
               className={`cell${activeCells.includes(index) ? " cell-active" : ""}`}
               key={index}
               onClick={() => handleCellClick(index)}
             ></div>
           ) : (
             <span key={index}></span>
           );
         })}
       </div>
     </>
   );
}

export default GridLight