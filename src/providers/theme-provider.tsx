import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { Appearance, useColorScheme } from 'react-native';

import { Palette, type Colors } from '@/constants/theme';

type Scheme = 'light' | 'dark';

type ThemeContextValue = {
  scheme: Scheme;
  colors: Colors;
  alternarTema: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const sistema = useColorScheme() === 'dark' ? 'dark' : 'light';
  const [escolhido, setEscolhido] = useState<Scheme | null>(null);
  const scheme = escolhido ?? sistema;

  const alternarTema = useCallback(() => {
    const proximo = scheme === 'dark' ? 'light' : 'dark';
    setEscolhido(proximo);
    // Faz os componentes nativos (abas, teclado, alertas) seguirem o tema escolhido.
    Appearance.setColorScheme?.(proximo);
  }, [scheme]);

  const value = useMemo(
    () => ({ scheme, colors: Palette[scheme], alternarTema }),
    [scheme, alternarTema]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useAppTheme precisa estar dentro de <AppThemeProvider>');
  return ctx;
}
