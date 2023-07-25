import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AreaSelectBox from './areaSelectBox';
import SearchBox from './searchBox';

const PlaceBox = ({ numOfRows, contentTypeId }: { numOfRows: Number; contentTypeId?: Number }) => {
  const [information, setInformation] = useState<Array<any>>([]);
  const [selectedAreaCode, setSelectedAreaCode] = useState<number>(1);

  useEffect(() => {
    async function fetchData() {
      // api 인증키
      const apiKey = 'BmcxUTgMgiSjI9Oi1F9mGUHhiDrbyQK0p18TbQIG8LqwKvnuuVllKsa8X2tduc7tcdKOF9j59v1asYqd21dD%2Bg%3D%3D';
      // 페이지 번호
      const pageNo = 1;
      // 한 페이지 결과 수
      //const numOfRows = 20;

      const res = await fetch(
        `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=${numOfRows}&pageNo=${pageNo}&contentTypeId=${contentTypeId}&arrange=R&MobileOS=WIN&MobileApp=zoroTravel&_type=json&serviceKey=${apiKey}&areaCode=${selectedAreaCode}`
      );
      //console.log(res);
      const result = await res.json();
      // console.log(result);
      const infor: Array<any> = result.response.body.items.item;
      console.log(infor);
      setInformation(infor);
    }
    fetchData();
  }, [selectedAreaCode, numOfRows, contentTypeId]);

  const handleAreaSelect = (areaCode: number) => {
    setSelectedAreaCode(areaCode);
  };

  if (!information) {
    return <div>Loadig...</div>;
  }

  return (
    <>
      <SearchBox onSearchContent={information} />
      <AreaSelectBox onAreaSelect={handleAreaSelect}></AreaSelectBox>
      <div className="main-box">
        {information.map((item: any) => (
          <div className="place-box" key={item.contentid}>
            <Link
              to={`/placeDetailTab/${item.contentid}?contentId=${item.contentid}&contentTypeId=${item.contenttypeid}`}
              className="detail-place-tab">
              <img className="place-img" src={item.firstimage} alt={item.title} />
            </Link>
            <span className="place-name">
              <Link to={`/placeDetailTab/${item.contentid}`} className="detail-place-tab">
                {item.title}
              </Link>
            </span>
            <span className="palce-location">
              <Link to={`/placeDetailTab/${item.contentid}`} className="detail-place-tab">
                {item.addr1}
              </Link>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlaceBox;

/* 
http://apis.data.go.kr/B551011/KorService1
BmcxUTgMgiSjI9Oi1F9mGUHhiDrbyQK0p18TbQIG8LqwKvnuuVllKsa8X2tduc7tcdKOF9j59v1asYqd21dD%2Bg%3D%3D

// 키워드 검색 조회
https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=20&pageNo=50&MobileOS=WIN&MobileApp=zoroTravel&_type=json&keyword=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD&serviceKey=BmcxUTgMgiSjI9Oi1F9mGUHhiDrbyQK0p18TbQIG8LqwKvnuuVllKsa8X2tduc7tcdKOF9j59v1asYqd21dD%252Bg%253D%253D
https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=${numOfRows}&pageNo=${pageNo}&MobileOS=WIN&MobileApp=zoroTravel&_type=json&keyword=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD&serviceKey=${apiKey}

https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=20&pageNo=50&MobileOS=WIN&MobileApp=zoroTravel&_type=json&keyword=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD&contentTypeId=12%2C14%2C15%2C28&serviceKey=BmcxUTgMgiSjI9Oi1F9mGUHhiDrbyQK0p18TbQIG8LqwKvnuuVllKsa8X2tduc7tcdKOF9j59v1asYqd21dD%252Bg%253D%253D
https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=${numOfRows}&pageNo=${pageNo}&MobileOS=WIN&MobileApp=zoroTravel&_type=json&keyword=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD&contentTypeId=12%2C14%2C15%2C28&serviceKey=${apiKey}

// 지역기반 관광정보 조회
https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=20&pageNo=1&MobileOS=WIN&MobileApp=zoroTravel&_type=json&serviceKey=BmcxUTgMgiSjI9Oi1F9mGUHhiDrbyQK0p18TbQIG8LqwKvnuuVllKsa8X2tduc7tcdKOF9j59v1asYqd21dD%252Bg%253D%253D
https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=${numOfRows}&pageNo=${pageNo}&MobileOS=WIN&MobileApp=zoroTravel&_type=json&serviceKey=${apiKey}

<areaCode>
1 서울
2 인천
3 대전
4 대구
5 광주
6 부산
7 울산
8 세종
31 경기도
32 강원도
33 충청북도
34 충청남도
35 경상북도
36 경상남도
37 전라북도
38 전라남도
39 제주도


*/
