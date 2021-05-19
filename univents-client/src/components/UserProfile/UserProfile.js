import React from "react";
import "./UserProfile.css";
import CommunityCarousel from "./CommunityCarousel/CommunityCarousel";
import up from "./userpic.jpg";
import EventsPagination from "../EventsPagination/EventsPagination";
import EventFilter from "../EventFilter/EventFilter";

function UserProfile() {
  const getUserEvents = (page) => {
    return {
      events: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
      pageCount: 4,
    };
  };

  function getTeams() {
    return [
      <a href="#team1">Мяско на коляске</a>,
      <a href="#team2">WC</a>,
      <a href="#team3">Сверхразумы</a>,
      <a href="#team4">Еще одна</a>,
    ];
  }

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
      <div className="userprofile">
        <div className="userprofile__info">
          <div className="userprofile__info-main">
            <img className="userprofile__pic" src={up} alt="User Profile Pic" />
            <div className="userprofile__wrapper">
              <div className="userprofile__name">Анна Синицина</div>
              <div className="userprofile__institute">ИМиКН</div>
              <p className="userprofile__description">
                Я очень люблю ЧГК и математику! Зовите меня на все мероприятия интеллектуального клуба ТюмГу :3
              </p>
              <div className="userprofile__carousels">
                <CommunityCarousel
                  className="userprofile__teams"
                  name="Команды"
                  items={getTeams()}
                />
                <CommunityCarousel name="Сообщества" items={getCommunities()} />
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
