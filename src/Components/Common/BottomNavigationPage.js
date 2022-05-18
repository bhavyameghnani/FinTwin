import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Announcement";
import ArchiveIcon from "@material-ui/icons/Assessment";
import { Button } from '@mui/material';
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';

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

            <BottomNavigationAction 
              label="Watch List" 
              icon={<RestoreIcon />}
              component={Link}
              to="/watchlist" 
            />
            
              <BottomNavigationAction 
              label="Portfolio" 
              icon={<ArchiveIcon />} 
              onClick={()=>window.open("https://finayna-portfolio.netlify.app")}
            />
            
            <BottomNavigationAction 
              label="Chat" 
              icon={<ChatIcon />}
              onClick={()=>window.open("https://finayna-chatbot.netlify.app")}
            />
          </BottomNavigation> 
        </Paper>
      </main>
    </React.Fragment>
  );
}
