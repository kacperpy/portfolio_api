import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { ImageDialog } from "../../components/imageDialog/ImageDialog";
import axios from "axios";
import styles from "./CommercialPage.module.css";
import { ImageListV1 } from "../homePage/components/ImageListV1";
import { Image } from "../../api/types";

export const CommercialPage = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [curPage, setCurPage] = useState(1);

  const fetchData = async () => {
    axios
      .get<Image[]>(
        `http://46.41.137.226/api/filters/commercial_page/images?page=${curPage}&size=${
          curPage > 1 ? 3 : 9
        }`
      )
      .then((response: { data: any }) => {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        console.log(images);
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
    console.log(image);
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
        <ImageListV1
          images={images}
          handleImageClick={handleImageClick}
          listColsCount={3}
          listGap="60px"
        />
      </Box>
      {selectedImage !== null ? (
        <ImageDialog image={selectedImage} onClose={handleClose} />
      ) : null}
    </Container>
  );
};
