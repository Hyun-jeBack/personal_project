import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/* 아직 하는중  */

const RestaurantReport = () => {
  let [reportInfo, setReportInfo] = useState<Array<any>>([]); // 소개정보
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const contentId = searchParams.get('contentId');
    const contentTypeId = searchParams.get('contentTypeId');
    // api 인증키
    const apiKey = 'BmcxUTgMgiSjI9Oi1F9mGUHhiDrbyQK0p18TbQIG8LqwKvnuuVllKsa8X2tduc7tcdKOF9j59v1asYqd21dD%2Bg%3D%3D';
    // 소개정보 api
    async function reportData() {
      const res = await fetch(
        `http://apis.data.go.kr/B551011/KorService1/detailIntro1?numOfRows=20&pageNo=1&MobileOS=WIN&MobileApp=zoroTravel&contentId=${contentId}&contentTypeId=${contentTypeId}&_type=json&serviceKey=${apiKey}`
      );
      // console.log(res);
      const result = await res.json();
      // console.log(result);
      const infor: Array<any> = result.response.body.items.item;
      console.log(infor);
      setReportInfo(infor);
    }
    reportData();
  }, []);

  return (
    <>
      <section className="report-info">
        {reportInfo.length > 0 && (
          <ul className="info-list">
            {reportInfo[0].chkcreditcardfood.length > 0 && (
              <li className="info-items">
                <span className="info-name">신용카드가능정보</span>
                {reportInfo[0].chkcreditcardfood}
              </li>
            )}
            {reportInfo[0].discountinfofood.length > 0 && (
              <li className="info-items">
                <span className="info-name">할인정보</span>
                {reportInfo[0].discountinfofood}
              </li>
            )}
            {reportInfo[0].firstmenu.length > 0 && (
              <li className="info-items">
                <span className="info-name">대표메뉴</span>
                {reportInfo[0].firstmenu}
              </li>
            )}
            {reportInfo[0].infocenterfood.length > 0 && (
              <li className="info-items">
                <span className="info-name">문의및안내</span>
                {reportInfo[0].infocenterfood}
              </li>
            )}
            {/* {reportInfo[0].eventenddate.length > 0 && (
              <li className="info-items">
                <span className="info-name">행사종료일</span>
                {`${reportInfo[0].eventenddate.substring(0, 4)} -
              ${reportInfo[0].eventenddate.substring(4, 6)} -
              ${reportInfo[0].eventenddate.substring(6, 8)}`}
              </li>
            )} */}
            {reportInfo[0].kidsfacility.length > 0 && (
              <li className="info-items">
                <span className="info-name">어린이놀이방여부</span>
                {reportInfo[0].kidsfacility}
              </li>
            )}
            {reportInfo[0].opendatefood.length > 0 && (
              <li className="info-items">
                <span className="info-name">개업일</span>
                {reportInfo[0].opendatefood}
              </li>
            )}
            {reportInfo[0].opentimefood.length > 0 && (
              <li className="info-items">
                <span className="info-name">영업시간</span>
                {reportInfo[0].opentimefood}
              </li>
            )}
            {reportInfo[0].packing.length > 0 && (
              <li className="info-items">
                <span className="info-name">포장가능</span>
                {reportInfo[0].packing}
              </li>
            )}
            {reportInfo[0].parkingfood.length > 0 && (
              <li className="info-items">
                <span className="info-name">주차시설</span>
                {reportInfo[0].parkingfood}
              </li>
            )}
            {reportInfo[0].reservationfood.length > 0 && (
              <li className="info-items">
                <span className="info-name">예약안내</span>
                {reportInfo[0].reservationfood}
              </li>
            )}
            {reportInfo[0].restdatefood.length > 0 && (
              <li className="info-items">
                <span className="info-name">쉬는날</span>
                {reportInfo[0].restdatefood}
              </li>
            )}
            {reportInfo[0].scalefood.length > 0 && (
              <li className="info-items">
                <span className="info-name">규모</span>
                {reportInfo[0].scalefood}
              </li>
            )}
            {reportInfo[0].seat.length > 0 && (
              <li className="info-items">
                <span className="info-name">좌석수</span>
                {reportInfo[0].seat}
              </li>
            )}
            {reportInfo[0].smoking.length > 0 && (
              <li className="info-items">
                <span className="info-name">금연/흡연여부</span>
                {reportInfo[0].smoking}
              </li>
            )}
            {reportInfo[0].treatmenu.length > 0 && (
              <li className="info-items">
                <span className="info-name">취급메뉴</span>
                {reportInfo[0].treatmenu}
              </li>
            )}
            {reportInfo[0].lcnsno.length > 0 && (
              <li className="info-items">
                <span className="info-name">인허가번호</span>
                {reportInfo[0].lcnsno}
              </li>
            )}
          </ul>
        )}
      </section>
    </>
  );
};

export default RestaurantReport;

/* 
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
