import { useState } from 'react';
import { DarkIco, EmailIcon, LightIco, PhoneIco } from './Icons';

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
      <main className="flex flex-col">
        <div className="flex flex-col bg-cyan-600 py-10">
          <div className="lg:h-56 md:h-40 h-48 flex justify-center mt-10">
            <img className="h-full rounded-full" src="./Me.jpg" />
          </div>

          <div className="flex flex-col px-[20px] py-[20px] md:px-[80px] md:py-[40px] lg:px-[120px] lg:py-[40px]">
            <div className="text-white text-2xl font-burtons  text-center underline underline-offset-8">
              Overview
            </div>
            <div className="py-5 px-10 text-xl font-poppins text-white indent-20 font-medium leading-8">
              As a seasoned React-Node web developer specializing in full-stack
              development, I deliver exceptional services across both frontend
              and backend domains. With expertise in crafting intuitive user
              interfaces using React and building robust backend systems with
              Node.js, I seamlessly integrate frontend and backend components to
              create dynamic and scalable web applications. Additionally, I make
              sure to keep open lines of communication with clients to
              understand their needs and deliver customized solutions that go
              above and beyond their expectations.
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-cyan-900 h-36 p-8">
        <div className="flex flex-col gap-2">
          <div className="text-white underline underline-offset-4">
            Contact Me
          </div>
          <div className="flex gap-2 text-white">
            <EmailIcon />
            <div>benmannathara1999@gmail.com</div>
          </div>
          <div className="flex gap-2 text-white">
            <PhoneIco />
            <div>+91 7012260369</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
