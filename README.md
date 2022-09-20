# react-carousel

> Lightweight and customizable carousel for React.\

[![NPM](https://img.shields.io/npm/v/react-carousel.svg)](https://www.npmjs.com/package/react-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
# using npm
npm install --save @hectortav/react-carousel
# using yarn
yarn add @hectortav/react-carousel
```

## Usage

```tsx
import React from 'react'

import { Carousel, DataCardProps } from '@hectortav/react-carousel'
import '@hectortav/react-carousel/dist/index.css'

const data: DataCardProps[] = [
  {
    image: 'https://beeimg.com/images/h26180623163.jpg',
    title: 'A happy dog',
    category: 'Animal',
    description: 'A great dog!',
    uri: ''
  },
  {
    image:
      'https://i.pinimg.com/originals/18/4b/8f/184b8f2c10e30326f6ee92b3652408ac.jpg',
    title: 'An orange Cat',
    category: 'Animal',
    description: 'A great cat!',
    uri: ''
  },
  {
    image:
      'https://www.honeyhillfarm.net/wp-content/uploads/2017/07/DSCN0933square-300x300.jpg',
    title: 'A donkey',
    category: 'Animal',
    description: 'A donkey having a snack',
    uri: ''
  }
]

const App = () => {
  return <Carousel title='My projects' data={data} pageLength={2} />
}
```

## License

MIT © [hectortav](https://github.com/hectortav)
