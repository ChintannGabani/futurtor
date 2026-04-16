import React from 'react';
import PteView from './Pte.view';
import { PTE_DATA } from '../../data/examPrepData';

export default function PteContainer() {
    return <PteView data={PTE_DATA} />;
}
