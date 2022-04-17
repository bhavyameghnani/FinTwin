import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import HomePageTile from "./HomePageTiles";

export default function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="FinTwin" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <HomePageTile />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "FinTwin",
  description: "Smart Interacting mirror that shares financial news, products offered & manage portfolio with an interactive session.",
  image:
    "https://rpi-magazines.s3-eu-west-1.amazonaws.com/magpi/legacy-assets/2016/01/step3.jpg",
  imgText: "HomePage",
  linkText: "Continue reading…",
};
