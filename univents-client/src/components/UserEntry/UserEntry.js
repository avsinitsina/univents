import "./UserEntry.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import { FormGroup, Button } from "react-bootstrap";
import * as Yup from "yup";
import { Avatar } from "@material-ui/core";

function UserEntry({ user, editUser }) {
  const [avatar, setAvatar] = React.useState("");
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

  React.useEffect(() => {
    setAvatar();
  }, [setAvatar]);

  return (
    <Formik
      initialValues={{
        firstName: user?.first_name || "",
        lastName: user?.last_name || "",
        description: user?.description || "",
        picture: user?.picture || "",
        institute: user?.institute || "",
        email: user?.email || "",
        password: user?.password || "",
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
        password: Yup.string().required("Обязательное поле"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          editUser(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="userentry">
        <h3 className="userentry__title">Редактировать пользователя</h3>
        <FormGroup>
          <label htmlFor="firstName">Имя</label>
          <Field
            name="firstName"
            type="text"
            className="form-control userentry__form-control"
          />
          <div className="error-message">
            <ErrorMessage name="firstName" />
          </div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="lastName">Фамилия</label>
          <Field
            name="lastName"
            type="text"
            className="form-control userentry__form-control"
          />
          <div className="error-message">
            <ErrorMessage name="lastName" />
          </div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="picture">Аватар</label>
          <div className="userentry__field">
            <Avatar
              className="userentry__avatar"
              alt="Pic"
              src={avatar}
            ></Avatar>
            <Field
              name="picture"
              type="file"
              className="form-control userentry__form-control"
              onChange={(e) => {
                setAvatar(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <label htmlFor="institute">Институт</label>
          <Field
            as="select"
            name="institute"
            className="form-control userentry__form-control"
          >
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
          <label htmlFor="description">Описание</label>
          <Field
            as="textarea"
            name="description"
            type="text"
            className="form-control userentry__form-control entry-textarea"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            className="form-control userentry__form-control"
          />
          <div className="error-message">
            <ErrorMessage name="email" />
          </div>
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Придумайте пароль</label>
          <Field
            name="password"
            type="password"
            className="form-control userentry__form-control"
          />
          <div className="error-message">
            <ErrorMessage name="password" />
          </div>
        </FormGroup>
        <Button type="submit">Редактировать"</Button>
      </Form>
    </Formik>
  );
}

export default UserEntry;
