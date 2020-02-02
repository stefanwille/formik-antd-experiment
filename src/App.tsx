import React, { useRef, useEffect } from "react";
import { Form, InputNumber, Checkbox, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import "./App.css";
import "antd/dist/antd.css";
import { message } from "antd";

const App = () => {
  // tsc comile error: "'Input' refers to a value, but is being used as a type here.ts(2749)"
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (!inputRef.current) {
      throw new Error("Missing ref");
    }
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <Formik
        initialValues={{ firstName: "", age: 20, newsletter: false }}
        onSubmit={async (values, _formikHelpers) => {
          message.info(JSON.stringify(values, null, 2));
        }}
        render={formikApi => (
          <Form>
            <Input name="firstName" placeholder="First Name" ref={inputRef} />
            <InputNumber name="age" min={0} />
            <Checkbox name="newsletter">Newsletter</Checkbox>
            <SubmitButton>Submit</SubmitButton>
          </Form>
        )}
      />
    </div>
  );
};

export default App;
