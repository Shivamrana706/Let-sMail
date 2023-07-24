import { SideBar_content } from "../../config/SideBar_Content";
import { styled, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";


const SideBarContent = () => {
    return (
        <Box>
            <List style={{ paddingTop: '0px' }}>
                {
                    SideBar_content.map((data) => (
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemButton style={{ borderRadius: '10px' }}>
                                <ListItemIcon style={{ minWidth: 50 }}>
                                    <data.icon />
                                </ListItemIcon>
                                <ListItemText sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: 15, fontWeight: 600
                                    }
                                }} primary={data.name} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }

            </List>
        </Box>
    )
}

export default SideBarContent;