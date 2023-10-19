// import React from 'react'
// if you want to use react fragments with syntax then you need to import
// ur you could use short form of react fragment which is much easier and doesn't require importing react
// not required anymore after react version 17

import { Fragment } from "react";


// oldest methord :-

// const app = () => {
//   return React.createElement(
//      "div",
//      {},
//      React.createElement("h1",{},"Hello world")
//    );
// };

// or

// Normal
// function app() {
//   return <div><h1>Hello World</h1></div>;
// }

// fat arrorw function
const App1 = () => {
  return (
    <div>
        welcome hello world
    </div>
  )
};

// react fragment
// const App = () => {
//   return (
//     <React.Fragment>
//         welcome hello world
//     </React.Fragment>
//   )
// };

// react Fragment short form
const App = () => {
  return (
    <> {/* short form of react fragment */}
      <h1 className="myclass">welcome hello world</h1>   {/* this looks like html but its JSX */}
      {/* in react jsx we use classname instead of class */}
      <p> awesome</p>
      <img src="" alt= "image"  />
      <MyName /> {/* passing a component */}
      <MyName />
      {/* in react its necessary to clase all tags or at least put " / " before ending the tag like i did in image tag */}
    </>
  )
};


const MyName = () => {
  return <h1> jeet raghuwanshi</h1>;
}



export default App
