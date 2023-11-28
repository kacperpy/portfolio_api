import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { ImageDialog } from "../../components/imageDialog/ImageDialog";
import { ImageListV1 } from "./components/ImageListV1";
import axios from "axios";
import styles from "./HomePage.module.css";

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

export const HomePage = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [curPage, setCurPage] = useState(1);

  const fetchData = async () => {
    axios
      .get<Image[]>(
        `http://46.41.137.226/api/homepage-images/?page=${curPage}&size=${
          curPage > 1 ? 3 : 9
        }`
      )
      .then((response: { data: any }) => {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        curPage === 1
          ? setCurPage((prevPage) => prevPage + 3)
          : setCurPage((prevPage) => prevPage + 1);
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

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight * 0.9) {
      handleLoadMore();
    }
  };

  window.addEventListener("scroll", handleScroll, true);

  return (
    <Container className={styles.pageContainer}>
      <Box width="100%" height="100%">
        <ImageListV1 images={images} handleImageClick={handleImageClick} />
        {/* <Button
          onClick={handleLoadMore}
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          Load more
        </Button> */}
      </Box>
      {selectedImage !== null ? (
        <ImageDialog image={selectedImage} onClose={handleClose} />
      ) : null}
    </Container>
  );
};
