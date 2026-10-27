import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { Vazio } from '@/components/empty';
import { Button, Card, SectionTitle } from '@/components/ui';
import { Fonts, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { recados } from '@/lib/recados';
import type { Recado } from '@/lib/types';
import { useAppTheme } from '@/providers/theme-provider';

const LIMITE_MENSAGEM = 280;

function quando(data: string) {
  return new Date(data).toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function RecadosScreen() {
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();
  const [lista, setLista] = useState(() => [...recados]);
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [aviso, setAviso] = useState<string | null>(null);

  const enviar = () => {
    const dados = { nome: nome.trim(), mensagem: mensagem.trim() };
    if (!dados.nome || !dados.mensagem) {
      setAviso('Preencha seu nome e a mensagem.');
      return;
    }
    const novo: Recado = { ...dados, id: `recado-${Date.now()}`, criadoEm: new Date().toISOString() };
    recados.unshift(novo);
    setLista([...recados]);
    setMensagem('');
    setAviso('Recado enviado! Obrigado. 💜');
  };

  const inputStyle = [
    styles.input,
    { backgroundColor: colors.surfaceAlt, color: colors.text, borderColor: colors.border },
  ];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + Spacing.xxl }]}>
        <View style={styles.inner}>
          <AppText color="textMuted">
            Deixe uma mensagem, um feedback ou só um oi.
          </AppText>

          <Card>
            <TextInput
              value={nome}
              onChangeText={setNome}
              placeholder="Seu nome"
              placeholderTextColor={colors.textMuted}
              maxLength={60}
              style={inputStyle}
            />
            <TextInput
              value={mensagem}
              onChangeText={setMensagem}
              placeholder="Escreva seu recado…"
              placeholderTextColor={colors.textMuted}
              maxLength={LIMITE_MENSAGEM}
              multiline
              style={[inputStyle, styles.mensagem]}
            />
            <AppText variant="caption" color="textMuted" style={styles.contador}>
              {mensagem.length}/{LIMITE_MENSAGEM}
            </AppText>
            {aviso && (
              <AppText variant="caption" color="primary">
                {aviso}
              </AppText>
            )}
            <Button label="Enviar recado" icon="enviar" onPress={enviar} />
          </Card>

          <SectionTitle>{`Recados (${lista.length})`}</SectionTitle>
          {lista.length === 0 && <Vazio texto="Seja a primeira pessoa a deixar um recado!" />}
          {lista.map((r) => (
            <Card key={r.id}>
              <View style={styles.cabecalho}>
                <View style={[styles.avatar, { backgroundColor: colors.primarySoft }]}>
                  <AppText variant="bodyStrong" color="primary">
                    {r.nome.trim()[0]?.toUpperCase()}
                  </AppText>
                </View>
                <View style={styles.flex}>
                  <AppText variant="bodyStrong">{r.nome}</AppText>
                  <AppText variant="caption" color="textMuted">
                    {quando(r.criadoEm)}
                  </AppText>
                </View>
              </View>
              <AppText>{r.mensagem}</AppText>
            </Card>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: { padding: Spacing.lg },
  inner: { width: '100%', maxWidth: MaxContentWidth, alignSelf: 'center', gap: Spacing.lg },
  input: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    borderRadius: Radius.sm,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  mensagem: { minHeight: 96, textAlignVertical: 'top' },
  contador: { textAlign: 'right' },
  cabecalho: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: { flex: 1 },
});
