import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { DarkIco, EmailIcon, LightIco, PhoneIco } from './Icons';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const skills = [
    'HTML',
    'CSS',
    'JS',
    'React',
    'NodeJs',
    'NestJs',
    'MongoDB',
    'Postgresql',
    'Sequelize',
    'Mongoose',
    'Redux',
    'Zustand',
    'React Routing',
    'Bootstrap',
    'Tailwind CSS',
    'Axios',
    'Postman',
    'DBeaver',
    'Stripe',
    'Socket.io',
    'JSON',
    'API Design',
    'API Integration',
  ];

  const handleImageLoad = () => {
    setIsLoadingImage(false);
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-cyan-50 dark:dark:bg-slate-800 min-h-screen">
      <div className="h-full">
        <nav className="flex lg:px-[80px] md:px-[30px] px-[15px] md:py-10 justify-between h-1/5 dark:bg-slate-900 bg-cyan-700">
          <div className="flex flex-col justify-center">
            <div className="font-burtons lg:text-3xl md:text-2xl text-xl h-100 flex flex-col justify-center text-white">
              Ben Mannathara
            </div>
            <div className="font-mono text-slate-200 lg:text-lg md:text-base text-[12px]">
              <TypeAnimation
                sequence={[
                  'Welcome to my portfolio!',
                  1000,
                  "Hi, I'm Ben Mannathara",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div onClick={() => setDarkMode(!darkMode)} type="button">
              {darkMode ? <DarkIco /> : <LightIco />}
            </div>
            <div>
              <button className="my-5 dark:bg-slate-700 dark:text-white bg-white text-cyan-700 text-sm rounded-md md:px-5 md:py-2 py-1 px-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <Link to="/Resume.pdf" target="_blank" download>
                  Resume
                </Link>
              </button>
            </div>
          </div>
        </nav>
        <main className="flex flex-col">
          <div className="flex flex-col md:pt-10 pt-4">
            <div className="lg:h-56 md:h-40 h-32 flex justify-center mt-10">
              {isLoadingImage && (
                <Skeleton
                  circle
                  className="h-full rounded-full p-[2px] dark:border-slate-400 border-cyan-300 border-2 lg:!w-[210px] md:!w-[150px] !w-[120px]"
                />
              )}
              <img
                className="h-full rounded-full p-[2px] dark:border-slate-400 border-cyan-300 border-2"
                src="./Me.jpg"
                onLoad={handleImageLoad} // Handle image load event
                style={{ display: isLoadingImage ? 'none' : 'block' }}
              />
            </div>

            <div className="flex flex-col px-[20px] py-[20px] md:px-[80px] md:py-[40px] lg:px-[120px] lg:py-[40px] gap-2 bg-white mt-4 dark:bg-slate-900">
              <div className="text-cyan-700 md:text-2xl text-lg font-burtons  text-center underline underline-offset-8 dark:text-slate-200">
                Overview
              </div>
              <div className="lg:py-5 lg:px-10 lg:text-xl md:text-base text-sm font-poppins text-cyan-700 font-medium md:leading-8 leading-[20px] dark:text-slate-400">
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
              <div className="text-cyan-700 md:text-2xl text-lg font-burtons  text-center underline underline-offset-8 dark:text-slate-200">
                Services
              </div>
              <div className="flex flex-col md:flex-row justify-between text-cyan-600  gap-5 flex-wrap px-10 md:p-4">
                <div className="shadow-md dark:shadow-sm shadow-cyan-200 dark:shadow-slate-600 md:w-[30%] px-10 py-6 md:p-3 flex flex-col items-center gap-3 transition ease-in delay-150 hover:scale-110 duration-300 hover:translate-y-1">
                  <div className="h-24">
                    <img src="/vite.svg" className="h-full" />
                  </div>
                  <div className="underline underline-offset-4 text-center font-burtons dark:text-slate-200 md:text-base text-sm">
                    Frontend Design
                  </div>
                  <div className="text-sm md:text-base text-center dark:text-slate-300">
                    Utilizing React and Vite to craft visually appealing and
                    interactive user interfaces for web applications.
                  </div>
                </div>
                <div className="shadow-md dark:shadow-sm shadow-cyan-200 dark:shadow-slate-600 md:w-[30%] px-10 py-6 md:p-3 flex flex-col items-center gap-3 transition ease-in delay-150 hover:scale-110 duration-300 hover:translate-y-1">
                  <div className="h-24">
                    <img src="/node.svg" className="h-full" />
                  </div>
                  <div className="underline underline-offset-4 text-center font-burtons dark:text-slate-200 md:text-base text-sm">
                    Backend Development
                  </div>
                  <div className="text-sm md:text-base text-center dark:text-slate-300">
                    Employing Node.js or NestJS to architect and implement
                    robust server-side solutions, ensuring efficient data
                    processing and API functionality.
                  </div>
                </div>
                <div className="shadow-md dark:shadow-sm shadow-cyan-200 dark:shadow-slate-600 md:w-[30%] px-10 py-6 md:p-3  flex flex-col items-center gap-3 transition ease-in delay-150 hover:scale-110 duration-300 hover:translate-y-1">
                  <div className="h-24">
                    <img src="/maintenance.svg" className="h-full" />
                  </div>
                  <div className="underline underline-offset-4 text-center font-burtons dark:text-slate-200 md:text-base text-sm">
                    Maintenance
                  </div>
                  <div className="text-sm md:text-base text-center dark:text-slate-300">
                    Continuously monitoring and updating both frontend and
                    backend components to ensure seamless operation and optimal
                    performance of the web application.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-[20px] md:px-[80px] md:py-[40px] lg:px-[120px] lg:py-[40px] gap-5 bg-white dark:bg-slate-900 mt-4">
              <div className="text-cyan-700 md:text-2xl text-lg font-burtons  text-center underline underline-offset-8 dark:text-slate-200">
                Familiar Technologies/Skills
              </div>
              <div className="flex gap-3 flex-wrap items-center justify-center">
                {skills.map((e, i) => (
                  <div
                    className="border dark:border-slate-400 border-cyan-500 md:p-2 p-1 rounded-md dark:text-slate-300 text-cyan-900 md:w-[150px] text-center shadow-md shadow-cyan-200 dark:shadow-slate-500 w-[110px] md:text-base text-sm dark:shadow-sm"
                    key={i}
                  >
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-cyan-900 dark:bg-slate-700 flex flex-col md:h-[24vh] h-[15vh] md:p-8 p-4 justify-center text-sm md:text-base">
          <div className="flex flex-col md:gap-2 gap-1">
            <div className="text-white underline underline-offset-4 font-burtons">
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
