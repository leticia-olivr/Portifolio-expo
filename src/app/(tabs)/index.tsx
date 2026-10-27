import { LinearGradient } from 'expo-linear-gradient';
import { router, type Href } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { Linking, Pressable, Share, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Icon, type IconName } from '@/components/icon';
import { Screen } from '@/components/screen';
import { Card, ChipList, IconButton, SectionTitle } from '@/components/ui';
import { HeroGradient, Radius, Spacing } from '@/constants/theme';
import { experiencias, formacoes, perfil, projetos } from '@/lib/curriculo';
import { useAppTheme } from '@/providers/theme-provider';

export default function HomeScreen() {
  const { colors } = useAppTheme();

  const compartilhar = () => {
    const linhas = [
      `${perfil.nome} — ${perfil.titulo}`,
      perfil.resumo,
      perfil.email && `E-mail: ${perfil.email}`,
      perfil.github && `GitHub: ${perfil.github}`,
      perfil.linkedin && `LinkedIn: ${perfil.linkedin}`,
    ];
    Share.share({ message: linhas.filter(Boolean).join('\n\n') });
  };

  const contatos: { icon: IconName; label: string; abrir: () => void }[] = [];
  if (perfil.email) {
    contatos.push({ icon: 'email', label: 'E-mail', abrir: () => Linking.openURL(`mailto:${perfil.email}`) });
  }
  if (perfil.github) {
    contatos.push({ icon: 'codigo', label: 'GitHub', abrir: () => WebBrowser.openBrowserAsync(perfil.github!) });
  }
  if (perfil.linkedin) {
    contatos.push({ icon: 'link', label: 'LinkedIn', abrir: () => WebBrowser.openBrowserAsync(perfil.linkedin!) });
  }

  const numeros: { valor: number; label: string; href: Href }[] = [
    { valor: formacoes.length, label: 'Formações', href: '/formacao' },
    { valor: experiencias.length, label: 'Experiências', href: '/experiencia' },
    { valor: projetos.length, label: 'Projetos', href: '/projetos' },
  ];

  return (
    <Screen
      eyebrow="Currículo"
      title="Olá!"
      actions={<IconButton icon="compartilhar" label="Compartilhar currículo" onPress={compartilhar} />}>
      <LinearGradient
        colors={HeroGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}>
        <AppText variant="display" style={styles.heroTexto}>
          {perfil.nome}
        </AppText>
        <AppText variant="bodyStrong" style={styles.heroSub}>
          {perfil.titulo}
        </AppText>
        {!!perfil.localizacao && (
          <View style={styles.local}>
            <Icon name="local" size={14} color="rgba(255,255,255,0.85)" />
            <AppText variant="caption" style={styles.heroSub}>
              {perfil.localizacao}
            </AppText>
          </View>
        )}
      </LinearGradient>

      <View style={styles.numeros}>
        {numeros.map((n) => (
          <Card key={n.label} style={styles.numero} onPress={() => router.navigate(n.href)}>
            <AppText variant="title" color="primary">
              {n.valor}
            </AppText>
            <AppText variant="caption" color="textMuted">
              {n.label}
            </AppText>
          </Card>
        ))}
      </View>

      <SectionTitle>Sobre mim</SectionTitle>
      <Card>
        <AppText>{perfil.resumo}</AppText>
      </Card>

      {!!perfil.habilidades?.length && (
        <>
          <SectionTitle>Habilidades</SectionTitle>
          <ChipList itens={perfil.habilidades} />
        </>
      )}

      {!!perfil.idiomas?.length && (
        <>
          <SectionTitle>Idiomas</SectionTitle>
          <ChipList itens={perfil.idiomas} />
        </>
      )}

      {contatos.length > 0 && (
        <>
          <SectionTitle>Contato</SectionTitle>
          <View style={styles.contatos}>
            {contatos.map((c) => (
              <Pressable
                key={c.label}
                onPress={c.abrir}
                style={({ pressed }) => [
                  styles.contato,
                  { backgroundColor: colors.surface, borderColor: colors.border },
                  pressed && { opacity: 0.7 },
                ]}>
                <Icon name={c.icon} size={20} color={colors.primary} />
                <AppText variant="caption">{c.label}</AppText>
              </Pressable>
            ))}
          </View>
        </>
      )}

      <Card onPress={() => router.push('/recados')} style={styles.mural}>
        <View style={[styles.muralIcone, { backgroundColor: colors.primarySoft }]}>
          <Icon name="recados" size={22} color={colors.primary} />
        </View>
        <View style={styles.muralTexto}>
          <AppText variant="heading">Mural de recados</AppText>
          <AppText variant="caption" color="textMuted">
            Deixe uma mensagem, um feedback ou só um oi.
          </AppText>
        </View>
        <Icon name="seta" size={18} color={colors.textMuted} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: Radius.lg,
    padding: Spacing.xl,
    gap: Spacing.xs,
    overflow: 'hidden',
  },
  heroTexto: { color: '#FFFFFF' },
  heroSub: { color: 'rgba(255,255,255,0.88)' },
  local: { flexDirection: 'row', alignItems: 'center', gap: Spacing.xs, marginTop: Spacing.xs },
  numeros: { flexDirection: 'row', gap: Spacing.md },
  numero: { flex: 1, alignItems: 'center', gap: 2, paddingVertical: Spacing.md },
  contatos: { flexDirection: 'row', gap: Spacing.md },
  contato: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.xs,
    paddingVertical: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: StyleSheet.hairlineWidth,
  },
  mural: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, marginTop: Spacing.sm },
  muralIcone: {
    width: 44,
    height: 44,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  muralTexto: { flex: 1, gap: 2 },
});
