import React, { useState } from 'react';

const AreaSelectBox = ({ onAreaSelect }: { onAreaSelect: (areaCode: number) => void }) => {
  const handleAreaSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAreaCode = parseInt(event.target.value, 10);
    onAreaSelect(selectedAreaCode);
  };

  return (
    <>
      <div className="cheack-box">
        <form action="" method="post">
          <select name="area" id="" onChange={handleAreaSelect}>
            <option value="1">서울특별시</option>
            <option value="2">인천광역시</option>
            <option value="3">대전광역시</option>
            <option value="4">대구광역시</option>
            <option value="5">광주광역시</option>
            <option value="6">부산광역시</option>
            <option value="7">울산광역시</option>
            <option value="8">세종특별자치시</option>
            <option value="31">경기도</option>
            <option value="32">강원도</option>
            <option value="33">충청북도</option>
            <option value="34">충청남도</option>
            <option value="35">경상북도</option>
            <option value="36">경상남도</option>
            <option value="37">전라북도</option>
            <option value="38">전라남도</option>
            <option value="39">제주도</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default AreaSelectBox;

/* 
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
