import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionsTypes } from '../../contexts/TaskContext/TaskActions';
import { Tips } from '../Tips';
import { toastAdapter } from '../../adapters/toastAdapter';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // Ciclos
  const newCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(newCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    toastAdapter.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      toastAdapter.warning('Digite a tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });

    toastAdapter.success('Tarefa iniciada');
  }

  function handleInterruptTask() {
    toastAdapter.dismiss();
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
    toastAdapter.error('Tarefa interrompida');
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          labelText='Qualquer Coisa'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formRow'>
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask ? (
          <DefaultButton
            title='Iniciar nova tarefa'
            aria-label='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            key='submit'
          />
        ) : (
          <DefaultButton
            title='Interromper tarefa'
            aria-label='Interromper tarefa'
            type='button'
            color='red'
            onClick={handleInterruptTask}
            icon={<StopCircleIcon />}
            key='stop'
          />
        )}
      </div>
    </form>
  );
}
