import { SymbolView } from 'expo-symbols';
import type { ColorValue } from 'react-native';

// SF Symbols no iOS, Material Symbols no Android e na web.
const icones = {
  home: { ios: 'house.fill', android: 'home', web: 'home' },
  formacao: { ios: 'graduationcap.fill', android: 'school', web: 'school' },
  trabalho: { ios: 'briefcase.fill', android: 'work', web: 'work' },
  codigo: { ios: 'chevron.left.forwardslash.chevron.right', android: 'code', web: 'code' },
  info: { ios: 'info.circle.fill', android: 'info', web: 'info' },
  email: { ios: 'envelope.fill', android: 'mail', web: 'mail' },
  link: { ios: 'link', android: 'link', web: 'link' },
  abrir: { ios: 'arrow.up.right', android: 'open_in_new', web: 'open_in_new' },
  recados: { ios: 'bubble.left.and.bubble.right.fill', android: 'forum', web: 'forum' },
  lua: { ios: 'moon.fill', android: 'dark_mode', web: 'dark_mode' },
  sol: { ios: 'sun.max.fill', android: 'light_mode', web: 'light_mode' },
  compartilhar: { ios: 'square.and.arrow.up', android: 'share', web: 'share' },
  seta: { ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' },
  local: { ios: 'mappin.and.ellipse', android: 'location_on', web: 'location_on' },
  calendario: { ios: 'calendar', android: 'calendar_month', web: 'calendar_month' },
  recarregar: { ios: 'arrow.clockwise', android: 'refresh', web: 'refresh' },
  enviar: { ios: 'paperplane.fill', android: 'send', web: 'send' },
  nuvem: { ios: 'icloud.fill', android: 'cloud', web: 'cloud' },
  estrela: { ios: 'star.fill', android: 'star', web: 'star' },
  camadas: { ios: 'square.stack.3d.up.fill', android: 'layers', web: 'layers' },
  alerta: { ios: 'exclamationmark.triangle.fill', android: 'warning', web: 'warning' },
} as const;

export type IconName = keyof typeof icones;

type Props = {
  name: IconName;
  size?: number;
  color: ColorValue;
};

export function Icon({ name, size = 20, color }: Props) {
  return <SymbolView name={icones[name]} size={size} tintColor={color} />;
}
