import React from 'react';

import EventDate from './event-date';

interface EventProps {
    name: string;
    location: string;
    startDate: string;
    endDate: string;
    url: string;
}

const Event: React.FC<EventProps> = ({ name, location, startDate, endDate, url }) => (
    <React.Fragment>
        <h2>
            {name} ({location})
        </h2>
        <p>
            <EventDate startDate={startDate} endDate={endDate} />
        </p>
        <p>
            Website: <a href={url}>{url}</a>
        </p>
    </React.Fragment>
);

export default Event;
