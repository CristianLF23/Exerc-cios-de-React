import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
  return (
    <Fragment>
      <p>{props.description}</p>
      <p>
        <a href={props.link}>{props.textoLink}</a>
      </p>
      <p>{props.texto2}</p>
    </Fragment>
  );
};

export default DescriptionWithLink;
