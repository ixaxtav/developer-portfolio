import { MiscProject } from "./components/MiscProject";

export default function Home() {
  return (
    <div>
      <main className="mx-auto max-w-7xl px-4 pt-6 lg:px-8">
        <header className="flex flex-col sm:flex-row items-center justify-between mb-1">
          <div className="flex flex-col sm:flex-row  items-center w-full">
            <p className="mono whitespace-nowrap">👨🏽‍💻 Coding Cool Things</p>
            <hr className="w-full mx-2 border-black" />
          </div>
          <h1 className="text-2xl mb-2 display whitespace-nowrap">Ixax Tavarez</h1>
          <div className="flex items-center space-x-2 w-full justify-center sm:justify-normal">
            <hr className="w-full hidden sm:block mx-2 border-black" />
            <a href="https://www.linkedin.com/in/ixaxtavarez" className="link">
              LinkedIn
            </a>
            <hr className="w-4 mx-2 border-black" />
            <a href="https://github.com/ixaxtav" className="link">
              Github
            </a>
            <hr className="w-4 mx-2 border-black" />
            <a href="/resume.pdf" download className="link">
              Resume
            </a>
            <hr className="w-4 mx-2 border-black" />
            <a href="mailto:ixaxtav@gmail.com" className="link">
              Email
            </a>
          </div>
        </header>
        <section className="flex items-center justify-between">
          <div className="flex items-center w-full">
            <hr className="w-full border-black border-2" />
          </div>
          <p className="mono whitespace-nowrap border border-black px-4 py-1">@ixaxtav</p>
          <div className="flex items-center w-full">
            <hr className="w-full border-black border-2" />
          </div>
        </section>
        <section className="flex  flex-col sm:flex-row items-center gap-4 sm:gap-10 mt-4">
          <img className="inline-block h-48 w-48 sm:h-72 sm:w-72 rounded-full border-4 border-black post-image" src="avatar.png" alt="my-headshot" />
          <p className="display text-xl sm:text-3xl">
            Hello World! I'm{" "}
            <a href="https://www.linkedin.com/in/ixaxtavarez" className="highlight font-bold">
              Ixax
            </a>
            , your go-to guy for both front-end and back-end web development. Here in my portfolio, you'll see how I turn complex ideas into cool, user-friendly websites. Feel free to explore my work!
          </p>
        </section>
        <hr className="double-separator" />
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-briefcase"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          <h3 className="mono pt-1">Work Experience</h3>
        </div>
        <div class="grid sm:grid-cols-4 gap-4">
          <div className="sm:border-r border-black">
            <h2 className="display text-lg sm:text-2xl">Best Miami Weddings</h2>
            <p className="mono">Front End Developer (Jan 2017)</p>
          </div>
          <div className="sm:border-r border-black">
            <h2 className="display text-lg sm:text-2xl">ImRecruitable</h2>
            <p className="mono">Full Stack Developer (Jun 2018)</p>
          </div>
          <div className="sm:border-r border-black">
            <h2 className="display text-lg sm:text-2xl">JobCore Talent</h2>
            <p className="mono">Full Stack Developer (Feb 2020)</p>
          </div>
          <div className="border-black">
            <div className="flex items-center gap-1">
              <h2 className="display text-lg sm:text-2xl">DataRemote</h2>
              <span className="badge bg-black text-white text-xs rounded p-1">Current</span>
            </div>
            <p className="mono">Sr. Full Stack Developer (Jan 2022)</p>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/ixaxtavarez" className="flex items-center mt-4 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-external-link"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          <p className="mono underline">More on LinkedIn</p>
        </a>
        <hr className="double-separator" />
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-package"
          >
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          <h3 className="mono pt-1">Projects</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 border-b border-black pb-6">
          <div className="w-96">
            <h2 className="display text-lg sm:text-2xl py-3">ARA</h2>
            <p className="mono">
              DataRemote's ARA Device Management Platform offers a secure and efficient solution for device provisioning, management, and troubleshooting. Key features include real-time access,
              RESTful API, live notifications, advanced security with role-based access control and encryption, and a scalable device hierarchy. ARA delivers a unified user experience, acting as a
              remote portal to local device interfaces.
            </p>
            <p className="mono underline font-bold">
              Utilizing technologies such as ReactJS, TypeScript, NodeJS, MongoDB, MariaDB, Python, and Flask, ara is a powerful tool for efficient device management.
            </p>
            <p className="mono">- Real-time device access for streamlined monitoring and troubleshooting</p>
            <p className="mono">- Comprehensive RESTful API for scalable device management and integration</p>
            <p className="mono">- Live notifications enhancing operational awareness and reducing response time</p>
            <p className="mono">- Advanced security features including role-based user access control and end-to-end encryption</p>
            <p className="mono">- Customizable device collection hierarchy for optimized workflows and targeted management</p>
          </div>
          <figure className="flex-1 post-image">
            <img src="dataremote.png" className="post-image" alt="dataremote" />
          </figure>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-4 border-b border-black">
          <div className="sm:col-span-2 border-b sm:border-r sm:border-b-0 border-black pr-4">
            <figure className="flex-1 post-image">
              <img src="jobcore.png" alt="jobcore" />
            </figure>
            <h2 className="display text-lg sm:text-2xl py-3">JobCore</h2>
            <p className="mono">
              JobCore Talent is a platform focused on the hospitality industry that connects caterers, full service restaurants, nightclubs, bars and janitorial services companies to qualified
              part-time workers.
            </p>
            <p className="mono">- JobCore Talent provides an easy to use end-to-end experience for job seekers in the hospitality industry straight from your mobile device.</p>
            <p className="mono">- Setup you job and role preferences, publish shifts, and access a talent pool of thousands of rated job seekers.</p>
            <p className="mono">- Built using React, React Native, Flux, Python, PostgreSQL, Heroku, Vercel, Gatsby, Django REST Framework</p>
          </div>
          <div className="border-b sm:border-b-0 sm:border-r border-black pr-4">
            <figure className="flex-1 post-image">
              <img src="imrecruitable.png" alt="imrecruitable" />
            </figure>
            <h2 className="display text-lg sm:text-2xl py-3">ImRecruitable</h2>
            <p className="mono">
              ImRecruitable is known as the “go-to” college athletic recruiting platform, with a database of over 35,000 college coaches using ImRecruitable to find athletes in their respective
              sports. Since 2009, ImRecruitable has offered connections between college coaches and student-athletes around the world, recruiting advice, and an extensive set of tools and services
              that help on their mission to play their sport in college.
            </p>
            <p className="mono  mt-4">- Receive expert guidance</p>
            <p className="mono">- Discover your best fit schools</p>
            <p className="mono">- Get seen by college coaches</p>
            <p className="mono">- Built using MERN Stack</p>
          </div>
          <div className="sm:border-r border-black pr-4">
            <figure className="flex-1 post-image">
              <img src="thepokersocietylogo.jpg" alt="pokersociety" />
            </figure>
            <h2 className="display text-lg sm:text-2xl py-3">The Poker Society</h2>
            <p className="mono">An app where you can see tournaments available in casino located in Miami, Ford Lauderdale, and Las Vegas.</p>
            <p className="mono mt-4">- Check tournament near Miami area and see if you are able to participate.</p>
            <p className="mono">- Join a network of poker professional.</p>
            <p className="mono">- Built using React with Flux</p>
          </div>
        </div>
        <div className="bg-stone-300 hover:bg-yellow-300 flex justify-center items-center h-32 mt-4">
          <a
            href="mailto:ixaxtav@gmail.com"
            className="rounded-full bg-black px-3.5 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Have a project in mind? Let's talk!
          </a>
        </div>
        <hr className="double-separator" />
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-box"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          <h3 className="mono pt-1">Misc. Projects</h3>
        </div>
        <div>
          <ul className="space-y-1">
            {[
              { name: "Link Sprout", github: "https://github.com/ixaxtav/link-sprout", link: "https://link-sprout.web.app", stack: "(SvelteKit, Tailwindcss, Firebase, Typescript)" },
              { name: "Task Management App", github: "https://github.com/ixaxtav/task-management-app", link: "https://ixaxtav.github.io/simple-task-management-app/ ", stack: "(HTML, CSS)" },
              { name: "BMI Calculator", github: "https://github.com/ixaxtav/bmi-calculator", link: "https://ixaxtav.github.io/bmi-calculator/ ", stack: "(HTML, CSS)" },
              { name: "Todo List", github: "https://github.com/ixaxtav/todo-list", link: "https://ixaxtav.github.io/todo-list/", stack: "(React, Typescript)" },
              { name: "Tic Tac Toe", github: "https://github.com/ixaxtav/tic-tac-toe", link: "https://ixaxtav.github.io/tic-tac-toe", stack: "(HTML, CSS)" },
            ].map((project, index) => (
              <MiscProject key={index} {...project} />
            ))}
          </ul>
        </div>
        <hr className="thick" />
        <p className="mono pb-4">Copyright @ {new Date().getFullYear()} Ixax Tavarez</p>
      </main>
      <div className="tv-static" />
    </div>
  );
}
