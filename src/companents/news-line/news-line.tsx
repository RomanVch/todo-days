import { Card } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";

import { api } from "../../app/API";
import styles from "./styles";

export const NewsLine: React.FC = () => {
  const { data } = useQuery("getNews", () => api.getNews(), {
    staleTime: 60 * (60 * 1000),
    cacheTime: 70 * (60 * 1000),
  });
  const classes = styles();
  console.log(data);
  return (
    <Card sx={classes.lineCard}>
      <p>
        {data && data.articles[0].title ? data.articles[0].title : "NO NEWS"}
      </p>
    </Card>
  );
};
