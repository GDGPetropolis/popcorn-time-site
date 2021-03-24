import { useEffect } from "react"
import Head from 'next/head';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import styled from 'styled-components';

const Button = styled.button``;


export default function Home() {

    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Text> Hello </Text>
        </Box>
    );
}
