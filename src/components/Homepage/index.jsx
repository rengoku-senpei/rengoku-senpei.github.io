import { useState } from 'react';
import { DarkIco, LightIco } from './Icons';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="bg-cyan-50 min-h-screen">
      <nav className="flex lg:px-[80px] md:px-[30px] px-[15px] py-10 justify-between h-1/5 bg-cyan-500">
        <div className="font-burtons text-3xl h-100 flex flex-col justify-center text-white">
          Ben Mannathara
        </div>
        <div className="flex items-center gap-3">
          <div onClick={() => setDarkMode(!darkMode)} type="button">
            {darkMode ? <DarkIco /> : <LightIco />}
          </div>
          <div>
            <button className=" my-5 bg-white text-cyan-500 rounded-md px-5 py-2">
              Resume
            </button>
          </div>
        </div>
      </nav>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default HomePage;
