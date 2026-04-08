import React from 'react';
import ServicesView from './Services.view';
import { SERVICES_DATA } from '../../data/constants';

export default function ServicesContainer() {
    return <ServicesView data={SERVICES_DATA} />;
}
