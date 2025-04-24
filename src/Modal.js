import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'rgb(34,34,34)',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%',
  overflowY: 'auto',
  padding: '20px',
  borderRadius: '8px',
  color: 'white'
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div
        style={OVERLAY_STYLES}
        onClick={onClose}
        aria-hidden="true"  // Make overlay clickable but not focusable for screen readers
      />
      <div
        style={MODAL_STYLES}
        role="dialog"       // Makes it clear this is a dialog
        aria-modal="true"   // Inform screen readers this is a modal
      >
        <button
          className="btn bg-danger fs-4"
          style={{ position: 'absolute', top: '10px', right: '20px' }}
          onClick={onClose}
          aria-label="Close Modal" // Accessibility for close button
        >
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root') // Ensure this element exists in your HTML file
  );
}
