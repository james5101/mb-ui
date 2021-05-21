import React from "react";
import {Button} from "react-bootstrap";
import ServicesModal from "../ServicesModal/ServicesModal";
import ImgBg from "../../img/landing-page.jpg";


const Header = () => {
    return (
        <div style={
            {
                'background-image': `linear-gradient( to top right, rgba(11, 10, 10, 0.38), rgba(11, 10, 10, 0.19)), url(${ImgBg})`,
                'background-position': 'relative',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'height': '85vh',
            }
        }
        >
            <section style={{
                'height': '100%',
                'width': '100%',
                'position': 'relative',
                'display': 'flex',
                'flex-direction': 'column',
                'justify-content': 'center',
                'align-items': 'center',
                'text-align': 'center',
                'color': '#FFFEFE',
            }}>
                <h1>
                    Move Butlers
                </h1>
                <span>
                    One Stop Shop for all moving services
                </span>
                <ServicesModal />
            </section>
            
        </div>
        
    )
}

export default Header;