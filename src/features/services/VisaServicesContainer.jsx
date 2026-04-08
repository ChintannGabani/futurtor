import React from 'react';
import VisaServicesView from './VisaServices.view';
import { SERVICES_DATA } from '../../data/constants';

export default function VisaServicesContainer() {
    const data = SERVICES_DATA['visa-services'];
    return <VisaServicesView data={data} />;
}
