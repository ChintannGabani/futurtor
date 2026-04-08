import React from 'react';
import HomeView from './Home.view';
import { HOME_DATA } from '../../data/constants';

export default function HomeContainer() {
    return (
        <HomeView data={HOME_DATA} />
    );
}
