import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player";
import { mockVideos } from "./mockData";

export const VideoPage = () => {
  const [hoveredItem, setHoveredItem] = useState<number | undefined>(undefined);

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
                  alignSelf: "end",
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
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(undefined)}
              key={index + 1}
              url={video.url}
              controls={hoveredItem === index}
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
                  alignSelf: "end",
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
