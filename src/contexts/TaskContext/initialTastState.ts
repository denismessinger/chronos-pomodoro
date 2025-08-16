import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '01:00',
  activeTask: null,
  currenctCycle: 0,
  config: {
    workTime: 10,
    shortBreakTime: 5,
    longBreakTime: 25,
  },
};
