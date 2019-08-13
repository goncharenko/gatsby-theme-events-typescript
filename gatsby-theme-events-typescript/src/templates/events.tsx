import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import EventList from '../components/event-list';

export const query = graphql`
    query {
        events: allEvent(sort: { fields: startDate, order: ASC }) {
            nodes {
                id
                name
                startDate
                endDate
                location
                url
                slug
            }
        }
    }
`;

interface Event {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    location: string;
    slug: string;
    url: string;
}

interface EventsTemplateProps {
    data: {
        events: {
            nodes: Event[];
        };
    };
}

class EventsTemplate extends React.Component<EventsTemplateProps> {
    public render() {
        const { data } = this.props;
        const events = data.events.nodes;

        return (
            <Layout>
                <EventList events={events} />
            </Layout>
        );
    }
}

export default EventsTemplate;
