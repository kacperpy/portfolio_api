import { Dialog } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

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

export const ImageDialog: React.FC<ImageDialogProps> = ({ image, onClose }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    axios
      .get<Image[]>(
        `http://localhost:8000/api/filters/${image?.filter}/images/`
      )
      .then((response: { data: any }) => {
        setImages(response.data.results);
        console.log("FETCHING by filter: " + image?.filter);
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

  return (
    <Dialog open={image !== null} onClose={onClose} maxWidth="lg">
      {image && (
        <img
          src={image.media_file}
          alt={image.created_at}
          style={{ width: "100%", height: "auto" }}
        />
      )}
    </Dialog>
  );
};
