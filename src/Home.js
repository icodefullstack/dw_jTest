import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import {
  changeurl,
  loadData
} from './urlhandler'

class Home extends React.Component {


  render() {


    const {url, data} = this.props;

    console.log(data.length);

    if(data.length === 0){
      console.log("Loading...");
      return(
        <h1>Loading...</h1>
      );
    }else{
      return (
              <div className="container">

              <h2>First Page</h2>
              <span>Required in the test Description </span>

              <ul id="imglist">
              {

                data.map((item, index)=>{
                  console.log(item.likes);
                  return(
                    <div>
                    <li key={index} className ="col-sm-4">
                    <div className = "itemcontainer ">
                    <div className="info">
                      {item.tags}
                      </div>
                      <img className ="img img-responsive" src={item.webformatURL} alt="Logo" />
                      </div>
                    </li>
                    </div>
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
  url: state.urlhandler.url,
  data: state.urlhandler.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeurl,
  loadData

}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);


  // <li key={index} className ="col-sm-4">
  // <div className = "itemcontainer ">
  // <div className="info">
  //   {item.tags}
  //   </div>
  //   <img className ="img img-responsive" src={item.webformatURL} alt="Logo" />
  //   </div>
  // </li>
