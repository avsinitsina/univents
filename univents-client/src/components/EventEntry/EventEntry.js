import "./EventEntry.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import { FormGroup, Button } from "react-bootstrap";
import * as Yup from "yup";

function EventEntry({ event, createEvent, editEvent }) {
  function getDisciplines() {
    return [
      "Своя игра",
      "Мульти-игры",
      "Игры разума",
      "Конкурс пения",
      "Где логика",
      "Кто хочет стать Пифагором",
    ];
  }
  return (
    <Formik
      initialValues={{
        name: event?.name || "",
        description: event?.description || "",
        date_start: event?.start || "",
        date_end: event?.end || "",
        type: event?.type || "",
        status: event?.status || "",
        discipline: event?.discipline || "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Обязательное поле"),
        description: Yup.string().required("Обязательное поле"),
        date_start: Yup.string().required("Обязательное поле"),
        date_end: Yup.string().required("Обязательное поле"),
        type: Yup.string().required("Обязательное поле"),
        status: Yup.string().required("Обязательное поле"),
        discipline: Yup.string().required("Обязательное поле"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          event === undefined ? createEvent(values) : editEvent(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="evententry">
        <h3 className="evententry__title">
          {event === undefined
            ? "Создать мероприятие"
            : "Редактировать мероприятие"}
        </h3>
        <FormGroup>
          <label htmlFor="name">Название</label>
          <Field
            name="name"
            type="text"
            className="form-control evententry__form-control"
          />
          <div className="error-message">
            <ErrorMessage name="name" />
          </div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="date_start">Дата и время начала</label>
          <Field
            name="date_start"
            type="datetime-local"
            className="form-control evententry__form-control"
          />
          <div className="error-message">
            <ErrorMessage name="date_start" />
          </div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="date_end">Дата и время начала</label>
          <Field
            name="date_end"
            type="datetime-local"
            className="form-control evententry__form-control"
          />
          <div className="error-message">
            <ErrorMessage name="date_end" />
          </div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="type">Вид мероприятия</label>
          <Field
            as="select"
            name="type"
            className="form-control evententry__form-control"
          >
            <option>встреча</option>
            <option>соревнование</option>
          </Field>
          <div className="error-message">
            <ErrorMessage name="type" />
          </div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="discipline">Дисциплина</label>
          <Field
            as="select"
            name="discipline"
            className="form-control evententry__form-control"
          >
            <option value="" disabled hidden>
              Выберите
            </option>
            {getDisciplines().map((disc, index) => (
              <option key={index}>{disc}</option>
            ))}
          </Field>
          <div className="error-message">
            <ErrorMessage name="discipline" />
          </div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Описание</label>
          <Field
            as="textarea"
            name="description"
            type="text"
            className="form-control evententry__form-control entry-textarea"
          />
          <div className="error-message">
            <ErrorMessage name="description" />
          </div>
        </FormGroup>
        <FormGroup className="evententry__checkbox">
          <div className="evententry__field">
            <label htmlFor="status">Завершено</label>
            <Field
              type="checkbox"
              name="status"
              className="form-control evententry__form-control"
            ></Field>
          </div>
        </FormGroup>
        <Button type="submit">
          {event === undefined ? "Создать" : "Редактировать"}
        </Button>
      </Form>
    </Formik>
  );
}

export default EventEntry;
