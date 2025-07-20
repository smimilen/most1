import { ReactNode } from 'react';
import FormScrollProvider from './FormScrollProvider';
import QueryProvider from './QueryProvider';
import OverlayProvider from './OverlayProvider';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>
      <OverlayProvider>
        <FormScrollProvider>{children}</FormScrollProvider>
      </OverlayProvider>
    </QueryProvider>
  );
};

export default Providers;
