import { StyleSheet } from 'react-native';

import { AppText } from '@/components/app-text';
import { Card } from '@/components/ui';

export function Vazio({ texto }: { texto: string }) {
  return (
    <Card style={styles.card}>
      <AppText color="textMuted" style={styles.texto}>
        {texto}
      </AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: 'center' },
  texto: { textAlign: 'center' },
});
