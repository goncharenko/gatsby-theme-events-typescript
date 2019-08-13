import React from 'react';

const getDate = (date: Date, { day = true, month = true, year = true } = {}) =>
    date.toLocaleDateString('en-US', {
        day: day ? 'numeric' : undefined,
        month: month ? 'long' : undefined,
        year: year ? 'numeric' : undefined,
    });

interface EventDateProps {
    startDate: string;
    endDate: string;
}

const EventDate: React.FC<EventDateProps> = ({ startDate, endDate }) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const isOneDay = start.toDateString() === end.toDateString();
    return (
        <React.Fragment>
            <time dateTime={start.toISOString()}>{getDate(start, { year: isOneDay })}</time>
            {!isOneDay && (
                <React.Fragment>
                    –
                    <time dateTime={end.toISOString()}>
                        {getDate(end, { month: start.getMonth() !== end.getMonth() })}
                    </time>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default EventDate;
