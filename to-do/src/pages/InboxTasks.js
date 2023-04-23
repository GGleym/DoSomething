import {
    VStack,
    Heading,
    Box,
    Divider
} from '@chakra-ui/react'
import Task from '../../components/Task'
import { useTasks } from '../../components/hooks/TaskHooks'
import AddTaskModal from '../../components/AddTaskModal'
import { AnimatePresence, motion } from 'framer-motion'

const InboxTasks = () => {
    const { tasks } = useTasks()

    if (tasks.length === 0) {
        return (
            <Box
                align={'center'}
                pos={'fixed'}
                right={0}
                w={{ base: 'full', md: '75%' }}
                h={'full'}
                bg={'#2C2C2E'}
            >
                <Heading size={'lg'} mt={5} fontWeight={'thin'} color={'#5D5F60'}>
                    You don&apos;t have any tasks!
                </Heading>
                <AddTaskModal text={true} />
            </Box>
        )
    }

    return (
        <Box
            px={8}
            pos={'fixed'}
            w={{ base: 'full', md: '75%' }}
            right={0}
            pt={10}
            h={'full'}
            bg={'#2C2C2E'}
        >
            <VStack align={'stretch'}>
                <AnimatePresence>
                    {tasks.map((task, index) => (
                        <motion.div
                            key={task.id}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Task
                                title={task.taskTitle}
                                dateProps={task.taskDate}
                                id={task.id}
                            />
                            {index < tasks.length - 1 && (
                                <Divider borderColor={'#5D5F60'} mt={2} />
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </VStack>

            <Box ml={-4}>
                <AddTaskModal text={true} />
            </Box>
        </Box>
    )
}

export default InboxTasks
