import { TurnedInNot } from '@mui/icons-material'
import { Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm:drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar >
                <Typography variant='h6' noWrap component='div'>
                    Facundo Flores
                </Typography>
            </Toolbar>

            <List>
                {
                    ['Enero','Febero','Marzo','Abril'].map( text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>

                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={ 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque, saepe voluptates expedita '} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
