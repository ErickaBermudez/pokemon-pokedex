import React from 'react'; 
const pokeball = require('../assets/images/pokeball.png');

export const MainLayout = () => <div className='w-full h-screen bg-slate-50 p-10'>
    <div className='flex items-center'>
    <img src={pokeball} alt="Pokeball" className='w-10 h-10 mr-3'/>
  <h1 className='font-kulim-park text-2xl'>Pokedex</h1>
    </div>
  <p>
  </p>
</div>