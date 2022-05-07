import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import FavWatchListTile from "./FavWatchListTiles";

export default function WatchPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Financial WatchList" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <FavWatchListTile />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "Financial Watchlist",
  description:
    "FinTwin displays your Financial Watch list from Fin Smart Mirror to keep you updated on stuff you have added to watch list ",
  image:
    "https://tradebrains.in/wp-content/uploads/2018/07/latest-financial-news.jpeg",
  imgText: "Events",
  linkText: "Continue reading…",
};
