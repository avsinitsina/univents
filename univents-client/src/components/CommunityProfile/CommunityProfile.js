import React from "react";
import "./CommunityProfile.css";
import { Button, ListGroup, Modal } from "react-bootstrap";
import EventsPagination from "../EventsPagination/EventsPagination";
import EventFilter from "../EventFilter/EventFilter";
import add_pic from "./add.svg";
import EventEntry from "../EventEntry/EventEntry";

function CommunityProfile({ community }) {
  const [members, setMembers] = React.useState([]);
  const [show, setShow] = React.useState(false);

  function getMembers() {
    return [
      { name: "Анна Синицина", id: "123" },
      { name: "Дмитрий Торгашин", id: "666" },
      { name: "Александр Андреев", id: "<3" },
      { name: "Александр Беженарь", id: "444" },
      { name: "Елизавета Маева", id: "123" },
      { name: "Дарья Конева", id: "666" },
      { name: "Екатерина Ряполова", id: "<3" },
      { name: "Юрий Кева", id: "444" },
      { name: "Бурилова Екатерина", id: "444" },
      { name: "Анна Синицина", id: "123" },
      { name: "Дмитрий Торгашин", id: "666" },
    ];
  }
  React.useEffect(() => {
    setMembers(getMembers());
  }, []);
  const getCommunityEvents = (page) => {
    return {
      events: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
      pageCount: 4,
    };
  };

  function onHide() {
    setShow(false);
  }
  function createEvent(values) {
    console.log(values);
    setShow(false);
  }
  function onAddClick() {
    setShow(true);
  }
  return (
    <div className="communityprofile">
      <Modal show={show} onHide={onHide}>
        <Modal.Body>
          <EventEntry createEvent={createEvent}></EventEntry>
        </Modal.Body>
      </Modal>
      <div className="communityprofile__top">
        <div className="communityprofile-main">
          <div className="communityprofile__header">
            <div className="communityprofile__header-name">
              Интеллектуальный клуб IQ
            </div>
            {/* <a
              className="communityprofile__header-edit link-designed"
              href="#edit_community"
            >
              Редактировать
            </a> */}
          </div>
          <div className="communityprofile__info">
            <div className="communityprofile__info-main">
              <div className="communityprofile__info-date">
                Создано: 06.10.2017
              </div>
              <Button className="button-designed communityprofile__info-button">
                Вступить
              </Button>
            </div>
            <div className="communityprofile__info-expanded">
              <div className="communityprofile__info-description container-designed">
                • Турниры и команды <br />
                • Анонсы и результаты <br />• Сезон 2019/2020 Интеллектуальная
                студенческая элита теперь и в Univents🦉
              </div>
            </div>
            <div className="communityprofile__info-disciplines">
              <div className="communityprofile__info-discipline">
                Брейн-ринг
              </div>
              <div className="communityprofile__info-discipline">
                Мульти-игры
              </div>
              <div className="communityprofile__info-discipline">Своя игра</div>
              <div className="communityprofile__info-discipline">ЧГК</div>
            </div>
          </div>
          <EventFilter className="communityprofile__filters"></EventFilter>
        </div>
        <div className="communityprofile__members">
          <div className="communityprofile__info-members-label">
            Участники: {members.length}
          </div>
          <ListGroup className="communityprofile__info-members-list">
            {members.map((member) => (
              <ListGroup.Item href={`#${member.id}`} action>
                {member.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
      <img
        onClick={onAddClick}
        src={add_pic}
        width="20px"
        height="20px"
        className="d-inline-block align-top community-pic communityprofile__add"
        alt="Add community pic"
      />
      <EventsPagination
        className="communityprofile__pagination"
        getEvents={getCommunityEvents}
      ></EventsPagination>
    </div>
  );
}

export default CommunityProfile;
