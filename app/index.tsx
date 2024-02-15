import { Stack, Link } from 'expo-router';
import { YStack } from 'tamagui';

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';

export default function Page() {
  return (
    <Container>
      <Main>
        <Stack.Screen  />
        <YStack>
          <Title>Hello World</Title>
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
