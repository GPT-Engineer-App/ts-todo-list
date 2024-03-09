import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, VStack, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

// Removed TypeScript interface Todo

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Cannot add empty todo",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <VStack spacing={4} p={8}>
      <Heading mb={6}>Todo App</Heading>
      <HStack width="100%">
        <Input placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button leftIcon={<FaPlus />} onClick={handleAddTodo}>
          Add
        </Button>
      </HStack>
      <List width="100%">
        {todos.map((todo) => (
          <ListItem key={todo.id} p={2} borderWidth="1px" borderRadius="lg" display="flex" alignItems="center" justifyContent="space-between">
            {todo.text}
            <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(todo.id)} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
