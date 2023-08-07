export default function Projects({ projectsRef }) {
  return (
    <div className="pb-24 flex flex-col w-full justify-center items-center text-white">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <h1 ref={projectsRef} className="text-white text-4xl pb-4">
          Projects
        </h1>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-white text-2xl italic">Movie-Groups</h2>
          <div className="flex justify-center">
            <a href="https://movie-groups.com" target="_blank">
              <svg
                className="mr-2 hover:animate-bounce hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 96 960 960"
                width="24"
                fill="white"
              >
                <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
              </svg>
            </a>

            <a
              href="https://github.com/hripple46/Movie-Social-Api"
              target="_blank"
            >
              <div className="relative text-center">
                <svg
                  className="mr-2 hover:animate-bounce hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github hover:animate-bounce hover:cursor-pointer"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <p className="absolute bottom-full w-full">BE</p>
              </div>
            </a>
            <a
              href="https://github.com/hripple46/Movie-Social-Client"
              target="_blank"
            >
              <div className="relative text-center">
                <svg
                  className="hover:animate-bounce hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github hover:animate-bounce hover:cursor-pointer"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <p className="absolute bottom-full w-full">FE</p>
              </div>
            </a>
          </div>
        </div>

        <img
          className="w-full h-auto"
          src="/assets/Screenshot 2023-07-28 at 1.10.35 PM.png"
        ></img>
        <p className="text-white">
          This project, featuring a single-page web application developed with
          ExpressJS and ReactJS, highlighted effective use of MongoDB for
          seamless data handling. The integration of Tailwind CSS and Vite
          further demonstrated an adeptness with modern design principles and
          efficient development workflows, all while maintaining a focus on
          user-friendly interfaces and strong user management practices.
        </p>
      </div>
      <div className="pt-16 flex flex-col justify-center items-center w-full md:w-1/2">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl italic">Film Hub</h2>
          <div className="flex justify-center">
            <a
              href="https://hripple46.github.io/Ripple-Film-Hub/#/"
              target="_blank"
            >
              <svg
                className="mr-2 hover:animate-bounce hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 96 960 960"
                width="24"
                fill="white"
              >
                <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
              </svg>
            </a>
            <a
              href="https://github.com/hripple46/Ripple-Film-Hub"
              target="_blank"
            >
              <svg
                className="hover:animate-bounce hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github hover:animate-bounce hover:cursor-pointer"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>

        <img
          className="w-full h-auto"
          src="/assets/Image 4-29-23 at 12.55 PM.jpeg"
        ></img>
        <p>
          In this endeavor, an IMDb-like web application was developed using
          React and Firebase, emphasizing my proficiency in frontend
          development. The integration of features such as a title-based search
          function and a star rating system demonstrated a solid grasp of
          creating intuitive and efficient user interfaces.
        </p>
      </div>
      <div className="pt-8 flex flex-col justify-center items-center w-full md:w-1/2">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl italic">Author's Portfolio</h2>
          <div className="flex justify-center">
            <a href="https://stephentimothyripple.com" target="_blank">
              <svg
                className="mr-2 hover:animate-bounce hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 96 960 960"
                width="24"
                fill="white"
              >
                <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
              </svg>
            </a>
            <a href="https://github.com/hripple46/Steves-Page" target="_blank">
              <svg
                className="hover:animate-bounce hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github hover:animate-bounce hover:cursor-pointer"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>

        <img
          className="w-full h-auto"
          src="/assets/Image 4-29-23 at 12.53 PM.jpeg"
        ></img>
        <p>
          In this project, the development of a dynamic web application allowed
          for an impressive showcase of an author's work while promoting user
          engagement. The use of Google Firestore underscored my capabilities in
          robust data management, and the design emphasis on the author's
          styling and community interaction highlighted a strong grasp of
          user-centric design and styling principles.
        </p>
      </div>
    </div>
  );
}
