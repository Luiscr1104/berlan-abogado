import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const ContactFormNotification = ({ name, email, phone, subject, message }) => {
  const gold = "#c6a455";
  const goldLight = "#d9bc76";
  const goldDark = "#a88a3f";

  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission: {subject}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto my-[40px] max-w-[600px] rounded-[8px] bg-white p-[20px]">
            {/* Logo Section */}
            <Section className="text-center my-[20px]">
              <Img
                src="https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/2c0f8a82-d6ca-415b-1fa7-f97c89de2400/public"
                alt="Berlan Paniagua Law Office"
                width="200"
                height="80"
                className="w-full h-auto object-cover max-w-[200px] mx-auto"
              />
            </Section>

            <Heading
              className="mx-0 my-[30px] p-0 text-center text-[24px] font-bold"
              style={{ color: gold }}
            >
              New Contact Form Submission
            </Heading>

            <Text className="mx-0 my-[16px] text-[16px] leading-[24px] text-gray-700">
              You have received a new inquiry from your website contact form.
              Please review the details below:
            </Text>

            <Section className="my-[24px] p-[16px] rounded-[8px] bg-gray-50">
              <Text className="my-[12px] text-[16px] leading-[24px] text-gray-700">
                <strong style={{ color: goldDark }}>Name:</strong> {name}
              </Text>
              <Text className="my-[12px] text-[16px] leading-[24px] text-gray-700">
                <strong style={{ color: goldDark }}>Email:</strong> {email}
              </Text>
              <Text className="my-[12px] text-[16px] leading-[24px] text-gray-700">
                <strong style={{ color: goldDark }}>Phone:</strong>{" "}
                {phone || "N/A"}
              </Text>
              <Text className="my-[12px] text-[16px] leading-[24px] text-gray-700">
                <strong style={{ color: goldDark }}>Subject:</strong> {subject}
              </Text>
              <Text className="my-[12px] text-[16px] leading-[24px] text-gray-700">
                <strong style={{ color: goldDark }}>Message:</strong>
              </Text>
              <Text className="my-[12px] text-[16px] italic bg-white p-[12px] rounded-[4px] border border-gray-200">
                {message}
              </Text>
            </Section>

            <Section className="my-[32px] text-center">
              <Button
                className="box-border rounded-[4px] px-[20px] py-[12px] text-center text-[16px] font-medium text-white no-underline"
                style={{ backgroundColor: gold }}
                href={`mailto:${email}?subject=Re: ${subject}`}
              >
                Reply to Client
              </Button>
            </Section>

            <Text className="my-[16px] text-[16px] leading-[24px] text-gray-700">
              Remember to respond promptly to maintain client satisfaction and
              trust.
            </Text>

            <Hr
              className="my-[26px] w-full border border-solid"
              style={{ borderColor: goldLight }}
            />

            <Text className="m-0 text-center text-[12px] leading-[24px] text-gray-500">
              © {new Date().getFullYear()} Berlan Paniagua Law Office. All
              rights reserved.
            </Text>

            <Text className="m-0 text-center text-[12px] leading-[24px] text-gray-500">
              100m Norte del Parque Central, Quesada, Ciudad Quesada, Costa Rica
            </Text>

            <Text className="m-0 text-center text-[12px] leading-[24px] text-gray-500">
              This is an automated notification from your website contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactFormNotification.PreviewProps = {
  name: "John Smith",
  email: "johnsmith@example.com",
  phone: "+1 (555) 123-4567",
  subject: "Legal Consultation Request",
  message:
    "I would like to schedule a consultation regarding a business contract dispute. I'm available weekdays after 3pm. Please let me know your availability for the coming week.",
};

export default ContactFormNotification;
