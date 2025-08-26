import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { BrowserRouter, Routes, Route } from 'react-router';

import './styles/theme.css';
import './styles/global.css';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-pomodoro' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MessagesContainer>
    </TaskContextProvider>
  );
}
