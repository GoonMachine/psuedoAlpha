interface signUpData {
    id: number;
    name: string;
    image: string;
    badge: string;
    remaining: number;
    timestamp: string; // added field
    text: string;
  }
  
  const signUpStream: signUpData[] = [
    {
      id: 1,
      name: 'suiContrarian',
      image: 'https://pbs.twimg.com/profile_images/1632973165470294018/H_bVDC_R_400x400.jpg',
      badge: 'psuido #1',
      remaining: 4999,
      timestamp: "11:59pm", // current timestamp
      text: 'gaming is the next ponzi',
    },
    {
      id: 2,
      name: 'Regal King',
      image: 'https://pbs.twimg.com/profile_images/1572281123358801922/80U_8NOk_400x400.jpg',
      badge: 'psuido #2',
      remaining: 4998,
      timestamp: "11:59pm", // current timestamp
      text: 'why did the user use the blockchain? free money.',
    },
    {
      id: 3,
      name: 'donkeykongDick',
      image: 'https://pbs.twimg.com/profile_images/1607484556105613313/FGKu9zY8_400x400.jpg',
      badge: 'psuido #3',
      remaining: 4997,
      timestamp: "11:59pm", // current timestamp
      text: 'beep boop bop, i play with my cock',
    },
    {
      id: 4,
      name: 'suiXBT',
      image: 'https://pbs.twimg.com/profile_images/1601784759130071041/AFf-Tlc6_400x400.jpg',
      badge: 'psuido #4',
      remaining: 4996,
      timestamp: "12:00pm", // current timestamp
      text: '???',
    },
    {
      id: 2,
      name: 'Regal King',
      image: 'https://pbs.twimg.com/profile_images/1572281123358801922/80U_8NOk_400x400.jpg',
      badge: 'psuido #2',
      remaining: 4998,
      timestamp: "11:59pm", // current timestamp
      text: 'why did the user use the blockchain? free money.',
    },
    {
      id: 3,
      name: 'donkeykongDick',
      image: 'https://pbs.twimg.com/profile_images/1607484556105613313/FGKu9zY8_400x400.jpg',
      badge: 'psuido #3',
      remaining: 4997,
      timestamp: "11:59pm", // current timestamp
      text: 'beep boop bop, i play with my cock',
    },
    {
      id: 4,
      name: 'suiXBT',
      image: 'https://pbs.twimg.com/profile_images/1601784759130071041/AFf-Tlc6_400x400.jpg',
      badge: 'psuido #4',
      remaining: 4996,
      timestamp: "12:00pm", // current timestamp
      text: '???',
    },
  ];
  
  export default signUpStream;
  
    