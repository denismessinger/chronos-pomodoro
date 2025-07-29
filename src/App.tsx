import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <div>
      <Heading>
        Ola mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>asdasdasdasd asdasdasd</p>
    </div>
  );
}
