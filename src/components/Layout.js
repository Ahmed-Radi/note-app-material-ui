import React from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import format from 'date-fns/format';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240

function Layout({ children }) {
    const root = {
        display: 'flex',
    }
    const pageStyle = {
        width: '100%',
        padding: '20px',
    }
    const drawer = {
        width: drawerWidth,
        background: 'red!important',
    }
    const drawerPaper = {
        width: drawerWidth,
    }
    const active = {
        background: '#f4f4f4',
    }
    const title = {
        padding: '15px',
    }
    const toolbar = {
        width: `calc(100% - ${drawerWidth}px)`,
    }
    const addHeight = {
        height: '70px',
    }
    const avatar = {
        marginLeft: '8px',
    }
    const menuItems = [{
        text: 'My Notes',
        icon: <SubjectOutlined color="secondary" />,
        path: '/',
    },{
        text: 'Create note',
        icon: <AddCircleOutlineOutlined color="secondary" />,
        path: '/create',
    },]

    const navigate = useNavigate()
    const location = useLocation()
    return (
        <section style={root}>
            <AppBar sx={toolbar}>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>
                        Today is the {format(new Date(), 'do MMMM y')}
                    </Typography>
                    <Typography variant={'h6'}>
                        Ahmed Radi
                    </Typography>
                    <Avatar src="/img_avatar.png" style={avatar} />
                </Toolbar>
            </AppBar>
            <Drawer
                sx={drawer}
                PaperProps={{ sx : drawerPaper }}
                variant="permanent"
                anchor='left'
            >
                <div>
                    <Typography variant="h5" sx={title}>Ahmed Note</Typography>
                    <List>
                        {menuItems.map(item => (
                            <ListItem key={item.text} button
                                onClick={() => navigate(item.path)}
                                sx={location.pathname === item.path ? active : null }
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>

            <div style={pageStyle}>
            <div style={addHeight}></div>
                { children }
            </div>
        </section>
    )
}

export default Layout