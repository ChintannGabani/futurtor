import React from 'react';
import AboutView from './About.view';
import { ABOUT_DATA } from '../../data/constants';

export default function AboutContainer() {
    return <AboutView data={ABOUT_DATA} />;
}
