import { Drawer, Button, styled, Box } from "@mui/material";
import { Create, Close } from '@mui/icons-material';
import SideBarContent from "./SideBarContent";
import ComposeMailDialog from "./Compose/ComposeMailDailog";
import { useState } from "react";



const SideBarDrawer = () => {

    const [openDialog, setOpenDialog] = useState(false)

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
    const dailofStyled = {
        height: '90%',
        width: '70%'
    }

    const composeOnClick = () => {
        setOpenDialog(true)
    }


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
                <ComposeButton onClick={composeOnClick}><Create /> Compose</ComposeButton>

                {
                    openDialog == true ? <ComposeMailDialog openDialog={openDialog} setOpenDialog={setOpenDialog} /> : ""
                }

            </ComposeStyled>
            <SideBarContent />

        </Drawer>

    )
}

export default SideBarDrawer;