
// import React, { useEffect, useState } from 'react'

// const Countdown: React.FC = () => {
//   const [timeLeft, setTimeLeft ] = useState <{
//     days: number;
//     hours: number;
//     minutes : number;
//     seconds: number;
  
//   }>({
//     days: 0,
//     hours : 0,
//     minutes: 0,
//     seconds : 0,
//   });

//   useEffect (() =>{
//     const calculateTimeLeft = () => {
//       const now = new Date ();
//       const nextChristmas = new Date (now.getFullYear(), 11,25);
//        if (now > nextChristmas) {
//         nextChristmas.setFullYear(nextChristmas.getFullYear()+1 );
//        }

//        const difference = nextChristmas.getFullYear () -now.getTime();

//        setTimeLeft ({
//         days: Math.floor(difference / (1000 * 60 * 60 *24)),
//         hours:Math.floor ((difference /(1000 * 60 * 60)) % 24),
//         minutes: Math.floor  ((difference / (1000 * 60))% 60),
//         seconds: Math.floor ((difference/ 1000) % 60),
//        });
//     };
//     calculateTimeLeft ();
//     const timer = setInterval(calculateTimeLeft, 1000);
//     return () => clearInterval(timer);
//   }, [])

//   return (
//     <div style={{textAlign: 'center' , margin : "50px "}}>
//       <h1> Merry Christmass countdown</h1>
//       <div style={{ fontSize : "2rem",fontfamily: 'Arial , sans-serif'}}>
//         {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes}Minutes {timeLeft.seconds} seconds
//       </div>
//     </div>
//   );
// };

// export default Countdown;