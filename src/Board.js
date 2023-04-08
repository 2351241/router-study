import React from "react"
import {useParams} from "react-router-dom"

const Board = () => {
    const {id} = useParams()
    console.log({id});
   
    return(
    <div>
        <h2>게시글 내용 {id} 입니다.</h2>
    </div>
   )
}
export default Board;