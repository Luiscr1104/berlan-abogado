// src/emails/ContactFormResponse.jsx

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

const ContactFormResponse = ({ name }) => {
  // Paleta de colores
  const gold = "#c6a455";
  const goldLight = "#d9bc76";
  const goldDark = "#a88a3f";

  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Berlan Paniagua Law Office</Preview>
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
              Thank You for Contacting Us
            </Heading>

            <Text className="mx-0 my-[16px] p-0 text-[16px] leading-[24px] text-gray-700">
              Dear {name},
            </Text>

            <Text className="mx-0 my-[16px] p-0 text-[16px] leading-[24px] text-gray-700">
              We appreciate you reaching out to Berlan Paniagua Law Office
              through our contact form. Your message has been received, and we
              are committed to providing you with the legal assistance you need.
            </Text>

            <Text className="mx-0 my-[16px] p-0 text-[16px] leading-[24px] text-gray-700">
              Our team will review your inquiry and respond within 24-48
              business hours. For urgent matters, please feel free to call our
              office directly.
            </Text>

            <Section className="my-[32px] text-center">
              <Button
                className="box-border rounded-[4px] px-[20px] py-[12px] text-center text-[16px] font-medium text-white no-underline"
                style={{ backgroundColor: gold }}
                href="https://www.lafortunalaw.com"
              >
                Visit Our Website
              </Button>
            </Section>

            <Text className="mx-0 my-[16px] p-0 text-[16px] leading-[24px] text-gray-700">
              We look forward to assisting you with your legal needs.
            </Text>

            <Text className="mx-0 my-[16px] p-0 text-[16px] leading-[24px] text-gray-700">
              Best regards,
            </Text>

            <Text
              className="mx-0 my-[16px] p-0 text-[16px] font-bold leading-[24px]"
              style={{ color: gold }}
            >
              Berlan Paniagua
            </Text>

            <Text className="mx-0 my-[8px] p-0 text-[14px] leading-[20px] text-gray-600">
              Attorney at Law
            </Text>

            <Hr
              className="mx-0 my-[26px] w-full border border-solid"
              style={{ borderColor: goldLight }}
            />

            <Text className="m-0 p-0 text-center text-[12px] leading-[24px] text-gray-500">
              This is an automated response. Please do not reply to this email.
            </Text>

            <Text className="m-0 p-0 text-center text-[12px] leading-[24px] text-gray-500">
              © {new Date().getFullYear()} Berlan Paniagua Law Office. All
              rights reserved.
            </Text>

            <Text className="m-0 p-0 text-center text-[12px] leading-[24px] text-gray-500">
              100m Norte del Parque Central, Quesada, Ciudad Quesada, Costa Rica
            </Text>

            <Text className="m-0 p-0 text-center text-[12px] leading-[24px] text-gray-500">
              <a
                href="mailto:contact@berlanpaniagua.com"
                className="underline"
                style={{ color: goldDark }}
              >
                berlanpaniagua@gmail.com
              </a>{" "}
              |{" "}
              <a
                href="https://www.berlanpaniagua.com/unsubscribe"
                className="underline"
                style={{ color: goldDark }}
              >
                Unsubscribe
              </a>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormResponse;
