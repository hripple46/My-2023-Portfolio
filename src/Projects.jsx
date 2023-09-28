export default function Projects({ projectsRef }) {
  return (
    <div className="pb-24 flex  w-full items-center justify-center items-center text-white">
      <div className="w-2/3 flex flex-wrap items-start justify-center">
        <div className="border-2 border-orange-300/25 rounded-md p-4  flex flex-col justify-center items-center w-full xl:w-1/3 m-2">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-2xl italic">Daily Trivia Game</h2>
            <div className="flex justify-center">
              <a href="https://dailyquizgame.com" target="_blank">
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
                href="https://github.com/hripple46/Trivia-App-Backend"
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

          <a href="https://dailyquizgame.com">
            {" "}
            <img className="w-full h-auto" src="/assets/triviagame.png"></img>
          </a>
          <ul className="mt-2">
            <li>
              <strong className="underline">Tech Stack:</strong>
              <ul>
                <li> ExpressJS (Backend) </li>
                <li>ReactJS (Frontend)</li>
                <li>MongoDB (Database)</li>
              </ul>
            </li>
            <li>
              <strong className="underline">Description:</strong> This app
              serves as a technical showcase of my full-stack development
              skills. It boasts over 250 users with an average engagement time
              of 48 seconds, highlighting my prowess in UX design and
              optimization. Advanced array manipulation techniques ensure the
              seamless daily delivery of 5 new questions, thoughtfully sorted
              from easiest to hardest. The backend, powered by Express.js,
              handles authentication, data, and scoring, while users can
              effortlessly share scores through social integration. This project
              exemplifies my proficiency in creating engaging and scalable
              full-stack applications.
            </li>
          </ul>
        </div>
        <div className="border-2 m-2  border-orange-300/25 rounded-md p-4 flex flex-col justify-center items-center w-full xl:w-1/3">
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

          <a href="https://movie-groups.com/">
            <img
              className="w-full h-auto"
              src="/assets/Screenshot 2023-07-28 at 1.10.35 PM.png"
            ></img>
          </a>
          <ul className="text-white mt-2">
            <li>
              <strong className="underline">Tech Stack:</strong>
              <ul>
                <li>ExpressJS (Backend)</li>
                <li>ReactJS (Frontend)</li>
                <li>MongoDB (Database)</li>
                <li>JWT (JSON Web Tokens) for secure user authentication</li>
              </ul>
            </li>
            <li>
              <strong className="underline">Description:</strong> This project
              showcases a secure and seamlessly integrated single-page web
              application that combines ExpressJS, ReactJS, and MongoDB, while
              emphasizing user-friendly design and rigorous JWT-based security
              practices for efficient and protected data handling.
            </li>

            <li>
              <strong>Integration:</strong> Effective integration between
              Client-Side, Backend (RESTful API), and Database (MongoDB) ensures
              seamless data handling.
            </li>
            <li>
              <strong>Design and Development:</strong> Incorporation of Tailwind
              CSS and Vite demonstrates modern design principles and efficient
              development workflows.
            </li>
            <li>
              <strong>Security Focus:</strong> The project prioritizes
              user-friendly interfaces while implementing robust JWT
              verification for secure user authentication and data protection.
            </li>
          </ul>
        </div>

        <div className="border-2 border-orange-300/25 rounded-md p-4 pt-16 md:pt-4 flex flex-col justify-center items-center w-full xl:w-1/3 m-2">
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

          <a href="https://hripple46.github.io/Ripple-Film-Hub/#/">
            {" "}
            <img
              className="w-full h-auto"
              src="/assets/Image 4-29-23 at 12.55 PM.jpeg"
            ></img>
          </a>
          <ul className="mt-2">
            <li>
              <strong className="underline">Tech Stack:</strong>
              <ul>
                <li>ReactJS</li>
                <li>Firebase</li>
              </ul>
            </li>
            <li>
              <strong className="underline">Description:</strong> Developed an
              IMDb-like web application using React and Firebase, showcasing
              proficiency in frontend development. Integrated features like a
              title-based search function and a star rating system,
              demonstrating the ability to create intuitive and efficient user
              interfaces.
            </li>
          </ul>
        </div>
        <div className="border-2 border-orange-300/25 rounded-md p-4  flex flex-col justify-center items-center w-full xl:w-1/3 m-2">
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
              <a
                href="https://github.com/hripple46/Steves-Page"
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

          <a href="https://stephentimothyripple.com/index.html">
            {" "}
            <img
              className="w-full h-auto"
              src="/assets/Image 4-29-23 at 12.53 PM.jpeg"
            ></img>
          </a>
          <ul className="mt-2">
            <li>
              <strong className="underline">Tech Stack:</strong>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vanilla JavaScript</li>
                <li>Google Firestore (Data Management)</li>
              </ul>
            </li>
            <li>
              <strong className="underline">Description:</strong> In this
              project, the development of a dynamic web application allowed for
              an impressive showcase of an author's work while promoting user
              engagement. The use of Google Firestore underscored my
              capabilities in robust data management, and the design emphasis on
              the author's styling and community interaction highlighted a
              strong grasp of user-centric design and styling principles.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
