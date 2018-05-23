const LOAD_IMAGES = 'LOAD_IMAGES';
const SELECT_IMAGE = 'SELECT_IMAGE';
const SAVE_IMAGE = 'SAVE_IMAGE';

export function selectImage(image) {
  return {
    type: SELECT_IMAGE,
    image
  }
}

export function loadImages() {
  return {
    type: LOAD_IMAGES
  }
}

export function saveImage() {
  return {
    type: SAVE_IMAGES,
    image
  }
}