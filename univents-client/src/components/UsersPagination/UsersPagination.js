import React from "react";
import User from "../User/User";
import { Pagination } from "react-bootstrap";
import "./UsersPagination.css";

function UsersPagination({ className, getUsers }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const response = getUsers(currentPage);
    setPageCount(response.pageCount);
    setUsers(response.users);
  }, [currentPage, getUsers]);

  return (
    <div className={`userprofile__events ${className}`}>
      {users.map((user) => (
        <User user={user}></User>
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

export default UsersPagination;
