import React from "react";
import "./Community.css";
import { Button } from "react-bootstrap";

function Community() {
  return (
    <div className="community">
      <div className="community__header">
        <div className="community__name">Интеллектуальный клуб IQ</div>
      </div>
      <p className="community__description">
        • Турниры и команды <br/>
        • Анонсы и результаты <br/>
        • Сезон 2019/2020
        Интеллектуальная студенческая элита теперь и в Univents🦉
      </p>
      <div className="community__footer">
        <a href="#kek">904 участника</a>
        <span>ЧГК</span>
        <span>Брейн-ринг</span>
        <span>Своя игра</span>
        <Button className="community__button">Вступить</Button>
      </div>
    </div>
  );
}

export default Community;
