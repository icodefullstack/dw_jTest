/*
The home page renders the items from the api.
*/
import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { bindActionCreators } from 'redux';
import {
  changeurl
} from './urlhandler'

class Home extends React.Component {


  render() {
    const { data} = this.props;
    if(data.length === 0){
      console.log("Loading...");
      return(
        <h1>Loading...</h1>
      );
    }else{
      return (
        <div className="container">
        <h2>Pixabay Images Viewer</h2>

        <ul id="imglist">
        {
          data.map((item, index)=>{
            return(
              <li key={index} className ="col-sm-4">
              <div className = "itemcontainer ">
              <div className="info">
              {item.tags}
              </div>
              <Link to ="/description">
              <img onClick = {()=>{this.props.changeurl(item)}} className ="img img-responsive" src={item.webformatURL} alt="Logo" />
              </Link>
              </div>
              </li>
            )
          })
        }
        </ul>

        </div>
      );
    }


  }
}


const mapStateToProps = state => ({
  selected: state.urlhandler.selected,
  data: state.urlhandler.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeurl
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
