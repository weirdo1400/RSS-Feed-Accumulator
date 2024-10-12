import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Dropdown from "../components/Dropdown/Dropdown";

function Einstellungen() {
  const initialValues = {
    feedlink: "",
    feedcategory: "",
  };

  const validationSchema = Yup.object().shape({
    feedlink: Yup.string().required("Feed link is required"),
    feedcategory: Yup.string().required("Feed category is required"),
  });

  const add = (data) => {
    axios.post("http://localhost:3001/feeds", data, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log("Feed added:", response.data);
    }).catch((error) => {
      console.error("Error adding feed:", error);
    });
  };

  return (
    <div>
      
      <Dropdown/>
    </div>
  );
}

export default Einstellungen;

/*<Formik
        initialValues={initialValues}
        onSubmit={add}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Link:</label>
          <ErrorMessage name="feedlink" component="span" />
          <Field
            autoComplete="off"
            id="inputAddLink"
            name="feedlink"
            placeholder="(Ex. https://www...)"
          />

          <label>Kategorie:</label>
          <ErrorMessage name="feedcategory" component="span" />
          <Field
            autoComplete="off"
            id="inputAddCategory"
            name="feedcategory"
            placeholder="(Ex. News)"
          />

          <button type="submit">Link hinzufügen</button>
        </Form>
      </Formik>*/