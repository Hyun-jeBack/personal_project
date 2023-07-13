import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/* 하는 중 */

const TourismReport = () => {
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
            {reportInfo[0].accomcount.length > 0 && (
              <li className="info-items">
                <span className="info-name">수용인원</span>
                {reportInfo[0].accomcount}
              </li>
            )}
            {reportInfo[0].chkbabycarriage.length > 0 && (
              <li className="info-items">
                <span className="info-name">유모차대여정보</span>
                {reportInfo[0].chkbabycarriage}
              </li>
            )}
            {reportInfo[0].chkcreditcard.length > 0 && (
              <li className="info-items">
                <span className="info-name">신용카드가능정보</span>
                {reportInfo[0].chkcreditcard}
              </li>
            )}
            {reportInfo[0].chkpet.length > 0 && (
              <li className="info-items">
                <span className="info-name">애완동물동반가능정보</span>
                {reportInfo[0].chkpet}
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
            {reportInfo[0].expagerange.length > 0 && (
              <li className="info-items">
                <span className="info-name">체험가능연령</span>
                {reportInfo[0].expagerange}
              </li>
            )}
            {reportInfo[0].expguide.length > 0 && (
              <li className="info-items">
                <span className="info-name">체험안내</span>
                {reportInfo[0].expguide}
              </li>
            )}
            {reportInfo[0].heritage1.length > 0 && (
              <li className="info-items">
                <span className="info-name">세계문화유산유무</span>
                {reportInfo[0].heritage1}
              </li>
            )}
            {reportInfo[0].heritage2.length > 0 && (
              <li className="info-items">
                <span className="info-name">세계자연유산유무</span>
                {reportInfo[0].heritage2}
              </li>
            )}
            {reportInfo[0].heritage3.length > 0 && (
              <li className="info-items">
                <span className="info-name">세계기록유산유무</span>
                {reportInfo[0].heritage3}
              </li>
            )}
            {reportInfo[0].infocenter.length > 0 && (
              <li className="info-items">
                <span className="info-name">문의및안내</span>
                {reportInfo[0].infocenter}
              </li>
            )}
            {reportInfo[0].opendate.length > 0 && (
              <li className="info-items">
                <span className="info-name">개장일</span>
                {reportInfo[0].opendate}
              </li>
            )}
            {reportInfo[0].parking.length > 0 && (
              <li className="info-items">
                <span className="info-name">주차시설</span>
                {reportInfo[0].parking}
              </li>
            )}
            {reportInfo[0].restdate.length > 0 && (
              <li className="info-items">
                <span className="info-name">쉬는날</span>
                {reportInfo[0].restdate}
              </li>
            )}
            {reportInfo[0].useseason.length > 0 && (
              <li className="info-items">
                <span className="info-name">이용시기</span>
                {reportInfo[0].useseason}
              </li>
            )}
            {reportInfo[0].usetime.length > 0 && (
              <li className="info-items">
                <span className="info-name">이용시간</span>
                {reportInfo[0].usetime}
              </li>
            )}
          </ul>
        )}
      </section>
    </>
  );
};

export default TourismReport;

/* 
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
*/
