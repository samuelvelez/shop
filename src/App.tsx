import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Products } from './components/Products';
import { Recents } from './components/Recents';

function App() {
  return (
    <div className="App  h-screen">
      <header className='bg-purple-200 shadow-[0_15px_10px_-15px_rgba(0,0,0,0.3)]'>
        <div className='max-w-5xl m-auto py-2 flex justify-between'>
          <div className='relative inset-y-0 start-0 flex items-center ps-3'>
            <svg className="absolute w-4 h-4 text-gray-500 flex items-center mx-2 justify-center dark:text-gray-40 z-10 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <input type='text' className='rounded-lg px-2 pl-8 py-2 w-72 outline-none' placeholder='Search' />
          </div>
          <div>
            {/* botones? */}
          </div>
        </div>
      </header>
      <div className="container m-auto mt-5">
        <div className='center'>
          {/* <div className='banner py-5 flex justify-center items-center'>
            <img src='https://placehold.co/900x200' className='rounded-md' />
          </div> */}
          <div className='md:flex flex-row'>
            <div className='w-full block justify-center items-center  md:w-3/4 overflow-auto'>
              <h3 className='text-left text-2xl ml-5 font-mono w-96'>Productos Populares</h3>
              <Products />
            </div>

            <div className='w-full block md:w-1/4'>
              <h3 className='text-left text-2xl ml-5 font-mono w-96'>Ultimos Agregados</h3>
              <Recents />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
