const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;


export const fetchImages = () => {
  return fetch(API_ENDPOINT).then(function (response) {
    return response.json().then(function (json) {
      json.photos = [
         {
            type: 'placeholder',
            image: '../images/thumbnail.png'
         },
         {
            type: 'placeholder',
            image: '../images/thumbnail.png'
        },
        {
            type: 'placeholder',
            image: '../images/thumbnail.png'
        },
        {
            type: 'placeholder',
            image: '../images/thumbnail.png'
        },
        {
            type: 'placeholder',
            image: '../images/thumbnail.png'
        },
        {
            type: 'placeholder',
            image: '../images/thumbnail.png'
        },
        {
            type: 'placeholder',
            image: '../images/thumbnail.png'
        },
        {
            type: 'placeholder',
            image: '../images/thumbnail.png'
        },
        {
            type: 'placeholder',
            image: '../images/thumbnail.png'
        },
        {
            type: 'placeholder',
            image: '../images/thumbnail.png'
        },
      ];

      return json.photos.map(
        (photo) => photo.image
      );
    })
  })
};