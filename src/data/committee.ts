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
    fullName: `Jenny Tran`,
    role: `Committee Co-Director`,
    rank: 1,
    imageName: `Jenny-Tran-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/jennyhantran/`,
    },
    description: `Jenny Tran is a Senior currently working towards her B.S. in Visualization as well as a minor in Film Studies. Her focus is on project management, and she is passionate about pursuing a future career in the animated film industry. She is currently serving as President of TAMU Women in Animation. Outside of class, Jenny enjoys playing video games and hanging out with her cats.`,
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
    description: `Nkemdi Anyiam is a graduate student pursuing a PhD in Computer Science at Texas A&M University. He also graduated with his Master’s and Bachelor’s in Computer Science and double-minored in Art (New Media) and Game Design & Development at A&M as well. He is currently working as a graduate research assistant, focusing primarily on web visualizations and computer science education. His hobbies include Latin dance, rock climbing, gaming, watching anime, and voice-acting.`,
  },

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

  {
    fullName: `Jocylin "Joy" Lopez`,
    role: `TV/Marketing Lead`,
    rank: 2,
    imageName: `Jocylin-Lopez-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/jocylin-lopez-763850221/`,
      website: `http://jocylinlopez.com/`,
    },
    description: `Joy is a graduate student pursuing a Master's in Visualization, specializing in character design, modeling, and game design. She works in marketing at the LIVE LAB, manages social media for the university, and holds roles as Social Media Officer for 2D Visual Developers and Lead Concept Artist mentor. Outside of her academic and professional life, Joy enjoys video games, anime, and oil painting.`,
  },

  {
    fullName: `Skylar La`,
    role: `Committee Co-Director`,
    rank: 1,
    imageName: `Skylar-La-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/skylar-la-556a712b4/`,
    },
    description: `Skylar La is a second-year graduate student pursuing a Master of Science in Visualization at Texas A&M University. She owns 2 university degrees (one in Economics, the other in Multimedia). However, she chose to pursue 3D for her career path, especially focusing on Modeling and Layout. She is now the Vice President of TAMU VGSA (Texas A&M Visualization Graduate Student Association) and serves as a graduate assistant for Visual studio classes. Her hobbies include playing instruments and composing music.`,
  },

  {
    fullName: `Shea Stafford`,
    role: `Event Management Lead`,
    rank: 2,
    imageName: `Shea-Stafford-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/shea-stafford-01a28a28a/`,
      website: `https://sheastafford.myportfolio.com/`,
    },
    description: `Shea Stafford is a Sophomore Visualization student pursuing her B.S. degree. Her focus is in Project Management, Surfacing, and Lighting. In addition, she is the Logistics Coordinator of GigaJam, a member of the HIVE, and Industry Relations for A&M’s ACM SIGGRAPH Chapter. She also enjoys learning about animation history, reading fantasy novels, watching movies, and drawing.`,
  },

  {
    fullName: `Marisa "MJ" Jacques`,
    role: `Outreach Lead`,
    rank: 2,
    imageName: `Marisa-Jacques-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/marisa-jacques-74ab16185/`,
      website: `https://marisajacquescolle.wixsite.com/marisa-jacques`,
    },
    description: `MJ is a first-year graduate student pursuing a Master of Science in Visualization, and she earned her B.S. in Animation from Sam Houston State University in 2022. She is currently focusing on developing her skills in 3D surfacing, and she has had an ongoing interest in filmmaking since childhood. MJ works as a graduate assistant for Research in Visualization Tech and enjoys talking to students about their capstone projects to help them develop strong ideas. On the weekends, she works on side projects and spends time in the company of her many animals.`,
  }
];
