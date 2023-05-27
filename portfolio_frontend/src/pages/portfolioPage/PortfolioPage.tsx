import { useEffect, useState } from "react";
import {
  Container,
  Box,
  CircularProgress,
  Dialog,
  Grid,
  ImageListItemBar,
  Typography,
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
      .get<Image[]>("http://localhost:8000/api/images/?size=9")
      .then((response: { data: any }) => {
        setImages(response.data.results);
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
          <Grid container spacing={10}>
            {images.map((image) => (
              <Grid
                item
                xs={4}
                key={image.uuid}
                className={styles.imageListItem}
              >
                <div>
                  <img
                    src={image.media_file}
                    alt={image.created_at}
                    onClick={() => handleImageClick(image)}
                    className={styles.image}
                  />
                  <Typography>
                    <b>{image.created_at}</b>
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
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
