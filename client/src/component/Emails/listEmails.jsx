import NoMail from './noMails';
import useApi from '../../hooks/useAPI';
import { apiUrl } from '../../sevices/api.url';
import { routes } from '../../routes/routes';
import { useParams } from 'react-router-dom';
// import ListEmailContent from './listEmailContent';
import { useEffect, useState } from 'react';
import { Checkbox, Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { DeleteOutline, Star, StarBorderOutlined, StarOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { NoMail_Content } from '../../config/noMails_content'



const ListEmails = () => {
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [refreshState, setRefreshState] = useState(false);
    // const [starToggle, setStarToggele] = useState(false);

    const { type } = useParams();
    const navigate = useNavigate();

    const getEmails = useApi(apiUrl.getEmailsFromType);
    const moveToBinService = useApi(apiUrl.moveAllEmailsToBin);
    const deleteEmailsServices = useApi(apiUrl.deleteEmails);
    const starToggleService = useApi(apiUrl.starredToggle)

    useEffect(() => {
        getEmails.call({}, type);
    }, [type, refreshState]);


    const ListItemDate = styled(ListItemText)({
        padding: '0px 12px',
        '& >span ': {
            float: 'right',
        }
    })

    const selectAllMails = (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            console.log("true");
            const allSelectedEmails = getEmails?.response?.map(email => email._id);
            { allSelectedEmails ? setSelectedEmails(allSelectedEmails) : setSelectedEmails([]) }
            // console.log(selectedEmails, "TrueselectedEmails")
        } else {
            setSelectedEmails([]);
            console.log('false');
        }
    }
    const moveAllEmailsToBin = () => {
        if (type === "bin") {
            deleteEmailsServices.call(selectedEmails);
        } else {
            moveToBinService.call(selectedEmails);
        }
        setRefreshState(prevState => !prevState);
    }
    const openViewMails = (email) => {
        navigate(routes.viewEmails.path, { state: { email: email } });
    }
    const starredFunction = (email) => {
        starToggleService.call({ id: email._id, value: !email.starred });
        setRefreshState(prevState => !prevState);
    }
    const checkBoxValueChange = (email) => {
        if (selectedEmails.includes(email._id)) {
            setSelectedEmails(prevState => prevState.filter(id => id != email._id))
        } else {
            setSelectedEmails(prevState => [...prevState, email._id])
        }
    }
    return (
        <Box style={{ margin: '65px 10px 0px 240px ' }}>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox onChange={(e) => selectAllMails(e)} />
                <DeleteOutline style={{ color: '#4a4545cc' }} onClick={() => moveAllEmailsToBin()} />
            </Box>
            <Box>
                {console.log(getEmails?.response?.length, "length")}
                {
                    getEmails?.response?.length === 0 ? <NoMail message={NoMail_Content[type]} /> :
                        getEmails?.response?.map((email) => (
                            <List key={email._id} style={{
                                display: 'flex', alignItems: 'center', cursor: 'pointer',
                                backgroundColor: '#857e7e30', borderRadius: '10px', marginBottom: '1px', height: "35px"
                            }} >
                                <ListItemIcon style={{ alignItems: 'center', marginRight: '10px' }}>
                                    <Checkbox onClick={() => { checkBoxValueChange(email) }} checked={selectedEmails.includes(email._id)} />
                                    {
                                        !email.starred ? <StarBorderOutlined onClick={() => starredFunction(email)} /> : <StarOutlined onClick={() => starredFunction(email)} />
                                    }

                                </ListItemIcon>
                                {/* <div onClick={(email) => openViewMails(email)} style={{ display: 'flex' }}> */}
                                <ListItemText primary={email.name} onClick={() => openViewMails(email)} />
                                <Typography onClick={() => openViewMails(email)} style={{ fontSize: '14px', backgroundColor: '#8c8c8c63', borderRadius: '5px', padding: '0px 5px', marginRight: '5px' }}>Inbox</Typography>
                                <ListItemText onClick={() => openViewMails(email)}  >{email.subject} {email.message && '-'} {email.message}</ListItemText>

                                <ListItemDate onClick={() => openViewMails(email)} style={{}}>{(new window.Date(email.date)).getDate()} {(new window.Date(email.date).toLocaleString('default', { month: 'long' }))}</ListItemDate>
                                {/* </div> */}
                            </List>
                        ))

                }
                {/* {console.log(NoMail_Content[type], "type", type)} */}
                {
                    // getEmails?.response?.map((email) => (
                    //     <List key={email._id} style={{
                    //         display: 'flex', alignItems: 'center', cursor: 'pointer',
                    //         backgroundColor: '#857e7e30', borderRadius: '10px', marginBottom: '1px', height: "35px"
                    //     }} >
                    //         <ListItemIcon style={{ alignItems: 'center', marginRight: '10px' }}>
                    //             <Checkbox checked={selectedEmails.includes(email._id)} />
                    //             {
                    //                 !email.starred ? <StarBorderOutlined onClick={() => starredFunction(email)} /> : <StarOutlined onClick={() => starredFunction(email)} />
                    //             }

                    //         </ListItemIcon>
                    //         {/* <div onClick={(email) => openViewMails(email)} style={{ display: 'flex' }}> */}
                    //         <ListItemText primary={email.name} onClick={() => openViewMails(email)} />
                    //         <Typography onClick={() => openViewMails(email)} style={{ fontSize: '14px', backgroundColor: '#8c8c8c63', borderRadius: '5px', padding: '0px 5px', marginRight: '5px' }}>Inbox</Typography>
                    //         <ListItemText onClick={() => openViewMails(email)}  >{email.subject} {email.message && '-'} {email.message}</ListItemText>

                    //         <ListItemDate onClick={() => openViewMails(email)} style={{}}>{(new window.Date(email.date)).getDate()} {(new window.Date(email.date).toLocaleString('default', { month: 'long' }))}</ListItemDate>
                    //         {/* </div> */}
                    //     </List>
                    // ))
                }
            </Box>
        </Box>
    )
}

export default ListEmails;