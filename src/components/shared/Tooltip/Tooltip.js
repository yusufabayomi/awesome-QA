import React, { useRef, useState, useCallback } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import useExternalClick from './../../../hooks/useExternalClick';
import './Tooltip.css';

const propTypes = {
  description: PropTypes.string.isRequired,
};

const ToolTip = ({ description }) => {
  const ref = useRef();
  const [showTooltip, setShowTooltip] = useState(false);

  const hideTooltip = useCallback(() => {
    setShowTooltip(false);
  }, []);

  useExternalClick(ref, hideTooltip);

  return (
    <span ref={ref} data-testid='tooltip-trigger' onClick={() => setShowTooltip(!showTooltip)} className='position-relative'>
      <FontAwesomeIcon className='info-icon' icon={faInfoCircle} />

      <div className='tool-tip' data-testid='tooltip'>
        <span></span>
        {description}
      </div>
    </span>
  );
};

ToolTip.propTypes = propTypes;
export default ToolTip;
