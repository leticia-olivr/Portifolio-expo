import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, type IconName } from '@/components/icon';
import { Card } from '@/components/ui';
import { Radius, Spacing } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

export function TimelineItem({
  icon,
  ultimo,
  children,
}: {
  icon: IconName;
  ultimo?: boolean;
  children: ReactNode;
}) {
  const { colors } = useAppTheme();
  return (
    <View style={styles.row}>
      <View style={styles.trilho}>
        <View style={[styles.marcador, { backgroundColor: colors.primarySoft, borderColor: colors.primary }]}>
          <Icon name={icon} size={16} color={colors.primary} />
        </View>
        {!ultimo && <View style={[styles.linha, { backgroundColor: colors.border }]} />}
      </View>
      <Card style={styles.card}>{children}</Card>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: Spacing.md },
  trilho: { alignItems: 'center', width: 36 },
  marcador: {
    width: 36,
    height: 36,
    borderRadius: Radius.pill,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linha: { width: 2, flex: 1, marginTop: Spacing.xs, marginBottom: -Spacing.lg },
  card: { flex: 1 },
});
