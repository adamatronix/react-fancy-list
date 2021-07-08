# react-fancy-ornamental

Add some fanciness to your site by adding a decorative fancy list.

## Install

```console
$ npm install @adamatronix/react-fancy-list --save
```

## Example Usage

### Basic

```jsx
import React from 'react'
import { FancyListItem } from '@adamatronix/react-fancy-list'

const Example = () => {
  return <div>
      <FancyListItem left="Layered graphic print shirt" right="Comme des Garçons HOMME DEUX"/>
      <FancyListItem left="Layered graphic print shirt" right="Comme des Garçons HOMME DEUX"/>
    </div>
}
```

## Props

### blank

Type: Boolean Default: undefined

Decide whether or not to show the decorative line

### left

Type: String Default: undefined

The left text content

### right

Type: String Default: undefined

Tthe right text content