import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import WorkIcon from 'material-ui-icons/Work';
import BeachAccessIcon from 'material-ui-icons/BeachAccess';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ExploreIcon from 'material-ui-icons/Explore';
import Icon from 'material-ui/Icon';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import Hidden from 'material-ui';


const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
  },
  sidebar: {
    position: 'fixed',
    width: 320,
    left: 0,
    top: 0,
  },
  list: {
    position: 'fixed',
    top: 64,
    bottom: 52,
    cursor: 'pointer',
    'overflow-y': 'scroll',
    width: 320,
    maxHeight: '100vh',
    borderTop: '1px solid #999',
  },
  ListItemHover: {
    backgroundColor: '#999',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  navigation: {
    width: 320,
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - 320px)`,
  },
  'appBar-left': {
    marginLeft: 320,
  },
  'appBar-right': {
    marginRight: 320,
  },
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    left: 230,
    bottom: 72,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: 320,
    height: 'calc(100% - 56px)',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
    },
  },
  search: {
    position: 'fixed',
    marginLeft: theme.spacing.unit*3,
    marginRight: theme.spacing.unit*3,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    width: 280,
    top: 0,
    left: 0,
  },
  chat: {
    width: 'calc(100% - 320px)',
    height: 'calc(100vh - 64px)',
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
  textarea: {
  width: 'calc(100% - 400px)',
  position: 'fixed',
  bottom: 24,
  right: 24,
  padding: 16,
  boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
  overflow: 'hidden',
  },
});



class App extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                DogeCodes React Chat
              </Typography>
            </Toolbar>
          </AppBar>
          <main className={classes.sidebar}>
              <TextField
                    id="search"
                    label="Search chats..."
                    type="search"
                    className={classes.search}
                    margin="normal"
                  />
              <div className={classes.list}>
              <List>
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
                
              </List>
              <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                <AddIcon />
              </Button>
              <BottomNavigation
                onChange={this.handleChange}
                showLabels
                className={classes.navigation}
              >
                <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
              </BottomNavigation>
              {/* <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                <ExploreIcon />
              </Button> */}
          </div>
      </main>
      <div className={classes.chat}>
      <TextField
          id="textarea"
          placeholder="Type your message..."
          multiline
          className={classes.textarea}
          margin="normal"
        />
      </div>
    </div>   
        
  );
  }
}


export default withStyles(styles)(App);









