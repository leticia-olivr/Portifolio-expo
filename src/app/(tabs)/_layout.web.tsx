// Na web, as abas nativas viram uma pílula fixa no topo que cobre o conteúdo e não cabe no celular.
// Aqui usamos uma barra de abas em JS: embaixo em telas estreitas e na lateral em telas largas.
import { Tabs } from 'expo-router/js-tabs';
import { useWindowDimensions } from 'react-native';

import { Icon, type IconName } from '@/components/icon';
import { Fonts } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

const LARGURA_LATERAL = 768;

const abas: { name: string; title: string; icon: IconName }[] = [
  { name: 'index', title: 'Início', icon: 'home' },
  { name: 'formacao', title: 'Acadêmico', icon: 'formacao' },
  { name: 'experiencia', title: 'Profissional', icon: 'trabalho' },
  { name: 'projetos', title: 'Projetos', icon: 'codigo' },
];

export default function TabsLayout() {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const lateral = width >= LARGURA_LATERAL;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: lateral ? 'left' : 'bottom',
        tabBarLabelPosition: lateral ? 'beside-icon' : 'below-icon',
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarActiveBackgroundColor: lateral ? colors.primarySoft : undefined,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          ...(lateral && { width: 220, paddingTop: 24 }),
        },
        tabBarItemStyle: lateral
          ? { borderRadius: 12, marginHorizontal: 12, marginVertical: 2, justifyContent: 'flex-start' }
          : undefined,
        tabBarLabelStyle: { fontFamily: Fonts.medium, fontSize: lateral ? 14 : 11 },
        sceneStyle: { backgroundColor: colors.background },
      }}>
      {abas.map((a) => (
        <Tabs.Screen
          key={a.name}
          name={a.name}
          options={{
            title: a.title,
            tabBarIcon: ({ color, size }) => <Icon name={a.icon} size={size - 2} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}
