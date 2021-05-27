import React from "react";
import "./CommunityFilter.css";
import { Form, Button } from "react-bootstrap";

function CommunityFilter({ className, communities }) {
  return (
    <div className={`communityfilter ${className}`}>
      <div className="communityfilter__header">
        <div className="communityfilter__header-title">Настройки поиска</div>
        <a
          className="communityfilter__header-clean link-designed"
          href="#rtrtrt"
        >
          Очистить
        </a>
      </div>
      <Form className="communityfilter__wrapper">
        <Form.Group className="communityfilter__element">
          <Form.Label>Сортировать</Form.Label>
          <Form.Control as="select" className="communityfilter__select">
            <option>по алфавиту</option>
            <option>по активности</option>
            <option>по количеству участников</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="communityfilter__element">
          <Form.Label>Дисциплины</Form.Label>
          <Form.Control
            as="select"
            className="communityfilter__select"
            multiple
          >
            <option>Своя игра</option>
            <option>ЧГК</option>
            <option>КВН</option>
          </Form.Control>
        </Form.Group>
        <Button className="button-designed" type="submit">
          Применить
        </Button>
      </Form>
    </div>
  );
}

export default CommunityFilter;
