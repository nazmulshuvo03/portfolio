import React from "react";

function ImageSlider({ images }) {
    //console.log(images);
    return (
        <div
            id="targeted-carousel"
            className="carousel slide"
            data-ride="carousel"
        >
            <div className="carousel-inner">
                {images &&
                    images.map((image, i) => {
                        return (
                            <div
                                className={
                                    i === 0
                                        ? "carousel-item active"
                                        : "carousel-item"
                                }
                                key={i}
                            >
                                <img
                                    src={image}
                                    className="d-block w-100"
                                    alt="first slide"
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ImageSlider;
