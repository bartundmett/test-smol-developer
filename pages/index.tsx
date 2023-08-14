import React from 'react';
import { GetServerSideProps } from 'next';
import Calendar from '../components/Calendar';
import { Resource } from '../types';
import { getResources } from '../server/api/resources';
import { getEvents } from '../server/api/events';

type Props = {
  resources: Resource[];
};

const HomePage: React.FC<Props> = ({ resources }) => {
  return (
    <div>
      <Calendar resources={resources} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const resources = await getResources();
  const events = await getEvents();

  return {
    props: {
      resources,
      events,
    },
  };
};

export default HomePage;