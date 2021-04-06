import React from 'react'
import {formatPrice} from '@/utils/helpers'

const CartItem = ({ id, title, preview_img, price }) => {
  const { url } = preview_img
  console.log(preview_img)
  return (
    <div className='card_item'>
      <img src={url} alt={title} />
      <div className='text_card'>
        <h5 className='cart_title'>{title}</h5>
        {/* <p className="decscription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, enim.</p> */}
        <h4 className='amount'>{formatPrice(price)}</h4>
        <button
          className='remove_btn'
          onClick={() => console.log('Item Remove')}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
