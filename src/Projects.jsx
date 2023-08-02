export default function Projects() {
  return (
    <div className=" flex flex-col w-full justify-center items-center text-white">
      <div className="flex flex-col justify-center items-center w-full md:w-1/3">
        <h1 className="text-white text-4xl pb-4">Projects</h1>
        <h2 className="text-white text-2xl">Movie-Groups</h2>

        <img
          className="w-full h-auto"
          src="./src/assets/Screenshot 2023-07-28 at 1.10.35 PM.png"
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
      <div className="pt-16 flex flex-col justify-center items-center w-full md:w-1/3">
        <h2 className="text-2xl">Film Hub</h2>

        <img
          className="w-full h-auto"
          src="./src/assets/Image 4-29-23 at 12.55 PM.jpeg"
        ></img>
        <p>
          In this endeavor, an IMDb-like web application was developed using
          React and Firebase, emphasizing my proficiency in frontend
          development. The integration of features such as a title-based search
          function and a star rating system demonstrated a solid grasp of
          creating intuitive and efficient user interfaces.
        </p>
      </div>
      <div className="pt-8 flex flex-col justify-center items-center w-full md:w-1/3">
        <h2 className="text-2xl">Author's Portfolio</h2>

        <img
          className="w-full h-auto"
          src="./src/assets/Image 4-29-23 at 12.53 PM.jpeg"
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
