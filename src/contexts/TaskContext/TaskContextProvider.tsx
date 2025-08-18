import { useReducer, useState } from 'react';
import { initialTaskState } from './initialTastState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './TaskReducer';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
