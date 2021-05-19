import React from "react";
import "./EventProfile.css";
import { Button, ListGroup } from "react-bootstrap";

function EventProfile({ event }) {
  const [members, setMembers] = React.useState([]);
  function getMembers() {
    return [
      { name: "Анна Синицина", id: "123" },
      { name: "Дмитрий Торгашин", id: "666" },
      { name: "Александр Андреев", id: "<3" },
      { name: "Александр Беженарь", id: "444" },
    ];
  }
  React.useEffect(() => {
    setMembers(getMembers());
  }, []);
  return (
    <div className="eventprofile">
      <div className="eventprofile-main">
        <div className="eventprofile__header">
          <div className="eventprofile__header-name">
            Своя игра 3-ий тур 2021
          </div>
          <a
            className="eventprofile__header-edit link-designed"
            href="#edit_event"
          >
            Редактировать
          </a>
        </div>
        <div className="eventprofile__info">
          <a
            className="eventprofile__info-community link-designed"
            href="#1234"
          >
            Интеллектуальный клуб IQ
          </a>
          <div className="eventprofile__info-main">
            <div className="eventprofile__info-dates">
              <div className="eventprofile__info-start">
                Начало: 18.05.2021 13:00
              </div>
              <div className="eventprofile__info-end">
                Конец: 18.05.2021 16:00
              </div>
            </div>
            <Button className="button-designed eventprofile__info-button">
              Принять участие
            </Button>
          </div>
          <div className="eventprofile__info-extra">
            <div className="eventprofile__info-type">Соревнование</div>
            <div className="eventprofile__info-status">Завершено</div>
            {event.teamable !== undefined ? (
              <div className="eventprofile__info-members">
                Количество человек в команде: 6
              </div>
            ) : null}
          </div>
          <div className="eventprofile__info-expanded">
            <div className="eventprofile__info-description container-designed">
              Третий тур Своей игры среди студентов 4-го курса пройдет в 405
              аудитории СоцГума. Возьмите с собой много воды и печенек. Кто
              зарегистрируется первым, получит от нас сладкий сюрприз!
            </div>
          </div>
          <div className="eventprofile__info-discipline">Своя игра</div>
        </div>
      </div>
      <div className="eventprofile__members">
        <div className="eventprofile__info-members-label">Участники 4/10</div>
        <ListGroup className="eventprofile__info-members-list">
          {members.map((member) => (
            <ListGroup.Item href={`#${member.id}`} action>
              {member.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default EventProfile;
