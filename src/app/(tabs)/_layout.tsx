import { NativeTabs } from 'expo-router/unstable-native-tabs';

import { Fonts } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

export default function TabsLayout() {
  const { colors } = useAppTheme();

  return (
    <NativeTabs
      backgroundColor={colors.surface}
      tintColor={colors.primary}
      indicatorColor={colors.primarySoft}
      iconColor={{ default: colors.textMuted, selected: colors.primary }}
      labelStyle={{
        default: { color: colors.textMuted, fontFamily: Fonts.medium },
        selected: { color: colors.primary, fontFamily: Fonts.bold },
      }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Início</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="formacao">
        <NativeTabs.Trigger.Label>Acadêmico</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'graduationcap', selected: 'graduationcap.fill' }}
          md="school"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="experiencia">
        <NativeTabs.Trigger.Label>Profissional</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'briefcase', selected: 'briefcase.fill' }} md="work" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="projetos">
        <NativeTabs.Trigger.Label>Projetos</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="chevron.left.forwardslash.chevron.right" md="code" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
