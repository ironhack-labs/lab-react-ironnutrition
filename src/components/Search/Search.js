import React from 'react';

class Search extends React.Component {
  state = {
    query: '',
    data: [],
  };

  getData = () => {
    let responseData = this.props.foods;
    this.setState({
      data: responseData,
    });
  };

  handleInput = (e) => {
    const { value } = e.target;
    console.log(value);
    this.getData();
    this.setState({ query: value });
    let responseData = this.state.data;
    console.log(responseData)
    // if (value.length > 0) {
    //   const updatedResponseData = responseData.filter((el) => {
    //     //console.log(responseData);
    //     return el.name == "Pizza";
    //   });
    //   this.setState({ data: updatedResponseData });
    // }
    // console.log(this.state.data)
  };



  render() {
    return (
      <form>
        <input type="text" onChange={this.handleInput} />
      </form>
    );
  }
}

export default Search;
