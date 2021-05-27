import React from "react";
import "./EventFilter.css";
import { Form, Button } from "react-bootstrap";

function EventFilter({ className, events }) {
  return (
    <div className={`eventfilter ${className}`}>
      <div className="eventfilter__header">
        <div className="eventfilter__header-title">Настройки поиска</div>
        <a className="eventfilter__header-clean link-designed" href="#rtrtrt">
          Очистить
        </a>
      </div>
      <Form className="eventfilter__wrapper">
        <Form.Group className="eventfilter__element">
          <Form.Label>Сортировать</Form.Label>
          <Form.Control as="select" className="eventfilter__select">
            <option>по дате</option>
            <option>по релевантности</option>
            <option>по популярности</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="eventfilter__element">
          <Form.Label>Дата проведения</Form.Label>
          <Form.Control as="select" className="eventfilter__select">
            <option>все</option>
            <option>в этом месяце</option>
            <option>на этой неделе</option>
            <option>прошедшие</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="eventfilter__element">
          <Form.Label>Вид мероприятия</Form.Label>
          <Form.Control as="select" className="eventfilter__select">
            <option>любое</option>
            <option>встреча</option>
            <option>соревнование</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="eventfilter__element filter-community">
          <Form.Label>Сообщества</Form.Label>
          <Form.Control as="select" className="eventfilter__select" multiple>
            <option>Интеллектуальный клуб</option>
            <option>Квадрат</option>
            <option>FRACTAL</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="eventfilter__element">
          <Form.Label>Дисциплина</Form.Label>
          <Form.Control as="select" className="eventfilter__select" multiple>
            <option>Своя игра</option>
            <option>Кастинг</option>
            <option>Шахматы</option>
          </Form.Control>
        </Form.Group>
        <div className="eventfilter__empty"></div>
        <Button className="button-designed button-right" type="submit">
          Применить
        </Button>
      </Form>
    </div>
  );
}

export default EventFilter;
