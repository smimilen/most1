'use client';

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';

type ContextType = {
  scrollToForm: () => void;
  formRef: RefObject<HTMLElement | null>;
  isFormVisible: boolean;
  setFormVisible: (v: boolean) => void;
  isScrollTriggered: boolean;
  setScrollTriggered: (v: boolean) => void;
};

const FormScrollContext = createContext<ContextType | null>(null);

export const useScrollToForm = () => {
  const context = useContext(FormScrollContext);
  if (!context)
    throw new Error('useScrollToForm must be used within FormScrollProvider');
  return context.scrollToForm;
};

export const useFormRef = () => {
  const context = useContext(FormScrollContext);
  if (!context)
    throw new Error('useFormRef must be used within FormScrollProvider');
  return context.formRef;
};

export const useFormAnimationState = () => {
  const context = useContext(FormScrollContext);
  if (!context)
    throw new Error(
      'useFormAnimationState must be used within FormScrollProvider'
    );
  return {
    isFormVisible: context.isFormVisible,
    setFormVisible: context.setFormVisible,
    isScrollTriggered: context.isScrollTriggered,
    setScrollTriggered: context.setScrollTriggered,
  };
};

const FormScrollProvider = ({ children }: { children: ReactNode }) => {
  const formRef = useRef<HTMLElement>(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isScrollTriggered, setScrollTriggered] = useState(false);

  const scrollToForm = useCallback(() => {
    setScrollTriggered(true);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const value = useMemo(
    () => ({
      scrollToForm,
      formRef,
      isFormVisible,
      setFormVisible,
      isScrollTriggered,
      setScrollTriggered,
    }),
    [scrollToForm, isFormVisible, isScrollTriggered]
  );

  return (
    <FormScrollContext.Provider value={value}>
      {children}
    </FormScrollContext.Provider>
  );
};

export default FormScrollProvider;
