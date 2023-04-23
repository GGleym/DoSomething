import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../../components/layouts/main";
import TaskHooks from '../../components/hooks/TaskHooks'

const Website = ({ Component, router, pageProps }) => {
  return (
      <ChakraProvider>
        <TaskHooks>
          <Layout router={router}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </TaskHooks>
      </ChakraProvider>
  )
}

export default Website
