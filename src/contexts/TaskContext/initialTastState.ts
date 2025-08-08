import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '01:00',
  activeTask: null,
  currenctCycle: 0,
  config: {
    workTime: 0,
    shortBreakTime: 0,
    longBreakTime: 0,
  },
};
