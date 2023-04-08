import React from "react"
import { Link } from "react-router-dom";

const Boards = () => {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/boards/1">게시글 제목1</Link>
                </li>
                <li>
                    <Link to="/boards/2">게시글 제목2</Link>
                </li>
                <li>
                    <Link to="/boards/3">게시글 제목3</Link>
                </li>
            </ul>
        </div>
    )
}
export default Boards;