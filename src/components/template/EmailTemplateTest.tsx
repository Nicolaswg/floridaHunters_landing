import { Body, Button, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Tailwind, Text } from '@react-email/components';
import { Footer } from '@/components/Footer/Footer';

interface EmailTemplateProps {
  username?: string;
  companyEmail?: string;
  inviteFromLocation?: string;
  company?: string;
}

export const EmailTemplate = ({ username, companyEmail, inviteFromLocation, company }: EmailTemplateProps): JSX.Element => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans mt-5 p-4">
          <Container className="my-10 mx-auto p-5">
            <Section className="mt-8">
              <Img
                src="/logo.png"
                width="100"
                height="100"
                alt="Florida Hunter Logo"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">
              <Text className='text-black'>
                Join The <strong className='text-[#48bd6b]'>Hunt</strong> on <strong>{company}</strong>
              </Text>
            </Heading>
            <Text className="text-sm">
              Hello {username} Daniel,
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-6 mx-0 w-full" />
            <Section>
              <Footer />
            </Section>
            <Text className="opacity-50 text-xs">
              This invitation was intended for{' '}
              <span className="">{username} </span>.This invite was sent from{' '}
              <span className="">{inviteFromLocation}</span>. If you were not
              expecting this invitation, you can ignore this email. If you are
              concerned about your account's safety, please reply to this email to
              get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>

  )
}
