import React from 'react';
import EducationConsultancyView from './EducationConsultancy.view';
import { SERVICES_DATA } from '../../data/constants';

export default function EducationConsultancyContainer() {
    const data = SERVICES_DATA['education-consultancy'];
    return <EducationConsultancyView data={data} />;
}
