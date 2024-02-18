import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { BreweryInfo } from '~/components/breweries/BreweryInfo';
import { LikeButton } from '~/components/button/LikeButton';


import breweriesApi from '~/services/breweries';
import { Container, Main } from '~/tamagui.config';
import { Brewery } from '~/types';

const BreweryByIdPage = () => {

    const { id } = useLocalSearchParams();

    const [brewery, setBrewery] = useState<Brewery | undefined>();

    useEffect(() => {
        const getData = async () => {
            const data = await breweriesApi.get(`/${id}`)
                .then((res) => res.data)
                .catch((err) => console.log(err))
            setBrewery(data);
        }

        getData();
    }, [])

    return (
        <Container>
            <Main>
                <BreweryInfo
                    brewery={brewery}
                />
            </Main>
        </Container>
    )
}

export default BreweryByIdPage