import React from "react";
import Event from "../Event/Event";
import { Pagination } from "react-bootstrap";
import "./EventsPagination.css";

function EventsPagination({ className, getEvents }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const response = getEvents(currentPage);
    setPageCount(response.pageCount);
    setEvents(response.events);
  }, [currentPage, getEvents]);

  return (
    <div className={`userprofile__events ${className}`}>
      {events.map((event) => (
        <Event event={event}></Event>
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

export default EventsPagination;
