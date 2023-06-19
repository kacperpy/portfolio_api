import { Dialog } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Image {
  uuid: string;
  created_at: string;
  media_file: string;
  filter: string;
  client: string;
  file_name: string;
  caption: string;
}

interface ImageDialogProps {
  image: Image | null;
  onClose: () => void;
}

export const ImageDialog = ({ image, onClose }: ImageDialogProps) => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    axios
      .get<Image[]>(
        `http://localhost:8000/api/filters/${image?.filter}/images/`
      )
      .then((response: { data: any }) => {
        setImages(response.data.results);
        // Find the initial image index
        setCurrentImageIndex(
          response.data.results.findIndex(
            (img: Image) => img.uuid === image?.uuid
          )
        );
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
      console.log("fetching with filter: " + image?.filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <Dialog open={image !== null} onClose={onClose} maxWidth="lg">
      {images.length > 0 && (
        <Carousel
          showThumbs={false}
          selectedItem={currentImageIndex}
          showStatus={false}
          infiniteLoop={true}
        >
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img.media_file}
                alt={img.created_at}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
      )}
    </Dialog>
  );
};
