import React from 'react';
import './ProductList.scss';

const ProductList = () => {
  return (
    <>
      <h1>Our Products</h1>
      <div className='product__list'>
        <div className='product__item'>Product 1</div>
        <div className='product__item'>Product 2</div>
        <div className='product__item'>Product 3</div>
        <div className='product__item'>Product 4</div>
        <div className='product__item'>Product 5</div>
        <div className='product__item'>Product 6</div>
      </div>
    </>
  );
};

export default ProductList;
