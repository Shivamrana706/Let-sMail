
import { Inbox, StarBorder, Send, LabelImportant, MailOutlined, Error, Delete, Drafts } from '@mui/icons-material';
// import InboxIcon from '@mui/icons-material/Inbox';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

export const SideBar_content = [
    {
        name: 'allMails',
        title: 'All Mails',
        icon: MailOutlined

    },
    {
        name: 'inbox',
        title: 'Inbox',
        icon: Inbox
    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarBorder
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: Send
    },
    // {
    //     name: 'important',
    //     title: 'Important',
    //     icon: LabelImportant
    // },
    {
        name: 'draft',
        title: 'Draft',
        icon: Drafts
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: Delete
    },
]