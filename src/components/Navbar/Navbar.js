import React, {useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav, NavbarContainer, NavLogo, NavIcon, 
    MobileIcon, NavMenu, NavItem, 
    NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements';



const Navbar = () => {
    /* React Hooks */
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
    
    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}> 
         <Nav>
             <NavbarContainer>
                <NavLogo to="/"> 
                <NavIcon />
                Westheim Service
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>Hjem</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/WestheimInfo'>Westheim</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/Erfaring'>Erfaringer</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/Tjenester'>Tjenester</NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/KontaktSkjema">
                                <Button primary>Ta Kontakt</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to="/KontaktSkjema">
                                <Button fontBig primary>
                                    Ta Kontakt
                                </Button>
                            </NavBtnLink>
                        
                        )};
                    </NavItemBtn>

                </NavMenu>
             </NavbarContainer>
         </Nav>
         </IconContext.Provider>
        </>
    )
}

export default Navbar
