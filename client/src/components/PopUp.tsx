import { useState } from 'react';

const Popup = ({ open, closeOnDocumentClick, onClose, children }) => {
  if (!open) return null;

  const handleDocumentClick = (e) => {
    if (closeOnDocumentClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleDocumentClick} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '5px' }}>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>
      <Popup open={isOpen} closeOnDocumentClick={true} onClose={togglePopup} 
      >
        <div className='popup'>popup content goes here</div>
      </Popup>
    </div>
  );
};

export default App;