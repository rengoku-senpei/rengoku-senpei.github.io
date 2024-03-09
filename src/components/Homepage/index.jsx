import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { DarkIco, EmailIcon, LightIco, PhoneIco } from './Icons';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const handleImageLoad = () => {
    setIsLoadingImage(false);
  };

  return (
    <div className="bg-cyan-50 min-h-screen">
      <div className="h-full">
        <nav className="flex lg:px-[80px] md:px-[30px] px-[15px] md:py-10 justify-between h-1/5 bg-cyan-700">
          <div className="font-burtons lg:text-3xl md:text-xl text-lg h-100 flex flex-col justify-center text-white">
            Ben Mannathara
          </div>
          <div className="flex items-center gap-3">
            <div onClick={() => setDarkMode(!darkMode)} type="button">
              {darkMode ? <DarkIco /> : <LightIco />}
            </div>
            <div>
              <button className="my-5 bg-white text-cyan-700 text-sm rounded-md md:px-5 md:py-2 py-1 px-3">
                Resume
              </button>
            </div>
          </div>
        </nav>
        <main className="flex flex-col h-3/5">
          <div className="flex flex-col md:py-10 py-4">
            <div className="lg:h-56 md:h-40 h-32 flex justify-center mt-10">
              {isLoadingImage && (
                <Skeleton
                  circle
                  className="h-full rounded-full p-[2px] border-cyan-300 border-2 lg:!w-[210px] md:!w-[150px] !w-[120px]"
                />
              )}
              <img
                className="h-full rounded-full p-[2px] border-cyan-300 border-2"
                src="./Me.jpg"
                onLoad={handleImageLoad} // Handle image load event
                style={{ display: isLoadingImage ? 'none' : 'block' }}
              />
            </div>

            <div className="flex flex-col px-[20px] py-[20px] md:px-[80px] md:py-[40px] lg:px-[120px] lg:py-[40px] gap-2">
              <div className="text-cyan-700 md:text-2xl text-lg font-burtons  text-center underline underline-offset-8">
                Overview
              </div>
              <div className="lg:py-5 lg:px-10 lg:text-xl md:text-base text-sm font-poppins text-cyan-700 indent-20 font-medium md:leading-8 leading-[20px]">
                As a seasoned React-Node web developer specializing in
                full-stack development, I deliver exceptional services across
                both frontend and backend domains. With expertise in crafting
                intuitive user interfaces using React and building robust
                backend systems with Node.js, I seamlessly integrate frontend
                and backend components to create dynamic and scalable web
                applications. Additionally, I make sure to keep open lines of
                communication with clients to understand their needs and deliver
                customized solutions that go above and beyond their
                expectations.
              </div>
            </div>
            <div className="flex flex-col px-[20px] py-[10px] md:px-[80px] md:py-[40px] lg:px-[120px] lg:py-[40px] gap-2">
              <div className="text-cyan-700 md:text-2xl text-lg font-burtons  text-center underline underline-offset-8">
                Services
              </div>
              <div className="flex flex-col md:flex-row justify-between text-cyan-600 gap-5 flex-wrap px-10 md:p-4">
                <div className="shadow-md shadow-cyan-200 md:w-[30%] px-10 py-6 md:p-3 flex flex-col items-center gap-3">
                  <div className="h-24">
                    <img src="/vite.svg" className="h-full" />
                  </div>
                  <div className="underline underline-offset-4 text-center font-burtons md:text-base text-sm">
                    Frontend Design
                  </div>
                  <div className="text-sm md:text-base text-center">
                    Utilizing React and Vite to craft visually appealing and
                    interactive user interfaces for web applications.
                  </div>
                </div>
                <div className="shadow-md shadow-cyan-200 md:w-[30%] px-10 py-6 md:p-3 flex flex-col items-center gap-3">
                  <div className="h-24">
                    <img src="/node.svg" className="h-full" />
                  </div>
                  <div className="underline underline-offset-4 text-center font-burtons md:text-base text-sm">
                    Backend Development
                  </div>
                  <div className="text-sm md:text-base text-center">
                    Employing Node.js or NestJS to architect and implement
                    robust server-side solutions, ensuring efficient data
                    processing and API functionality.
                  </div>
                </div>
                <div className="shadow-md shadow-cyan-200 md:w-[30%] px-10 py-6 md:p-3  flex flex-col items-center gap-3">
                  <div className="h-24">
                    <img src="/maintenance.svg" className="h-full" />
                  </div>
                  <div className="underline underline-offset-4 text-center font-burtons md:text-base text-sm">
                    Maintenance
                  </div>
                  <div className="text-sm md:text-base text-center">
                    Continuously monitoring and updating both frontend and
                    backend components to ensure seamless operation and optimal
                    performance of the web application.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-cyan-900 flex flex-col md:h-[24vh] h-[15vh] md:p-8 p-4 justify-center text-sm md:text-base">
          <div className="flex flex-col md:gap-2 gap-1">
            <div className="text-white underline underline-offset-4">
              Contact Me
            </div>
            <div className="flex gap-2 text-white">
              <EmailIcon />
              <div>benmannathara1999@gmail.com</div>
            </div>
            <div className="flex gap-2 text-white">
              <PhoneIco />
              <div>+91-7012260369</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
