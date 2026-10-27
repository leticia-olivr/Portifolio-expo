import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Vazio } from '@/components/empty';
import { Icon } from '@/components/icon';
import { Screen } from '@/components/screen';
import { Button, Card, Chip, ChipList } from '@/components/ui';
import { Spacing } from '@/constants/theme';
import { projetos } from '@/lib/curriculo';
import { useAppTheme } from '@/providers/theme-provider';

const tecnologias = [...new Set(projetos.flatMap((p) => p.tecnologias ?? []))].sort();

export default function ProjetosScreen() {
  const { colors } = useAppTheme();
  const [filtro, setFiltro] = useState<string | null>(null);

  const visiveis = filtro ? projetos.filter((p) => p.tecnologias?.includes(filtro)) : projetos;

  return (
    <Screen
      eyebrow="Portfólio"
      title="Projetos"
      subtitle="Toque em uma tecnologia para filtrar os projetos.">
      {tecnologias.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtros}>
          <Chip label="Todos" ativo={!filtro} onPress={() => setFiltro(null)} />
          {tecnologias.map((t) => (
            <Chip key={t} label={t} ativo={filtro === t} onPress={() => setFiltro(filtro === t ? null : t)} />
          ))}
        </ScrollView>
      )}

      {visiveis.length === 0 && <Vazio texto="Nenhum projeto encontrado." />}
      {visiveis.map((p) => (
        <Card key={p.id}>
          <View style={styles.titulo}>
            <AppText variant="heading" style={styles.nome}>
              {p.nome}
            </AppText>
            {!!p.destaque && (
              <View style={styles.destaque}>
                <Icon name="estrela" size={14} color={colors.accent} />
                <AppText variant="caption" color="accent">
                  Destaque
                </AppText>
              </View>
            )}
          </View>
          <AppText color="textMuted">{p.descricao}</AppText>
          <ChipList itens={p.tecnologias} />
          {!!(p.link || p.repositorio) && (
            <View style={styles.botoes}>
              {!!p.link && (
                <View style={styles.botao}>
                  <Button label="Ver projeto" icon="abrir" onPress={() => WebBrowser.openBrowserAsync(p.link!)} />
                </View>
              )}
              {!!p.repositorio && (
                <View style={styles.botao}>
                  <Button
                    label="Código"
                    icon="codigo"
                    variante="secundario"
                    onPress={() => WebBrowser.openBrowserAsync(p.repositorio!)}
                  />
                </View>
              )}
            </View>
          )}
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  filtros: { gap: Spacing.sm, paddingRight: Spacing.lg },
  titulo: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  nome: { flex: 1 },
  destaque: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  botoes: { flexDirection: 'row', gap: Spacing.sm, marginTop: Spacing.xs },
  botao: { flex: 1 },
});
