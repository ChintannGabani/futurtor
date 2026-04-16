import React from 'react';
import IeltsView from './Ielts.view';
import { IELTS_DATA } from '../../data/examPrepData';

export default function IeltsContainer() {
    return <IeltsView data={IELTS_DATA} />;
}
