import './EventCalendar.css';
import eventsData from '../../public/data.json';
import Event from './Event';
import { useState, useEffect } from 'react';

type EventCalendarProps = {
  month: string;
  monthIndex: number;
  onGoToPreviousMonth: () => void;
  onGoToNextMonth: () => void;
};

const URL = 'https://api.arenaracingcompany.co.uk/auth';
const token = '264c77f740cc1f02cac8f0a7e30ccdcd2f20dcf5';

const eventsURL = 'https://api.arenaracingcompany.co.uk/event/month/1318';

const EventCalendar = ({
  month,
  monthIndex,
  onGoToPreviousMonth,
  onGoToNextMonth,
}: EventCalendarProps) => {
  const [jwt, setJwt] = useState('');

  // When this component is created, fetch the JWT token
  useEffect(() => {
    const fetchJwt = () =>
      fetch(URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) =>
        res.text().then((jwt) => {
          setJwt(jwt);
          return jwt;
        })
      );

    fetchJwt().then(fetchEvents);
  }, []);

  // TODO: Fix CORS error
  const fetchEvents = (jwt: string) =>
    fetch(`${eventsURL}/${String(monthIndex)}`, {
      headers: {
        method: 'GET',
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then((res) => res.json().then((json) => console.log(json)));

  useEffect(() => {
    fetchEvents(jwt);
  }, [monthIndex]);

  return (
    <div className='event-view'>
      <div className='header'>
        <button onClick={onGoToPreviousMonth}>Previous</button>
        <h2>{month}</h2>

        <button onClick={onGoToNextMonth}>Next</button>
      </div>
      <div className='content'>
        {eventsData.map((event) => {
          const date = new Date(event.date);
          return <Event event={{ ...event, date }} key={event.id} />;
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
