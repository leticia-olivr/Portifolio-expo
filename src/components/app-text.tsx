import { StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, type ColorName } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

type Variant = 'display' | 'title' | 'heading' | 'body' | 'bodyStrong' | 'label' | 'caption';

type Props = TextProps & {
  variant?: Variant;
  color?: ColorName;
};

export function AppText({ variant = 'body', color = 'text', style, ...props }: Props) {
  const { colors } = useAppTheme();
  return <Text style={[styles[variant], { color: colors[color] }, style]} {...props} />;
}

const styles = StyleSheet.create({
  display: { fontFamily: Fonts.extrabold, fontSize: 30, lineHeight: 36, letterSpacing: -0.6 },
  title: { fontFamily: Fonts.extrabold, fontSize: 26, lineHeight: 32, letterSpacing: -0.4 },
  heading: { fontFamily: Fonts.bold, fontSize: 17, lineHeight: 23 },
  body: { fontFamily: Fonts.regular, fontSize: 15, lineHeight: 22 },
  bodyStrong: { fontFamily: Fonts.semibold, fontSize: 15, lineHeight: 22 },
  label: {
    fontFamily: Fonts.bold,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  caption: { fontFamily: Fonts.medium, fontSize: 13, lineHeight: 18 },
});
