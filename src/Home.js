import React from "react";
import {Link} from "react-router-dom";

const Home = () =>{
  return(
    <div>
      <h1>Home</h1>
      <p>홈 메인페이지! 가장 먼저 보여지는 페이지</p>
      
       <ul>
          <li>
            <Link to="/about">about the website</Link>
          </li>
          <li>
            <Link to="/profiles/messi">Messi 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/gaga">Lady Gaga 프로필</Link>
          </li>
          <li>
            <Link to="profiles/void"> 존재하지 않는 프로필</Link>
          </li>
          <li>
            <Link to="/boards"> 게시글 목록 </Link>
          </li>
       </ul>

    </div>
  )
}

export default Home;