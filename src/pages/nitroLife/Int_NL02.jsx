import React, { useState } from 'react'
import MeetTeam from './MeetTeam'
// import CustomNewCard from '../../components/CustomNewCard'
import CustomCard from '../../components/customCard'
import { Anton, anurag, nitin, sarvanan, siva } from "../../assets/founders";

const Int_NL02 = ({setScene}) => {

  const [more, setMore] = useState(false);
  const [clicked, setClicked] = useState(0);
  console.log(clicked);
  
  const info = [
    {
      name: "Nitin Bagde",
      designation: "VP- Engineering",
      description: ` <b> Nitin</b>, a seasoned architect of digital realms, brings a rich tapestry of experience to Liquid Nitro as our new Vice President of Engineering. With over two decades dedicated to the mobile gaming industry, his journey is a testament to his passion and unwavering commitment to pushing the boundaries of interactive entertainment. Starting as a programmer, Nitin honed his craft, crafting intricate digital worlds and immersive gameplay experiences. His evolution into a strategic leader has been equally impressive, as he has successfully helmed high-performance teams, delivering blockbuster titles that have captivated millions.<br /> Nitin revitalized <b> Bejeweled Blitz </b>—a beloved game that once relied on outdated tech for revenue. It was like fitting a classic car with a turbocharged engine. His team didn’t settle for a mere polish; they orchestrated a complete reinvention. By infusing modern design and cutting-edge tech, they renewed the player experience. The revamped UI/UX and modular approach made it easier to manage and monetize.<br /> Nitin’s career boasts an impressive lineup of titles, including <b> Spiderman, Lion King, Plants Vs Zombies, Monopoly, Need for Speed No Limits, Real Racing, and Battlefield Mobile</b>. His versatility in the gaming industry is unmatched.`,
      linkedIn: "https://www.linkedin.com/in/nitin-bagde/",
      photo: nitin,
    },
    {
      name: "Anurag Yadav",
      designation: "VP - of Art",
      description: `<b> Anurag </b>, a seasoned professional who brings a rich tapestry of experience to Liquid Nitro. With over two decades at the intersection of art and technology, Anurag’s journey has been nothing short of extraordinary. His diverse background spans the dynamic world of gaming, the visual spectacle of CGI and VFX, advertising, education, and startups, offering a unique perspective that will undoubtedly enrich our creative process. <br />  During his tenure at EA, Anurag was the strategic architect behind the visual splendor of gaming giants such as <b> Bejeweled, Plants vs. Zombies, The Sims franchise, Need for Speed No Limits, and Real Racing 3</b>. He skillfully harmonized teams of artists, ensuring the visual identity of these iconic games aligned with their core essence. His focus on the strategic management of art pipelines ensured efficiency, quality, and alignment with broader game objectives. Anurag is a visionary who seamlessly blends art, technology, and strategy. With a keen eye for business and a passion for pixel-perfect execution, his expertise spans the entire art production lifecycle. His ability to build high-performing art teams, coupled with his knack for cost-effective solutions, has made him a sought-after leader.<br />   One of Anurag’s career highlights was joining EA’s India studio, Slingshot. There, he orchestrated the transformation of the Art discipline through excellent leadership. Collaborating with EA studios worldwide, Anurag fueled top mobile franchises and spearheaded the metamorphosis of Slingshot’s art ecosystem. <br />   Outside of the digital realm, Anurag finds solace in traditional art. It serves as a creative outlet, allowing him to explore different mediums and techniques.`,
      linkedIn: "https://www.linkedin.com/in/anurag-yd/",
      photo: anurag,
    },
    {
      name: "Anthony Zhahalkowicz",
      designation: "Business Development Director",
      description: `With about 4 years of experience in business development within the GameDev industry, Anton holds a degree in Psychology and Sociology. His passion lies in understanding people and aiding them by identifying bottlenecks and finding ways to improve processes.  <br /> Anton has collaborated with a diverse array of companies throughout his career, including industry giants like Netflix, THQ Nordics, Activision Blizzard, Huuuge Games, Stubby Games, Tom Horn Gaming, Team17, Gameloft, Ubisoft, Scopely, Megabit Publishing, and many others. <br />  One of Anton’s notable achievements includes starting with a small team as a test and managing the relationship so effectively that it evolved into a long-lasting partnership of 2 years. This collaboration is ongoing with a AAA game developer and publisher, showcasing Anton’s ability to foster and maintain significant industry relationships. <br />  Anton views the LNG team as a perfect embodiment of unity, transparency, and integrity. To him, the team feels like a family within the company. The squad’s extensive 360-degree vision and expertise in game development, proven by their solid track record with EA games, make LNG an ideal environment for Anton. <br />  Outside of gaming, Anton has a keen interest in history and sociology. He also enjoys shooting at the gun range, racing, and car mechanics, bringing a diverse set of hobbies and skills to his professional life.`,
      linkedIn: "https://www.linkedin.com/in/anthonyzhahalkowicz/",
      photo: Anton,
    },
    {
      name: "Siva Reddy Vippala",
      designation: "Sr. Technical Director",
      description: `With over 12 years in the game development industry, Siva has honed his skills as a server-side engineer, tackling complex challenges and pushing the boundaries of what's achievable. <br /> <br />  Siva's journey began with curiosity about how games generate revenue. The intricate dance of microtransactions, in-app purchases, ads, and premium game sales fascinated him. Understanding this ecosystem opened his eyes to the industry's potential. As a server-side engineer, he thrives on creative problem-solving and leveraging cutting-edge technology. <br /> <br /> Siva's portfolio boasts an impressive lineup of mobile games: <br /> <br />  <ul > <li> ~ Monopoly Hotels </li> <li> ~ Heroes of Dragon Age (for a brief period) </li> <li> ~ Tetris Blitz </li> <li> ~ Bejeweled Blitz </li> <li> ~ Plants vs. Zombies (1, 2, 3) </li> <li> ~ Plants vs. Zombies Heroes </li> <li> ~ CnC Mobile  </li> <li> ~ The Sims Mobile </li> <li> ~ UFC 2 </li> </ul>  <br />   Siva's tech challenges have become cherished memories. Whether scaling solutions for millions of users in Tetris Blitz, Plants vs. Zombies 3, or Heroes of Dragon Age, he consistently stepped outside his comfort zone.  <br /><br />  Siva's interests extend beyond gaming. He recently completed a one-year course in corporate and business strategy at IIM Lucknow. His goal? To contribute to LNG's strategic growth and success as part of our leadership team.`,
      linkedIn: "https://www.linkedin.com/in/sivareddyvippala/",
      photo: siva,
    },
    {
      name: "Saravanan Sankar",
      designation: "Lead Game Designer",
      description: `Sarvanan’s love with games began long before he ever wrote a line of code. As a lifelong gamer, he reveled in the immersive worlds, the adrenaline-pumping challenges, and the sheer joy of exploration. But it wasn’t enough to be a mere player; Sarvanan wanted to shape those worlds, to infuse them with his own brand of magic. <br />  <br /> Crafting Gameplay, One Pixel at a Time <br /> Game development became his canvas—a place where pixels transformed into playgrounds. Sarvanan’s creative challenges were like intricate puzzles waiting to be solved. Whether it was designing innovative gameplay mechanics or weaving compelling narratives, he thrived oclassName="list-disc"n the thrill of creation. And when players immersed themselves in his games, he felt a sense of fulfillment that transcended mere lines of code. <br /> <br />  Sarvanan’s portfolio reads like a gamer’s dream. Here are some of the titles he’s left his mark on: <br /> <b> Bejeweled </b>: The match-three phenomenon that sparked countless gem-swapping obsessions. <br /> <b>Kitchen Scramble</b>: A delightful culinary adventure where players whipped up dishes faster than a chef in a frenzy. <br /> <b> Simcity Buildit</b>: The ultimate city-building simulator, where urban planning met player-driven creativity. <br /> <b> Real Racing 3</b>: The adrenaline rush of high-speed racing, meticulously crafted for mobile screens. <br /> <br />   The Real Racing 3 Revelation <br /> But it was at EA Games that Sarvanan faced his greatest challenge. The studio had acquired a new game, and the pressure was on to seamlessly integrate it into the existing ecosystem. The clock was ticking, but Sarvanan’s team didn’t flinch. They orchestrated a flawless transition, releasing new content without disrupting players. How? By listening to player feedback, iterating tirelessly, and exceeding expectations. It was a lesson in collaboration and the power of player-centric development.`,
      linkedIn: "https://www.linkedin.com/in/saravanan-sankar/",
      photo: sarvanan,
    },
    {
      name: "Nitin Bagde",
      designation: "VP- Engineering",
      description: ` <b> Nitin</b>, a seasoned architect of digital realms, brings a rich tapestry of experience to Liquid Nitro as our new Vice President of Engineering. With over two decades dedicated to the mobile gaming industry, his journey is a testament to his passion and unwavering commitment to pushing the boundaries of interactive entertainment. Starting as a programmer, Nitin honed his craft, crafting intricate digital worlds and immersive gameplay experiences. His evolution into a strategic leader has been equally impressive, as he has successfully helmed high-performance teams, delivering blockbuster titles that have captivated millions.<br /> Nitin revitalized <b> Bejeweled Blitz </b>—a beloved game that once relied on outdated tech for revenue. It was like fitting a classic car with a turbocharged engine. His team didn’t settle for a mere polish; they orchestrated a complete reinvention. By infusing modern design and cutting-edge tech, they renewed the player experience. The revamped UI/UX and modular approach made it easier to manage and monetize.<br /> Nitin’s career boasts an impressive lineup of titles, including <b> Spiderman, Lion King, Plants Vs Zombies, Monopoly, Need for Speed No Limits, Real Racing, and Battlefield Mobile</b>. His versatility in the gaming industry is unmatched.`,
      linkedIn: "https://www.linkedin.com/in/nitin-bagde/",
      photo: nitin,
    },
    {
      name: "Anurag Yadav",
      designation: "VP - of Art",
      description: `<b> Anurag </b>, a seasoned professional who brings a rich tapestry of experience to Liquid Nitro. With over two decades at the intersection of art and technology, Anurag’s journey has been nothing short of extraordinary. His diverse background spans the dynamic world of gaming, the visual spectacle of CGI and VFX, advertising, education, and startups, offering a unique perspective that will undoubtedly enrich our creative process. <br />  During his tenure at EA, Anurag was the strategic architect behind the visual splendor of gaming giants such as <b> Bejeweled, Plants vs. Zombies, The Sims franchise, Need for Speed No Limits, and Real Racing 3</b>. He skillfully harmonized teams of artists, ensuring the visual identity of these iconic games aligned with their core essence. His focus on the strategic management of art pipelines ensured efficiency, quality, and alignment with broader game objectives. Anurag is a visionary who seamlessly blends art, technology, and strategy. With a keen eye for business and a passion for pixel-perfect execution, his expertise spans the entire art production lifecycle. His ability to build high-performing art teams, coupled with his knack for cost-effective solutions, has made him a sought-after leader.<br />   One of Anurag’s career highlights was joining EA’s India studio, Slingshot. There, he orchestrated the transformation of the Art discipline through excellent leadership. Collaborating with EA studios worldwide, Anurag fueled top mobile franchises and spearheaded the metamorphosis of Slingshot’s art ecosystem. <br />   Outside of the digital realm, Anurag finds solace in traditional art. It serves as a creative outlet, allowing him to explore different mediums and techniques.`,
      linkedIn: "https://www.linkedin.com/in/anurag-yd/",
      photo: anurag,
    },
    {
      name: "Anthony Zhahalkowicz",
      designation: "Business Development Director",
      description: `With about 4 years of experience in business development within the GameDev industry, Anton holds a degree in Psychology and Sociology. His passion lies in understanding people and aiding them by identifying bottlenecks and finding ways to improve processes.  <br /> Anton has collaborated with a diverse array of companies throughout his career, including industry giants like Netflix, THQ Nordics, Activision Blizzard, Huuuge Games, Stubby Games, Tom Horn Gaming, Team17, Gameloft, Ubisoft, Scopely, Megabit Publishing, and many others. <br />  One of Anton’s notable achievements includes starting with a small team as a test and managing the relationship so effectively that it evolved into a long-lasting partnership of 2 years. This collaboration is ongoing with a AAA game developer and publisher, showcasing Anton’s ability to foster and maintain significant industry relationships. <br />  Anton views the LNG team as a perfect embodiment of unity, transparency, and integrity. To him, the team feels like a family within the company. The squad’s extensive 360-degree vision and expertise in game development, proven by their solid track record with EA games, make LNG an ideal environment for Anton. <br />  Outside of gaming, Anton has a keen interest in history and sociology. He also enjoys shooting at the gun range, racing, and car mechanics, bringing a diverse set of hobbies and skills to his professional life.`,
      linkedIn: "https://www.linkedin.com/in/anthonyzhahalkowicz/",
      photo: Anton,
    },
    {
      name: "Siva Reddy Vippala",
      designation: "Sr. Technical Director",
      description: `With over 12 years in the game development industry, Siva has honed his skills as a server-side engineer, tackling complex challenges and pushing the boundaries of what's achievable. <br /> <br />  Siva's journey began with curiosity about how games generate revenue. The intricate dance of microtransactions, in-app purchases, ads, and premium game sales fascinated him. Understanding this ecosystem opened his eyes to the industry's potential. As a server-side engineer, he thrives on creative problem-solving and leveraging cutting-edge technology. <br /> <br /> Siva's portfolio boasts an impressive lineup of mobile games: <br /> <br />  <ul > <li> ~ Monopoly Hotels </li> <li> ~ Heroes of Dragon Age (for a brief period) </li> <li> ~ Tetris Blitz </li> <li> ~ Bejeweled Blitz </li> <li> ~ Plants vs. Zombies (1, 2, 3) </li> <li> ~ Plants vs. Zombies Heroes </li> <li> ~ CnC Mobile  </li> <li> ~ The Sims Mobile </li> <li> ~ UFC 2 </li> </ul>  <br />   Siva's tech challenges have become cherished memories. Whether scaling solutions for millions of users in Tetris Blitz, Plants vs. Zombies 3, or Heroes of Dragon Age, he consistently stepped outside his comfort zone.  <br /><br />  Siva's interests extend beyond gaming. He recently completed a one-year course in corporate and business strategy at IIM Lucknow. His goal? To contribute to LNG's strategic growth and success as part of our leadership team.`,
      linkedIn: "https://www.linkedin.com/in/sivareddyvippala/",
      photo: siva,
    },
    {
      name: "Saravanan Sankar",
      designation: "Lead Game Designer",
      description: `Sarvanan’s love with games began long before he ever wrote a line of code. As a lifelong gamer, he reveled in the immersive worlds, the adrenaline-pumping challenges, and the sheer joy of exploration. But it wasn’t enough to be a mere player; Sarvanan wanted to shape those worlds, to infuse them with his own brand of magic. <br />  <br /> Crafting Gameplay, One Pixel at a Time <br /> Game development became his canvas—a place where pixels transformed into playgrounds. Sarvanan’s creative challenges were like intricate puzzles waiting to be solved. Whether it was designing innovative gameplay mechanics or weaving compelling narratives, he thrived oclassName="list-disc"n the thrill of creation. And when players immersed themselves in his games, he felt a sense of fulfillment that transcended mere lines of code. <br /> <br />  Sarvanan’s portfolio reads like a gamer’s dream. Here are some of the titles he’s left his mark on: <br /> <b> Bejeweled </b>: The match-three phenomenon that sparked countless gem-swapping obsessions. <br /> <b>Kitchen Scramble</b>: A delightful culinary adventure where players whipped up dishes faster than a chef in a frenzy. <br /> <b> Simcity Buildit</b>: The ultimate city-building simulator, where urban planning met player-driven creativity. <br /> <b> Real Racing 3</b>: The adrenaline rush of high-speed racing, meticulously crafted for mobile screens. <br /> <br />   The Real Racing 3 Revelation <br /> But it was at EA Games that Sarvanan faced his greatest challenge. The studio had acquired a new game, and the pressure was on to seamlessly integrate it into the existing ecosystem. The clock was ticking, but Sarvanan’s team didn’t flinch. They orchestrated a flawless transition, releasing new content without disrupting players. How? By listening to player feedback, iterating tirelessly, and exceeding expectations. It was a lesson in collaboration and the power of player-centric development.`,
      linkedIn: "https://www.linkedin.com/in/saravanan-sankar/",
      photo: sarvanan,
    },
  ];
  return (
    <>
  
    { clicked == 0 ? (
 <CustomCard setScene={setScene} className={` z-10 `}>

 <div className={`flex flex-wrap justify-center  gap-4 sm:gap-10  h-[70svh] ${clicked!=0 ? "overflow-y-hidden" :  "overflow-y-auto"} text-white`}>
 {info?.map((val,idx)=> {
   if(more){
     
     return <Card info = {val} setClicked={setClicked}/>
   }
   else {
     if(idx <6) return <Card info={val} setClicked={setClicked}/> 
   }
 })}
 
 
 </div>
 <div className={`flex items-center justify-center mt-4 ${more && "hidden"}`}>
 
 <button className='text-white border-gray-400 border-[1px] p-2 rounded-xl ' 
 onClick={()=> setMore(true)}
 >More Team Members</button>
 </div>
 </CustomCard>
    )
    : (
<CustomCard setScene={setClicked} className={"z-10 overflow-y-scroll"}>
  <MeetTeam info={clicked} fullInfo= {info } setClicked={setClicked}/>
</CustomCard>
    )
  }
    </>
  )
    
}

const Card= ({info , setClicked})=> {
  return (
    <div className='flex min-w-60   h-fit  flex-col items-center gap-4 hover:cursor-pointer'
    onClick={()=>setClicked(info)} >
      <div>
        <img src={info.photo} alt="" className='w-44' />
      </div>
      <div className='space-y-2 text-center'>
        <h1 className='text-xl font-semibold'>{info?.name}</h1>
        <h2 className='text-gray-300'>{info?.designation}</h2>
      </div>
    </div>
  )
}
export default Int_NL02