export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'


/**
 * Given an image return URL
 * Works for local and Deployed Strapis
 * @param {any} image
 */

export const fromImgToUrl = (image) => {
  if(!image) {
    return "/crypto.jpg"
  }

  if(image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`
  }

  return image.url
}

