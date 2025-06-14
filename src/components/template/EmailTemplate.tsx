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

interface EmailTemplateProps {
  userName?: string;
  companyEmail?: string;
  location?: { state: string, street: string, postalCode: string, city: string };
  company?: string;
  values?: { id: number, title: string, content: string }[];
}


export const EmailTemplate = ({ userName, companyEmail, location, company, values }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Invitation to join {company}</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Row>
              <Column style={headerContent}>
                <Heading style={headerContentTitle}>
                  Hi! {userName}
                </Heading>
                <Text style={headerContentSubtitle}>
                  Dedication is not just a <span className="text-[#94F7F6] animate-bounce text-3xl">Word</span>
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={title}>
              In pursuit of greatness
            </Heading>
            <Text style={paragraph}>
              At {company}, we believe in nurturing a love for the game while instilling important values such as teamwork, discipline, and sportsmanship. Our experienced coaches are dedicated to providing a safe and supportive environment for your child to develop their skills and reach their full potential.
            </Text>

            <Hr style={divider} />

            <Heading as="h2" style={title}>
              Here are some key details about our academy:
            </Heading>

            <ul>
              {values.map((value) => (
                <li key={value.id} className="list-disc m-6">
                  <Text style={paragraph}><strong>{value.title}</strong>{value.content}</Text>
                </li>
              ))}
            </ul>

            <Text style={paragraph}>
              We are confident that your child will thrive and have an unforgettable experience at the Kid Baseball Academy. Join us in shaping the next generation of baseball stars!
            </Text>

            <Hr style={divider} />
            <Section className="flex w-full justify-center items-start p-4">
              <Text>
                If you have any questions or concerns, please do not hesitate to reach out to us at:
                <strong>
                  {" "}{companyEmail}
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
);


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

const headerContentSubtitle = {
  color: "#fff",
  fontSize: "17px",
};

const title = {
  margin: "15px",
  padding: "5px",
  fontWeight: "bold",
  fontSize: "25px",
  lineHeight: "21px",
  color: "#0c0d0e",

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