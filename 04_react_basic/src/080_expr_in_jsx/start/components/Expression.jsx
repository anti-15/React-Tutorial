import React from 'react'
import './Expression.css'


const Expression = () => {
  const title = 'Expression';
  const array = ['item1', 'item2', 'item3'];
  const hello = (arg) => `${arg} Function`
  return (
    <div className='expression'>
      <h3>Hello {title}</h3>
      <h3>{array}</h3>
      <h3>{hello('Hello')}</h3>
      <h3>{ /* fjdak;fjdakf8*/}</h3>
    </div>
  )
}

export default Expression