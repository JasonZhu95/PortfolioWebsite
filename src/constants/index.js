import {
    mobile,
    backend,
    creator,
    web,
    cplusplus,
    csharp,
    git,
    jira,
    opengl,
    sdl2,
    slack,
    unity,
    unreal,
    CSUFLogo,
    FullertonCollegeLogo,
    StaterBrosLogo,
    kybolt,
  } from "../assets";
  
  export const navLinks = [
    {
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
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Gameplay Programmer",
      icon: creator,
    },
    {
      title: "Unity Developer",
      icon: web,
    },
    {
      title: "Unreal Developer",
      icon: mobile,
    },
    {
      title: "Computer Science Graduate",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Unreal",
      icon: unreal,
    },
    {
      name: "OpenGL",
      icon: opengl,
    },
    {
      name: "SDL2",
      icon: sdl2,
    },
    {
      name: "Jira",
      icon: jira,
    },
    {
      name: "Slack",
      icon: slack,
    },
  ];
  
  const experiences = [
    {
      title: "Kybolt Games",
      company_name: "Gameplay Programmer Intern",
      icon: kybolt,
      iconBg: "#383E56",
      date: "June 2023 - Present",
      points: [
        "Deployed action scripting features and balance changes for Causeway, an online MOBA game in alpha.",
        "Practiced an Agile methodology to prioritize gameplay programming tasks, ensuring efficient task management, improved collaboration, and timely delivery of key features.",
        "Enhanced modularity and readability by restructuring code organization and dividing character data into seperate components.",
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
  
  const projects = [
    {
      id: "Causeway",
      name: "MOBA Game in Alpha",
      description: [
        "Deployed action scripting features and balance changes for Causeway, an online MOBA game in alpha.",
        "Practiced an Agile methodology to prioritize gameplay programming tasks, ensuring efficient task management, improved collaboration, and timely delivery of key features.",
        "Enhanced modularity and readability by restructuring code organization and dividing character data into seperate components.",
      ],
      tags: [
        {
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
      youtubeLink: 'hKKeacqhdwM',
      source_code_link: "https://github.com/JasonZhu95/WarfrontTactics",
      youtube_source_code_link: "https://www.youtube.com/watch?v=hKKeacqhdwM",
    },
    {
      name: "SubTerra Metroidvania Game",
      description: [
        "Coordinated with a team of 5 to optimize workflow utilizing GitHub integration, assuming a leadership role.",
        "Developed a multi-weapon system which handles sprite animation, sfx, attack data and hitboxes through a custom inspector.",
        "Implemented a dialogue system with Ink integration that parses text files for determining which character portrait or audio file should be played.",
        "Generated persitant encrypted player data locally allowing for multiple save and load files.",
      ],
      tags: [
        {
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
    },
    {
      name: "Maze Tower Defense",
      description: [
        "Designed a grid visualization system that handles the placement and removal of towers, enemy movement, and pathfinding calculations.",
        "Implemented responsive user interfaces, including menu screens, in-game HUDs, and upgrade systems, enhancing the overall player experience.",
        "Developed a flexible and cuztomizable enemy system utilizing Scriptable Objects to store and manage enemy data.",
      ],
      tags: [
        {
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
    },
    {
      name: "Warfront Tactics",
      description: [
        "Employed the observer pattern, event actions, and delegates to engineer a modular turn management system.",
        "Integrated an A* pathfinding algorithm for enemy AI, creating challenging and strategic enemy movements and interactions.",
        "Crafted a dynamic path visualization system that places arrow sprites based on the hovered player path.",
      ],
      tags: [
        {
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
    },
    {
      name: "Red Revolver 2D Platformer",
      description: [
        "Collaborated in a team of 8 students as the lead programmer, using Jira and an Agile Scrum development process.",
        "Implemented a core component pattern to reduce repetitive code that handled entity collision, movement, and stats.",
        "Managed the player and enemy controller scripts as hierarchial finite state machines that increased the flexibility and maintenance of the codebase.",
        "Increased game-feel with player forgiveness mechanics such as increased input buffers, coyote time, halved gravity jump peak, and momentum storage.",
      ],
      tags: [
        {
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
    },
    {
      name: "Crossy Road Clone",
      description: [
        "Produced 3d assets using a Voxel editor and connected animations using Unreal blueprints.",
        "Dynamically generated and deleted alternating lanes of terrain based on player collision.",
        "Employed the usage of material instances and a UI handling collectibles and player score to add polish to the game.",
      ],
      tags: [
        {
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
    },
    {
      name: "OpenGL Snake Game",
      description: [
        "Created a texture and shader class that reads data from files to create graphics using modern OpenGL. Features techniques such as texture wrapping and filtering, coordinate systems, and collision detection",
        "Linked multiple dependencies such as GLAD, GLFW, GLM (math library for graphics software), irrKlang (audio dependency), and glText (text rendering) to add polish and export the game.",
        "Utilized unit testing to check individual functions such as the linking and compiling of shaders and textures and GLFW window opening and closing.",
      ],
      tags: [
        {
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
    },
    {
      name: "Sorting Algorithm Visualizer",
      description: [
        "Generated graphics which exhibit five sorting algorithms: Quick, Merge, Bubble, Selection, and Insertion Sort",
        "Constructed a menu interface that allow for selection of number of values, speed of sort, type of sort, and exit.",
        "Administered a GitHub workflow of branching, commits, pulling, and pushing to track logs and project progression.",
      ],
      tags: [
        {
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
  
  export { services, technologies, experiences, projects };