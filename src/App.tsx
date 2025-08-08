import { Home } from './pages/Home';
import './styles/theme.css';
import './styles/global.css';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';
import { TaskContext } from './contexts/TaskContext';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currenctCycle: 0,
  config: {
    workTime: 0,
    shortBreakTime: 0,
    longBreakTime: 0,
  },
};

export function App() {
  return (
    <TaskContext.Provider value={{ chave: '321' }}>
      <Home />
    </TaskContext.Provider>
  );
}
