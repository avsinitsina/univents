import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import { FormGroup, Button } from "react-bootstrap";
import * as Yup from "yup";

function SignUp({ signUp }) {
  function getInstitutes() {
    return [
      "ИМиКН",
      "ШПИ",
      "ИНБИО",
      "ИГиП",
      "ИНЗЕМ",
      "ИПиП",
      "СоуГум",
      "ИФК",
      "ИНХИМ",
      "ФТИ",
      "ФЭИ",
    ];
  }
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        institute: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Обязательное поле"),
        lastName: Yup.string().required("Обязательное поле"),
        institute: Yup.string()
          .oneOf(getInstitutes(), "Такой институт отсутствует")
          .required("Обязательное поле"),
        email: Yup.string()
          .email("Некорректный адрес электронной почты")
          .required("Обязательное поле"),
        password: Yup.string()
          .min(6, "Пароль должен содержать минимум 6 символов")
          .required("Обязательное поле"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          signUp(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <FormGroup>
          <label htmlFor="firstName">Имя</label>
          <Field name="firstName" type="text" className="form-control" />
          <div className="error-message">
            <ErrorMessage name="firstName" />
          </div>
        </FormGroup>

        <FormGroup>
          <label htmlFor="lastName">Фамилия</label>
          <Field name="lastName" type="text" className="form-control" />
          <div className="error-message">
            <ErrorMessage name="lastName" />
          </div>
        </FormGroup>

        <FormGroup>
          <label htmlFor="institute">Институт</label>
          <Field as="select" name="institute" className="form-control">
            <option value="" disabled hidden>
              Выберите
            </option>
            {getInstitutes().map((inst, index) => (
              <option key={index}>{inst}</option>
            ))}
          </Field>
          <div className="error-message">
            <ErrorMessage name="institute" />
          </div>
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" className="form-control" />
          <div className="error-message">
            <ErrorMessage name="email" />
          </div>
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Придумайте пароль</label>
          <Field name="password" type="password" className="form-control" />
          <div className="error-message">
            <ErrorMessage name="password" />
          </div>
        </FormGroup>
        <Button type="submit">Зарегистрироваться</Button>
      </Form>
    </Formik>
  );
}

export default SignUp;
