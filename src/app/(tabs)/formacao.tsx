import { AppText } from '@/components/app-text';
import { Vazio } from '@/components/empty';
import { Screen } from '@/components/screen';
import { TimelineItem } from '@/components/timeline';
import { Chip, Periodo } from '@/components/ui';
import { formacoes } from '@/lib/curriculo';

export default function FormacaoScreen() {
  return (
    <Screen
      eyebrow="Experiência acadêmica"
      title="Formação"
      subtitle="Cursos, graduação e certificações que fazem parte da minha trajetória.">
      {formacoes.length === 0 && <Vazio texto="Nenhuma formação cadastrada." />}
      {formacoes.map((f, i) => (
        <TimelineItem key={f.id} icon="formacao" ultimo={i === formacoes.length - 1}>
          {!!f.nivel && <Chip label={f.nivel} />}
          <AppText variant="heading">{f.curso}</AppText>
          <AppText variant="bodyStrong" color="primary">
            {f.instituicao}
          </AppText>
          <Periodo inicio={f.inicio} fim={f.fim} />
          {!!f.descricao && <AppText color="textMuted">{f.descricao}</AppText>}
        </TimelineItem>
      ))}
    </Screen>
  );
}
