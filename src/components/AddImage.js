import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ImageGalleryActions from "../actions";
/* global localStorage */


class AddImage extends Component {
    constructor(props) {
        super(props);
    }

    encodeImageFileAsURL(event) {
        var filesSelected = event.target.files;
        if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64

            var newImage = document.createElement('img');
            newImage.src = srcData;

        
        }
        fileReader.readAsDataURL(fileToLoad);
        localStorage.setItem('img', fileReader.result)
        this.addThumbnail()
        }
  }

  addThumbnail(){
      var dataImage = localStorage.getItem('img');
      var thumbnail = document.getElementById('4');
      thumbnail.src = dataImage;
  }



    render() {
        return (
            <div>
                <input type='file' id="uploadBannerImage" onChange={(event) => {savedImage.encodeImageFileAsURL(event)} } />
            </div>
        )
    }
 
}

export default connect(
  state => ({savedImage: state.savedImage}),
  dispatch => bindActionCreators(ImageGalleryActions, dispatch)
)(AddImage)