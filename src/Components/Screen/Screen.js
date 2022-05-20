import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import ScreenTile from "./ScreenTiles";

export default function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="FinAyna" />
        <div>
        <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/puFSdfIRNIw`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        </div>
      </Container>
      <br />
    </React.Fragment>
  );
}


