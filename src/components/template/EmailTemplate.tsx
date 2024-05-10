import { Body, Button, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Tailwind, Text } from '@react-email/components';


interface InviteUserEmailProps {
  username?: string;
  invitedByEmail?: string;
  inviteLink?: string;
  inviteFromLocation?: string;
  company?: string;
}

export const EmailTemplate = ({ username, invitedByEmail, inviteLink, inviteFromLocation, company }: InviteUserEmailProps): JSX.Element => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-10 mx-auto p-5 w-[465px]">
            <Section className="mt-8">
              <Img
                src={``}
                width="80"
                height="80"
                alt="Logo Example"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">
              Join <strong>The Baseball Academy</strong> on <strong>{company}</strong>
            </Heading>
            <Text className="text-sm">
              Hello {username},
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-6 mx-0 w-full" />
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
