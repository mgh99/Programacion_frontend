export type Contacts = {
    _id: string;
    name: string;
    lastNames: string;
    phone: number;
    email: string;
}

export type ContactAZProps = {
    ContactsASC: Contacts[];
}

export type ContactZAProps = {
    ContactsDESC: Contacts[];
}

export type AddContactProps = {
    addContact: Contacts;
}

export type UpdateContactProps = {
    updateContact: Contacts;
}

export type DeleteContactProps = {
    deleteContact: Contacts;
}

/**export type DeleteContactProps = {
    deleteContact: Contact;
} */