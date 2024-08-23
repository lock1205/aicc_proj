import React from 'react';
import '../design/AlermModal.css';

const AlermModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="window">
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <p>{message}</p>
          <button onClick={onClose}>바로 확인</button>
        </div>
      </div>
    </div>
  );
};

export default AlermModal;
