import React, { Component } from "react";
import FormField from "./FormField";

export default class SearchBar extends Component {
  render() {
    const {onChange, value} = this.props;
    return (
      <FormField label="" type="text" placeholder="type a search" onChange={onChange} value={value}/>
    );
  }
}
