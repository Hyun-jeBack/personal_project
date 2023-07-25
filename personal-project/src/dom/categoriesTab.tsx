import PlaceBox from '../components/placeBox';
import SearchBox from '../components/searchBox';
import FooterDOM from './footerDOM';

export const TourismTab = () => {
  return (
    <div className="categorie-tab">
      {/* <SearchBox /> */}
      <PlaceBox numOfRows={50} contentTypeId={12}></PlaceBox>
      <FooterDOM />
    </div>
  );
};

export const CultureTab = () => {
  return (
    <>
      {/* <SearchBox /> */}
      <PlaceBox numOfRows={50} contentTypeId={14}></PlaceBox>
      <FooterDOM />
    </>
  );
};

export const FestivalTab = () => {
  return (
    <>
      {/* <SearchBox /> */}
      <PlaceBox numOfRows={50} contentTypeId={15}></PlaceBox>
      <FooterDOM />
    </>
  );
};

export const LeportsTab = () => {
  return (
    <>
      {/* <SearchBox /> */}
      <PlaceBox numOfRows={50} contentTypeId={28}></PlaceBox>
      <FooterDOM />
    </>
  );
};

export const ShoppingTab = () => {
  return (
    <>
      {/* <SearchBox /> */}
      <PlaceBox numOfRows={50} contentTypeId={38}></PlaceBox>
      <FooterDOM />
    </>
  );
};

export const RestaurantTab = () => {
  return (
    <>
      {/* <SearchBox /> */}
      <PlaceBox numOfRows={50} contentTypeId={39}></PlaceBox>
      <FooterDOM />
    </>
  );
};
