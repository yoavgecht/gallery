import React, {Component} from 'react'

let images = [
  '../images/thumbnail.png', 
  '../images/thumbnail.png', 
  '../images/thumbnail.png', 
  '../images/thumbnail.png', 
  '../images/thumbnail.png'
];

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bas64Images: [],
      images: images,
      selectedImage:JSON.parse(localStorage.getItem('bas64Images'))[JSON.parse(localStorage.getItem('bas64Images')).length -1] ||  images[0],
    }
  }

  state = {bas64Images: []}

 componentDidMount() {
    if( (!JSON.parse(localStorage.getItem('bas64Images')))) {
      this.convert({images})
     }  else {
      this.setState( {images: JSON.parse(localStorage.getItem('bas64Images')), bas64Images: JSON.parse(localStorage.getItem('bas64Images'))} )
    }
  }

convert(images){
    const imgs = [];
    const {bas64Images} = this.state;
    images.images.forEach((img) => {
      return this.convertImgToBase64URL(img, (base64Img) => {
            console.log(base64Img);
            bas64Images.push(base64Img);
            localStorage.setItem("bas64Images", JSON.stringify(bas64Images));
    })
    this.setState({
       images: JSON.parse(localStorage.getItem('bas64Images')),
       bas64Images: JSON.parse(localStorage.getItem('bas64Images'))
    })
  })
  
}

convertImgToBase64URL(src, callback, outputFormat){
  var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
      var canvas = document.createElement('CANVAS');
      var ctx = canvas.getContext('2d');
      var dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
    };
 
    if (img.complete || img.complete === undefined) {
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = src;
    }
}

 encodeImageFileAsURL(event) {
        var filesSelected = event.target.files;
        if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();
        var self = this;
        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
            self.setState(prevState => ({
              bas64Images: [...prevState.bas64Images.slice(1), srcData]
            }));
            localStorage.setItem("bas64Images", JSON.stringify(self.state.bas64Images));
            document.getElementById("uploadBannerImage").value = "";
            self.addThumbnail()
          }
          fileReader.readAsDataURL(fileToLoad);
        }
  }

  addThumbnail(){
      const {images, bas64Images} = this.state;
      this.setState({
       images: JSON.parse(localStorage.getItem('bas64Images')),
       bas64Images: JSON.parse(localStorage.getItem('bas64Images'))
    })
  }



   handleThumbClick(selectedImage) {
     this.setState({
       selectedImage
    })
   }

  render() {
    const {images, selectedImage} = this.state;
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div className="image-scroller">
          {images && images.map((image, index) => (
            <div key={index} onClick={this.handleThumbClick.bind(this, image)}>
              <img src={image}/>
            </div>
          ))}
        </div>
        <div className="image-upload">
          <label htmlFor="file-input">
              <img src="../images/upload.png" width="50" height="50"/>
          </label>
          <input type='file' id="uploadBannerImage" onChange={(event) => {this.encodeImageFileAsURL(event)} } />
      </div>
         
      </div>
    )
  }
}
