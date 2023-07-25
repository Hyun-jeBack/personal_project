import { Link, useLocation } from 'react-router-dom';

const SearchTab = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div className="search-tab">
      <span className="search-results">
        총<span className="search-results-number">{` ${searchResults.length}`}</span>
        개의 검색결과가 존재합니다.
      </span>
      <div className="main-box">
        {searchResults.map((item: any) => (
          <div className="place-box" key={item.contentid}>
            <Link
              to={`/placeDetailTab/${item.contentid}?contentId=${item.contentid}&contentTypeId=${item.contenttypeid}`}
              className="detail-place-tab">
              <img className="place-img" src={item.firstimage} alt={item.title} />
            </Link>
            <span className="place-name">
              <Link to={`/placeDetailTab/${item.contentid}`} className="detail-place-tab">
                {item.title}
              </Link>
            </span>
            <span className="palce-location">
              <Link to={`/placeDetailTab/${item.contentid}`} className="detail-place-tab">
                {item.addr1}
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchTab;
