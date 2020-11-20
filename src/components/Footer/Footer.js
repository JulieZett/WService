import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import Light from '../../images/monlight.svg';
import { FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FormInputBig,
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
    SocialIconLink,
    FormLabel,
    Textarea,

    } from './Footer.elements';


const Footer = () => {

    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Ta gjerne kontakt for en uforpliktende prat eller ved spørsmål!
                </FooterSubHeading>
                     <FooterSubText>
                    Jeg svarer på telefon og mail hver dag mellom 8-16.
                    </FooterSubText>
                    <div>
                    <img src={Light} class="BildeS" width="700" />
                  </div>

            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Westheim </FooterLinkTitle>
                        <FooterLink to='/omwwstheim'>Org.nr: 123 123 123 </FooterLink>
                        <FooterLink to='/sertifiseringer'>Sertifiseringer</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Kontakt</FooterLinkTitle>
                        <FooterLink to='/omwwstheim'>Telefon: 900 00 000</FooterLink>
                        <FooterLink to='/sertifiseringer'>E-post: Kimrwestheim@gmail.com</FooterLink>
                        <FooterLink to='/sertifiseringer'>Postadresse: Atomveien 34D, 0000 Halden</FooterLink>
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
