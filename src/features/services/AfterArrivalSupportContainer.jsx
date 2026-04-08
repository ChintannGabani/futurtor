import React from 'react';
import AfterArrivalSupportView from './AfterArrivalSupport.view';
import { SERVICES_DATA } from '../../data/constants';

export default function AfterArrivalSupportContainer() {
    const data = SERVICES_DATA['after-arrival-support'];
    return <AfterArrivalSupportView data={data} />;
}
