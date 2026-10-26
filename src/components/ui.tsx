import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { AppText } from '@/components/app-text';
import { Icon, type IconName } from '@/components/icon';
import { Radius, Spacing } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

export function Card({
  children,
  style,
  onPress,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) {
  const { colors } = useAppTheme();
  const base = [styles.card, { backgroundColor: colors.surface, borderColor: colors.border }, style];
  if (!onPress) return <View style={base}>{children}</View>;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [base, pressed && styles.pressed]}>
      {children}
    </Pressable>
  );
}

export function Chip({ label, ativo, onPress }: { label: string; ativo?: boolean; onPress?: () => void }) {
  const { colors } = useAppTheme();
  return (
    <Pressable
      disabled={!onPress}
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        { backgroundColor: ativo ? colors.primary : colors.primarySoft },
        pressed && styles.pressed,
      ]}>
      <AppText variant="caption" style={{ color: ativo ? colors.onPrimary : colors.primary }}>
        {label}
      </AppText>
    </Pressable>
  );
}

export function ChipList({ itens }: { itens?: string[] }) {
  if (!itens?.length) return null;
  return (
    <View style={styles.chipList}>
      {itens.map((item) => (
        <Chip key={item} label={item} />
      ))}
    </View>
  );
}

export function SectionTitle({ children }: { children: string }) {
  return (
    <AppText variant="label" color="textMuted" style={styles.sectionTitle}>
      {children}
    </AppText>
  );
}

export function IconButton({
  icon,
  onPress,
  label,
}: {
  icon: IconName;
  onPress: () => void;
  label: string;
}) {
  const { colors } = useAppTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={8}
      style={({ pressed }) => [
        styles.iconButton,
        { backgroundColor: colors.surface, borderColor: colors.border },
        pressed && styles.pressed,
      ]}>
      <Icon name={icon} size={18} color={colors.text} />
    </Pressable>
  );
}

export function Button({
  label,
  icon,
  onPress,
  variante = 'primario',
  disabled,
}: {
  label: string;
  icon?: IconName;
  onPress: () => void;
  variante?: 'primario' | 'secundario';
  disabled?: boolean;
}) {
  const { colors } = useAppTheme();
  const primario = variante === 'primario';
  const corTexto = primario ? colors.onPrimary : colors.primary;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: primario ? colors.primary : colors.primarySoft },
        (pressed || disabled) && styles.pressed,
      ]}>
      {icon && <Icon name={icon} size={16} color={corTexto} />}
      <AppText variant="bodyStrong" style={{ color: corTexto }}>
        {label}
      </AppText>
    </Pressable>
  );
}

export function Periodo({ inicio, fim }: { inicio: string; fim?: string }) {
  const { colors } = useAppTheme();
  return (
    <View style={styles.periodo}>
      <Icon name="calendario" size={13} color={colors.textMuted} />
      <AppText variant="caption" color="textMuted">
        {inicio} – {fim || 'atual'}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    padding: Spacing.lg,
    gap: Spacing.sm,
  },
  pressed: { opacity: 0.7 },
  chip: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: Radius.pill,
  },
  chipList: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  sectionTitle: { marginTop: Spacing.sm },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: Radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    paddingVertical: 14,
    paddingHorizontal: Spacing.xl,
    borderRadius: Radius.pill,
  },
  periodo: { flexDirection: 'row', alignItems: 'center', gap: 6 },
});
