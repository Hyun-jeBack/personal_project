import { useEffect, useState } from 'react';

const TopScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // 스크롤 이벤트를 감지하여 버튼을 보여주거나 감추는 함수
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const halfViewportHeight = viewportHeight / 2;
    setShowScrollButton(scrollY > halfViewportHeight);
  };

  // 페이지 최상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 스크롤 이벤트를 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 unmount 될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showScrollButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 0 16 16">
            <path d="M8 1.5L.5 9H5v6h6V9h4.5L8 1.5z" />
          </svg>
        </button>
      )}
    </>
  );
};

export default TopScrollButton;
