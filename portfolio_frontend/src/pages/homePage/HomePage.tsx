import { useEffect, useState } from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import axios from "axios";
import styles from "./HomePage.module.css";
import { ImageDialog } from "../../components/imageDialog/ImageDialog";

interface Image {
  uuid: string;
  created_at: string;
  media_file: string;
  filter: string;
  client: string;
  file_name: string;
  caption: string;
}

export const HomePage = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [curPage, setCurPage] = useState(1);

  const fetchData = async () => {
    axios
      .get<Image[]>(`http://localhost:8000/api/images/?page=${curPage}&size=6`)
      .then((response: { data: any }) => {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        setCurPage((prevPage) => prevPage + 1);
        console.log("FETCHING");
      })
      .catch((error: any) => {
        console.error("Error fetching images:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isLoading) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
    console.log("closing");
  };

  const handleLoadMore = () => {
    setIsLoading(true);
  };

  return (
    <Container className={styles.pageContainer}>
      <Box width="100%" height="100%">
        <Grid container spacing={10}>
          {images.map((image) => (
            <Grid item xs={4} key={image.uuid} className={styles.imageListItem}>
              <div>
                <img
                  src={image.media_file}
                  alt={image.created_at}
                  onClick={() => handleImageClick(image)}
                  className={styles.image}
                />
                <div style={{ textAlign: "left" }}>
                  <Typography fontSize={12}>{image.filter}</Typography>
                  <Typography
                    style={{ fontWeight: "bold" }}
                    fontSize={18}
                    fontWeight={100}
                  >
                    {image.client}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <Button
          onClick={handleLoadMore}
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          Load more
        </Button>
      </Box>
      {selectedImage !== null ? (
        <ImageDialog image={selectedImage} onClose={handleClose} />
      ) : null}
    </Container>
  );
};
