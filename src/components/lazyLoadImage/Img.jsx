import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"

const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
            src={src}
            effect="blur"
            alt=""
            className={className || ""}
        />
    );
}
export default Img;