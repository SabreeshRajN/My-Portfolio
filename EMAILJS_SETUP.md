# EmailJS Setup Guide for Contact Form

Your contact form is now integrated with EmailJS! Follow these steps to make it fully functional:

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your email or Google account

### Step 2: Add Email Service
1. After login, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or any other email provider
4. Click **Connect Account** and authorize with your Gmail: `sabreeshrajnagarajan@gmail.com`
5. Copy the **Service ID** (looks like: `service_abc1234`)

### Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Fill in the template fields:

**Template Name:** Contact Us (or Portfolio Contact Form)

**Subject:**
```
New Message from {{from_name}} - Portfolio Contact
```

**To Email:** `sabreeshrajnagarajan@gmail.com`

**From Name:** `{{from_name}}`

**Reply To:** `{{from_email}}`

**Content:** (Click "Edit Content" and paste this)
```
You have received a new message from your portfolio website!

Contact Details:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **Save** and copy the **Template ID** (looks like: `template_xyz5678`)

**Important:** Make sure the variable names match exactly:
- `{{from_name}}` - sender's name
- `{{from_email}}` - sender's email
- `{{message}}` - the message content

### Step 4: Get Public Key
1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (looks like: `aBcDeFgHiJkLmNo`)
3. Copy it

### Step 5: Update Your Code
Open `src/components/Contact.js` and replace these lines (around line 28-30):

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

**Example:**
```javascript
const serviceId = 'service_abc1234';
const templateId = 'template_xyz5678';
const publicKey = 'aBcDeFgHiJkLmNo';
```

### Step 6: Test Your Form
1. Save the file
2. Refresh your portfolio website
3. Fill out the contact form and click "Send Message"
4. Check your email: `sabreeshrajnagarajan@gmail.com`

## ✅ What Happens Now?

- ✉️ When someone fills out your contact form, you'll receive an email at `sabreeshrajnagarajan@gmail.com`
- 📧 The email will contain their name, email, and message
- 🔔 You can reply directly to their email
- 📊 You can track all submissions in your EmailJS dashboard

## 🎯 Features Added:

- ✅ Real email delivery to your Gmail
- ✅ Loading state ("Sending..." button)
- ✅ Success/Error alerts
- ✅ Form validation
- ✅ Auto-reset after successful submission
- ✅ Fallback email address in error message

## 📝 Free Tier Limits:

- 200 emails per month
- Sufficient for a portfolio website
- If you need more, upgrade plans start at $7/month

## 🔒 Security Note:

The Public Key is safe to expose in frontend code - it's designed for client-side use. Your email credentials are never exposed.

## 🆘 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all IDs are correct
3. Make sure your Gmail is connected in EmailJS
4. Contact EmailJS support: https://www.emailjs.com/docs/

---

**Your form is ready to go! Just complete the setup above and start receiving messages! 🚀**
