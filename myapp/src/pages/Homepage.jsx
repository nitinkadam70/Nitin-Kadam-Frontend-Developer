import React from 'react';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Filters from '../components/Filters';

const Homepage = () => {
  return (
    <>
      <Banner />
      <Filters />
      <Container />
    </>
  );
};

export default Homepage;
