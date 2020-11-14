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
                        <FormLabel> Fornavn: </FormLabel>
                    </Form>
                    <Form>
                            <FormInput name="Fnavn" type="tekst" placeholder="Fornavn" />
                    </Form>
                    <Form>
                        <FormLabel> Etternavn: </FormLabel>
                        </Form>
                        <Form>
                            <FormInput name="Enavn" type="tekst" placeholder="Etternavn" />
                    </Form>
                    <Form>
                        <FormLabel> Email: </FormLabel>
                        </Form>
                        <Form>
                          <FormInput name="email" type="email" placeholder="E-posten din" />
                    </Form>
                     <Form>
                         <FormLabel> Beskjed:</FormLabel>
                    </Form>
                     <Textarea> 
                         Skriv din melding her 
                    </Textarea>
                
                    <Form>
                    <Button type ="submit"fontBig>Send</Button>
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
