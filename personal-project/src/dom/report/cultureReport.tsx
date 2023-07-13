import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/* 아직 하는중 */

const CultureReport = () => {
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
            {reportInfo[0].accomcountculture.length > 0 && (
              <li className="info-items">
                <span className="info-name">수용인원</span>
                {reportInfo[0].accomcountculture}
              </li>
            )}
            {reportInfo[0].chkbabycarriageculture.length > 0 && (
              <li className="info-items">
                <span className="info-name">유모차대여정보</span>
                {reportInfo[0].chkbabycarriageculture}
              </li>
            )}
            {reportInfo[0].chkcreditcardculture.length > 0 && (
              <li className="info-items">
                <span className="info-name">신용카드가능정보</span>
                {reportInfo[0].chkcreditcardculture}
              </li>
            )}
            {reportInfo[0].chkpetculture.length > 0 && (
              <li className="info-items">
                <span className="info-name">애완동물동반가능정보</span>
                {reportInfo[0].chkpetculture}
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
            {reportInfo[0].discountinfo.length > 0 && (
              <li className="info-items">
                <span className="info-name">할인정보</span>
                {reportInfo[0].discountinfo}
              </li>
            )}
            {reportInfo[0].infocenterculture.length > 0 && (
              <li className="info-items">
                <span className="info-name">문의및안내</span>
                {reportInfo[0].infocenterculture}
              </li>
            )}
            {reportInfo[0].parkingculture.length > 0 && (
              <li className="info-items">
                <span className="info-name">주차시설</span>
                {reportInfo[0].parkingculture}
              </li>
            )}
            {reportInfo[0].parkingfee.length > 0 && (
              <li className="info-items">
                <span className="info-name">주차요금</span>
                {reportInfo[0].parkingfee}
              </li>
            )}
            {reportInfo[0].restdateculture.length > 0 && (
              <li className="info-items">
                <span className="info-name">쉬는날</span>
                {reportInfo[0].restdateculture}
              </li>
            )}
            {reportInfo[0].usefee.length > 0 && (
              <li className="info-items">
                <span className="info-name">이용요금</span>
                {reportInfo[0].usefee}
              </li>
            )}
            {reportInfo[0].usetimeculture.length > 0 && (
              <li className="info-items">
                <span className="info-name">이용시간</span>
                {reportInfo[0].usetimeculture}
              </li>
            )}
            {reportInfo[0].scale.length > 0 && (
              <li className="info-items">
                <span className="info-name">규모</span>
                {reportInfo[0].scale}
              </li>
            )}
            {reportInfo[0].spendtime.length > 0 && (
              <li className="info-items">
                <span className="info-name">관람소요시간</span>
                {reportInfo[0].spendtime}
              </li>
            )}
          </ul>
        )}
      </section>
    </>
  );
};

export default CultureReport;

/* 
<소개정보>
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
*/
