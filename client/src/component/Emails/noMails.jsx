


const NoMail = ({ message }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontWeight: "500" }}>{message.heading}</p>
            <p style={{ padding: '0px 10px', wordBreak: 'break-word' }}>{message.subHeading}</p>
        </div>
    )
}
export default NoMail;