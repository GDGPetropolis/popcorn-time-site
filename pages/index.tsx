import Head from 'next/head';
import { Box } from 'components/Box';
import { Header } from 'components/Template/Header';

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Box>
                <Header />
            </Box>
        </Box>
    );
}
