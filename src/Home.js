import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://pixabay.com/api/?key=3220824-051e00bdae89d6b934550af33&q=grass&pretty=true")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.hits
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">

        <h2>First Page</h2>
        <span>Required in the test Description</span>

        <ul id="imglist">
          {items.map((item, index ) => (

            <li key={index} className ="col-sm-4">
            .
            <div className = "itemcontainer ">
            <div className="info">
              {item.tags}
              </div>
              <img className ="img img-responsive" src={item.webformatURL} alt="Logo" />
              </div>
            </li>
          ))}
        </ul>
        </div>
      );
    }
  }
}

export default Home;
