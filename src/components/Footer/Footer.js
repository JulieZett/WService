import React from 'react'
import { Button } from '../../globalStyles'
import { FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput
    } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Ta kontakt for spørsmål angående tjenester
                </FooterSubHeading>
                <FooterSubText>
                    E-posten blir ikke lagret
                </FooterSubText>
            <Form>
                <FormInput name="email" type="email" placeholder="E-posten din"/>
                    <Button fontBig>Subscribe</Button>

               
            </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
