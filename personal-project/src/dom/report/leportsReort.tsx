import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/* 아직 하는중 */

const LeportsReport = () => {
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
            {reportInfo[0].accomcountleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">수용인원</span>
                {reportInfo[0].accomcountleports}
              </li>
            )}
            {reportInfo[0].chkbabycarriageleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">유모차대여정보</span>
                {reportInfo[0].chkbabycarriageleports}
              </li>
            )}
            {reportInfo[0].chkcreditcardleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">신용카드가능정보</span>
                {reportInfo[0].chkcreditcardleports}
              </li>
            )}
            {reportInfo[0].chkpetleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">애완동물동반가능정보</span>
                {reportInfo[0].chkpetleports}
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
            {reportInfo[0].expagerangeleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">체험가능연령</span>
                {reportInfo[0].expagerangeleports}
              </li>
            )}
            {reportInfo[0].infocenterleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">문의및안내</span>
                {reportInfo[0].infocenterleports}
              </li>
            )}
            {reportInfo[0].openperiod.length > 0 && (
              <li className="info-items">
                <span className="info-name">개장기간</span>
                {reportInfo[0].openperiod}
              </li>
            )}
            {reportInfo[0].parkingfeeleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">주차요금</span>
                {reportInfo[0].parkingfeeleports}
              </li>
            )}
            {reportInfo[0].parkingleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">주차시설</span>
                {reportInfo[0].parkingleports}
              </li>
            )}
            {reportInfo[0].reservation.length > 0 && (
              <li className="info-items">
                <span className="info-name">예약안내</span>
                {reportInfo[0].reservation}
              </li>
            )}
            {reportInfo[0].restdateleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">쉬는날</span>
                {reportInfo[0].restdateleports}
              </li>
            )}
            {reportInfo[0].scaleleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">규모</span>
                {reportInfo[0].scaleleports}
              </li>
            )}
            {reportInfo[0].usefeeleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">입장료</span>
                {reportInfo[0].usefeeleports}
              </li>
            )}
            {reportInfo[0].usetimeleports.length > 0 && (
              <li className="info-items">
                <span className="info-name">이용시간</span>
                {reportInfo[0].usetimeleports}
              </li>
            )}
          </ul>
        )}
      </section>
    </>
  );
};

export default LeportsReport;

/* 
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

*/
