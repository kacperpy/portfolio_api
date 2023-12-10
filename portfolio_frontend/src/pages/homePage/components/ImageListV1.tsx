import { Divider, ImageList, ImageListItem, Typography } from "@mui/material";
import styles from "./ImageListV1.module.css";
import { useIsMobileDevice } from "../../../utils/useIsMobileDevice";

interface Image {
  uuid: string;
  created_at: string;
  media_file: string;
  filter: string;
  client: string;
  file_name: string;
  caption: string;
  is_landscape: boolean;
}

interface ImageListV1Props {
  images: Image[];
  handleImageClick: (image: Image) => void;
}

export const ImageListV1 = ({ images, handleImageClick }: ImageListV1Props) => {
  const { isMobileDevice } = useIsMobileDevice();
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
    <ImageList
      sx={{
        paddingTop: "1rem",
        paddingBottom: "4rem",
        overflow: "hidden",
      }}
      variant={isMobileDevice ? "standard" : "woven"}
      cols={isMobileDevice ? 1 : 3}
      gap={isMobileDevice ? 10 : 40}
    >
      {images.map((image) => (
        <ImageListItem key={image.uuid}>
          <div
            onMouseMove={(event) => handleMouseMove(event)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.imageContainer}>
              <img
                src={image.media_file}
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
          <div
            style={{
              textAlign: "left",
              marginBottom: image.is_landscape ? "8rem" : "10rem",
              marginLeft:
                image.is_landscape || window.innerWidth < 1400 ? 0 : "15%",
            }}
          >
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
        </ImageListItem>
      ))}
    </ImageList>
  );
};
