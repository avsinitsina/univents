import React from "react";
import "./UserProfile.css";
import CommunityCarousel from "./CommunityCarousel/CommunityCarousel";
import up from "./userpic.jpg";
import EventsPagination from "../EventsPagination/EventsPagination";
import EventFilter from "../EventFilter/EventFilter";
import { Modal } from "react-bootstrap";
import CommunityEntry from "../CommunityEntry/CommunityEntry";

function UserProfile() {
  const [show, setShow] = React.useState(false);

  function onHide() {
    setShow(false);
  }

  function showPopup() {
    setShow(true);
  }
  function createCommunity(values) {
    console.log(values);
    setShow(false);
  }
  const getUserEvents = (page) => {
    return {
      events: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
      pageCount: 4,
    };
  };

  function getCommunities() {
    return [
      <a href="#team1">Интеллектуальный клуб</a>,
      <a href="#team2">Киберспортивная лига</a>,
      <a href="#team3">Что-то</a>,
      <a href="#team4">Что-то еще</a>,
    ];
  }

  return (
    <div className="userprofile__container">
      <Modal show={show} onHide={onHide}>
        <Modal.Body>
          <CommunityEntry createCommunity={createCommunity} />
        </Modal.Body>
      </Modal>
      <div className="userprofile">
        <div className="userprofile__info">
          <div className="userprofile__info-main">
            <img className="userprofile__pic" src={up} alt="User Profile Pic" />
            <div className="userprofile__wrapper">
              <div className="userprofile__name">Анна Синицина</div>
              <div className="userprofile__institute">ИМиКН</div>
              <p className="userprofile__description">
                Я очень люблю ЧГК и математику! Зовите меня на все мероприятия
                интеллектуального клуба ТюмГу :3
              </p>
              <div className="userprofile__carousels">
                <CommunityCarousel
                  name="Сообщества"
                  items={getCommunities()}
                  onAddClick={showPopup}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="userprofile__filters">
          <EventFilter></EventFilter>
        </div>
      </div>
      <EventsPagination getEvents={getUserEvents}></EventsPagination>
    </div>
  );
}

export default UserProfile;
