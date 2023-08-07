
import { useLocation } from "react-router-dom";
import { ArrowBackOutlined, DeleteOutlineOutlined, AlternateEmailOutlined } from '@mui/icons-material';
import { apiUrl } from "../../sevices/api.url";
import useApi from "../../hooks/useAPI";


const ViewEmails = () => {
    const { state } = useLocation();
    const { email } = state;

    const moveEmailToBinService = useApi(apiUrl.moveAllEmailsToBin);

    const moveEmailToBin = (email) => {
        moveEmailToBinService.call([email._id]);
        window.history.back();
    }

    return (
        <div style={{ marginTop: '65px', marginLeft: '240px', paddingRight: '5px', paddingTop: '5px' }}>
            <div style={{ borderBottom: '1px solid grey', paddingBottom: '8px' }}>
                <ArrowBackOutlined onClick={() => window.history.back()} style={{ marginRight: '10px' }} />
                <DeleteOutlineOutlined onClick={() => { moveEmailToBin(email) }} />
            </div>
            <div style={{ display: 'flex', height: '', flexDirection: 'row', width: '100%', borderBottom: '3px solid grey' }}>
                <div style={{ display: 'flex ' }}>
                    <p style={{
                        alignSelf: 'center', padding: '0px 0px 5px 0px', backgroundColor: '#8080804d', fontSize: '25px', width: '30px',
                        borderRadius: " 50%", textAlign: "center", margin: '0px 5px 0px 0px'
                    }}>
                        {email.to.slice(0, 1)}</p>
                    <p style={{ margin: '10px', alignSelf: 'center', fontWeight: '700', fontWeight: 'sans-serif', fontSize: '20px' }}>
                        {email.subject}</p>
                    <p style={{ display: 'flex', alignItems: 'center', fontSize: '11px', margin: '15px 0px', height: 'fit-content', fontFamily: 'system-ui', fontWeight: '500', backgroundColor: '#8c8c8c63', borderRadius: '5px', padding: '0px 2px', }}>From:</p>
                    <p style={{ fontSize: '12px', alignSelf: 'center', fontSize: '10px', color: '#4e4646d9' }}>&#60;{email.from}&#62;</p>
                </div>
                <div style={{ marginLeft: 'auto', alignSelf: "center", paddingRight: '10px', fontFamily: 'monospace', fontSize: "13px" }}>
                    {(new window.Date(email.date)).getDate()}-
                    {(new window.Date(email.date).toLocaleString('default', { month: 'long' }))}-
                    {(new window.Date(email.date)).getFullYear()}
                </div>

            </div>
            <div style={{ marginLeft: '45px' }}>
                <p>{email.message}</p>

            </div>
        </div>
    )
}

export default ViewEmails;