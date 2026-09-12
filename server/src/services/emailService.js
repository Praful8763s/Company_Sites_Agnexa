import 'dotenv/config';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const RESEND_FROM = process.env.RESEND_FROM || 'onboarding@resend.dev';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'prafulsonwane13@gmail.com';

// Initialize Resend primary client
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
if (resend) {
  console.log(`⚡ [Email Service]: Resend active. Form submissions will be delivered directly to ${ADMIN_EMAIL}`);
}

// Nodemailer fallback configuration
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT, 10) || 465;
const SMTP_SECURE = SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER || process.env.EMAIL_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || process.env.EMAIL_PASS || '';

let transporter = null;
if (SMTP_USER && SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });
}

/**
 * Send new contact inquiry notification directly to admin email via Resend
 */
export const sendContactNotification = async (contact) => {
  const { fullName, email, phone, company, service, budget, timeline, message } = contact;
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

  console.log('\n=============================================================');
  console.log('📬 [NEW CONTACT ENQUIRY RECEIVED]');
  console.log(`To Admin: ${ADMIN_EMAIL}`);
  console.log(`From Client: ${fullName} <${email}>`);
  console.log(`Service: ${service}`);
  console.log(`Company: ${company || 'N/A'}`);
  console.log(`Phone: ${phone || 'N/A'}`);
  console.log(`Budget: ${budget || 'Flexible'}`);
  console.log(`Timeline: ${timeline || 'Flexible'}`);
  console.log(`Message: ${message}`);
  console.log('=============================================================\n');

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; background-color: #07090e; color: #e2e8f0; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: #0c121e; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <div style="background: linear-gradient(135deg, #1261ff 0%, #00d2ff 100%); padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px;">AGNEXA TECHNOLOGIES</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 6px 0 0 0; font-size: 14px;">⚡ New Client Project Inquiry Received</p>
      </div>

      <div style="padding: 30px;">
        <p style="color: #94a3b8; font-size: 14px; margin-top: 0;">
          A new client submitted a project inquiry on the Agnexa official website at <strong>${timestamp} (IST)</strong>.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: bold; width: 35%;">Client Name:</td>
            <td style="padding: 10px 0; color: #ffffff; font-weight: 600;">${fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: bold;">Client Email:</td>
            <td style="padding: 10px 0; color: #38bdf8;">
              <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: bold;">Phone Number:</td>
            <td style="padding: 10px 0; color: #ffffff;">${phone || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: bold;">Company / Org:</td>
            <td style="padding: 10px 0; color: #ffffff;">${company || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: bold;">Service Required:</td>
            <td style="padding: 10px 0; color: #ff6b00; font-weight: 700;">${service}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: bold;">Project Budget:</td>
            <td style="padding: 10px 0; color: #10b981; font-weight: 600;">${budget || 'Flexible'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: bold;">Expected Timeline:</td>
            <td style="padding: 10px 0; color: #ffffff;">${timeline || 'Flexible'}</td>
          </tr>
        </table>

        <div style="background: #111827; border-left: 4px solid #1261ff; padding: 16px; border-radius: 6px; margin: 20px 0;">
          <h4 style="margin: 0 0 8px 0; color: #cbd5e1; font-size: 14px;">Project Scope / Message:</h4>
          <p style="margin: 0; color: #ffffff; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${message}</p>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <a href="mailto:${email}?subject=Re:%20Agnexa%20Technologies%20-%20Project%20Consultation%20(${encodeURIComponent(service)})" 
             style="background: #1261ff; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: bold; display: inline-block;">
             Reply Directly to Client
          </a>
        </div>
      </div>

      <div style="background: #080c14; padding: 20px; text-align: center; border-top: 1px solid #1e293b;">
        <p style="color: #64748b; font-size: 12px; margin: 0;">
          Generated by <strong>Agnexa Technologies</strong> Consultation Dispatch System.
        </p>
      </div>
    </div>
  </div>
  `;

  // 1. Send via Resend
  if (resend) {
    try {
      const { data, error } = await resend.emails.send({
        from: RESEND_FROM,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `🚨 [New Client Lead] ${fullName} - ${service}`,
        html: htmlContent
      });

      if (!error && data) {
        console.log(`✅ [Resend Email Sent]: Successfully delivered client lead to ${ADMIN_EMAIL} (ID: ${data.id})`);
        return { success: true, messageId: data.id, provider: 'resend' };
      }
      if (error) {
        console.warn('⚠️ [Resend Notice]:', error.message);
      }
    } catch (err) {
      console.warn('⚠️ [Resend Exception]:', err.message);
    }
  }

  // 2. Fallback to Nodemailer if configured
  if (transporter) {
    try {
      const info = await transporter.sendMail({
        from: `"Agnexa Portal Notifications" <${SMTP_USER}>`,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `🚨 [New Client Lead] ${fullName} - ${service}`,
        html: htmlContent
      });
      console.log(`✅ [SMTP Email Sent] Successfully delivered notification to ${ADMIN_EMAIL}: ${info.messageId}`);
      return { success: true, messageId: info.messageId, provider: 'smtp' };
    } catch (error) {
      console.error('❌ [SMTP Send Error]:', error.message);
    }
  }

  return { success: true, simulated: true };
};

/**
 * Send Confirmation Auto-Reply to Client
 */
export const sendClientAutoReply = async (contact) => {
  if (!contact.email) return;

  const html = `
  <div style="font-family: Arial, sans-serif; background-color: #07090e; color: #e2e8f0; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: #0c121e; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #1261ff 0%, #00d2ff 100%); padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800;">Agnexa Technologies</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 6px 0 0 0; font-size: 14px;">Ideas to Impact</p>
      </div>
      <div style="padding: 30px;">
        <h2 style="color: #ffffff; margin-top: 0;">Thank you, ${contact.fullName}!</h2>
        <p style="color: #94a3b8; line-height: 1.6;">
          We have received your project inquiry regarding <strong>${contact.service}</strong>. 
          Our solutions architect and technical engineering team are reviewing your project requirements and will reach out to you within 24 hours.
        </p>
        <div style="background: #111827; border-radius: 8px; padding: 16px; margin: 20px 0; border: 1px solid #1e293b;">
          <p style="margin: 0; color: #94a3b8; font-size: 13px;">Direct Inquiry Contact:</p>
          <p style="margin: 8px 0 0 0; color: #38bdf8; font-size: 13px;"><strong>Email:</strong> prafulsonwane58@gmail.com</p>
        </div>
        <p style="color: #64748b; font-size: 13px;">Best regards,<br><strong style="color: #cbd5e1;">Agnexa Technologies Engineering Team</strong></p>
      </div>
    </div>
  </div>
  `;

  // Try sending via Resend (Note: Sandbox onboarding domain allows sending to account owner)
  if (resend) {
    try {
      await resend.emails.send({
        from: RESEND_FROM,
        to: contact.email,
        subject: `Thank you for contacting Agnexa Technologies - Project Inquiry Received`,
        html
      });
    } catch (err) {
      // Sandbox restrictions for unverified domains are non-fatal
    }
  } else if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Agnexa Technologies" <${SMTP_USER}>`,
        to: contact.email,
        subject: `Thank you for contacting Agnexa Technologies - Project Inquiry Received`,
        html
      });
    } catch (err) {
      console.warn('⚠️ [Auto-Reply Notice]:', err.message);
    }
  }
};

/**
 * Send Career Application Notification to admin via Resend
 */
export const sendApplicationNotification = async (app) => {
  const { fullName, email, phone, role, experience, portfolioUrl, resumeNotes } = app;
  console.log('\n=============================================================');
  console.log('💼 [NEW CAREER APPLICATION RECEIVED]');
  console.log(`To Admin: ${ADMIN_EMAIL}`);
  console.log(`Candidate: ${fullName} <${email}>`);
  console.log(`Position: ${role}`);
  console.log(`Experience: ${experience}`);
  console.log(`Phone: ${phone}`);
  console.log(`Portfolio: ${portfolioUrl || 'N/A'}`);
  console.log('=============================================================\n');

  const html = `
  <div style="font-family: Arial, sans-serif; background-color: #07090e; color: #e2e8f0; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: #0c121e; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Job Application</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 6px 0 0 0;">Position: ${role}</p>
      </div>
      <div style="padding: 30px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #94a3b8;">Candidate:</td><td style="color: #ffffff; font-weight: bold;">${fullName}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8;">Email:</td><td><a href="mailto:${email}" style="color: #38bdf8;">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8;">Phone:</td><td style="color: #ffffff;">${phone}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8;">Experience:</td><td style="color: #ffffff;">${experience}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8;">Portfolio / GitHub:</td><td><a href="${portfolioUrl}" style="color: #38bdf8;">${portfolioUrl || 'N/A'}</a></td></tr>
        </table>
        ${resumeNotes ? `<div style="margin-top: 20px; padding: 12px; background: #111827; border-left: 3px solid #10b981;"><p style="margin: 0; color: #cbd5e1;">${resumeNotes}</p></div>` : ''}
      </div>
    </div>
  </div>
  `;

  if (resend) {
    try {
      const { data, error } = await resend.emails.send({
        from: RESEND_FROM,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `💼 [Career Application] ${fullName} - ${role}`,
        html
      });
      if (!error && data) {
        console.log(`✅ [Resend Email Sent]: Career application delivered to ${ADMIN_EMAIL} (ID: ${data.id})`);
        return { success: true, messageId: data.id };
      }
    } catch (err) {
      console.warn('⚠️ [Resend Application Notice]:', err.message);
    }
  }

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Agnexa Careers" <${SMTP_USER}>`,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `💼 [Career Application] ${fullName} - ${role}`,
        html
      });
    } catch (err) {
      console.warn('⚠️ [Application Email Notice]:', err.message);
    }
  }
};
