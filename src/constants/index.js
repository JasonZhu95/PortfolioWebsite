import {
  CSUFLogo,
  FullertonCollegeLogo,
  StaterBrosLogo,
  airship,
  backend,
  causeway,
  cplusplus,
  creator,
  csharp,
  easy,
  git,
  kybolt,
  lua,
  mobile,
  node,
  notion,
  react,
  robloxStudio,
  tailwind,
  typescript,
  unity,
  unreal,
  web,
  xml,
} from "../assets";

export const navLinks = [{
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education/Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [{
    title: "Gameplay Programmer",
    icon: creator,
  },
  {
    title: "Gameplay Designer",
    icon: backend,
  },
  {
    title: "Computer Science Graduate",
    icon: web,
  },
  {
    title: "Competitive Gamer",
    icon: mobile,
  },
];

const programmingLanguages = [{
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Lua",
    icon: lua,
  },
  {
    name: "XML",
    icon: xml,
  },
];

const webTechnologies = [{
    name: "React",
    icon: react,
  },
  {
    name: "Node",
    icon: node,
  },
  {
    name: "Tailwind",
    icon: tailwind
  },
];

const developerTools = [{
    name: "Github",
    icon: git,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Unreal",
    icon: unreal
  },
  {
    name: "Roblox Studio",
    icon: robloxStudio,
  },
  {
    name: "Notion",
    icon: notion,
  },
]

const experiences = [{
    title: "Easy Games",
    company_name: "Gameplay Programmer",
    icon: easy,
    iconBg: "#383E56",
    date: "Sep. 2023 - Present",
    sectionOne: "Airship",
    points: [
      "Supporting development of Airship, a Unity-based multiplayer platform providing developers with a core package of out-of-the-box tools and systems to simplify game creation.",
      "Actively working on polishing core gameplay features and systems in BedWars 2, the flagship sequel that will showcase Airship’s capabilities as a platform.",
      "Collaborating closely with cross-disciplinary teams—including sound designers, VFX artists, modelers, animators, and voxel map makers—to achieve a high level of polish and deliver a cohesive multiplayer experience.",
      "Redesigned and refined the core kit and weapon systems by incorporating internal playtest feedback to increase gameplay depth and strategic complexity.",
    ],
    sectionTwo: "Bedwars",
    pointsTwo: [
      "Contributed to the development of one of Roblox’s top PvP games, achieving millions of monthly active users and high player retention.",
      "Took ownership of end-to-end development for custom game modes including Tournaments, PvP Arena, Lasso Wars, and Bridge Battle, from initial concept and design to coding, playtesting, and live release.",
      "Designed and implemented a variety of player kits, creating unique loadouts with distinct abilities and weapons to diversify gameplay and cater to different playstyles.",
      "Released weekly updates live every Friday, delivering new content and balance changes informed by player analytics and feedback to ensure responsive, data-driven gameplay improvements.",
      "Implemented a physics cheat detection system, flagging thousands of player accounts for banning to ensure competitive integrity.",
      "Led design on the main season 10 mechanic, enabling players to vote on past-season callbacks each match."
    ]
  },
  {
    title: "Kybolt Games",
    company_name: "Gameplay Programmer Intern",
    icon: kybolt,
    iconBg: "#383E56",
    date: "June 2023 - Sep. 2023",
    points: [
      "Deployed action scripting features and balance changes for Causeway, an online MOBA game in alpha.",
      "Used alive server environment for feature testing, enabling real-time evaluation of new gameplay updates.",
      "Refactored code for better organization and readability by breaking character data into reusable components.",
    ],
  },
  {
    title: "California State University, Fullerton",
    company_name: "Relevant Coursework",
    icon: CSUFLogo,
    iconBg: "#383E56",
    date: "Sept 2021 - May 2023",
    points: [
      "Foundations of Software Engineering",
      "Data Structures and Algorithms",
      "Game Design and Production",
      "Mobile Device Application Programming",
    ],
  },
  {
    title: "Fullerton College",
    company_name: "Relevant Coursework",
    icon: FullertonCollegeLogo,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - May 2021",
    points: [
      "Linear Algebra and Differential Equations",
      "Discrete Mathematics",
      "Data Structures in C++",
      "Intro to Operating Systems"
    ],
  },
  {
    title: "Stater Bros. Grocery Market",
    company_name: "Manager In Training (Key Carrier)",
    icon: StaterBrosLogo,
    iconBg: "#383E56",
    date: "July 2016 - July 2019",
    points: [
      "Delivered an exceptional customer experience and was promoted to a management position in under 4 months.",
      "Supervised over 30 employees to complete tasks when the store manager was away.",
      "Directed and coordinated production, pricing, and distribution activities for various departments.",
    ],
  },
];

const projects = [{
    id: "Airship",
    name: "Airship [Unnanounced Game]",
    description: ["A Unity-based multiplayer platform presented by Easy Games!",
      "Currently working on an unnanounced game that will showcase Airship's capabilities."
    ],
    tags: [{
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "xml-text-gradient",
      },
      {
        name: "C#",
        color: "purple-text-gradient",
      },
    ],
    imageBackground: airship,
    website_link: "https://airship.gg/",
  },
  {
    id: "BedWars",
    name: "BedWars",
    description: ["One of the top PvP games on Roblox at the studio Easy Games, with over 13+ billion visits!",
      "Still can't believe I got to work on this game, felt like a dream come true when I got the job offer.  I love this game, the community, and the team.  Extemely grateful for the opportunity to work on such a large scale game.",
    ],
    tags: [{
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "RobloxStudios",
        color: "xml-text-gradient",
      },
    ],
    youtubeLink: 'b_T3821gcEk',
    youtube_source_code_link: "https://www.youtube.com/@realeasygames",
    website_link: "https://www.roblox.com/games/6872265039/",
  },
  {
    id: "Causeway",
    name: "MOBA Game in Alpha",
    description: ["A MOBA game I worked on at Kybolt Games.  I was responsible for implementing action scripting features and balance changes, as well as improving code organization and modularity.",
      "This was my first real game development job as a gameplay progamming intern!  I learned a lot about working in a team and the game development process.",
    ],
    tags: [{
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "XML",
        color: "xml-text-gradient",
      },
      {
        name: "Lua",
        color: "lua-text-gradient",
      },
      {
        name: "CustomEngine",
        color: "customengine-text-gradient",
      },
    ],
    imageBackground: causeway,
    website_link: "https://playcauseway.com/",
  }, {
    name: "SubTerra Metroidvania Game",
    description: ["A 2D metroidvania game I created with a team of students at CSUF.  I was the lead programmer and worked on the core systems, including the player controller, enemy AI, and inventory system.",
      "This project I felt really good about the systems I built and felt I was really coming into my own as a programmer."
    ],
    tags: [{
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "purple-text-gradient",
      },
    ],
    youtubeLink: '8v-usKs7G7k',
    source_code_link: "https://github.com/JasonZhu95/SubTerra",
    youtube_source_code_link: "https://www.youtube.com/watch?v=8v-usKs7G7k",
  }, {
    name: "Maze Tower Defense",
    description: ["I always loved Warcraft and Starcraft custom games, especially the tower defense ones.  I took a crack trying to emulate pathfinding and the mazing mechanics in Unity.", "This was one of the first games I made that I felt was actually fun to play and showed it to some friends."],
    tags: [{
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "purple-text-gradient",
      },
    ],
    youtubeLink: 'j75X9MqnLpo',
    source_code_link: "https://github.com/JasonZhu95/mazetd",
    youtube_source_code_link: "https://www.youtube.com/watch?v=j75X9MqnLpo",
  }, {
    name: "Warfront Tactics",
    description: ["One of my first solo development projects, a turn-based strategy game inspired by my love of tactics games.", "This was one of the first games I \"released\" and went throug the whole game development process using Itch.IO.", ],
    tags: [{
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "purple-text-gradient",
      },
    ],
    youtubeLink: 'hKKeacqhdwM',
    source_code_link: "https://github.com/JasonZhu95/WarfrontTactics",
    youtube_source_code_link: "https://www.youtube.com/watch?v=hKKeacqhdwM",
  }, {
    name: "Red Revolver 2D Platformer",
    description: ["After joining the Video Game Development Club at CSUF, I created this 2D platformer game using Unity and C#.", "It was an ambitious project, maybe a bit too ambitious as we didn't end up getting to the polish phase, but had a great time nevertheless."],
    tags: [{
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "purple-text-gradient",
      },
    ],
    youtubeLink: '4LV0fjtzvIc',
    source_code_link: "https://github.com/Shibotomoro/RedRevolver",
    youtube_source_code_link: "https://www.youtube.com/watch?v=4LV0fjtzvIc",
  }, {
    name: "Crossy Road Clone",
    description: ["A school project where I created a 3D version of Crossy Road utilizing Unreal Engine 4 and Blueprints.",
      "This was one of my first experiences using a game engine.",
    ],
    tags: [{
        name: "UnrealEngine4",
        color: "pink-text-gradient",
      },
      {
        name: "BluePrints",
        color: "yellow-text-gradient",
      },
    ],
    youtubeLink: 'Rmp36htmFKc',
    source_code_link: "https://github.com/JasonZhu95/CrossyRoadClone",
    youtube_source_code_link: "https://www.youtube.com/watch?v=Rmp36htmFKc",
  }, {
    name: "OpenGL Snake Game",
    description: ["A simple game of snake that expanded my knowledge of OpenGL and C++.",
      "This game was essentially my first crack at making a game, I dub this my \"first game\"."
    ],
    tags: [{
        name: "ModernOpenGL",
        color: "orange-text-gradient",
      },
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    youtubeLink: 'DzVj-D4RH9w',
    source_code_link: "https://github.com/JasonZhu95/jzhuSnake",
    youtube_source_code_link: "https://www.youtube.com/watch?v=DzVj-D4RH9w",
  }, {
    name: "Sorting Algorithm Visualizer",
    description: ["A simple visualizer that helped me learn the fundamentals of computer graphics.  One of my first projects that I used as a learning tool for OpenGL.",
      "This project was a turning point in my life.  It was the first project after I decided I wanted to pursue a career in game dev.",
    ],
    tags: [{
        name: "LegacyOpenGL",
        color: "orange-text-gradient",
      },
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    youtubeLink: '--RWaeg3ZhY',
    source_code_link: "https://github.com/JasonZhu95/SortingVisualizer",
    youtube_source_code_link: "https://www.youtube.com/watch?v=--RWaeg3ZhY",
  },
];

export {
  developerTools,
  experiences,
  programmingLanguages,
  projects,
  services,
  webTechnologies
};