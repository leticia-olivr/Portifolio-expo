import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Vazio } from '@/components/empty';
import { Screen } from '@/components/screen';
import { TimelineItem } from '@/components/timeline';
import { Chip, ChipList, Periodo } from '@/components/ui';
import { Spacing } from '@/constants/theme';
import { experiencias } from '@/lib/curriculo';
import { useAppTheme } from '@/providers/theme-provider';

export default function ExperienciaScreen() {
  const { colors } = useAppTheme();

  return (
    <Screen
      eyebrow="Experiência profissional"
      title="Carreira"
      subtitle="Onde trabalhei, o que fiz e as tecnologias que usei no dia a dia.">
      {experiencias.length === 0 && <Vazio texto="Nenhuma experiência cadastrada." />}
      {experiencias.map((e, i) => (
        <TimelineItem key={e.id} icon="trabalho" ultimo={i === experiencias.length - 1}>
          {!!e.tipo && <Chip label={e.tipo} />}
          <AppText variant="heading">{e.cargo}</AppText>
          <AppText variant="bodyStrong" color="primary">
            {e.empresa}
          </AppText>
          <Periodo inicio={e.inicio} fim={e.fim} />
          {!!e.descricao && <AppText color="textMuted">{e.descricao}</AppText>}
          {!!e.atividades?.length && (
            <View style={styles.atividades}>
              {e.atividades.map((a) => (
                <View key={a} style={styles.atividade}>
                  <View style={[styles.ponto, { backgroundColor: colors.accent }]} />
                  <AppText style={styles.atividadeTexto}>{a}</AppText>
                </View>
              ))}
            </View>
          )}
          <ChipList itens={e.tecnologias} />
        </TimelineItem>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  atividades: { gap: Spacing.xs },
  atividade: { flexDirection: 'row', gap: Spacing.sm, alignItems: 'flex-start' },
  ponto: { width: 6, height: 6, borderRadius: 3, marginTop: 8 },
  atividadeTexto: { flex: 1 },
});
