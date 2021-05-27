import React from "react";
import "./User.css";
import { Avatar } from "@material-ui/core";

function User({
  user = {
    firstName: "Анечка",
    lastName: "Синицина",
    picture:
      "https://sun9-14.userapi.com/impg/0mgqZ6qoHj1YpsdyejGk90CLQeodF5rV9NBvfw/S4ifTf8Q6Ao.jpg?size=828x1472&quality=96&sign=15c2d45ef53b111c87d7b5ddfc39013e&type=album",
    description: "Lorem ipsum",
    institute: "ИМиКН",
  },
}) {
  return (
    <div className="user">
      <Avatar src={user.picture} className="user__avatar">
        {user.firstName[0]}
      </Avatar>
      <div className="user__info">
        <div className="user__header">
          <div className="user__name">
            {user.firstName} {user.lastName}
          </div>
        </div>
        <p className="user__description">{user.description}</p>
        <div className="user__footer">
          <span>{user.institute}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
