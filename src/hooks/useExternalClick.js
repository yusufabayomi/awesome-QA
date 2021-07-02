import { useEffect } from 'react';

const useExternalClick = (ref, handleClick) => {
  useEffect(() => {
    const listener = ({ target }) => {
      if (ref.current.contains(target)) {
        return;
      }
      handleClick();
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handleClick]);
};

export default useExternalClick;
