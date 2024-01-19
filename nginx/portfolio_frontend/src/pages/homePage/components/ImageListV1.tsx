import { ImageListItem, Typography } from "@mui/material";
import styles from "./ImageListV1.module.css";
import { useIsMobileDevice } from "../../../utils/useIsMobileDevice";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
  listColsCount?: number;
  listGap?: string;
}

export const ImageListV1 = ({
  images,
  handleImageClick,
  listColsCount,
  listGap,
}: ImageListV1Props) => {
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
    <ResponsiveMasonry
      columnsCountBreakPoints={
        listColsCount
          ? { 350: 1, 750: 2, 900: 3, 1200: listColsCount }
          : { 350: 1, 750: 2, 900: 3, 1200: 4 }
      }
    >
      <Masonry gutter={listGap ? listGap : "40px"}>
        {images.map((image) => (
          <ImageListItem key={image.uuid} className={styles.imageListItem}>
            <img
              src={image.media_file}
              alt={image.created_at}
              onMouseMove={(event) => handleMouseMove(event)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleImageClick(image)}
              className={
                image.is_landscape
                  ? styles.imageHorizontal
                  : styles.imageVertical
              }
            />
            <div
              style={{
                textAlign: "center",
                marginBottom: isMobileDevice ? 0 : 2,
              }}
            >
              <Typography
                style={{ fontWeight: "bold" }}
                fontSize={18}
                fontWeight={100}
              >
                {image.caption}
              </Typography>
            </div>
          </ImageListItem>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
