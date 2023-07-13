import React from 'react';

const FooterDOM = (): React.ReactElement => {
  return (
    <footer className="footer">
      <div className="producer">제작: 백현제</div>
      <div className="sources">
        <span className="sources-name">출처:</span>
        <a href="https://api.visitkorea.or.kr/" className="sources-link" target="_blank">
          <img
            className="sources-img"
            src="https://festival-moa-fc37b.firebaseapp.com/images/tourapi-logo.png"
            alt="한국관광공사 api 링크"
          />
        </a>
      </div>
    </footer>
  );
};

export default FooterDOM;
