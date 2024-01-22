import * as SecureStore from "expo-secure-store";

export type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

const key = "todos";

async function createTodo(text: string): Promise<void> {
  const todo: Todo = {
    id: Math.floor(Math.random() * 10000000),
    text,
    complete: false,
  };
  const currentTodos = await SecureStore.getItemAsync(key);
  if (currentTodos) {
    const todos = JSON.parse(currentTodos);
    todos.push(todo);
    await SecureStore.setItemAsync(key, JSON.stringify(todos));
  } else {
    await SecureStore.setItemAsync(key, JSON.stringify([todo]));
  }
}

async function getTodos(): Promise<Todo[]> {
  const currentTodos = await SecureStore.getItemAsync(key);
  if (currentTodos) {
    return JSON.parse(currentTodos);
  } else {
    return [];
  }
}

async function deleteTodoById(id: number): Promise<void> {
  const currentTodos = await SecureStore.getItemAsync(key);
  if (currentTodos) {
    const todos = JSON.parse(currentTodos);
    const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);
    await SecureStore.setItemAsync(key, JSON.stringify(filteredTodos));
  }
}

async function toggleTodoCompleteById(id: number): Promise<void> {
  const currentTodos = await SecureStore.getItemAsync(key);
  if (currentTodos) {
    const todos = JSON.parse(currentTodos);
    const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);
    const todo = todos.find((todo: Todo) => todo.id === id);
    if (todo) {
      todo.complete = !todo.complete;
      filteredTodos.push(todo);
      await SecureStore.setItemAsync(key, JSON.stringify(filteredTodos));
    }
  }
}

async function getTodoById(id: number): Promise<Todo | undefined> {
  const currentTodos = await SecureStore.getItemAsync(key);
  if (currentTodos) {
    const todos = JSON.parse(currentTodos);
    return todos.find((todo: Todo) => todo.id === id);
  }
}

async function editTodoTextById(id: number, text: string): Promise<void> {
  const currentTodos = await SecureStore.getItemAsync(key);
  if (currentTodos) {
    const todos = JSON.parse(currentTodos);
    const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);
    const todo = todos.find((todo: Todo) => todo.id === id);
    if (todo) {
      todo.text = text;
      filteredTodos.push(todo);
      await SecureStore.setItemAsync(key, JSON.stringify(filteredTodos));
    }
  }
}

async function updateTodoById(id: number, newTodo: Todo): Promise<void> {
  const currentTodos = await SecureStore.getItemAsync(key);
  if (currentTodos) {
    const todos = JSON.parse(currentTodos);
    const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);
    filteredTodos.push(newTodo);
    await SecureStore.setItemAsync(key, JSON.stringify(filteredTodos));
  }
}

const todoService = {
  createTodo,
  getTodos,
  deleteTodoById,
  toggleTodoCompleteById,
  getTodoById,
  editTodoTextById,
  updateTodoById,
};

export default todoService;
