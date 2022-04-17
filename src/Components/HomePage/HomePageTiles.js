import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomNavigationPage from "../Common/BottomNavigationPage";


export default function HomePageTile() {
  // eslint-disable-next-line 
  const classes = useStyles();
 
  //Only on first render
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        

        <br />
        <br />
        <br />

        <BottomNavigationPage />
      </main>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    alignItems: "center"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
  leaderBoard: {
    width: "100%",
    height: "400px",
    overflowY: "auto",
    overflowX: "hidden",
    borderStyle: "solid",
    borderColor: "#FDCB6B",
    borderRadius: "10px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  leaderBoardParent: {},
  chart: {
    height: 10,
  },
  divHeading: {
    color: "#ca142a",
  },
  icon: {
    marginRight: theme.spacing(2),
    width: "80%",
    height: "80%",
    padding: "5%",
  },
}));
