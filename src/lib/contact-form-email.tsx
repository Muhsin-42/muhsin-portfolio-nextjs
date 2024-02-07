import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const ContactFormEmail = ({
  message,
  senderEmail,
}: {
  message: string;
  senderEmail: string;
}) => {
  return (
    <Html>
      <Head></Head>
      <Preview>New message from your portfolio.</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="border-black-10 my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You recieved the following message from the contact form.
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>{`The sender's email is: ${senderEmail}`}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
