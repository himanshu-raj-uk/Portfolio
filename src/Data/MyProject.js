import servicePlannerImg from "../assets/projects/service-planner.png";
import netflixCloneImg from "../assets/projects/netflix-clone.png";
import potterDbImg from "../assets/projects/potter-db.png";
import skillsYardImg from "../assets/projects/skills-yard.png";

export const projects = [
  {
    id: "service-planner",
    number: "01",
    title: "Service Planner",
    subtitle: "Plan Everything Smartly — All-in-One Full-Stack Planning Web App",
    category: "Full Stack (MERN)",
    categoryGroup: "MERN",
    filterType: ["All", "Full Stack", "MERN", "Web Apps"],
    description:
      "Main full-stack project: a live, publicly deployed planning platform with a React frontend and Node.js backend. Gives users one clean place to plan and organize travel, birthday events, and corporate services with secure accounts, Cloudinary media, and persistent MongoDB storage.",
    image: servicePlannerImg,
    liveUrl: "https://himanshu-raj-uk.github.io/Service-Planner/",
    githubUrl: "https://github.com/himanshu-raj-uk",
    icon: "waves",
    accent: "#22d3ee",
    status: "Live",
    featured: true,
    whatIDid: [
      "Engineered full user authentication with both standard email/password and Google OAuth login/register buttons.",
      "Developed personalized travel and birthday event planning workflows with dynamic scheduling and booking.",
      "Integrated Cloudinary with Multer for secure, high-speed image uploads and media management.",
      "Implemented role-based protected routes and JWT authentication middleware across all planning endpoints.",
      "Built a mobile-first responsive UI using Tailwind CSS with custom themes and touch-friendly controls.",
    ],
    howIBuiltIt: [
      "Frontend: Component-based React.js with hooks, Context API, Vite build tooling, and Tailwind CSS for mobile-first styling.",
      "Backend: Node.js and Express.js REST APIs organized strictly into MVC architecture (models, controllers, routes, middleware).",
      "Database: MongoDB with Mongoose schemas featuring strict type validation, unique fields, and indexes.",
      "Auth: bcrypt.js for password hashing, signed JWT tokens for sessions, and Google OAuth SDK for one-tap authentication.",
      "Deployment: Production Vite build deployed on GitHub Pages with cloud backend services.",
    ],
    difficulties: [
      {
        title: "Integrating AI Models & Working Flow",
        description:
          "Designing the AI prompt-to-itinerary engine was challenging. The working flow required processing user preferences (budget, destination, dates), calling the AI model asynchronously, parsing structured JSON responses, and linking the generated recommendations directly to booking and calendar schedules without breaking UI state.",
      },
      {
        title: "Adding Google Button in Login & Register Pages",
        description:
          "Implementing the Google OAuth button on both Login and Register pages required configuring OAuth client credentials, handling authorization callbacks, verifying token signatures on the backend, and gracefully merging Google profiles with existing Mongoose user records while keeping session JWTs consistent.",
      },
      {
        title: "Frontend-to-Backend API Calling & Mongoose Data Persistence",
        description:
          "Coordinating asynchronous REST API calls with Authorization Bearer headers, managing pending/error states, and saving complex nested booking structures in MongoDB using Mongoose. Required schema-level validation so bad or unsafe data never reached the database.",
      },
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt.js",
      "Google OAuth",
      "Multer",
      "Cloudinary",
      "Vite",
    ],
  },
  {
    id: "netflix-clone",
    number: "02",
    title: "Netflix Clone",
    subtitle: "Full-Stack Cinema Streaming & Movie Discovery Platform",
    category: "Full Stack (MERN)",
    categoryGroup: "MERN",
    filterType: ["All", "Full Stack", "MERN", "Web Apps"],
    description:
      "Full-stack streaming platform where users register, log in and browse trending content, search across categories, preview movie trailers, and admins manage the media catalog from a dashboard with assets delivered through Cloudinary.",
    image: netflixCloneImg,
    liveUrl: "https://himanshu-raj-uk.github.io/Netflix-Clone/",
    githubUrl: "https://github.com/himanshu-raj-uk",
    icon: "play-circle",
    accent: "#fb7185",
    status: "Live",
    featured: true,
    whatIDid: [
      "Built complete registration and login security workflows with JWT tokens and protected route guards.",
      "Designed dynamic entertainment categories (Trending Now, Top Rated, Action, Sci-Fi) with movie backdrop carousels.",
      "Integrated TMDB API for live movie metadata, ratings, release dates, and trailer video embeds.",
      "Developed an Admin Dashboard to upload and manage movie records with Cloudinary asset storage.",
      "Created a Netflix-accurate responsive UI with hero billboard preview and movie hover cards.",
    ],
    howIBuiltIt: [
      "Frontend: React.js and TypeScript with Tailwind CSS for mobile-first layout and responsive video modal playback.",
      "Backend: Node.js and Express.js REST APIs organized into clean MVC controllers with role-check middleware.",
      "Database: MongoDB with Mongoose schemas for users, watchlists, search queries, and content sessions.",
      "Media: Cloudinary integration for streaming movie posters and banner backdrops.",
    ],
    difficulties: [
      {
        title: "Frontend-to-Backend API Calling & TMDB Data Aggregation",
        description:
          "Connecting the React/TypeScript frontend to backend Express endpoints while proxying and caching TMDB API calls. Required aggregating multiple category endpoints, handling rate limits, and preventing CORS issues to ensure instant trailer and poster loading.",
      },
      {
        title: "Data Storing & Saving in Mongoose",
        description:
          "Designing resilient Mongoose schemas for user watchlists, viewing history, and custom movie metadata. Solved concurrency and fast retrieval by adding compound indexes on user IDs and movie IDs, ensuring seamless saving and updating of favorites in MongoDB.",
      },
      {
        title: "Responsive Cinema Layout Across Devices",
        description:
          "Reproducing Netflix's cinematic horizontal carousels, billboard backdrop fade gradients, and video player controls across mobile, tablet, and desktop screens without horizontal scrollbar bugs.",
      },
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt.js",
      "TMDB API",
      "Cloudinary",
    ],
  },
  {
    id: "potter-db",
    number: "03",
    title: "PotterDB Data Explorer",
    subtitle: "Explore the Harry Potter Universe via REST API",
    category: "API Data Discovery",
    categoryGroup: "Web Apps",
    filterType: ["All", "Web Apps"],
    description:
      "Multi-page interactive data explorer for the Harry Potter universe that loads live data from the public PotterDB API across 7 books, 5,246 characters, 11 movies, 168 potions, and 333 spells through dedicated responsive sections.",
    image: potterDbImg,
    liveUrl: "https://himanshu-raj-uk.github.io/Potter-DB/",
    githubUrl: "https://github.com/himanshu-raj-uk",
    icon: "sparkles",
    accent: "#c084fc",
    status: "Live",
    featured: true,
    whatIDid: [
      "Constructed a multi-page discovery interface covering Books, Characters, Movies, Potions, and Spells.",
      "Integrated PotterDB REST endpoints dynamically using JavaScript Fetch API with async/await.",
      "Added real-time client-side search and filtering by Hogwarts houses, patronus, and character attributes.",
      "Built 'Load More' batch pagination to smoothly navigate thousands of wizarding world entries.",
      "Designed a custom Hogwarts-themed UI with purple-amber accents, card flips, and slide-in category sidebar.",
    ],
    howIBuiltIt: [
      "Architecture: Clean modular JavaScript (ES6+) with async Fetch API calls and dynamic DOM rendering.",
      "Styling: Semantic HTML5 and responsive CSS3 Grid and Flexbox with custom theme variables.",
      "Routing & State: Client-side URL parameters and state handling with zero page reloads.",
    ],
    difficulties: [
      {
        title: "Fetching & Handling Massive Data for Users",
        description:
          "The public PotterDB API contains thousands of records across characters, spells, and potions. The biggest difficulty was fetching and parsing massive JSON datasets over the network without freezing the browser or making users wait. Solved by implementing asynchronous batch loading with Load More pagination, caching previous requests in memory, and adding responsive skeleton loaders with clear error feedback.",
      },
      {
        title: "Real-Time Multi-Attribute Filtering",
        description:
          "Filtering through 5,000+ characters by house, blood status, and species in real time required debounced search listeners to prevent excessive re-renders and lag on mobile devices.",
      },
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Fetch API",
      "REST API",
      "CSS Grid",
      "Flexbox",
    ],
  },
  {
    id: "skills-yard",
    number: "04",
    title: "Skills Yard",
    subtitle: "IT Training Institute Multi-Section Platform",
    category: "Frontend Web Application",
    categoryGroup: "Frontend",
    filterType: ["All", "Web Apps"],
    description:
      "Multi-section, fully responsive landing website for an IT training institute, built with pure semantic HTML5 and CSS3. Features 10 course categories, placement statistics counters, student success stories, and faculty showcases with zero external frameworks.",
    image: skillsYardImg,
    liveUrl: "https://himanshu-raj-uk.github.io/Skills-Yard/",
    githubUrl: "https://github.com/himanshu-raj-uk",
    icon: "graduation-cap",
    accent: "#34d399",
    status: "Live",
    featured: true,
    whatIDid: [
      "Structured a complete training institute portal with 10 industry-ready course tracks (Web, AI/ML, Data Science, VFX).",
      "Built interactive placement statistics counters (1k+ Students, 20+ Partners, 35 LPA Highest Package, 302% Hike).",
      "Engineered faculty team member cards with CSS-only Read More and Back toggle interactions.",
      "Implemented a complete mobile-first layout with semantic navigation bar, hero banner, and contact details.",
    ],
    howIBuiltIt: [
      "Language: Pure semantic HTML5 markup with accessible tags, forms, and headings.",
      "Styles: Native modern CSS3 using Flexbox, CSS Grid, media query breakpoints, and custom hover transitions.",
      "Zero Dependencies: Crafted with no external UI libraries or JS frameworks for maximum load speed.",
    ],
    difficulties: [
      {
        title: "Complex Multi-Section Layout with Zero Frameworks",
        description:
          "Structuring 10 diverse course categories, student placement stories, and team cards using only native HTML5 and CSS Grid without relying on UI libraries like Bootstrap or Tailwind. Required precise CSS layout rules to maintain visual balance and fast rendering.",
      },
      {
        title: "Mobile-First Cross-Device Breakpoints",
        description:
          "Ensuring multi-column placement showcases and complex curriculum menus stack smoothly on mobile viewports while expanding gracefully onto large desktop monitors without breaking layout flow.",
      },
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "CSS Grid",
      "Flexbox",
      "Semantic Web",
    ],
  },
];

export const projectStats = {
  totalProjects: 4,
  liveProjects: 3,
  mernProjects: 2,
  yearsLearning: "2024 - Present",
  passionPercent: "100%",
};
