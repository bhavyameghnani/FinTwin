import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Announcement";
import ArchiveIcon from "@material-ui/icons/Assessment";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

export default function BottomNavigationPage() {
  const [value, setValue] = React.useState();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Paper
          style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="News"
              icon={<FavoriteIcon />}
              component={Link}
              to="/news"
            />

            <BottomNavigationAction label="Watch List" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Portfolio" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>
      </main>
    </React.Fragment>
  );
}
