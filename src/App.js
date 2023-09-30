import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import bigFaceLogo from "./assets/bigfacetrans.png";
import gym from "./assets/gym-app-screenshot.png";
import simpsons from "./assets/simpsons-toptrumps-screenshot.png";
import woofing from "./assets/woofing.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const refForm = useRef();

  const h3Format = "text-2xl py-2 md:text-3xl dark:text-white";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tiks2fi",
        "template_pvr2pzj",
        refForm.current,
        "J8TMy_h-CK24L-gFG"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload();
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-900">
        <section>
          {/* navbar section need a hrefs */}
          <nav className="pt-4 flex justify-between">
            <span></span>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
            </ul>
          </nav>

          {/* Intro */}

          <div className=" text-center">
            <h2 className=" text-4xl py-2 px-0 text-teal-600 font-medium md:text-6xl">
              Ben Cutler-Ames
            </h2>
            <h3 className={h3Format}>Software Developer</h3>
            <p className=" text-medium py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              Full-Stack Developer and Tech Educator <br />
              Championing Diversity in the Tech Industry
            </p>
          </div>
          {/* links */}
          <div className=" text-5xl flex justify-center gap-20 py-3 text-gray-600 md:text-6xl dark:text-green-200">
            <a
              href="https://github.com/BenCutlerAmes"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bencutlerames/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
          {/* image */}
         
          <div className=" object-scale-down relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-2 md:w-96 md:h-96">
            <img
              src={bigFaceLogo}
              alt="logo"
              className=" w-56 md:w-64 mx-auto"
            />
          </div>
        </section>

        {/*  */}

        <section>
          <div>
            <h3 className="text-3xl py-1 text-center md:text-4xl md:py-3 dark:text-white">
              About Me
            </h3>
            <p className=" text-medium py-2 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-200">
              Full-stack developer with a unique background as a Mathematics
              Teacher and Housemaster, trained at CodeClan in Edinburgh. Skilled
              in C#, JavaScript, and Vue.js, I blend analytical thinking,
              leadership, and interpersonal skills from my past roles to create
              dynamic and user-friendly software. I'm also an enthusiastic tech
              educator, passionate about addressing the gender gap in tech as an
              instructor for Code First: Girls. There, I inspire young women by
              teaching vital coding skills and fostering a diverse environment.
              Fully committed to my new career but always eager to learn and
              make a positive impact.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-3xl py-1 text-center md:text-4xl md:py-3 dark:text-white">
            {" "}
            Contact Me
          </h3>
          <p className="text-medium py-2 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-200">
            I am always open to collaboration, mentorship, and discussions
            related to the technology sector, especially initiatives aimed at
            promoting diversity and empowering women in tech. If you are
            interested in exploring employment opportunities, discussing code
            education, or sharing your thoughts and experiences, I would be
            thrilled to hear from you. Please don't hesitate to reach out using
            the form below.
          </p>

          <form className="text-center" ref={refForm} onSubmit={sendEmail}>
            <ul className="mx-auto">
              <li className="mx-auto">
                <input
                  className="bg-blue-100 rounded-md py-1 px-3  max-w-full mb-2 text-xl  md: w-96 md:text-2xl md:py-3"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </li>
              <li>
                <input
                  className="bg-blue-100 rounded-md py-1 px-3 max-w-full mb-2 text-xl  md: w-96 md:text-2xl md:py-3"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <input
                  className="bg-blue-100 rounded-md py-1 px-3 max-w-full mb-2 text-xl  md:text-2xl md: w-96 md:py-3"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  className="bg-blue-100 rounded-md py-1 px-3 max-w-full mb-2 text-xl md: w-96 md:text-2xl md:py-3"
                  placeholder="Message"
                  name="message"
                />
              </li>
              <li>
                <input
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md cursor-pointer"
                  type="submit"
                  value="SEND"
                />
              </li>
            </ul>
            <br />
            <br />
            <br />
            <br />
          </form>
        </section>
        <section>
          {/* portfolio pages - need to update links to github */}
          <div>
            <h3 className="text-3xl py-1 text-center md:text-4xl md:py-3 dark:text-white">
              Training Project Portfolio
            </h3>
            <p className="text-medium py-2 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-200">
              A small collection of the project completed during my time at
              CodeClan
            </p>
            <div className="justify-center lg:flex gap-10 ">
              <a
                href="https://github.com/BenCutlerAmes/Gym_Management_App"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-col justify-between text-center shadow-2xl shadow-black p-10 rounded-xl my-10 dark:shadow-white dark:shadow-lg">
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={gym}
                      alt="screenshot"
                      className="mx-auto h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                    Gym Management App
                  </h3>
                  <div>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      Python
                    </p>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      PostgreSQL
                    </p>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      Flask
                    </p>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      Psycopg2
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/BenCutlerAmes/Simpsons-Top-Trumps"
                target="_blank"
                rel="noreferrer"
                className="mx-auto"
              >
                <div className="flex flex-col justify-between text-center shadow-2xl shadow-black p-10 rounded-xl my-10 dark:shadow-white dark:shadow-lg">
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={simpsons}
                      alt="screenshot"
                      className="mx-auto h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                    Simpsons Top Trumps
                  </h3>
                  <div>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      JavaScript
                    </p>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      React
                    </p>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      MongoDB
                    </p>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      Express
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/BenCutlerAmes/react-woofing-from-home-client"
                target="_blank"
                rel="noreferrer"
                className="mx-auto"
              >
                <div className="flex flex-col justify-between text-center shadow-2xl shadow-black p-10 rounded-xl my-10 dark:shadow-white dark:shadow-lg">
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={woofing}
                      alt="screenshot"
                      className="mx-auto h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                    Woofing From Home
                  </h3>
                  <div>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      Java
                    </p>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      React
                    </p>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      Tailwind
                    </p>
                    <p className="text-gray-800 py-1 dark:text-gray-200">
                      Firebase
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
