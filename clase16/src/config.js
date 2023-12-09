import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  gmail_user: process.env.GMAIL_USER,
  gmail_password: process.env.GMAIL_PASSWORD,
  twilio_account_sid: process.env.TWILIO_ACCOUNT_SID,
  twilio_auth_token: process.env.TWILIO_AUTH_TOKEN,
  twilio_phone_number: process.env.TWILIO_PHONE_NUMBER,
  twilio_whatsapp_number: process.env.TWILIO_WHATSAPP_NUMBER,
};
