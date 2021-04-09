export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

export function featuredCourse(data) {
  return data.filter(item => {
    return item.featured === true;
  })
}

/**
 * Given an image return URL
 * Works for local and Deployed Strapis
 * @param {any} image
 */

export const fromImgToUrl = (image) => {
  if(!image) {
    return "/coursecover.jpeg"
  }

  if(image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`
  }

  return image.url
}