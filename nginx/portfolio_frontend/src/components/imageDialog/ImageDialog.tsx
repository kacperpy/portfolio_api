import { Dialog } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

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

interface ImageDialogProps {
  image: Image | null;
  onClose: () => void;
}

export const ImageDialog = ({ image, onClose }: ImageDialogProps) => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [curDimensions, setCurDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    axios
      .get<Image[]>(`http://46.41.137.226/api/filters/${image?.filter}/images/`)
      .then((response: { data: any }) => {
        setImages(response.data.results);
        // Find the initial image index
        const curIndex = response.data.results.findIndex(
          (img: Image) => img.uuid === image?.uuid
        );
        setCurrentImageIndex(curIndex);
        console.log(curIndex);
      })
      .catch((error: any) => {
        console.error("Error fetching images:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (images.length === 0) {
      fetchData();
      console.log("fetching with filter: " + image?.filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageChange = (now?: number) => {
    if (now !== undefined) {
      const currentImage = images[now];
      const imageElement = document.createElement("img");
      imageElement.src = currentImage.media_file;

      imageElement.onload = () => {
        const imageWidth = imageElement.width;
        const imageHeight = imageElement.height;

        let desiredHeight, desiredWidth, scaleFactor;

        if (window.innerWidth < 1400) {
          desiredWidth = (80 * window.innerWidth) / 100;
          scaleFactor = desiredWidth / imageWidth;
          desiredHeight = imageHeight * scaleFactor;
        } else {
          desiredHeight = (80 * window.innerHeight) / 100;
          scaleFactor = desiredHeight / imageHeight;
          desiredWidth = imageWidth * scaleFactor;
        }

        setCurDimensions({
          width: desiredWidth,
          height: desiredHeight,
        });

        console.log("Currently displayed image:", currentImage);
        console.log("Image dimensions:", desiredWidth, "x", desiredHeight);
        console.log("window width: " + window.innerWidth);
      };
    }
  };

  useEffect(() => {
    if (images.length !== 0) {
      handleImageChange(currentImageIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <Dialog open={!isLoading} onClose={onClose} maxWidth={false}>
      {curDimensions !== null ? (
        <Carousel
          index={currentImageIndex}
          autoPlay={false}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
          sx={{
            width: curDimensions.width,
            height: curDimensions.height,
            transition: "width 0.5s",
            backgroundColor: "transparent",
          }}
          onChange={handleImageChange}
          PrevIcon={<ArrowLeftIcon />}
          NextIcon={<ArrowRightIcon />}
          navButtonsProps={{
            style: {
              background: "none",
              boxShadow: "none",
            },
          }}
        >
          {images.map((img, index) => (
            <img
              src={img.media_file}
              alt={img.created_at}
              key={index}
              style={{
                height: curDimensions.height + "px",
                objectFit: "contain",
              }}
            />
          ))}
        </Carousel>
      ) : null}
    </Dialog>
  );
};
