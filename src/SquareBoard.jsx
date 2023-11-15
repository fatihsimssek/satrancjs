import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'

const SquareBoard = ({brd,positionCntrl}) => {
    const [{isDragging},drag,preview] =useDrag({
        type: 'chess',
        item: {id:`${positionCntrl}_${brd.tupe}_${brd.color}`},
        collect: (monitor) => {
            return {isDragging: !!monitor.isDragging}
        }
    })

    const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.png`)
  return (
    <div ref={drag} >
        <DragPreviewImage  isDragging={isDragging} src={pieceImage} connect={preview} />
        <img className='w-[50px] ' src={pieceImage} alt=''></img>
    </div>
  )
}

export default SquareBoard