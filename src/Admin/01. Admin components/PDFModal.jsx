import React from 'react';
import '../02. Admin components CSS/pdfmodal.css';

const PDFModal = ({ isOpen, closeModal, pdfUrl }) => {
  return (
    isOpen && (
      <div className="pdf-modal-overlay">
        <div className="pdf-modal">
          <button className="close-modal-btn" onClick={closeModal}>x</button>
          <iframe src={pdfUrl} width="100%" height="100%" title="PDF Viewer"></iframe>
        </div>
      </div>
    )
  );
};

export default PDFModal;