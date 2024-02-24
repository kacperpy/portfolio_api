import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { VideoClip } from "../../api/types";
import axios from "axios";

export const VideoPage = () => {
  const [hoveredItem, setHoveredItem] = useState<number | undefined>(undefined);
  const [videos, setVideos] = useState<VideoClip[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [curPage, setCurPage] = useState(1);

  const fetchData = async () => {
    axios
      .get<VideoClip[]>(
        `http://46.41.137.226/api/videos/?page=${curPage}&size=${
          curPage > 1 ? 3 : 9
        }`
      )
      .then((response: { data: any }) => {
        setVideos((prevVideos) => [...prevVideos, ...response.data.results]);
        curPage === 1
          ? setCurPage((prevPage) => prevPage + 3)
          : setCurPage((prevPage) => prevPage + 1);
        console.log("FETCHING");
      })
      .catch((error: any) => {
        console.error("Error fetching videos:", error);
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
        {videos.map((video, index = 0) => (
          <Box
            key={index + 1}
            sx={
              video.is_landscape
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
                  {video.client}
                </Typography>
                <Typography variant="body2" textAlign={"end"}>
                  {video.caption}
                </Typography>
              </Box>
            )}
            <ReactPlayer
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(undefined)}
              key={index + 1}
              url={video.media_file}
              controls={hoveredItem === index}
              loop
              playing
              muted
              width={video.is_landscape ? "50vw" : "auto"}
              height={video.is_landscape ? "auto" : "50vw"}
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
                  {video.client}
                </Typography>
                <Typography variant="body2" textAlign={"start"}>
                  {video.caption}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
