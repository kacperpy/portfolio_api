import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ImageDialog } from "../../components/imageDialog/ImageDialog";
import { useEffect, useState } from "react";
import axios from "axios";

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

export const ImagePage = () => {
  const { imgId } = useParams();
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    axios
      .get<Image>(`http://46.41.137.226/api/images/${imgId}`)
      .then((response: { data: any }) => {
        setSelectedImage(response.data);
        console.log("FETCHING");
      })
      .catch((error: any) => {
        console.error("Error fetching image:", error);
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

  const handleClose = () => {
    setSelectedImage(null);
    navigate("/");
  };

  return (
    <Box>
      {selectedImage !== null ? (
        <ImageDialog image={selectedImage} onClose={handleClose} />
      ) : null}
    </Box>
  );
};
