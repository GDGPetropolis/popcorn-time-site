import Head from 'next/head';
import { Box } from 'components/Box';
import { Menu } from 'components/Template/Menu';

export default function Home() {
    return (
        <Box>
            <Head>
                <title>PopCorn Time - Assista filmes e series</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Box>
                <Menu />
            </Box>
        </Box>
    );
}
