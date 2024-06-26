import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { useParams ,useNavigate} from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Logo from "../../Assets/Logo1.png";
import { Route } from 'react-router-dom';


import {FaBitbucket, FaUser} from 'react-icons/fa'
import {BiGroup, BiSupport} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import {MdOutlineLocalGroceryStore ,MdAdminPanelSettings} from 'react-icons/md'
import {HiOfficeBuilding ,HiLocationMarker} from 'react-icons/hi'
import {BsArrowBarLeft} from 'react-icons/bs'

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function Sidebar(props) {
  const theme = useTheme();
  let navigator = useNavigate();
  
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
    props.setPageFullWidth(false)
  };

  const handleDrawerClose = () => {
    setOpen(false);
    props.setPageFullWidth(true);
  };


  const changeUrl = (url) => {
    
    navigator(url);
  }

  const sideMenu = [
    {
      src: <FaBitbucket />,
      menu: 'Dashboard',
      link: '/',
      title:'Dashboard'

    }, {
      src: <BiGroup />,
      menu: 'Customers',
      link: '/customers',
      title:'Customers'

    },
    {
      src: <FaUser />,
      menu: 'Ethnics',
      link: '/ethnic',
      title:'Ethnics'

    },
    {
      src: <MdOutlineLocalGroceryStore />,
      menu: 'Grocery',
      link: '/grocery',
      title:'Grocery'

    },
    {
      src: <HiOfficeBuilding />,
      menu: 'Warehouses',
      link: '/warehouses',
      title:'Warehouses'

    },
    {
      src: <HiLocationMarker />,
      menu: 'Locations',
      link: '/locations',
      title:'Locations'

    },
    {
      src: <MdAdminPanelSettings/>,
      menu: 'Administration',
      link: '/administration',
      title:'Administration'

    },
    {
      src: <BiSupport/>,
      menu: 'Support',
      link: '/support',
      title:'Support'

    },
    {
      src: <FiLogOut />,
      menu: 'Sign out',
      link: '/login',
      title:'Logout'

    }
  ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className="" position="fixed" open={open}>
        <Toolbar className='blackColor'>
          <IconButton
            color='inherit'
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            KX<sup>2</sup>
          </Typography>
        </Toolbar>
      </AppBar >
      <Drawer PaperProps={{
        sx: {
          background: 'linear-gradient(#f12711,#f5af19)'
        }
      }} variant="permanent" open={open} >
        <DrawerHeader>
          {props.pageFullWidth === false ?
            <>
              <div className="companyLogo my-2" style={{ marginRight: "4%" }}>
                <div>
                  <img
                    alt="test"
                    className="avatarSideMenu"
                    src={Logo}
                  />
                </div>
              </div>
              
              <IconButton onClick={handleDrawerClose} style={{ marginTop: "-20%", width: "55px" }}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <BsArrowBarLeft style={{ color: "#f5f5f5", fontSize: "20px",marginTop:'10px' }} />}
              </IconButton> </> : ''}

        </DrawerHeader>
        <Divider />
        <List>
          {sideMenu.map((menu) => (
            <ListItem key={menu.menu} title={menu.title} className='' onClick={() => { changeUrl(menu.link) }} disablePadding sx={{ display: 'block' }}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {menu.src}
                </ListItemIcon>
                <ListItemText primary={menu.menu} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <DrawerHeader />
      </Box>
    </Box >
  );
}
