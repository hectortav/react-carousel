import React from 'react'

import { Carousel, DataCardProps } from 'react-carousel'
import 'react-carousel/dist/index.css'

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

export default App
