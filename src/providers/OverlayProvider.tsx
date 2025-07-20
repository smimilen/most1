// context/OverlayContext.tsx
'use client';

import Overlay from '@/shared/Overlay';
import { createContext, useContext, useState, useCallback } from 'react';

interface OverlayContextType {
  show: (onClose?: () => void) => void;
  hide: () => void;
  isActive: boolean;
  onClose?: () => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const useOverlay = (): OverlayContextType => {
  const context = useContext(OverlayContext);
  if (!context)
    throw new Error('useOverlay must be used within OverlayProvider');
  return context;
};

const OverlayProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const [onCloseCallback, setOnCloseCallback] = useState<
    (() => void) | undefined
  >(undefined);

  const show = useCallback((onClose?: () => void) => {
    setIsActive(true);
    setOnCloseCallback(() => onClose);
  }, []);

  const hide = useCallback(() => {
    setIsActive(false);
    if (onCloseCallback) onCloseCallback();
    setOnCloseCallback(undefined);
  }, [onCloseCallback]);

  return (
    <OverlayContext.Provider
      value={{ show, hide, isActive, onClose: onCloseCallback }}
    >
      {children}
      <Overlay />
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;
