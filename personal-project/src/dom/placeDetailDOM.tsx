import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import FooterDOM from './footerDOM';
import FestivalReport from './report/festivalReport';
import TourismReport from './report/tourismRsport';
import CultureReport from './report/cultureReport';
import LeportsReport from './report/leportsReort';
import ShoppingReport from './report/shoppingReport';
import RestaurantReport from './report/restaurantReport';
// import { Map, MapMarker } from 'react-kakao-maps-sdk';

const PlaceDetailDOM = () => {
  let [baseInfo, setBaseInfo] = useState<Array<any>>([]); // 기본정보
  let [imgInfo, setImgInfo] = useState<Array<any>>([]); // 이미지정보
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const contentId = searchParams.get('contentId');
  const contentTypeId = searchParams.get('contentTypeId');
  // const { lat, lon } = useSelector(state => state.locationReducer, shallowEqual);
  // const { kakao } = window;

  const [isStarClicked, setIsStarClicked] = useState(false);

  useEffect(() => {
    // api 인증키
    const apiKey = 'BmcxUTgMgiSjI9Oi1F9mGUHhiDrbyQK0p18TbQIG8LqwKvnuuVllKsa8X2tduc7tcdKOF9j59v1asYqd21dD%2Bg%3D%3D';

    // 기본정보 api
    async function baseData() {
      const res = await fetch(
        `https://apis.data.go.kr/B551011/KorService1/detailCommon1?contentId=${contentId}&defaultYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&MobileOS=WIN&MobileApp=zoroTravel&_type=json&serviceKey=${apiKey}`
      );
      // console.log(res);
      const result = await res.json();
      // console.log(result);
      const infor: Array<any> = result.response.body.items.item;
      console.log(infor);
      setBaseInfo(infor);
    }
    // 이미지정보 api
    async function imgData() {
      const res = await fetch(
        `http://apis.data.go.kr/B551011/KorService1/detailImage1?contentId=${contentId}&MobileOS=WIN&MobileApp=zoroTravel&imageYN=Y&subImageYN=Y&_type=json&serviceKey=${apiKey}`
      );
      // console.log(res);
      const result = await res.json();
      // console.log(result);
      const infor: Array<any> = result.response.body.items.item;
      // console.log(infor);
      console.log(infor.length);
      setImgInfo(infor);

      document.cookie = 'crossCookie=bar; SameSite=None; Secure';
    }

    baseData();
    imgData();
  }, []);

  useEffect(() => {
    /* const mapContainer = document.getElementById('kakao-map');
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = 'geolocation을 사용할수 없어요..';

      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    } */
    /*   const container = document.getElementById('kakao-map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    kakao.maps.load(() => {
      const map = new kakao.maps.Map(container, options);

      //위도, 경도로 변환 및 마커표시
      var geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(baseInfo[0].addr1, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(+result[0].y, +result[0].x);
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          map.setCenter(coords);
        }
      });
    }); */
    /*  const container = document.querySelector('.kakao-map');
    const options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(baseInfo[0].title, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(baseInfo[0].mapy, baseInfo[0].mapx);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;text-align:center;padding:6px 0;">' + `${baseInfo[0].title}` + '</div>',
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    }); */
  }, [baseInfo]);

  const starClick = () => {
    setIsStarClicked(prevState => !prevState);
  };

  return (
    <>
      <div className="place-detail-dom">
        <div className="detail-head">
          {imgInfo.length > 0 && (
            <Carousel
              autoPlay
              showThumbs={false}
              interval={5000}
              showStatus={false}
              infiniteLoop={true}
              className="carousel-container">
              {imgInfo.map(info => (
                <img src={info.originimgurl || info.smallimageurl} alt={info.imgname} className="place-detail-image" />
              ))}
            </Carousel>
          )}
          <div className="place-base-container">
            <div className="base-high">
              {baseInfo.length > 0 && <h3 className="place-title">{baseInfo[0].title}</h3>}
              <svg
                onClick={starClick}
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill={isStarClicked ? 'gold' : 'currentColor'}
                className="bi bi-star"
                viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </div>
            {baseInfo.length > 0 && <div className="place-arr">{baseInfo[0].addr1}</div>}
            {baseInfo.length > 0 && <div className="place-overview">{baseInfo[0].overview}</div>}
          </div>
        </div>
        {`${contentTypeId}` === '12' && <TourismReport />}
        {`${contentTypeId}` === '14' && <CultureReport />}
        {`${contentTypeId}` === '15' && <FestivalReport />}
        {`${contentTypeId}` === '28' && <LeportsReport />}
        {`${contentTypeId}` === '38' && <ShoppingReport />}
        {`${contentTypeId}` === '39' && <RestaurantReport />}
        {baseInfo.length > 0 && <div className="kakao-map"></div>}
      </div>
      <FooterDOM />
    </>
  );
};

export default PlaceDetailDOM;

/* 
기본정보, 주소, 개요
https://apis.data.go.kr/B551011/KorService1/detailCommon1?contentId=${contentId}&defaultYN=Y&addrinfoYN=Y&outlYN=Y&MobileOS=WIN&MobileApp=zoroTravel&_type=json&serviceKey=${apiKey}

<소개정보 조회>
http://apis.data.go.kr/B551011/KorService1/detailIntro1?numOfRows=20&pageNo=1&MobileOS=WIN&MobileApp=zoroTravel&contentId=${contentId}&contentTypeId=${contentTypeId}&_type=json&serviceKey=${apiKey}

이미지정보 조회
http://apis.data.go.kr/B551011/KorService1/detailImage1?MobileOS=WIN&MobileApp=zoroTravel&contentId=${contentId}&imageYN=Y&subImageYN=Y&_type=json&serviceKey=${apiKey}


<기본정보>
booktour	교과서속여행지여부(1=여행지, 0=해당없음)
createdtime	 콘텐츠최초등록일
hmpg	홈페이지주소
modifiedtime	콘텐츠수정일
tel		전화번호
telname		전화번호명
title	콘텐츠명(제목)
firstimage	대표이미지(원본)
firstimage2	대표이미지(썸네일)
cpyrhtDivCd	저작권유형
areacode	지역코드
sigungucode	시군구코드
cat1	대분류
cat2	중분류
cat3	소분류
addr1	주소
addr2	상세주소
zipcode	우편번호
mapx	GPS X좌표
mapy	GPS Y좌표
mlevel	Map Level	
overview	콘텐츠개요조회

<이미지정보>
resultCode	결과코드	
resultMsg	결과메시지	
numOfRows	한페이지결과수	
pageNo	페이지번호	
totalCount	전체결과수	
contentid	콘텐츠ID	
imgname	이미지명
originimgurl	원본이미지
serialnum	이미지일련번호
smallimageurl	썸네일이미지
cpyrhtDivCd	저작권유형

<소개정보>
[contentTypeId=12 (관광지)]
accomcount	수용인원
chkbabycarriage	유모차대여정보
chkcreditcard	신용카드가능정보
chkpet	애완동물동반가능정보
expagerange	체험가능연령
expguide	체험안내
heritage1	세계문화유산유무
heritage2	세계자연유산유무
heritage3	세계기록유산유무
infocenter	문의및안내
opendate	개장일
parking	주차시설
restdate	쉬는날
useseason	이용시기
usetime	이용시간

[contTypeId=14 (문화시설)]
accomcountculture	수용인원
chkbabycarriageculture	유모차대여정보
chkcreditcardculture	신용카드가능정보
chkpetculture	애완동물동반가능정보
discountinfo	할인정보
infocenterculture	문의및안내
parkingculture	주차시설
parkingfee	주차요금
restdateculture	쉬는날
usefee	이용요금
usetimeculture	이용시간
scale	규모
spendtime	관람소요시간

[contentTypeId=15 (행사/공연/축제)]
agelimit	관람가능연령
bookingplace	예매처
discountinfofestival	할인정보
eventenddate	행사종료일
eventhomepage	행사홈페이지
eventplace	행사장소
eventstartdate	행사시작일
festivalgrade	축제등급(2016-06-17 추가)
placeinfo	행사장위치안내
playtime	공연시간(밤10시이후제한)
program	행사프로그램
spendtimefestival	관람소요시간
sponsor1	주최자정보
sponsor1tel	주최자연락처
sponsor2	주관사정보
sponsor2tel	주관사연락처
subevent	부대행사
usetimefestival	이용요금

[contentTypeId=28 (레포츠)]
accomcountleports	수용인원
chkbabycarriageleports	유모차대여정보
chkcreditcardleports	신용카드가능정보
chkpetleports	애완동물동반가능정보
expagerangeleports	체험가능연령
infocenterleports	문의및안내
openperiod	개장기간
parkingfeeleports	주차요금
parkingleports	주차시설
reservation	예약안내
restdateleports	쉬는날
scaleleports	규모
usefeeleports	입장료
usetimeleports	이용시간

[contentTypeId=38 (쇼핑)]
chkbabycarriage shopping	유모차대여정보
chkcreditcard shopping	신용카드가능정보
chkpetshopping	애완동물동반가능정보
culturecenter	문화센터바로가기
fairday	장서는날
infocentershopping	문의및안내
opendateshopping	개장일
opentime	영업시간
parkingshopping	주차시설
restdateshopping	쉬는날
restroom	화장실설명
saleitem	판매품목
saleitemcost	판매품목별가격
scaleshopping	규모
shopguide	매장안내

[contentTypeId=39 (음식점)]
chkcreditcardfood	신용카드가능정보
discountinfofood	할인정보
firstmenu	대표메뉴
infocenterfood	문의및안내
kidsfacility	어린이놀이방여부
opendatefood	개업일
opentimefood	영업시간
packing	포장가능
parkingfood	주차시설
reservationfood	예약안내
restdatefood	쉬는날
scalefood	규모
seat	좌석수
smoking	금연		금연/흡연여부
treatmenu	취급메뉴
lcnsno	인허가번호








*/
