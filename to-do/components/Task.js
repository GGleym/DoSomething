import { Box, Flex, Text, IconButton } from '@chakra-ui/react'
import { useTasks } from './hooks/TaskHooks'
import { DeleteIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { formatDate } from '../libs/formatDate'
import { deleteDoc, doc } from 'firebase/firestore'
import { database } from '../context/firebase/firebaseConfig'


const Task = ({ title, id, dateProps }) => {
    const { removeTask } = useTasks()

    const deleteTask = id => {
        const singleTask = doc(database, 'tasks', id)

        deleteDoc(singleTask)
            .then(() => {
                removeTask(id)
            })
    }

    return (
        <motion.div
            key={id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
        >
            <Flex justify={'space-between'} align={'center'}>
                <Box display={'flex'} gap={3}>
                    <IconButton
                        ml={'auto'}
                        aria-label={'Delete task'}
                        icon={<DeleteIcon />}
                        fontSize={'15px'}
                        boxSize={8}
                        variant={'outline'}
                        colorScheme={'teal'}
                        onClick={() => deleteTask(id)}
                    />
                    <Text fontWeight={'thin'} color={'white'} fontSize={'xl'}>
                        {title}
                    </Text>
                </Box>

                <Text
                    color={'#5D5F60'}
                    textDecoration={'underline'}
                    textDecorationColor={'#d3eaf2'}
                    textUnderlineOffset={5}
                    textDecorationThickness={0.5}
                    fontSize={'sm'}
                >
                    {formatDate(dateProps) === new Date().toLocaleDateString()
                        ? 'Today'
                        : formatDate(dateProps)}
                </Text>
            </Flex>
        </motion.div>
    )
}

export default Task
