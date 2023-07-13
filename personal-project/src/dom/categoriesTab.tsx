// import React from 'react';
import AreaSelectBox from '../components/areaSelectBox';
import PlaceBox from '../components/placeBox';
import SearchBox from '../components/searchBox';
import FooterDOM from './footerDOM';

export const TourismTab = () => {
  return (
    <div className="categorie-tab">
      <SearchBox />
      <AreaSelectBox></AreaSelectBox>
      <div className="main-box">
        <PlaceBox numOfRows={50} contentTypeId={12}></PlaceBox>
      </div>
      <FooterDOM />
    </div>
  );
};

export const CultureTab = () => {
  return (
    <>
      <SearchBox />
      <AreaSelectBox></AreaSelectBox>
      <div className="main-box">
        <PlaceBox numOfRows={50} contentTypeId={14}></PlaceBox>
      </div>
      <FooterDOM />
    </>
  );
};

export const FestivalTab = () => {
  return (
    <>
      <SearchBox />
      <AreaSelectBox></AreaSelectBox>
      <div className="main-box">
        <PlaceBox numOfRows={50} contentTypeId={15}></PlaceBox>
      </div>
      <FooterDOM />
    </>
  );
};

export const LeportsTab = () => {
  return (
    <>
      <SearchBox />
      <AreaSelectBox></AreaSelectBox>
      <div className="main-box">
        <PlaceBox numOfRows={50} contentTypeId={28}></PlaceBox>
      </div>
      <FooterDOM />
    </>
  );
};

export const ShoppingTab = () => {
  return (
    <>
      <SearchBox />
      <AreaSelectBox></AreaSelectBox>
      <div className="main-box">
        <PlaceBox numOfRows={50} contentTypeId={38}></PlaceBox>
      </div>
      <FooterDOM />
    </>
  );
};

export const RestaurantTab = () => {
  return (
    <>
      <SearchBox />
      <AreaSelectBox></AreaSelectBox>
      <div className="main-box">
        <PlaceBox numOfRows={50} contentTypeId={39}></PlaceBox>
      </div>
      <FooterDOM />
    </>
  );
};
