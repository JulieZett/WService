import React from 'react'
import { Button } from '../../globalStyles'
import { FaInstagram } from 'react-icons/fa';
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
                    Ta kontakt for spørsmål angående tjenester
                </FooterSubHeading>
                     <FooterSubText>
                    Send gjerne en mail om det er noe du lurer på så svarer jeg så fort jeg kan
                    </FooterSubText>
                     <Form>
                        <FormLabel> Navn: </FormLabel>
                            <FormInput name="navn" type="tekst" placeholder="Navn" />
                    </Form>
                    <Form>
                        <FormLabel> Email: </FormLabel>
                          <FormInput name="email" type="email" placeholder="E-posten din" />
                    </Form>
                     <Form>
                         <FormLabel> Skriv din melding her: </FormLabel>
                    </Form>
                    <Form>
                        <Textarea>

                         <textarea
                            class="message"
                            name=""
                            id=""
                            cols="50"
                            rows="10"
                            placeholder="Melding"></textarea>
                            </Textarea>
                    </Form>
                    <Form>
                    <Button fontBig>Send</Button>
                    </Form>

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
