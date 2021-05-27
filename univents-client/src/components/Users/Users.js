import "./Users.css";
import UsersPagination from "../UsersPagination/UsersPagination";
import UserFilter from "../UserFilter/UserFilter";
import { Form, Button, FormControl } from "react-bootstrap";

function Users() {
  const getUsers = (page) => {
    return {
      users: [
        {
          firstName: "Анечка",
          lastName: "Синицина",
          picture:
            "https://sun9-14.userapi.com/impg/0mgqZ6qoHj1YpsdyejGk90CLQeodF5rV9NBvfw/S4ifTf8Q6Ao.jpg?size=828x1472&quality=96&sign=15c2d45ef53b111c87d7b5ddfc39013e&type=album",
          description: "Lorem ipsum",
          institute: "ИМиКН",
        },
        {
          firstName: "Анечка",
          lastName: "Синицина",
          picture:
            "https://sun9-14.userapi.com/impg/0mgqZ6qoHj1YpsdyejGk90CLQeodF5rV9NBvfw/S4ifTf8Q6Ao.jpg?size=828x1472&quality=96&sign=15c2d45ef53b111c87d7b5ddfc39013e&type=album",
          description: "Lorem ipsum",
          institute: "ИМиКН",
        },
        {
          firstName: "Анечка",
          lastName: "Синицина",
          picture:
            "https://sun9-14.userapi.com/impg/0mgqZ6qoHj1YpsdyejGk90CLQeodF5rV9NBvfw/S4ifTf8Q6Ao.jpg?size=828x1472&quality=96&sign=15c2d45ef53b111c87d7b5ddfc39013e&type=album",
          description: "Lorem ipsum",
          institute: "ИМиКН",
        },
      ],
      pageCount: 4,
    };
  };
  return (
    <div className="users">
      <div className="users__wrapper">
        <Form className="users__form" inline>
          <FormControl
            type="text"
            placeholder="Имя пользователя"
            className="mr-sm-2"
          />
          <Button>Найти</Button>
        </Form>
        <UserFilter className="users__filters"></UserFilter>
      </div>
      <UsersPagination
        className="users__pagination"
        getUsers={getUsers}
      ></UsersPagination>
    </div>
  );
}

export default Users;
