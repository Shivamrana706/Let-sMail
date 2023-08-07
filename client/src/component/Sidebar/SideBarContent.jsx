import { SideBar_content } from "../../config/SideBar_Content";
import { styled, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useParams, NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";


const SideBarContent = () => {
    const { type } = useParams();
    return (
        <Box>
            <List style={{ paddingTop: '0px' }}>
                {
                    SideBar_content.map((data) => (
                        <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem style={type === data.name ? {
                                backgroundColor: '#00000021', borderRadius: '50px',
                                margin: '5px 0px', padding: '0px 16px'
                            }
                                : { margin: '5px 0px', padding: '0px 16px' }} >
                                <ListItemButton style={{ borderRadius: '10px', }}>
                                    <ListItemIcon style={{ minWidth: 50 }}>
                                        <data.icon />
                                    </ListItemIcon>
                                    <ListItemText sx={{
                                        '& .MuiTypography-root': {
                                            fontSize: 15, fontWeight: 600
                                        }
                                    }} primary={data.title} />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                    ))
                }

            </List>
        </Box >
    )
}

export default SideBarContent;