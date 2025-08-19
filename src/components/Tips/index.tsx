import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const newCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(newCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanse por {state.config.longBreakTime}min</span>,
  };

  const tipsForWhenNoActiveTask = {
    workTime: <span>Proximo ciclo é de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Proximo ciclo é de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: (
      <span>Proximo ciclo é de {state.config.longBreakTime}min</span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForWhenNoActiveTask[nextCycleType]}
    </>
  );
}
