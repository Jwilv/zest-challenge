import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';

import config from '../tamagui.config';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { BottomTab } from '~/components/navegation/BottomTab';
import { LikeProvider } from '~/providers/LikeProvider';

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <LikeProvider>
        <SafeAreaView style={styles.androidSafeArea}>
          <Slot />
          <BottomTab />
        </SafeAreaView>
      </LikeProvider>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: '100%',
  }
})