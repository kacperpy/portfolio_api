import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";

export const PortfolioPage = () => {
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
            sx={
              video.isLandscape
                ? {
                    display: "flex",
                    justifyContent: index % 2 === 0 ? "end" : "start",
                    alignItems: "center",
                    gap: 4,
                    width: "90%",
                  }
                : {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    width: "90%",
                  }
            }
          >
            {index % 2 === 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: "20rem",
                }}
              >
                <Typography variant="body1" textAlign={"end"}>
                  {video.title}
                </Typography>
                <Typography variant="body2" textAlign={"end"}>
                  {video.description}
                </Typography>
              </Box>
            )}
            <ReactPlayer
              key={index + 1}
              url={video.url}
              controls
              width={video.isLandscape ? "50vw" : "auto"}
              height={video.isLandscape ? "auto" : "50vw"}
            />
            {index % 2 === 1 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: "20rem",
                }}
              >
                <Typography variant="body1" textAlign={"start"}>
                  {video.title}
                </Typography>
                <Typography variant="body2" textAlign={"start"}>
                  {video.description}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
