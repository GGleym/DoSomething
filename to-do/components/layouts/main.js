import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Upper from '../Upper'
import Navbar from '../Navbar'

const Main = ({ children, router }) => {
    return (
        <Box>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Do Something</title>
            </Head>
            <Upper />
            <Navbar path={router.asPath}/>
            {children}
        </Box>
    )
}

export default Main
