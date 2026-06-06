import React from 'react';
import SuccessStoriesView from './SuccessStories.view';
import { SUCCESS_STORIES } from '../../data/successStoriesData';

export default function SuccessStoriesContainer() {
    return <SuccessStoriesView stories={SUCCESS_STORIES} />;
}
