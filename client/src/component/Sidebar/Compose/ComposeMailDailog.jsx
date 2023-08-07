import { Dialog, DialogTitle, DialogActions, Button, Typography, Box, InputBase, TextField, unstable_ClassNameGenerator } from "@mui/material";
import emailjs from 'emailjs-com'
import { Close } from '@mui/icons-material';
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useApi from "../../../hooks/useAPI";
import { apiUrl } from "../../../sevices/api.url";

const ComposeMailDialog = ({ openDialog, setOpenDialog }) => {

    const [data, setData] = useState({})
    const sentDataApi = useApi(apiUrl.saveSentEmail);


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

    const sentEmail = (e) => {
        e.preventDefault();
        const payload = {
            to: data.to,
            from: 'shivamrana706@gmail.com',
            message: data.message,
            subject: data.subject,
            date: new Date(),
            name: 'shivam',
            image: '',
            starred: false,
            type: 'sent'
        }
        // "service_wf6bydr","template_m7rs4f7"template_wsywnhn
        emailjs.send("service_wf6bydr", "template_itd7ikh", {
            message: data.message,
            subject: data.subject,
            reply_to: data.to,
        }, "8gP34C7_gmFU5nDIu").then((result) => {
            console.log(result.text);
            sentDataApi.call(payload);
            setOpenDialog(false)
        }, (error) => {
            console.log(error.text);
        });



    }

    const onValueChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data)

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
            {/* <SenderDetailBox> */}
            <Box style={{ display: 'flex', flexDirection: 'column', padding: '0px,15px', height: '85%' }}>
                <InputBase onChange={(e) => { onValueChange(e) }} placeholder="To" name="to"
                    style={{ borderBottom: '1px solid #0000001f', marginBottom: '2px', padding: '0px 15px' }} required />
                <InputBase onChange={(e) => { onValueChange(e) }} placeholder="subject" name="subject"
                    style={{ borderBottom: '1px solid #0000001f', marginBottom: '5px', color: 'black', padding: '0px 15px' }} required />
                <TextField
                    id="outlined-textarea"
                    label=""
                    name="message"
                    placeholder=""
                    multiline
                    style={{ padding: '0px 15px' }}
                    sx={{ '.MuiOutlinedInput-notchedOutline': { border: 'none', padding: '0px 15px' }, '.MuiInputBase-root': { padding: '0px' } }}
                    rows={19}
                    size="medium"
                    onChange={(e) => onValueChange(e)}
                // fullWidth={ }
                />
            </Box>

            {/* </SenderDetailBox> */}
            <FooterStyled>
                <Button onClick={sentEmail} style={{ backgroundColor: '#3e3b3bc4', color: "white", width: '100px', borderRadius: '10px' }}>Send</Button>
            </FooterStyled>




        </Dialog>
    )
}

export default ComposeMailDialog;