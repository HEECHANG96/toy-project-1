import React, { useEffect, useState } from 'react';
import InfoCard from '../component/InfoCard';
import Map from '../component/Map';
import { Container, Row, Col } from 'react-bootstrap';

const Total = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
      <Map />
      <h1>경산 맛집 리스트</h1>
      <Container>
        <Row>
          {productList.map((menu)=> (
            <Col lg={3}><InfoCard item={menu}/></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Total;
