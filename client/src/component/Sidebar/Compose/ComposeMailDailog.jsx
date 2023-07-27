import { Dialog, DialogTitle, DialogActions, Button, Typography, Box, InputBase, TextField } from "@mui/material";
import emailjs from 'emailjs-com'
import { Close } from '@mui/icons-material';
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const ComposeMailDialog = ({ openDialog, setOpenDialog }) => {


    const SenderDetailBox = styled(Box)({
        padding: '5px 15px',
        display: 'flex',
        flexDirection: 'column',
        height: '85%',


    })
    const TextFieldStyled = styled(TextField)({

    })
    const FooterStyled = styled(DialogActions)({
        height: '5%'
    })

    const onValueChange = (e) => {

    }


    const sentEmail = (e) => {
        e.preventDefault();
        emailjs.send("service_wf6bydr", "template_wsywnhn", {
            message: e.target.value,
            subject: e.target.value,
            reply_to: e.target.value,
        }, "8gP34C7_gmFU5nDIu").then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <Dialog
            open={openDialog}
            PaperProps={{ sx: { width: '100%', maxWidth: '80%', height: '90vh', borderRadius: '10px' } }}
        >
            <DialogTitle style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                backgroundColor: '#f2f6fc', padding: '5px 15px', height: '5%'
            }}>
                New Message
                <DialogActions>
                    <Close fontSize='small' onClick={() => { setOpenDialog(false) }} />
                </DialogActions>
            </DialogTitle>
            <SenderDetailBox>
                <InputBase onChange={(e) => { onValueChange(e) }} placeholder="To" name="reply_to"
                    style={{ borderBottom: '1px solid #0000001f', marginBottom: '2px' }} />
                <InputBase onChange={(e) => { onValueChange(e) }} placeholder="subject" name="subject"
                    style={{ borderBottom: '1px solid #0000001f', marginBottom: '5px', color: 'black' }} />
                <TextFieldStyled
                    id="outlined-textarea"
                    label=""
                    name="message"
                    placeholder=""
                    multiline
                    sx={{ '.MuiOutlinedInput-notchedOutline': { border: 'none' }, '.MuiInputBase-root': { padding: '0px' } }}
                    rows={19}
                    size="medium"
                    onChange={(e) => onValueChange(e)}
                // fullWidth={ }
                />

            </SenderDetailBox>
            <FooterStyled>
                <Button onClick={sentEmail} style={{ backgroundColor: '#3e3b3bc4', color: "white", width: '100px', borderRadius: '10px' }}>Send</Button>
            </FooterStyled>




        </Dialog>
    )
}

export default ComposeMailDialog;