// // import React from 'react';
// import "./App.css";

// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Hellow</h1>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { Component } from "react";
// import axios from "axios";

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quate: "",
//       isLoaded: false,
//     };
//   }
//   componentDidMount() {
//     axios.get("https://yts.mx/api/v2/list_movies.json").then((response) => {
//       console.log(response);
//       const rando = Math.floor(Math.random() * 20);
//       const name = response.data.data.movies[rando];
//       setTimeout(() => {
//         this.setState({ quate: name.title_long, isLoaded: "true" });
//       }, 1000);
//     });
//   }
//   // componentDidMount() {
//   //   setTimeout(() => {
//   //     console.log("helllow");
//   //   }, 3000);
//   // }
//   render() {
//     return (
//       <div className="App">
//         {this.state.isLoaded ? (
//           <div>
//             <h4>Always Remember</h4>
//             <p>{this.state.quate}</p>
//           </div>
//         ) : (
//           <div className="loading"></div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import ApiComponent from "./ApiComponent";

// export class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <ApiComponent nameUser="bradtraversy" />
//         <ApiComponent nameUser="nabarajrai" />
//         <ApiComponent nameUser="colt" />
//         <ApiComponent nameUser="rameshsyn" />
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import Deck from "./Deck";

const App = () => {
  return (
    <div>
      <Deck />
    </div>
  );
};

export default App;
