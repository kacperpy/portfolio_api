import { SetStateAction, useEffect, useState } from "react";
import {
  Container,
  ImageList,
  ImageListItem,
  Box,
  CircularProgress,
  Dialog,
} from "@mui/material";
import axios from "axios";
import styles from "./PortfolioPage.module.css";

interface Image {
  uuid: string;
  created_at: string;
  media_file: string;
  filter: string;
}

export const PortfolioPage = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    axios
      .get<Image[]>("http://localhost:8000/api/images/")
      .then((response: { data: SetStateAction<Image[]> }) => {
        setImages(response.data);
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching images:", error);
        setIsLoading(false);
      });
  }, []);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Container className={styles.pageContainer}>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={200}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box width="100%" height="100%">
          <ImageList variant="quilted" cols={4} gap={20}>
            {images.map((image) => (
              <ImageListItem key={image.uuid} className={styles.imageListItem}>
                <img
                  src={image.media_file}
                  alt={image.created_at}
                  onClick={() => handleImageClick(image)}
                  className={styles.image}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      )}
      <Dialog open={selectedImage !== null} onClose={handleClose} maxWidth="md">
        {selectedImage && (
          <img
            src={selectedImage.media_file}
            alt={selectedImage.created_at}
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </Dialog>
    </Container>
  );
};
