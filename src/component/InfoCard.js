import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoCard = ({item}) => {

    const navigate = useNavigate();

    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };

  return (
    <div className="card-style" onClick={showDetail}>
      <img src={item?.img} width={264} height={396}/>
        <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
        <div>{item?.title}</div>
        <div>\{item?.price}</div>
        <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default InfoCard;
