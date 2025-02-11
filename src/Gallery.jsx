import React from "react";
import HornedBeast from "./HornedBeast";

class Gallery extends React.Component {
  render() {
    return (
      <>
        <HornedBeast 
        title="UniWhal"  
        imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" 
         description="A unicorn and a narwhal nuzzling their horns"/>
        <HornedBeast title="Rhino Family"  imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"   description="Parent rhino with two babies" />
      </>
    );
  }
}

export default Gallery;
