import { useState, useRef, useEffect } from 'react';

export const useModal = () => {
  const [showContainer, setShowContainer] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleContainer = () => {
    setShowContainer((prevShowContainer) => !prevShowContainer);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        buttonRef.current &&
        !containerRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowContainer(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return {
    showContainer,
    toggleContainer,
    containerRef,
    buttonRef,
  };
};
