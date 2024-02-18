import { createAnimations } from '@tamagui/animations-react-native';
import { createInterFont } from '@tamagui/font-inter';
import { createMedia } from '@tamagui/react-native-media-driver';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';
import { TextInput } from 'react-native';
import { createTamagui, styled, SizableText, H1, YStack, Label } from 'tamagui';

const animations = createAnimations({
  bouncy: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
    type: 'spring',
  },
  lazy: {
    damping: 20,
    type: 'spring',
    stiffness: 60,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
    type: 'spring',
  },
});

const headingFont = createInterFont();

const bodyFont = createInterFont();

export const Container = styled(YStack, {
  flex: 1,
  padding: 24,
});

export const Main = styled(YStack, {
  flex: 1,
  justifyContent: 'space-between',
  maxWidth: 960,
});

export const Title = styled(H1, {
  color: '#000',
  size: '$12',
});

export const Subtitle = styled(SizableText, {
  color: '#38434D',
  size: '$9',
});

export const Bar = styled(YStack, {
  alignItems: 'center',
  backgroundColor: '#f3f4f6',
  borderRadius: 28,
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: 500,
  padding: 10,
  margin: 8,
});

export const BarItem = styled(YStack, {
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  padding: 7,
  borderRadius: '$10',
});

export const Button = styled(YStack, {
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 70,
  height: 40,
  width: 40,
  padding: 9,
  borderRadius: '$10',
});

export const Input = styled(TextInput, {
  maxWidth: '190px',
  backgroundColor: '#f5f5f5',
  color: "#242424",
  paddingLeft: 10,
  minHeight: "40px",
  borderRadius: "$4",
  lineHeight: 1.15,
  shadowOffset: { width: -2, height: 4 },
  shadowColor: '#171717',
  shadowOpacity: 0.2,
  shadowRadius: 3,
});

export const ButtonCard = styled(YStack, {
  position: 'relative',
  left: 320,
  top: -35,
  zIndex: 20,
});

export const ButtonText = styled(SizableText, {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
});

const config = createTamagui({
  light: {
    color: {
      background: 'gray',
      text: 'black',
    },
  },
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
});

type AppConfig = typeof config;

// Enable auto-completion of props shorthand (ex: jc="center") for Tamagui templates.
// Docs: https://tamagui.dev/docs/core/configuration

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig { }
}

export default config;
