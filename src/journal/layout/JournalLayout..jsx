import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../components';

const drawerWidth= 300;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>

        <NavBar drawerWidth={drawerWidth}/>

        <SideBar drawerWidth={drawerWidth} />

        <Box 
            componenet='main'
            sx={{flexGrow:1, p:3}}
        >
            <Toolbar />

            { children}
        </Box>

    </Box>
  )
}
