import { Drawer, Button, styled, Box } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import SideBarContent from "./SideBarContent";


const SideBarDrawer = () => {

    const ComposeStyled = styled(Box)({
        width: '100%',
        marginTop: '5px'
    })

    const ComposeButton = styled(Button)({
        backgroundColor: '#707070',
        padding: "10px",
        margin: '5px 20px',
        height: '50px',
        color: 'white',
        borderRadius: '15px',
        fontWeight: '600',
        fontSize: 16,
        width: "80%"
    })


    return (
        <Drawer
            anchor="left"
            open={true}
            variant="persistent"
            sx={{
                '& .MuiPaper-root': {
                    width: '225px',
                    marginTop: "64px",
                    backgroundColor: '#f5f5f5'
                }
            }}
        >
            <ComposeStyled>
                <ComposeButton><CreateIcon /> Compose</ComposeButton>
            </ComposeStyled>
            <SideBarContent />

        </Drawer>
    )
}

export default SideBarDrawer;