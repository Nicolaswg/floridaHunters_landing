import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Tailwind,
} from "@react-email/components";

interface EmailTemplateClientProps {
  userName?: string;
  location?: { state: string, street: string, postalCode: string, city: string };
  company?: string;
  message?: string;
  clientPhone?: string;
  clientEmail?: string;
}

import React from 'react'

export const EmailTemplateClient = ({ userName, location, company, message, clientPhone, clientEmail }: EmailTemplateClientProps) => {
  return (<Html>
    <Head />
    <Preview>Invitation to join {company}</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Row>
              <Column style={headerContent}>
                <Heading as="h1" style={headerContentTitle}>
                  <Text className="text-3xl text-white">A message from: {userName}</Text>
                </Heading>
              </Column>
            </Row>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={title}>
              Message and Q&A:
            </Heading>
            <Text style={paragraph}>
              {message}
            </Text>

            <Hr style={divider} />

            <Section className="flex w-full justify-center items-start p-4">
              <Text>
                Cliente Data:
                <strong>
                  {" "}{clientPhone}
                  {" "}{clientEmail}
                </strong>
              </Text>
            </Section>
          </Section>
        </Container>

        <Section style={footer}>
          <Text style={footerText}>
            You're receiving this message from a no-reply email, check all our social media and stay in touch with us.
          </Text>

          <Hr style={footerDivider} />

          <Text style={footerAddress}>
            <strong>{company}</strong>, {location.street}, {location.city} <strong>{location.state}</strong> {location.postalCode}
          </Text>
          <Text style={footerHeart}>{"<3"}</Text>
        </Section>
      </Body>
    </Tailwind>
  </Html>
  )
}

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const headerContent = { padding: "20px 30px 15px" };

const headerContentTitle = {
  color: "#fff",
  fontSize: "27px",
  fontWeight: "bold",
  lineHeight: "27px",
};


const title = {
  margin: "15px",
  padding: "5px",
  fontWeight: "bold",
  fontSize: "25px",
  lineHeight: "21px",
  color: "#000",
};

const paragraph = {
  margin: "1.5rem",
  padding: "5px",
  fontSize: "15px",
  lineHeight: "21px",
  color: "#3c3f44",
};

const divider = {
  margin: "30px 0",
};

const container = {
  width: "680px",
  maxWidth: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const footer = {
  display: "flex",
  flexdirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",
  margin: "32px auto 0 auto",
  padding: "0 30px",
};

const content = {
  padding: "90px",
};


const header = {
  borderRadius: "5px 5px 0 0",
  display: "flex",
  flexDireciont: "column",
  backgroundColor: "rgba(22, 101, 52, 0.8)",
  alignItems: "center",
  justifyContent: "space-between",
};

const footerDivider = {
  ...divider,
  borderColor: "#d6d8db",
  width: "100%",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
  margin: "0",
};

const footerAddress = {
  margin: "4px 0",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
};

const footerHeart = {
  borderRadius: "1px",
  border: "1px solid #d6d9dc",
  padding: "4px 6px 3px 6px",
  fontSize: "11px",
  lineHeight: "11px",
  fontFamily: "Consolas,monospace",
  color: "#e06c77",
  maxWidth: "min-content",
  margin: "0 0 32px 0",
};
