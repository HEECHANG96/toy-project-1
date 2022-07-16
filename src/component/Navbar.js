import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";


const Navbar = () => {
    const menuList = [
        '한식',
        '중식',
        '일식',
        '야식',
        '카페',
    ];

const navigate = useNavigate();

const goToMain = () => {
    navigate('/');
};
const goToLogin = () => {
    navigate('/login');
};   
const goToAdd = () => {
    navigate('/add_location');
};

    return (
    <div>
        <div>
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>

        <div className="nav-section">
            <img 
            width={100}
            src="https://3.bp.blogspot.com/--g1ftdzaV8o/We8_zN8b_nI/AAAAAAAAAqs/VFXs_X7QkFECMZZkhNGudsYV6Ws1m2k7wCLcBGAs/s1600/gbgsLOGO%2528gbgs.go.kr%2529.gif"
            onClick={goToMain}
            />
        </div>
        
        <div className="container-style">
            
            <div className="menu-area">
            <div className="input-area">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text"/>
            </div>
            
            <ul className="menu-list">
                {menuList.map(menu=>
                <li>{menu}</li>
                )}
            </ul>

            <div className="button-style" onClick={goToAdd}>
                 <Button>맛집 추가하기</Button>
            </div>
        </div>
            
        </div>
    </div>
  )
}

export default Navbar
