import "./Communities.css";
import CommunitiesPagination from "../CommunitiesPagination/CommunitiesPagination";
import CommunityFilter from "../CommunityFilter/CommunityFilter";
import { Form, Button, FormControl } from "react-bootstrap";

function Communities() {
  const getCommunities = (page) => {
    return {
      communities: [1, 2, 3],
      pageCount: 4,
    };
  };
  return (
    <div className="communities">
      <div className="communities__wrapper">
        <Form className="communities__form" inline>
          <FormControl
            type="text"
            placeholder="Название сообщества"
            className="mr-sm-2"
          />
          <Button>Найти</Button>
        </Form>
        <CommunityFilter className="communities__filters"></CommunityFilter>
      </div>
      <CommunitiesPagination
        className="communities__pagination"
        getCommunities={getCommunities}
      ></CommunitiesPagination>
    </div>
  );
}

export default Communities;
