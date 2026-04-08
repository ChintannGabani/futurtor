import React from 'react';
import ContactView from './Contact.view';
import { CONTACT_DATA } from '../../data/constants';

export default function ContactContainer() {
    return <ContactView data={CONTACT_DATA} />;
}
