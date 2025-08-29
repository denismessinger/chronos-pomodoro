import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinuts } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { initialTaskState } from './initialTastState';
import { TaskActionsTypes, type TaskActionModel } from './TaskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionsTypes.START_TASK: {
      const newTask = action.payload;
      const newCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: newCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinuts(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionsTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionsTypes.RESET_STATE: {
      console.log('first');
      return { ...initialTaskState };
    }
    case TaskActionsTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinuts(
          action.payload.secondsRemaining,
        ),
      };
    }
    case TaskActionsTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionsTypes.CHANGE_SETTINGS: {
      return {
        ...state,
        config: { ...action.payload },
      };
    }
  }
  return state;
}
