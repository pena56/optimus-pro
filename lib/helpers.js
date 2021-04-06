export function featuredCourse(data) {
  return data.filter(item => {
    return item.featured === true;
  })
}