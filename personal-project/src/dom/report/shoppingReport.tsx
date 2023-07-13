import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/* 아직하는중 */

const ShoppingReport = () => {
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
            {reportInfo[0].chkbabycarriageshopping.length > 0 && (
              <li className="info-items">
                <span className="info-name">유모차대여정보</span>
                {reportInfo[0].chkbabycarriageshopping}
              </li>
            )}
            {reportInfo[0].chkcreditcardshopping.length > 0 && (
              <li className="info-items">
                <span className="info-name">신용카드가능정보</span>
                {reportInfo[0].chkcreditcardshopping}
              </li>
            )}
            {reportInfo[0].chkpetshopping.length > 0 && (
              <li className="info-items">
                <span className="info-name">애완동물동반가능정보</span>
                {reportInfo[0].chkpetshopping}
              </li>
            )}
            {reportInfo[0].culturecenter.length > 0 && (
              <li className="info-items">
                <span className="info-name">문화센터바로가기</span>
                {reportInfo[0].culturecenter}
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
            {reportInfo[0].fairday.length > 0 && (
              <li className="info-items">
                <span className="info-name">장서는날</span>
                {reportInfo[0].fairday}
              </li>
            )}
            {reportInfo[0].infocentershopping.length > 0 && (
              <li className="info-items">
                <span className="info-name">문의및안내</span>
                {reportInfo[0].infocentershopping}
              </li>
            )}
            {reportInfo[0].opendateshopping.length > 0 && (
              <li className="info-items">
                <span className="info-name">개장일</span>
                {reportInfo[0].opendateshopping}
              </li>
            )}
            {reportInfo[0].opentime.length > 0 && (
              <li className="info-items">
                <span className="info-name">영업시간</span>
                {reportInfo[0].opentime}
              </li>
            )}
            {reportInfo[0].parkingshopping.length > 0 && (
              <li className="info-items">
                <span className="info-name">주차시설</span>
                {reportInfo[0].parkingshopping}
              </li>
            )}
            {reportInfo[0].restdateshopping.length > 0 && (
              <li className="info-items">
                <span className="info-name">쉬는날</span>
                {reportInfo[0].restdateshopping}
              </li>
            )}
            {reportInfo[0].restroom.length > 0 && (
              <li className="info-items">
                <span className="info-name">화장실설명</span>
                {reportInfo[0].restroom}
              </li>
            )}
            {reportInfo[0].saleitem.length > 0 && (
              <li className="info-items">
                <span className="info-name">판매품목</span>
                {reportInfo[0].saleitem}
              </li>
            )}
            {reportInfo[0].saleitemcost.length > 0 && (
              <li className="info-items">
                <span className="info-name">판매품목별가격</span>
                {reportInfo[0].saleitemcost}
              </li>
            )}
            {reportInfo[0].scaleshopping.length > 0 && (
              <li className="info-items">
                <span className="info-name">규모</span>
                {reportInfo[0].scaleshopping}
              </li>
            )}
            {reportInfo[0].shopguide.length > 0 && (
              <li className="info-items">
                <span className="info-name">매장안내</span>
                {reportInfo[0].shopguide}
              </li>
            )}
          </ul>
        )}
      </section>
    </>
  );
};

export default ShoppingReport;

/* 
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
*/
