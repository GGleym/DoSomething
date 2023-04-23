import {
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalBody,
    Modal,
    ModalCloseButton,
    FormControl,
    FormLabel,
    ModalFooter,
    Button,
    Input,
    useDisclosure,
    Text,
    Icon
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'

import { database } from '../context/firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

export const dbInstance = collection(database, 'tasks')

const AddTaskModal = ({ text }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')

    const addNewTask = () => {
        addDoc(dbInstance, {
            taskTitle,
            taskDate
        }).then(() => {
            setTaskTitle('')
            setTaskDate('')
        })
    }
    const onSubmit = event => {
        event.preventDefault()
        addNewTask()
        onClose()
    }

    return (
        <>
            <Button onClick={onOpen} colorScheme={'none'} color={'gray'} gap={2}>
                <Icon as={AddIcon}></Icon>
                <Text display={text ? 'contents' : 'none'}>Add task</Text>
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>A new task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Task:</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder="Make a coffee"
                                value={taskTitle}
                                onChange={e => setTaskTitle(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Date: </FormLabel>
                            <Input
                                type={'date'}
                                ref={finalRef}
                                value={taskDate}
                                onChange={e => setTaskDate(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="gray" mr={3} onClick={onSubmit}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddTaskModal
