import React from 'react';
import { Link } from 'react-router-dom';

const HeadDOM = (): React.ReactElement => {
  // const noneUsrePage = (
  //   <a className="log-in" href="/">
  //     회원가입/로그인
  //   </a>
  // );

  return (
    <>
      <section className="head-dom">
        <div className="top-head">
          <h1 className="main-logo">
            <a href="/">제로여행</a>
          </h1>
          <div className="user-zone">
            <a className="log-in" href="/">
              회원가입/로그인
            </a>
            <Link className="wishlist" to="/wishlistTab">
              위시리스트
            </Link>
          </div>
        </div>
        {/* <div className="nav-head"> */}
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/tourismTab" className="nav-link">
                관광
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cultureTab" className="nav-link">
                문화
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/festivalTab" className="nav-link">
                행사
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/leportsTab" className="nav-link">
                레포츠
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shopping" className="nav-link">
                쇼핑
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/restaurant" className="nav-link">
                음식점
              </Link>
            </li>
          </ul>
        </nav>
        {/* </div> */}
      </section>
    </>
  );
};

export default HeadDOM;
