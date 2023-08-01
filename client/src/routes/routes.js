
import Main from "../Main"
import ListEmails from "../component/Emails/listEmails";
import ViewEmails from "../component/Emails/viewEmails";

export const routes = {
    main: {
        path: '/',
        element: Main
    },
    emails: {
        path: `/emails`,
        element: ListEmails
    },
    viewEmails: {
        path: '/view',
        element: ViewEmails
    },
    invalid: {
        path: '*',
        element: ListEmails
    }
}