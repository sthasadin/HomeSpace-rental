import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner'

export default function Home() {
  return (
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at Rs.1999">
        <Link to='/rooms' className="btn-primary">Rooms</Link>
      </Banner>
    </Hero>
  )
}
