import React from 'react';
import Callto from '../components/Callto';
import Carrousel from '../components/Carrousel';
import Featured from '../components/Featured';
import Latest from '../components/Latest';
import Portfolio from '../components/Portfolio';

function Home() {
  return (
    <div>
    <Carrousel />
    <Featured />
    <Latest />
    <Callto />
    <Portfolio />
    </div>
  )
}

export default Home