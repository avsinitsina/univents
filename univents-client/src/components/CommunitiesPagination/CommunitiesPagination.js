import React from "react";
import Community from "../Community/Community";
import { Pagination } from "react-bootstrap";
import "./CommunitiesPagination.css";

function CommunitiesPagination({ className, getCommunities }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [communities, setCommunities] = React.useState([]);

  React.useEffect(() => {
    const response = getCommunities(currentPage);
    setPageCount(response.pageCount);
    setCommunities(response.communities);
  }, [currentPage, getCommunities]);

  return (
    <div className={`communityprofile__events ${className}`}>
      {communities.map((community) => (
        <Community community={community}></Community>
      ))}
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        {
          <>
            {currentPage - 1 > 3 ? (
              <>
                <Pagination.Item onClick={() => setCurrentPage(1)}>
                  {1}
                </Pagination.Item>
                <Pagination.Ellipsis />
              </>
            ) : null}
            {
              <>
                {currentPage !== 1 ? (
                  <Pagination.Item
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    {currentPage - 1}
                  </Pagination.Item>
                ) : null}
                <Pagination.Item active>{currentPage}</Pagination.Item>
                {currentPage !== pageCount ? (
                  <Pagination.Item
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    {currentPage + 1}
                  </Pagination.Item>
                ) : null}
              </>
            }
            {currentPage - pageCount > 3 ? (
              <>
                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => setCurrentPage(pageCount)}>
                  {pageCount}
                </Pagination.Item>
              </>
            ) : null}
          </>
        }
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default CommunitiesPagination;
