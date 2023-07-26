export interface ToDoList {
  count: number;
  next: null;
  previous: null;
  results: ToDoItem[];
}

export interface ToDoItem {
  completed: boolean;
  created_at: Date;
  id: string;
  title: string;
  updated_at: Date;
  user: number;
}

export interface ToDoItemRequest {
  title: string;
  completed: boolean;
  user: number;
}

export interface ToDoComplete {
  id: string;
  completed: boolean;
}
