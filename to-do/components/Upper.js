import {
    Box,
    Flex,
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuDivider
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import AddTaskModal from './AddTaskModal'
import { LinkItem } from './Navbar'

const Upper = () => {
    return (
        <Box bg={'#2C272C'} p={4} color={'#adb5bd'} boxShadow={'dark-lg'}>
            <Flex justify={{ md: 'right', base: 'space-between' }} align={'center'}>
                <Box display={{ base: 'flex', md: 'none' }}>
                    <Menu>
                        <MenuButton as={HamburgerIcon} cursor={'pointer'} fontSize={23} />
                        <MenuList>
                            <MenuItem h={'25px'}>
                                <LinkItem href={'/'}>Inbox</LinkItem>
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem h={'25px'}>
                                <LinkItem href={'/today'}>Today</LinkItem>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <AddTaskModal />
            </Flex>
        </Box>
    )
}

export default Upper
