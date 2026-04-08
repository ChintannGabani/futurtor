import React from 'react';
import EducationalLoanGuidanceView from './EducationalLoanGuidance.view';
import { SERVICES_DATA } from '../../data/constants';

export default function EducationalLoanGuidanceContainer() {
    const data = SERVICES_DATA['educational-loan-guidance'];
    return <EducationalLoanGuidanceView data={data} />;
}
