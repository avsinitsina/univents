import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import { FormGroup, Button } from "react-bootstrap";
import * as Yup from "yup";

function SignIn() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({        
        email: Yup.string()
          .required("Обязательное поле"),
        password: Yup.string()
          .required("Обязательное поле"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" className="form-control" />
          <div className="error-message">
            <ErrorMessage name="email" />
          </div>
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Пароль</label>
          <Field name="password" type="password" className="form-control" />
          <div className="error-message">
            <ErrorMessage name="password" />
          </div>
        </FormGroup>
        <Button type="submit">Войти</Button>
      </Form>
    </Formik>
  );
}

export default SignIn;
