import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Dropdown from "../components/Dropdown/Dropdown";
import "./Einstellungen.css";

function Einstellungen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const initialValues = {
    feedlink: "",
  };

  const validationSchema = Yup.object().shape({
    feedlink: Yup.string().required("Feed link is required"),
  });

  const add = (data) => {
    const combinedData = {
      ...data,
      feedcategory: selectedCategory,
    };
    console.log("Form Data:", data);
    console.log("Selected Category:", selectedCategory);
    console.log("Combined data:", combinedData);

    // Simulate API request
    axios
      .post("http://localhost:3001/feeds", combinedData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Feed added:", response.data);
      })
      .catch((error) => {
        console.error("Error adding feed:", error);
      });
  };

  return (
    <div className="einstellungen-container">
      <h1>Einstellungen</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          if (!selectedCategory) {
            return; // Prevent submission if category is not selected
          }
          add(values);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className="formContainer">
            {/* Input field */}
            <div className="form-group">
              <label htmlFor="feedlink">Link:</label>
              <ErrorMessage
                name="feedlink"
                component="span"
                className="error-message"
              />
              <Field
                autoComplete="off"
                id="inputAddLink"
                name="feedlink"
                placeholder="(Ex. https://www...)"
                className="input-field"
              />
            </div>

            {/* Dropdown field */}
            <div className="form-group">
              <label htmlFor="category">Kategorie:</label>
              <Dropdown setSelectedCategory={setSelectedCategory} />
              {!selectedCategory && touched.feedlink && (
                <span className="error-message">
                  Bitte wählen Sie eine Kategorie aus.
                </span>
              )}
            </div>

            {/* Submit button */}
            <div className="form-group">
              <button type="submit" className="submit-btn">
                Link hinzufügen
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Einstellungen;
