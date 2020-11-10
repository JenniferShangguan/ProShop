import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../redux/action-creators/productActions';


const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList)
  const { isLoading, data, error } = productList;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> : 
        <Row>
          {data.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
          ))}
        </Row>
      }
      
    </>
  )
}

export default HomeScreen;
