import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/descriptionWithLink";

const Planet = (props) => {
  return (
    <Fragment>
      <br></br>
      <h4>{props.name}</h4>
      <DescriptionWithLink
        description={props.description}
        link={props.link}
        textoLink={props.textoLink}
        texto2={props.texto2}
      />
      <GrayImg img_url={props.img_url} />
    </Fragment>
  );
};

export default Planet;
