import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";

export const PortfolioPageMobile = () => {
  const mockVideos = [
    {
      id: "1",
      title: "title 1",
      description:
        "test description test description test description test description test description test description test description test description test description",
      url: "http://46.41.137.226/media/Green_Final.mp4",
      isLandscape: true,
    },
    {
      id: "2",
      title: "title 2",
      description: "test description test description test description",
      url: "http://46.41.137.226/media/Pink_final.mp4",
      isLandscape: true,
    },
    {
      id: "3",
      title: "title 3",
      description:
        "test description test description test description test description test description test description",
      url: "http://46.41.137.226/media/Stopp1_Final_Story.mp4",
      isLandscape: false,
    },
    {
      id: "4",
      title: "title 4",
      description:
        "test description test description test description test description test description test description",
      url: "http://46.41.137.226/media/Stopp1_Final_Story.mp4",
      isLandscape: false,
    },
    {
      id: "5",
      title: "title 5",
      description:
        "test description test description test description test description test description test description test description test description test description",
      url: "http://46.41.137.226/media/Green_Final.mp4",
      isLandscape: true,
    },
    {
      id: "6",
      title: "title 6",
      description: "test description test description test description",
      url: "http://46.41.137.226/media/Pink_final.mp4",
      isLandscape: true,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          width: "100%",
        }}
      >
        {mockVideos.map((video, index = 0) => (
          <Box
            key={index + 1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <ReactPlayer
              key={index + 1}
              url={video.url}
              controls
              width="90vw"
              height="auto"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
              }}
            >
              <Typography variant="body1" textAlign={"justify"}>
                {video.title}
              </Typography>
              <Typography variant="body2" textAlign={"justify"}>
                {video.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
