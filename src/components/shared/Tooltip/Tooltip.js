import React, { useEffect, useRef, useState } from 'react';
import './Tooltip.css';

const ToolTip = ({ children, title }) => {
  const ref = useRef();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = ({ target }) => {
    if (ref.current.contains(target)) {
      return;
    }
    setShowTooltip(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <span ref={ref} onClick={() => setShowTooltip(!showTooltip)} className='position-relative'>
      {children}
      {showTooltip && (
        <div className='tool-tip'>
          <span></span>
          {title}
        </div>
      )}
    </span>
  );
};

export default ToolTip;
