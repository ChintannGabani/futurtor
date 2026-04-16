import React from 'react';
import ToeflView from './Toefl.view';
import { TOEFL_DATA } from '../../data/examPrepData';

export default function ToeflContainer() {
    return <ToeflView data={TOEFL_DATA} />;
}
