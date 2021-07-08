import React from 'react';
import FancyListItem from './FancyListItem';

export default {
  title: 'FancyListItem',
  component: FancyListItem,
  parameters: {
    layout: 'fullscreen'
  }
};

export const Default = () => {
  
  return (
    <FancyListItem></FancyListItem>
  );

}