import React from 'react'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText} from './Footer.elements';

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
                <FormInput name="email" type="email" placeholder="E-posten din">
                    <Button fontBig>Subscribe</Button>

                </FormInput>
            </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
