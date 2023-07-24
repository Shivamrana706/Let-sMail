
import { Inbox, StarBorder, Send, LabelImportant, Error, Delete } from '@mui/icons-material';
// import InboxIcon from '@mui/icons-material/Inbox';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

export const SideBar_content = [
    {
        name: 'Inbox',
        title: 'Inbox',
        icon: Inbox
    },
    {
        name: 'Starred',
        title: 'Starred',
        icon: StarBorder
    },
    {
        name: 'Sent',
        title: 'Sent',
        icon: Send
    },
    {
        name: 'Important',
        title: 'Important',
        icon: LabelImportant
    },
    {
        name: 'Spam',
        title: 'Spam',
        icon: Error
    },
    {
        name: 'Trash',
        title: 'Trash',
        icon: Delete
    },
]