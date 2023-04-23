import { useState } from 'react';
import './App.css';
import EventCalendar from './components/EventCalendar';
import Sidebar from './components/Sidebar';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function App() {
  const [currentMonth, setCurrentMonth] = useState(7);

  const handleGoToPreviousMonth = () => {
    setCurrentMonth(currentMonth - 1);
  };

  const handleGoToNextMonth = () => {
    setCurrentMonth(currentMonth + 1);
  };

  return (
    <div className='app'>
      <header>
        <h1>Manpreet's task implementation</h1>
      </header>

      <main>
        <div className='app__sidebar'>
          <Sidebar />
        </div>
        <div className='app__content'>
          <EventCalendar
            month={months[currentMonth]}
            monthIndex={currentMonth}
            onGoToPreviousMonth={handleGoToPreviousMonth}
            onGoToNextMonth={handleGoToNextMonth}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
