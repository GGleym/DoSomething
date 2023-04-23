import { Box, Stack, Link, Flex, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import { MdToday, MdAllInbox } from 'react-icons/md'
import { useTasks } from './hooks/TaskHooks'
import { todayTasks } from '../libs/todayTasks'

export const LinkItem = ({ href, path, children }) => {
    const active = href === path
    return (
        <Link
            bg={active ? '#39393d' : undefined}
            color={'#b3babf'}
            p={2}
            borderRadius={5}
            fontWeight={'400'}
            fontSize={'lg'}
            as={NextLink}
            href={href}
            _hover={{ textDecoration: 'none', bg: '#39393d' }}
        >
            {children}
        </Link>
    )
}

const Navbar = props => {
    const { path } = props
    const { tasks } = useTasks()

    return (
        <Stack
            bg={'#292829'}
            pos={'fixed'}
            w={'25%'}
            display={{ sm: 'none', md: 'flex' }}
            h={'full'}
            borderRight={'2px'}
            align={'left'}
            p={10}
        >
            <LinkItem href={'/'} path={path}>
                <Flex gap={1} align={'center'}>
                    <Flex align={'center'} gap={1}>
                        <Icon as={MdAllInbox} fontSize={25} color={'gray'}></Icon>
                        Inbox
                    </Flex>
                    <Box
                        fontSize={12}
                        cursor={'default'}
                        color={'#65656b'}
                        fontWeight={'700'}
                        pos={'relative'}
                        top={'0.5'}
                    >
                        {tasks.length}
                    </Box>
                </Flex>
            </LinkItem>

            <LinkItem href={'/today'} path={path}>
                <Flex gap={1} align={'center'}>
                    <Flex align={'center'} gap={1}>
                        <Icon as={MdToday} fontSize={25} color={'gray'}></Icon>
                        Today
                    </Flex>
                    <Box
                        fontSize={12}
                        cursor={'default'}
                        color={'#65656b'}
                        fontWeight={'700'}
                        pos={'relative'}
                        top={'0.5'}
                    >
                        {todayTasks(tasks).length}
                    </Box>
                </Flex>
            </LinkItem>
        </Stack>
    )
}

export default Navbar
