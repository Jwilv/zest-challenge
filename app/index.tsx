import { Stack, Link } from 'expo-router';
import { YStack } from 'tamagui';

import { Container, Main, Subtitle, Button, ButtonText } from '../tamagui.config';
import { Text } from 'react-native';

export default function Page() {
  return (
    <Container>
      <Main>
        <Stack.Screen  />
        <YStack>
          <Text>Hello World</Text>
          <Subtitle>This is the first page of your app.</Subtitle>
        </YStack>
        <Link href={{ pathname: '/brewery/1' }} asChild>
          <Button>
            <ButtonText>Show Details</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}
