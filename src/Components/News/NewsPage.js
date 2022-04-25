import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import NewsPageTile from "./NewsPageTiles";

export default function NewsPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Financial News" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <NewsPageTile />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "Recommended Financial Page",
  description:
    "FinTwin recommends Financial news to keep you posted on what's happening across the world.",
  image:
    "https://tradebrains.in/wp-content/uploads/2018/07/latest-financial-news.jpeg",
  imgText: "Events",
  linkText: "Continue reading…",
};
