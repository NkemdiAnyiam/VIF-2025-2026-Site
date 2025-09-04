export type Socials = {
  linkedin: string;
  youtube: string;
  twitter: string;
  github: string;
  facebook: string;
  instagram: string;
  website: string;
};

export type CommitteeMember = {
  fullName: string;
  role: string;
  rank: 1 | 2 | 3 | 4;
  imageName: string;
  specialImageName?: string;
  specialImgAlt?: string;
  description: string;
  socials: Partial<Socials>;
};

export const committeeMembersData: CommitteeMember[] = [
  {
    fullName: `Kayla McHaney`,
    role: `Committee Co-Director`,
    rank: 1,
    imageName: `Kayla-McHaney-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/kaylamchaney`,
      website: `https://km4artz.myportfolio.com/demo-reel-1`,
    },
    description: `Kayla McHaney is a junior pursuing a B.S. in Visualization with a minor in Virtual Production. While she is a generalist, her main interests lie in lighting and animation, and she is committed to building a career in the entertainment industry. Kayla actively participates in the Autodesk Design & Make Ambassador program, connecting with industry professionals and students nationwide. Outside of class, she enjoys video games, creating fanart, and keeping up with the latest animated films.`,
  },

  {
    fullName: `Taylor Null`,
    role: `Committee Co-Director`,
    rank: 1,
    imageName: `Taylor-Null-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/taylornull-ms`,
      website: `https://nullt2003.myportfolio.com`,
    },
    description: `Taylor Null is a first year graduate student pursuing a M.S. in Visualization at Texas A&M University, where she also completed her undergraduate degree with a minor in game design and development. She enjoys working in Unreal Engine and is interested in lighting and layout for animation and games.  In her free time, she enjoys going to the movies and finding inspiration in film.`,
  },

  {
    fullName: `Rachel Hitt`,
    role: `Event Management Lead`,
    rank: 2,
    imageName: `Rachel-Hitt-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/rachel-m-hitt/ `,
      website: `https://www.rachelhittportfolio.com/`,
    },
    description: `Rachel Hitt is a senior at Texas A&M University pursuing a Bachelor of Science in Visualization with a minor in Virtual Production, graduating in 2026. She has gained industry experience working as a Production Assistant on multiple film sets and is passionate about cinematography, directing, and exploring new possibilities in virtual production. In her free time, Rachel enjoys bingeing TV shows and movies, experimenting with photography, and going on coffee runs with friends and family.`,
  },

  {
    fullName: `Asia Erwin`,
    role: `Outreach Lead`,
    rank: 2,
    imageName: `Asia-Erwin-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/asia-erwin-971a8a242/`,
      website: `https://asiaerwin.myportfolio.com/`,
    },
    description: `Asia Erwin is a senior undergraduate student pursuing her Bachelors of Science in Visualization with a minor in Game Design. She mainly studies 3D Art for environments and aims to work in the Games or Architecture industries in the future. In her free time, she plays Dungeons and Dragons and other tabletop games.`,
  },

  {
    fullName: `Nkemdi Anyiam`,
    role: `Website Designer / Developer`,
    rank: 2,
    imageName: `Nkemdi-Anyiam-min`,
    specialImageName: `Nkemdi-Anyiam-Vector-min`,
    specialImgAlt: `Nkemdi Anyiam vectorized`,
    socials: {
      linkedin: `https://www.linkedin.com/in/nkemdi-anyiam/`,
      github: `https://github.com/NkemdiAnyiam`,
    },
    description: `Nkemdi Anyiam is a graduate student pursuing a PhD in Computer Science at Texas A&M University. He also graduated with his Master's and Bachelor's in Computer Science and double-minored in Art (New Media) and Game Design & Development at A&M as well. He is currently working as a graduate research assistant, focusing primarily on web visualizations, computer science education, and instructional design. His hobbies include Latin dance, rock climbing, gaming, watching anime, and Jiu-Jitsu.`,
  },
  
  // TODO: add Alicia Martinez

  {
    fullName: `Mayet Andreassen`,
    role: `Faculty Lead Liaison`,
    rank: 3,
    imageName: `Mayet-Andreassen-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/mayet-andreassen/`,
    },
    description: `Mayet Andreassen is currently working as a full-time Instructional Assistant Professor and Internship Coordinator in the Visualization Department at Texas A&M University. She is also a member of the TXMPA (Texas Motion Picture Assoc.) Board as the Education Representative. She has over 10 years of teaching experience with a focus in games and animation. She previously worked as a game and front-end artist, as well as a freelance illustrator and graphics artist, prior to becoming an educator.`,
  },
];
