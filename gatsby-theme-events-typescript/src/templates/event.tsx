import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Event from '../components/event';

export const query = graphql`
    query($eventID: String!) {
        event(id: { eq: $eventID }) {
            name
            url
            startDate(formatString: "MMMM DD YYYY")
            endDate(formatString: "MMMM DD YYYY")
            location
            slug
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

interface EventTemplateProps {
    data: {
        event: Event;
    };
}

class EventTemplate extends React.Component<EventTemplateProps> {
    public render() {
        const { data } = this.props;
        const event = data.event;

        return (
            <Layout>
                <Event {...event} />
            </Layout>
        );
    }
}

export default EventTemplate;
