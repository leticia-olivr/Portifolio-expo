import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { IconButton } from '@/components/ui';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function Screen({ eyebrow, title, subtitle, actions, children }: Props) {
  const { colors, scheme, alternarTema } = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + Spacing.lg, paddingBottom: insets.bottom + Spacing.xxl },
      ]}>
      <View style={styles.inner}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            {eyebrow && (
              <AppText variant="label" color="primary">
                {eyebrow}
              </AppText>
            )}
            {title && <AppText variant="title">{title}</AppText>}
          </View>
          <View style={styles.actions}>
            {actions}
            <IconButton
              icon={scheme === 'dark' ? 'sol' : 'lua'}
              label={scheme === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'}
              onPress={alternarTema}
            />
          </View>
        </View>
        {subtitle && <AppText color="textMuted">{subtitle}</AppText>}
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: Spacing.lg, flexGrow: 1 },
  inner: { width: '100%', maxWidth: MaxContentWidth, alignSelf: 'center', gap: Spacing.lg },
  header: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md },
  headerText: { flex: 1, gap: Spacing.xs },
  actions: { flexDirection: 'row', gap: Spacing.sm },
});
