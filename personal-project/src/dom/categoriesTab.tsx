import PlaceBox from '../components/placeBox';
import FooterDOM from './footerDOM';

export const TourismTab = () => {
  return (
    <div className="categorie-tab">
      <PlaceBox numOfRows={100} contentTypeId={12}></PlaceBox>
      <FooterDOM />
    </div>
  );
};

export const CultureTab = () => {
  return (
    <>
      <PlaceBox numOfRows={100} contentTypeId={14}></PlaceBox>
      <FooterDOM />
    </>
  );
};

export const FestivalTab = () => {
  return (
    <>
      <PlaceBox numOfRows={100} contentTypeId={15}></PlaceBox>
      <FooterDOM />
    </>
  );
};

export const LeportsTab = () => {
  return (
    <>
      <PlaceBox numOfRows={100} contentTypeId={28}></PlaceBox>
      <FooterDOM />
    </>
  );
};

export const ShoppingTab = () => {
  return (
    <>
      <PlaceBox numOfRows={100} contentTypeId={38}></PlaceBox>
      <FooterDOM />
    </>
  );
};

export const RestaurantTab = () => {
  return (
    <>
      <PlaceBox numOfRows={100} contentTypeId={39}></PlaceBox>
      <FooterDOM />
    </>
  );
};
