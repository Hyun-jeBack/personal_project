/* import React from 'react'; */
import AreaSelectBox from '../components/areaSelectBox';
import PlaceBox from '../components/placeBox';
import SearchBox from '../components/searchBox';
import FooterDOM from './footerDOM';

const MainDOM = () => {
  const contentTypeIdList = [12, 14, 15, 28, 38, 39];

  const randomContentTypeId = contentTypeIdList[Math.floor(Math.random() * contentTypeIdList.length)];

  return (
    <>
      <SearchBox />
      <AreaSelectBox></AreaSelectBox>
      <div className="main-box">
        <PlaceBox numOfRows={20} contentTypeId={randomContentTypeId}></PlaceBox>
      </div>
      <FooterDOM />
    </>
  );
};

export default MainDOM;

/* 
관광지	12
문화시설	14
행사/공연/축제	15
레포츠	28
쇼핑	38
음식점	39
*/
