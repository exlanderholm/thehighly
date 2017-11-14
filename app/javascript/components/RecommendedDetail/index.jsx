import React from 'react'
import PropTypes from 'prop-types'
import MapContainer from '../../containers/MapContainer'

import styles from './recommended-detail.css'

const RecommendedDetail = ({
  title,
  excerpt,
  whereToGo,
  whatToGet,
  productsFlower,
  productsEdibles,
  productsCartridgeOil,
  productsTopicals,
  productsSensuals,
  productsTinctures,
  productsPets
}) => {
  const whatToGetSorted = sortWtg({whatToGet})
  return (
    <div className="recommended-detail">

      <div className="recommended-detail__top">
        <h1 className="title">{title}</h1>
        <div className="recommended-detail__excerpt" dangerouslySetInnerHTML={createMarkupObject(excerpt)} />
      </div>

      <div className="map-container">
        <MapContainer
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0sfdV9YRi7xlGTu2wWal0fKLWInIQ6ME&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `50vw` }} />}
          containerElement={<div style={{ height: `50vw` }} />}
          mapElement={<div style={{ height: `50vw` }} />}
          whereToGo={whereToGo}
        />
      </div>

      <p className="notice caps">Delivery Info Coming Soon
        <svg viewBox="0 0 531 361.5"  >
          <path d="M515.9,280.4c-13.9,41.4-52.1,69.9-95.8,72c-48.7,2.3-93.7-29.5-107.1-75.8c-14-48.2,6.2-98.7,49.3-123.3 c1.6-0.9,3.1-1.8,5-2.9c-5.3-14-10.6-27.8-16-42.2c-1,1.4-1.8,2.3-2.4,3.3c-24.3,42.5-48.6,84.9-72.7,127.5c-2.8,4.9-6.4,7.1-12.1,7 c-13.5-0.2-26.9-0.1-40.1-0.1c0,8-1.9,16.6-3.9,24.9c-11.1,46.4-51,79.2-98.5,81.6C74,354.8,31.5,325,16,281.5 c-1.2-3.5-5.3-17.3-6-30.8c-0.7-13.5,2.1-26.7,2.6-28.8c11-46.7,50.6-79.9,98.4-82.4c5.6-0.3,11.3,0,16.9,0.5 c5.4,0.5,10.8,1.7,16.6,2.6c2.7-6.3,5.4-12.6,8.3-19.3c-14.1-4.2-28.2-5.8-42.6-5c-22.4,1.2-43.1,7.7-62.2,19.5 c-8,5-16.6,1.3-17.5-7c-0.5-4.4,1.2-7.8,4.9-10.2c19.2-12.4,40.2-19.8,62.8-22.6c20.6-2.5,40.9-1,60.8,4.8c0.6,0.2,1.3,0.2,2.4,0.3 c2.5-5.9,7.6-16.8,7.6-16.8l-18.6-32.4c0,0-2.9,0.1-9.8,0c-6.7-0.1-11.1-4.7-10.9-11c0.2-5.6,4.1-10,9.7-10 c21.8-0.1,33.6-0.1,55.5,0c5.6,0,10,4.9,10,10.5c0,5.6-4.5,10.4-10.5,10.6c-7,0.2-20.2,0.1-20.2,0.1l12,20.9c0,0,106.6,0,152.4,0 c-4.1-10.9-8.1-21.5-12.1-32c-2-5.3-4.1-10.5-6-15.9c-3.1-8.8,1.3-15.6,10.7-15.8c13.3-0.3,26.7-0.2,40,0c7.4,0.1,11.9,4.3,12,10.6 c0.1,6.5-4.5,10.8-12.2,11c-8.1,0.2-16.3,0-25.4,0c14.1,37,27.9,73.4,41.3,108.5c12.9-0.5,25.2-2.1,37.3-1.4 c44.8,2.9,83.2,36,94.3,78.8c1.1,4.1,3.9,15.7,2.6,37.1C520.5,266,517.3,276.4,515.9,280.4z M395.4,163.4c0.6,1.7,1.1,3.4,1.7,5.1 c9.1,23.8,18.2,47.5,27.1,71.4c0.9,2.4,1.6,5.2,1.4,7.7c-0.4,4.8-4.4,8.3-9.4,8.9c-4.8,0.6-9.2-2.1-11.2-7.3 c-5.5-14.1-10.8-28.3-16.2-42.4c-4.5-11.9-9.1-23.8-13.7-35.7c-34.8,17.2-57.4,63.7-38.6,108.1c18.4,43.4,67.7,63.6,111.1,45.7 c43-17.7,64.1-67.2,46.8-110.2C476.8,170.4,430.2,153.4,395.4,163.4z M135.8,163.2c-29-7.8-66.9,2.1-89.1,33.8 c-22.2,31.7-20.4,74.1,4.2,103.4c25.2,30,66.5,39.2,101.9,22.7c33.9-15.8,50.5-51.4,48.5-77.2c-1.8,0-3.6,0-5.4,0c-26,0-52,0.1-78,0 c-9.5,0-14.2-7.1-10.7-15.9c0.4-0.9,0.8-1.8,1.2-2.7C117.5,206,126.6,184.7,135.8,163.2z M199.2,97c22.3,39,44.3,77.4,66.7,116.7 c22.4-39.3,44.4-77.7,66.7-116.7C287.8,97,244,97,199.2,97z M247.4,224.5c-21.9-38.3-43.4-77-65.4-115.6 c-6.1,14.2-11.7,28.3-17.5,41.6c30.4,16.3,49.1,41.1,56.7,74C230,224.5,238.3,224.5,247.4,224.5z M199.3,224.6 c-7.1-24.3-21.1-42.2-43.3-54.3c-7.9,18.4-15.5,36.2-23.3,54.3C155.1,224.6,176.7,224.6,199.3,224.6z"/>
        </svg>
      </p>

      <div className="where-to-go">
        <h4 className="section__title caps">Where to Go</h4>
        {whereToGo.map( place => <Place {...place} key={place.id} /> )}
      </div>

      <div className="what-to-get">
        <h4 className="section__title caps">What To Get</h4>
        {whatToGetSorted.map( (group, idx) => <ProductGroup {...group} key={idx} />)}
      </div>
    </div>
  )
}

RecommendedDetail.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  whereToGo: PropTypes.array,
  whatToGet: PropTypes.array,

  productsFlower: PropTypes.array,
  productsEdibles: PropTypes.array,
  productsCartridgeOil: PropTypes.array,
  productsTopicals: PropTypes.array,
  productsSensuals: PropTypes.array,
  productsTinctures: PropTypes.array,
  productsPets: PropTypes.array
}

RecommendedDetail.defaultProps = {
  title: '',
  excerpt: '',
  whereToGo: [],
  whatToGet: [],

  productsFlower: [],
  productsEdibles: [],
  productsCartridgeOil: [],
  productsTopicals: [],
  productsSensuals: [],
  productsTinctures: [],
  productsPets: []
}

const sortWtg = ({whatToGet}) => {
  var whatToGetSortedObject = {}
  whatToGet.forEach(element => {
    whatToGetSortedObject[element.type] = whatToGetSortedObject[element.type] || []
    whatToGetSortedObject[element.type].push(element)
  })

  var whatToGetSortedArray = []

  Object.keys(whatToGetSortedObject).forEach( (groupName) => {
    whatToGetSortedArray.push({
      products: whatToGetSortedObject[groupName],
      type: groupName
    })
  })

  return whatToGetSortedArray
}

// const relatedPosts = (relatedPosts) => {

//   return (
//     <span className="caps">Related: </span>
//   )
//   relatedPosts.forEach(relatedPost => {
//     return (
//       <span className=""><a href={relatedPost.link}>{relatedPost.title}</a></span>
//     )
//   })
// }

const Place = ({ id, title, description, location, website, relatedPosts }) => (
  <div className="place">
    <ul className="place__header">
      <li><h3 className="place__title">{title}</h3></li>
      <li><a className="caps" href={website}>website</a></li>
      <li><a className="caps" target="_blank" href="/">Directions</a></li>
      {/* {relatedPosts} */}
    </ul>
    <div className="place__content" dangerouslySetInnerHTML={createMarkupObject(description)} />
  </div>
)

const ProductGroup = ({type, products}) =>
  <div className="product__type">
    <label htmlFor={`product_type_${type}`} className="caps">{type}</label>
    <input className="product_type_checkbox" type="checkbox" id={`product_type_${type}`} />
    <div className="product_products">
      {products.map( product => <Product {...product} key={product.id} /> )}
    </div>
  </div>

const Product = ({ id, title, image, description, affiliateLink, type }) => (
  <div className="product">
    <h3 className="product__title">
      <a href={affiliateLink} target="_blank">
        {title}
      </a>
    </h3>

    <img className="product__image" src={image.url} />

    <div dangerouslySetInnerHTML={createMarkupObject(description)} />
  </div>
)

const createMarkupObject = __html => ({ __html });

export default RecommendedDetail