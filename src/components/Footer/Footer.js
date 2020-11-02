import React from 'react'
import { Button } from '../../globalStyles'
import { FaInstagram } from 'react-icons/fa';
import { FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink

    } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Ta kontakt for spørsmål angående tjenester
                </FooterSubHeading>
                <FooterSubText>
                    Send gjerne en mail om det er noe du lurer på så svarer jeg så fort jeg kan
                </FooterSubText>
            <Form>
            
            </Form>
            <Form>
            <FormInput name="email" type="email" placeholder="E-posten din"/>
                    <Button fontBig>Subscribe</Button>
                    </Form>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Westheim Service</FooterLinkTitle>
                        <FooterLink to='/omwwstheim'>Om Westheim</FooterLink>
                        <FooterLink to='/sertifiseringer'>Sertifiseringer</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Kontakt</FooterLinkTitle>
                        <FooterLink to='/omwwstheim'>Om Westheim</FooterLink>
                        <FooterLink to='/sertifiseringer'>Sertifiseringer</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Sosiale medier</FooterLinkTitle>
                        <FooterLink to='/omwwstheim'>Om Westheim</FooterLink>
                        <FooterLink to='/sertifiseringer'>Sertifiseringer</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <sosicalIcon/>
                        WESTHEIM SERVICE
                    </SocialLogo>
                    <WebsiteRights>Wesheim Service  © 2020
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
