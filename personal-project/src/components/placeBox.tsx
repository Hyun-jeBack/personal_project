import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AreaSelectBox from './areaSelectBox';
import SearchBox from './searchBox';
import TopScrollButton from './topScrollButton';

const PlaceBox = ({ numOfRows, contentTypeId }: { numOfRows: Number; contentTypeId?: Number }) => {
  const [information, setInformation] = useState<Array<any>>([]);
  const [selectedAreaCode, setSelectedAreaCode] = useState<number>(1);

  const [totalDataCount, setTotalDataCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1); // 페이지 번호
  const pageSize = 20; // 한 페이지에 보여줄 데이터 개수
  // let usePagination = numOfRows > pageSize; // true일 경우 페이지네이션 사용

  useEffect(() => {
    async function fetchData() {
      // api 인증키
      const apiKey = 'BmcxUTgMgiSjI9Oi1F9mGUHhiDrbyQK0p18TbQIG8LqwKvnuuVllKsa8X2tduc7tcdKOF9j59v1asYqd21dD%2Bg%3D%3D';
      // 페이지 번호
      // const pageNo = 1;
      // 한 페이지 결과 수
      //const numOfRows = 20;

      const res = await fetch(
        `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=${pageSize}&pageNo=${currentPage}&contentTypeId=${contentTypeId}&arrange=R&MobileOS=WIN&MobileApp=zoroTravel&_type=json&serviceKey=${apiKey}&areaCode=${selectedAreaCode}`
      );
      //console.log(res);
      const result = await res.json();
      // console.log(result);
      const infor: Array<any> = result.response.body.items.item;
      // console.log(infor);
      setInformation(infor);
      const totalCount: number = result.response.body.totalCount;
      setTotalDataCount(totalCount);
      // console.log(numOfRows);

      // document.cookie = 'safeCookie1=foo; SameSite=Lax';
      // document.cookie = 'safeCookie2=foo';
      document.cookie = 'crossCookie=bar; SameSite=None; Secure';
    }
    fetchData();
  }, [selectedAreaCode, numOfRows, contentTypeId, currentPage]);

  // 전체 페이지 개수 계산
  const totalPages = Math.ceil(+numOfRows / pageSize);

  // totalPages 개수만큼 버튼을 생성하는 함수
  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button className="page-number" key={i} onClick={() => goToPage(i)} disabled={currentPage === i}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  // 페이지 번호 변경 함수
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // 이전 페이지로 이동
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  // 다음 페이지로 이동
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

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
      <div className="pagination">
        {+numOfRows > 20 && (
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            이전
          </button>
        )}
        {+numOfRows > 20 && renderPageButtons()}
        {+numOfRows > 20 && (
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            다음
          </button>
        )}
      </div>
      <TopScrollButton />
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
