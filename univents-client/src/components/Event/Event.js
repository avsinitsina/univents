import React from "react";
import "./Event.css";
import { Button } from "react-bootstrap";

function Event() {
  return (
    <div className="event">
      <div className="event__header">
        <div className="event__name">Своя игра 3-ий тур 2021</div>
        <div className="event__time">
          <div className="event__time-start">Начало: 18.05.2021 13:00 </div> –
          <div className="event__time-end">Конец: 18.05.2021 16:00</div>
        </div>
      </div>
      <p className="event__description">
        Третий тур Своей игры среди студентов 4-го курса пройдет в 405 аудитории
        СоцГума. Возьмите с собой много воды и печенек. Кто зарегистрируется
        первым, получит от нас сладкий сюрприз!
      </p>
      <div className="event__footer">
        <a href="#kek">Интеллектуальный клуб IQ</a>
        <span>Своя игра</span>
        <Button className="event__button">Принять участие</Button>
      </div>
    </div>
  );
}

export default Event;
