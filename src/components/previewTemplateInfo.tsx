/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

const PreviewTemplateInfo = ({
  img,
  description,
}: {
  img: string;
  description: string;
}) => {
  const [image, setImage] = React.useState();

  const getImage = async () => {
    setImage((await import(`../assets/images/${img}.png`)).default);
  };

  React.useEffect(() => {
    img && getImage();
  }, [img]);

  return (
    <>
      {img ? (
        <div className="d-flex flex-column preview-box">
          <h3>Previsualizar</h3>
          <div className="d-flex gap-3 step-one-box-container">
            <div className="step-one-image-container">
              <img src={image} alt=""></img>
            </div>{" "}
            <p>{description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PreviewTemplateInfo;
