export const Palette = {
  light: {
    background: '#F7F5FB',
    surface: '#FFFFFF',
    surfaceAlt: '#EFEAF8',
    border: '#E4DEF0',
    text: '#1B1530',
    textMuted: '#625B78',
    primary: '#6D28D9',
    primarySoft: '#EDE5FB',
    onPrimary: '#FFFFFF',
    accent: '#F25F4C',
    success: '#15803D',
    danger: '#B91C1C',
  },
  dark: {
    background: '#0F0B1A',
    surface: '#1A1428',
    surfaceAlt: '#241C37',
    border: '#2E2545',
    text: '#F4F1FA',
    textMuted: '#A79FBF',
    primary: '#A78BFA',
    primarySoft: '#2A2142',
    onPrimary: '#140D24',
    accent: '#FB8F7F',
    success: '#4ADE80',
    danger: '#F87171',
  },
} as const;

export type ColorName = keyof typeof Palette.light;
export type Colors = { [K in ColorName]: string };

export const HeroGradient = ['#5B21B6', '#8B3FD9', '#F25F4C'] as const;

export const Fonts = {
  regular: 'PlusJakartaSans_400Regular',
  medium: 'PlusJakartaSans_500Medium',
  semibold: 'PlusJakartaSans_600SemiBold',
  bold: 'PlusJakartaSans_700Bold',
  extrabold: 'PlusJakartaSans_800ExtraBold',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const Radius = {
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
} as const;

export const MaxContentWidth = 720;
