import React, { Component } from "react";
import FormField from "./FormField";

class Form extends Component {
  render() {
    return (
      <div>
        <FormField label={"name"} type={"text"} placeholder={"name"} />
        <FormField label={"calories"} type={"text"} placeholder={"calories"} />
        <FormField label={"image"} type={"text"} placeholder={"image"} />
      </div>
    );
  }
}

export default Form;
