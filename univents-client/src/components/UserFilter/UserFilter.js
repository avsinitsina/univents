import React from "react";
import "./UserFilter.css";
import { Form, Button } from "react-bootstrap";

function CommunityFilter({ className }) {
  return (
    <div className={`userfilter ${className}`}>
      <div className="userfilter__header">
        <div className="userfilter__header-title">Настройки поиска</div>
        <a className="userfilter__header-clean link-designed" href="#rtrtrt">
          Очистить
        </a>
      </div>
      <Form className="userfilter__wrapper">
        <Form.Group className="userfilter__element">
          <Form.Label>Сортировать</Form.Label>
          <Form.Control as="select" className="userfilter__select">
            <option>по алфавиту</option>
            <option>по активности</option>
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
