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
    <>
      <FancyListItem left="Layered graphic print shirt" right="Comme des Garçons HOMME DEUX"/>
      <FancyListItem left="Layered graphic print shirt" right="Comme des Garçons HOMME DEUX"/>
    </>
  );
}

export const Blank = () => {
  return (
    <>
      <FancyListItem left="Layered graphic print shirt" right="Comme des Garçons HOMME DEUX" blank/>
      <FancyListItem left="Layered graphic print shirt" right="Comme des Garçons HOMME DEUX" blank/>
    </>
  );
}