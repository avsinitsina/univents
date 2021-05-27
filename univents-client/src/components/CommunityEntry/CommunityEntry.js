import "./CommunityEntry.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import { FormGroup, Button } from "react-bootstrap";
import * as Yup from "yup";

function CommunityEntry({ community, createCommunity, editCommunity }) {
  return (
    <Formik
      initialValues={{
        name: community?.name || "",
        description: community?.description || "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Обязательное поле"),
        description: Yup.string().required("Обязательное поле"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          community === undefined
            ? createCommunity(values)
            : editCommunity(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="communityentry">
        <h3 className="communityentry__title">
          {community === undefined
            ? "Создать сообщество"
            : "Редактировать сообщество"}
        </h3>
        <FormGroup>
          <label htmlFor="name">Название</label>
          <Field
            name="name"
            type="text"
            className="form-control communityentry__form-control"
          />
          <div className="error-message">
            <ErrorMessage name="name" />
          </div>
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Описание</label>
          <Field
            as="textarea"
            name="description"
            type="text"
            className="form-control communityentry__form-control entry-textarea"
          />
          <div className="error-message">
            <ErrorMessage name="description" />
          </div>
        </FormGroup>
        <Button type="submit">
          {community === undefined ? "Создать" : "Редактировать"}
        </Button>
      </Form>
    </Formik>
  );
}

export default CommunityEntry;
