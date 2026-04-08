import React from 'react';
import AdmissionAdvicesView from './AdmissionAdvices.view';
import { SERVICES_DATA } from '../../data/constants';

export default function AdmissionAdvicesContainer() {
    const data = SERVICES_DATA['admission-advices'];
    return <AdmissionAdvicesView data={data} />;
}
