
// class Times extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   populateTime() {
//     let times = [];
//     let hours, minutes, ampm;
//     for (let i = 0; i < 1440; i += 30) {
//       hours = Math.floor(i / 60);
//       minutes = i % 60;
//       if (minutes < 10) {
//         minutes = "0" + minutes;
//       }
//       ampm = hours % 24 < 12 ? "AM" : "PM";
//       hours = hours % 12;
//       if (hours === 0) {
//         hours = 12;
//       }
//       times.push({
//         hours: hours,
//         minutes: minutes,
//         ampm: ampm
//       });
//     }
//     return times;
//   }

//   render() {
//     return(
//       this.populate()
//     );
//   }

// }

// export default Times;
