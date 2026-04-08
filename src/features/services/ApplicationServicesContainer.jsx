import React from 'react';
import ApplicationServicesView from './ApplicationServices.view';
import { SERVICES_DATA } from '../../data/constants';

export default function ApplicationServicesContainer() {
    const data = SERVICES_DATA['application-services'];
    return <ApplicationServicesView data={data} />;
}
