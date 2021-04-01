import { useEffect } from 'react';
import Head from 'next/head';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import styled from 'styled-components';
import { Button } from 'components/Button';

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Button onClick={() => alert('clique')}>
                <Text color='white' fontSize='md'>
                    {' '}
                    Clique Aqui{' '}
                </Text>
            </Button>
        </Box>
    );
}
