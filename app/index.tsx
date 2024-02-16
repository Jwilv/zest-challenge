import { Stack, Link } from 'expo-router';
import { XStack, YStack, View } from 'tamagui';

import { Container, Main, Subtitle, Button, ButtonText } from '../tamagui.config';
import { Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Breweries } from '~/types';
import { usePagination } from '~/hooks/usePagination';

export default function Page() {

  const { breweriesPage, pages, currentPage, changePage } = usePagination();

  return (
    <Container>
      <Text>{currentPage}</Text>
      <Main>
        {
          breweriesPage.map((brewery: any) => {
            return (
              <YStack key={brewery.id}>
                <Text>{brewery.name}</Text>
              </YStack>
            )
          })
        }
        <View display='flex' flexDirection='row'>
          <Button
            padding={0}
            onTouchEnd={() => changePage(-1)}
          >
            <ButtonText>Previous</ButtonText>
          </Button>
          {
            pages.map((page) => (
              <XStack key={page} margin={5}>
                {
                    <Button>
                      <ButtonText>{page}</ButtonText>
                    </Button>
                }
              </XStack>
            ))
          }
          <Button
            padding={0}
            onTouchEnd={() => changePage(1)}
          >
            <ButtonText>Next</ButtonText>
          </Button>
        </View>
      </Main>
    </Container>
  );
}
