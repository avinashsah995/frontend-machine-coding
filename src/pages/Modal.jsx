import React, { useEffect, useState } from "react";

const ModalContent = () => {
  return (
    <div className="modal-content">
      <p className="modal-content">
        Woohoo, you're reading this text in a modal!
      </p>
    </div>
  );
};

const ModelContainer = ({ setIsOpen, isOpen, ModalContent }) => {

  useEffect(() => {

    const handleEscape = (event) => {
      if(event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown",handleEscape);
    }
  }, [setIsOpen, isOpen])
  return (
    <div className="modal-backdrop"
    onMouseDown={(e) => {
      if(e.target === e.currentTarget) {
        setIsOpen(false);
      }
    }}
    >
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Modal Title</h2>
          <span className="modal-close" onClick={() => setIsOpen(false)}>
            &times;
          </span>
        </div>
        <ModalContent />
        <div className="modal-buttons">
          <button
            className="modal-button modal-button-cancel"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="modal-button modal-button-save"
            onClick={() => setIsOpen(false)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="modal-component">
      <button className="modal-button" onClick={() => setIsOpen(!isOpen)}>
        Open Modal
      </button>
      {isOpen && (
        <ModelContainer
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          ModalContent={ModalContent}
        />
      )}
    </div>
  );
};

export default Modal;
