import React from 'react'
import Button from './Button'

const List = ["All" , "Gaming" ,"Live" , "Songs" , "News", "Entertainment", "Typing"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {List.map(list =><Button key={list} name={list}/>)}
    </div>
  )
}

export default ButtonList
