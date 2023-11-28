import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { mockVideos } from "./mockData";

export const VideoPageMobile = () => {
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
