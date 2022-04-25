import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import LiteracyPageTiles from "./LiteracyPageTiles";

export default function LiteracyPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Financial Literacy" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <LiteracyPageTiles />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "Financial Literacy Page",
  description:
    "One stop platform to learn & grow your Financial concepts & knowledge",
  image:
    "https://media1.giphy.com/media/AlCr2wBq4ZC0MamQUz/giphy.gif",
  imgText: "Events",
  linkText: "Continue reading…",
};
