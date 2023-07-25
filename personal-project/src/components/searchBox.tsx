import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SearchBox = ({ onSearchContent }: { onSearchContent: (areaCode: Array<[]>) => void }): React.ReactElement => {
  let [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<
    {
      contentid: number;
      contenttypeid: number;
      title: string;
    }[]
  >([]);
  const [showList, setShowList] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSearch = (e: { target: { value: string } }) => {
    searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const results = onSearchContent.filter((product: { title: string }) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    setShowList(true); // 보여지게
  };

  const buttonClickEvent = () => {
    navigate('/searchTab', { state: { searchResults } });
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(e.target as Node)) {
      // 클릭 이벤트가 검색창 내부가 아닌 다른 영역에서 발생했을 때
      setShowList(false); // 리스트 숨기기
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="input-box">
        <input className="search-box" type="text" placeholder="검색어를 입력하세요." onChange={handleSearch} />
        <ul className="dropdown-content">
          {searchResults.map(item => (
            <li key={item.contentid} className="search-item">
              <Link
                to={`/placeDetailTab/${item.contentid}?contentId=${item.contentid}&contentTypeId=${item.contenttypeid}`}
                className="searchedItem">
                <span className="line-clamp">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <button className="search-button" onClick={buttonClickEvent}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SearchBox;
