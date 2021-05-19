import "./Events.css";
import EventsPagination from "../EventsPagination/EventsPagination";
import EventFilter from "../EventFilter/EventFilter";
import { Form, Button, FormControl } from "react-bootstrap";

function Events() {
  const getEvents = (page) => {
    return {
      events: [
        1, 2, 3
      ],
      pageCount: 4,
    };
  };
  return (
    <div className="events">
      <div className="events__wrapper">
        <Form className="events__form"inline>
          <FormControl type="text" placeholder="Название мероприятия" className="mr-sm-2" />
          <Button>Найти</Button>
        </Form>
        <EventFilter className="events__filters"></EventFilter>
      </div>
      <EventsPagination
        className="events__pagination"
        getEvents={getEvents}
      ></EventsPagination>
    </div>
  );
}

export default Events;
