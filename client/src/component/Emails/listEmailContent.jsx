import { Checkbox, Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { DeleteOutline, Star, StarBorderOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';



const ListEmailContent = (email) => {
    const ListItemDate = styled(ListItemText)({
        padding: '0px 12px',
        '& >span ': {
            float: 'right',

        }
    })
    return (
        <>
            <List key={email._id} style={{
                display: 'flex', alignItems: 'center', cursor: 'pointer',
                backgroundColor: '#857e7e30', borderRadius: '10px', marginBottom: '1px', height: "35px"
            }}>
                <ListItemIcon style={{ alignItems: 'center', marginRight: '10px' }}>
                    <Checkbox />
                    <StarBorderOutlined />
                </ListItemIcon>
                <ListItemText primary={email.name} />
                <Typography style={{ fontSize: '14px', backgroundColor: '#8c8c8c63', borderRadius: '5px', padding: '0px 5px', marginRight: '5px' }}>Inbox</Typography>
                <ListItemText >{email.subject} {email.message && '-'} {email.message}</ListItemText>

                <ListItemDate style={{}}>{(new window.Date(email.date)).getDate()} {(new window.Date(email.date).toLocaleString('default', { month: 'long' }))}</ListItemDate>
            </List>
        </>
    )
}

export default ListEmailContent;