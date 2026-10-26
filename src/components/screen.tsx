import type { ReactNode } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { Icon } from '@/components/icon';
import { Button, IconButton } from '@/components/ui';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useCurriculo } from '@/providers/curriculo-provider';
import { useAppTheme } from '@/providers/theme-provider';

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  // Telas que dependem dos dados do Back4App mostram carregando/erro no lugar do conteúdo.
  precisaDados?: boolean;
  children: ReactNode;
};

export function Screen({ eyebrow, title, subtitle, actions, precisaDados = true, children }: Props) {
  const { colors, scheme, alternarTema } = useAppTheme();
  const { status, erro, atualizando, recarregar } = useCurriculo();
  const insets = useSafeAreaInsets();

  let conteudo = children;
  if (precisaDados && status === 'carregando') {
    conteudo = (
      <View style={styles.estado}>
        <ActivityIndicator color={colors.primary} size="large" />
        <AppText color="textMuted">Buscando dados no Back4App…</AppText>
      </View>
    );
  } else if (precisaDados && status === 'erro') {
    conteudo = (
      <View style={styles.estado}>
        <Icon name="alerta" size={32} color={colors.accent} />
        <AppText variant="heading" style={styles.centro}>
          Não foi possível carregar o currículo
        </AppText>
        <AppText color="textMuted" style={styles.centro}>
          {erro}
        </AppText>
        <Button label="Tentar de novo" icon="recarregar" onPress={recarregar} />
      </View>
    );
  }

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + Spacing.lg, paddingBottom: insets.bottom + Spacing.xxl },
      ]}
      refreshControl={
        <RefreshControl
          refreshing={atualizando}
          onRefresh={recarregar}
          tintColor={colors.primary}
          colors={[colors.primary]}
        />
      }>
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
        {conteudo}
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
  estado: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.md,
    paddingVertical: Spacing.xxl * 2,
    paddingHorizontal: Spacing.lg,
  },
  centro: { textAlign: 'center' },
});
