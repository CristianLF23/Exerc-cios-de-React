import React, { Fragment } from "react";
import Planet from "./planet";

const Planets = () => {
  return (
    <Fragment>
      <br></br>
      <h3>PLanet List</h3>
      <hr />
      <Planet
        name="Mercúrio"
        description="belo planeta"
        img_url="https://img.r7.com/images/2014/12/26/5c0bnccaz9_jmmx400nh_file.jpg"
        link="https://pt.wikipedia.org/wiki/Vénus_(planeta)"
        textoLink="Esse link é mágico"
        texto2="Clique no link de cima"
      />
      <Planet
        name="Venus"
        description="outro belo planeta"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
        link="https://pt.wikipedia.org/wiki/Vénus_(planeta)"
        textoLink="Esse link é mágico clica aqui"
        texto2="Clique no link de cima"
      />
    </Fragment>
  );
};

export default Planets;
