/*
The description component/page takes the selected item from the state and renders it.
*/
import React from 'react';
import { connect } from 'react-redux';


class Description extends React.Component{
  render(){
      const {selected} = this.props;
    return(
      <div className="container">
      <h2>Image Description</h2>
      <p> User: {selected.user}</p>
      <p> Downloads: {selected.downloads}</p>
      <p> Size: {selected.imageWidth}x{selected.imageWidth}</p>
      <p> Tags: {selected.tags}</p>
      <p> Views: {selected.views}</p>
        <img  className ="img img-responsive" src={selected.largeImageURL} alt="Logo" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selected: state.urlhandler.selected
});


export default connect(mapStateToProps)(Description);
