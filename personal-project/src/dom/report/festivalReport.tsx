import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FestivalReport = () => {
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
      // console.log(infor);
      setReportInfo(infor);
    }
    reportData();
  }, []);

  return (
    <>
      <section className="report-info">
        {reportInfo.length > 0 && (
          <ul className="info-list">
            {reportInfo[0].agelimit.length > 0 && (
              <li className="info-items">
                <span className="info-name">관람가능연령</span>
                {reportInfo[0].agelimit}
              </li>
            )}
            {reportInfo[0].bookingplace.length > 0 && (
              <li className="info-items">
                <span className="info-name">예매처</span>
                {reportInfo[0].bookingplace}
              </li>
            )}
            {reportInfo[0].discountinfofestival.length > 0 && (
              <li className="info-items">
                <span className="info-name">할인정보</span>
                {reportInfo[0].discountinfofestival}
              </li>
            )}
            {reportInfo[0].eventstartdate.length > 0 && (
              <li className="info-items">
                <span className="info-name">행사시작일</span>
                {`${reportInfo[0].eventstartdate.substring(0, 4)} -
              ${reportInfo[0].eventstartdate.substring(4, 6)} -
              ${reportInfo[0].eventstartdate.substring(6, 8)}`}
              </li>
            )}
            {reportInfo[0].eventenddate.length > 0 && (
              <li className="info-items">
                <span className="info-name">행사종료일</span>
                {`${reportInfo[0].eventenddate.substring(0, 4)} -
              ${reportInfo[0].eventenddate.substring(4, 6)} -
              ${reportInfo[0].eventenddate.substring(6, 8)}`}
              </li>
            )}
            {reportInfo[0].eventhomepage.length > 0 && (
              <li className="info-items">
                <span className="info-name">행사홈페이지</span>
                {/* <a href={reportInfo[0].eventhomepage} target="_blank" rel="noopener noreferrer">
                  {reportInfo[0].eventhomepage}
                </a> */}
                <span dangerouslySetInnerHTML={{ __html: reportInfo[0].eventhomepage }}></span>
              </li>
            )}
            {reportInfo[0].eventplace.length > 0 && (
              <li className="info-items">
                <span className="info-name">행사장소</span>
                {reportInfo[0].eventplace}
              </li>
            )}
            {reportInfo[0].festivalgrade.length > 0 && (
              <li className="info-items">
                <span className="info-name">축제등급</span>
                {reportInfo[0].festivalgrade}
              </li>
            )}
            {reportInfo[0].placeinfo.length > 0 && (
              <li className="info-items">
                <span className="info-name">행사장위치안내</span>
                {reportInfo[0].placeinfo}
              </li>
            )}
            {reportInfo[0].playtime.length > 0 && (
              <li className="info-items">
                <span className="info-name">공연시간</span>
                {reportInfo[0].playtime}
              </li>
            )}
            {reportInfo[0].program.length > 0 && (
              <li className="info-items">
                <span className="info-name">행사프로그램</span>
                {reportInfo[0].program}
              </li>
            )}
            {reportInfo[0].spendtimefestival.length > 0 && (
              <li className="info-items">
                <span className="info-name">관람소요시간</span>
                {reportInfo[0].spendtimefestival}
              </li>
            )}
            {reportInfo[0].sponsor1.length > 0 && (
              <li className="info-items">
                <span className="info-name">주최자정보</span>
                {reportInfo[0].sponsor1}
              </li>
            )}
            {reportInfo[0].sponsor1tel.length > 0 && (
              <li className="info-items">
                <span className="info-name">주최자연락처</span>
                {reportInfo[0].sponsor1tel}
              </li>
            )}
            {reportInfo[0].sponsor2.length > 0 && (
              <li className="info-items">
                <span className="info-name">주관사정보</span>
                {reportInfo[0].sponsor2}
              </li>
            )}
            {reportInfo[0].sponsor2tel.length > 0 && (
              <li className="info-items">
                <span className="info-name">주관사연락처</span>
                {reportInfo[0].sponsor2tel}
              </li>
            )}
            {reportInfo[0].subevent.length > 0 && (
              <li className="info-items">
                <span className="info-name">부대행사</span>
                {reportInfo[0].subevent}
              </li>
            )}
            {reportInfo[0].usetimefestival.length > 0 && (
              <li className="info-items">
                <span className="info-name">이용요금</span>
                {reportInfo[0].usetimefestival}
              </li>
            )}
          </ul>
        )}
      </section>
    </>
  );
};

export default FestivalReport;

/* 
[contentTypeId=15 (행사/공연/축제)]
agelimit	관람가능연령
bookingplace	예매처
discountinfofestival	할인정보
eventstartdate	행사시작일
eventenddate	행사종료일
eventhomepage	행사홈페이지
eventplace	행사장소
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
*/
