import React from "react";
import axios from "axios";

export default class DisplayPersonList extends React.Component {
  
  state = {
    persons: [],
    count: 1
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res);
        this.setState({ persons: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleShow = event => {
    event.preventDefault();

    this.setState({
        // count: this.state.count++
    });
  }

  render() {
      let showOnly = this.state.persons.filter(obj => {
          return obj.id < this.state.count
      })
      let liHtml = showOnly.map((data) => {
          let {id, title} = data
          return (
              <li key={id}>
                  <strong>Name:</strong>
                  {title}
              </li>
            )
      })
    return (
      <div>
        <form onSubmit={this.handleShow}>
          <button type="submit">Show</button>
        </form>
        <ul className="PersonList">
            {liHtml}
        </ul>

      </div>
    );
  }
}
