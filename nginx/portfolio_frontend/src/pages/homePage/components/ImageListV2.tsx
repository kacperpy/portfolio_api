import { Divider, Grid, Typography } from "@mui/material";
import styles from "./ImageListV1.module.css";
import { Image } from "../../../api/types";

interface ImageListV1Props {
  images: Image[];
  handleImageClick: (image: Image) => void;
}

export const ImageListV2 = ({ images, handleImageClick }: ImageListV1Props) => {
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const tiltContainer = event.currentTarget;
    const tiltBox = tiltContainer.getBoundingClientRect();
    const containerWidth = tiltBox.width;
    const containerHeight = tiltBox.height;

    const mouseX = event.clientX - tiltBox.left;
    const mouseY = event.clientY - tiltBox.top;

    const tiltX = (mouseX / containerWidth) * 2 - 1;
    const tiltY = (mouseY / containerHeight) * 2 - 1;

    const maxTilt = 5;

    const tiltAngleX = tiltY * maxTilt;
    const tiltAngleY = -tiltX * maxTilt;

    const tiltSmoothness = 0.15;

    const currentTiltX =
      parseFloat(tiltContainer.style.getPropertyValue("--tiltX")) || 0;
    const currentTiltY =
      parseFloat(tiltContainer.style.getPropertyValue("--tiltY")) || 0;

    const interpolatedTiltX =
      currentTiltX + (tiltAngleX - currentTiltX) * tiltSmoothness;
    const interpolatedTiltY =
      currentTiltY + (tiltAngleY - currentTiltY) * tiltSmoothness;

    tiltContainer.style.setProperty("--tiltX", `${interpolatedTiltX}deg`);
    tiltContainer.style.setProperty("--tiltY", `${interpolatedTiltY}deg`);

    tiltContainer.style.transition = "transform 0.1s ease";
    tiltContainer.style.transform = `perspective(1000px) rotateX(var(--tiltX)) rotateY(var(--tiltY))`;
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Grid container spacing={8}>
      {images.map((image) => (
        <Grid
          item
          xs={image.is_landscape ? 4 : 3}
          key={image.uuid}
          className={styles.imageListItem}
        >
          <div
            onMouseMove={(event) => handleMouseMove(event)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.imageContainer}>
              <img
                src={image.media_file_thumb}
                alt={image.created_at}
                onClick={() => handleImageClick(image)}
                className={
                  image.is_landscape
                    ? styles.imageHorizontal
                    : styles.imageVertical
                }
              />
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <Typography fontSize={12}>{image.filter}</Typography>
            <Divider style={{ width: "2rem" }} />
            <Typography
              style={{ fontWeight: "bold" }}
              fontSize={18}
              fontWeight={100}
            >
              {image.client}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
