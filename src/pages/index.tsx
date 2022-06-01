import React, { FormEvent, useEffect, useState } from 'react';
import {
  Flex,
  Button,
  Input,
  UnorderedList,
  ListItem,
  ListIcon,
  Divider,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import Container from '../components/Container';

function Home() {
  const [task, setTask] = useState('');
  const [items, setItems] = useState<String[]>([]);

  const Items = items.map((item) => (
    <ListItem
      minWidth="5rem"
      lineHeight="1em"
      fontSize="1.2em"
      marginRight="1.5rem"
      key={Math.floor(Math.random() * 9999)}
    >
      <ListIcon as={ArrowForwardIcon} color="green.500" />
      {item}
      {' '}
      <ListIcon as={ArrowBackIcon} color="green.500" />
    </ListItem>
  ));

  function handleForm(event: FormEvent) {
    event.preventDefault();

    items.push(task);
    // setItems([...items, task]);

    localStorage.setItem('tasks', JSON.stringify({ items }));

    setTask('');
  }

  function resetTasks() {
    setItems([]);
    localStorage.removeItem('tasks');
  }

  useEffect(() => {
    console.log('Repo: https://github.com/kauefraga/to-do');
    const tasksInLocalStorage: any = localStorage.getItem('tasks');

    if (tasksInLocalStorage) {
      const parsedTasks = JSON.parse(tasksInLocalStorage);
      setItems([...parsedTasks.items]);
    }
  }, []);

  return (
    <Container
      flexDirection="column"
    >
      <Flex
        as="form"
        marginBottom="2rem"
        marginTop="5rem"
        // eslint-disable-next-line react/jsx-no-bind
        onSubmit={handleForm}
      >
        <Input
          size="lg"
          marginRight="0.50rem"
          fontSize="1.2em"
          color="gray.200"
          placeholder="Add new..."
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <Button
          marginRight="0.50rem"
          size="lg"
          type="submit"
          _hover={{ backgroundColor: 'purple.500' }}
        >
          Criar
        </Button>

        <Button
          size="lg"
          _hover={{ backgroundColor: 'purple.500' }}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={resetTasks}
        >
          Reset
        </Button>
      </Flex>

      <Divider width="20rem" />

      <UnorderedList
        display="flex"
        flexDirection="column"
        alignContent="center"
        as="ul"
        color="gray.300"
        marginTop="8"
        style={{ listStyle: 'none' }} // text decoration
        flexWrap="wrap"
        height="50vh"
      >
        {Items}
      </UnorderedList>
    </Container>
  );
}

export default Home;
