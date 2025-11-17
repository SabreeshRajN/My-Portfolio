# Auto-Reply Email Setup Guide

This guide will help you set up an automatic thank you email that gets sent to people who contact you through your portfolio website.

## 📧 How It Works

When someone fills out your contact form:
1. **Email 1**: You receive a notification with their message
2. **Email 2**: They automatically receive a thank you email from you

---

## 🚀 Setup Steps

### Step 1: Create Auto-Reply Email Template

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Log in to your account
3. Click on **"Email Templates"** in the left sidebar
4. Click **"Create New Template"** button
5. Set the **Template Name**: `Auto Reply - Thank You`
6. Set the **Template ID**: `template_autoreply`

### Step 2: Configure Template Content

Copy and paste this template content:

#### Subject Line:
```
Thank You for Reaching Out! 🎉
```

#### Email Body:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .greeting {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #667eea;
        }
        .message {
            font-size: 16px;
            margin-bottom: 15px;
        }
        .highlight {
            background: #667eea;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .signature {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #667eea;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 14px;
            color: #666;
        }
        .social-links {
            margin-top: 20px;
        }
        .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #667eea;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎉 Thank You for Reaching Out!</h1>
    </div>
    
    <div class="content">
        <div class="greeting">
            Hello {{to_name}}! 👋
        </div>
        
        <div class="message">
            Thank you so much for taking the time to contact me through my portfolio website. 
            I really appreciate your interest!
        </div>
        
        <div class="highlight">
            <strong>✅ Your message has been received successfully!</strong>
            <br><br>
            I've received your message and will review it carefully. I typically respond within 
            24-48 hours during business days. If your inquiry is urgent, please feel free to 
            reach out to me directly via email or LinkedIn.
        </div>
        
        <div class="message">
            <strong>What happens next?</strong>
            <ul>
                <li>📧 I'll review your message personally</li>
                <li>💬 I'll respond with detailed information or answers to your questions</li>
                <li>🤝 We can discuss potential collaboration opportunities</li>
            </ul>
        </div>
        
        <div class="message">
            In the meantime, feel free to:
            <ul>
                <li>🔗 Connect with me on <a href="https://www.linkedin.com/in/sabreeshrajnagarajan/">LinkedIn</a></li>
                <li>💻 Check out my projects on <a href="https://github.com/SabreeshRajN">GitHub</a></li>
                <li>🎓 View my certifications and experience on my portfolio</li>
            </ul>
        </div>
        
        <div class="signature">
            <strong>Best regards,</strong><br>
            <strong style="color: #667eea; font-size: 18px;">Sabreesh Raj Nagarajan</strong><br>
            <em>AI & ML Enthusiast | MERN Stack Developer</em><br>
            <br>
            📧 sabreeshrajnagarajan@gmail.com<br>
            🔗 <a href="https://www.linkedin.com/in/sabreeshrajnagarajan/">LinkedIn Profile</a><br>
            💻 <a href="https://github.com/SabreeshRajN">GitHub Profile</a>
        </div>
    </div>
    
    <div class="footer">
        <p>This is an automated response to confirm receipt of your message.</p>
        <p>© 2025 Sabreesh Raj Nagarajan. All rights reserved.</p>
    </div>
</body>
</html>
```

### Step 3: Configure Template Variables

In the EmailJS template editor, make sure these variables are set:

**To Email**: `{{to_email}}`
- This is the recipient's email address (the person who contacted you)

**Template Variables Used**:
- `{{to_name}}` - The name of the person who contacted you

### Step 4: Test the Template

1. Click **"Test It"** button in EmailJS
2. Fill in test values:
   - `to_name`: "John Doe"
   - `to_email`: "your-test-email@example.com"
3. Click **"Send Test"**
4. Check your test email inbox

### Step 5: Save the Template

1. Click **"Save"** button
2. Make sure the Template ID is: `template_autoreply`

---

## 🎨 Customization Options

### Change the Color Scheme

Replace the purple gradient (`#667eea`, `#764ba2`) with your preferred colors:

```css
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Modify Response Time

Change the "24-48 hours" text to match your actual response time.

### Add More Links

Add more social media or portfolio links in the signature section.

### Change Email Tone

Modify the message content to match your personal communication style:
- More formal: Use "Dear" instead of "Hello"
- More casual: Add emojis and friendly language
- More professional: Remove emojis and use formal language

---

## 📋 Template Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `{{to_name}}` | Recipient's name | "John Doe" |
| `{{to_email}}` | Recipient's email | "john@example.com" |
| `{{from_name}}` | Your name | "Sabreesh Raj Nagarajan" |

---

## ✅ Verification Checklist

Before going live, verify:

- [ ] Template ID is exactly `template_autoreply`
- [ ] Template is saved and active
- [ ] Test email received successfully
- [ ] All links work correctly
- [ ] Email displays properly on mobile
- [ ] No spelling or grammar errors
- [ ] Your contact information is correct
- [ ] Social media links are updated

---

## 🔧 Troubleshooting

### Auto-reply not sending?

1. **Check Template ID**: Must be exactly `template_autoreply`
2. **Check Service Status**: Verify EmailJS service is active
3. **Check Console**: Look for errors in browser console
4. **Check Spam Folder**: Auto-reply might be in spam
5. **Verify Email Address**: Make sure `to_email` variable is set correctly

### Email looks broken?

1. **Test in Multiple Clients**: Gmail, Outlook, Yahoo
2. **Check HTML**: Ensure no syntax errors
3. **Inline CSS**: Some email clients require inline CSS
4. **Use Tables**: For better email client compatibility

### Variables not working?

1. **Double Curly Braces**: Use `{{variable}}` not `{variable}`
2. **Exact Match**: Variable names are case-sensitive
3. **No Spaces**: `{{to_name}}` not `{{ to_name }}`

---

## 📧 Email Flow Diagram

```
User Fills Form
      ↓
Form Submitted
      ↓
Email 1: Notification to You
   ✅ "New message from [Name]"
      ↓
Email 2: Auto-Reply to Sender
   ✅ "Thank you for reaching out!"
      ↓
Success Message Displayed
```

---

## 🎯 Best Practices

1. **Keep it Professional**: Maintain a professional tone
2. **Be Prompt**: Set realistic response time expectations
3. **Provide Value**: Include useful links and information
4. **Mobile-Friendly**: Ensure email looks good on mobile devices
5. **Test Regularly**: Send test emails periodically
6. **Monitor Delivery**: Check EmailJS dashboard for delivery status
7. **Update Content**: Keep contact information current

---

## 📊 EmailJS Dashboard

Monitor your emails at: https://dashboard.emailjs.com/

You can track:
- ✅ Emails sent successfully
- ❌ Failed emails
- 📈 Usage statistics
- 🔔 Delivery notifications

---

## 🚀 Going Live

Once everything is set up:

1. ✅ Test the form on your live website
2. ✅ Verify both emails are received
3. ✅ Check email formatting on different devices
4. ✅ Monitor the first few submissions
5. ✅ Adjust content based on feedback

---

## 💡 Pro Tips

- **Personalize**: Use the recipient's name throughout the email
- **Add Value**: Include links to your portfolio, blog, or resources
- **Set Expectations**: Clearly state when they can expect a response
- **Call to Action**: Encourage them to connect on LinkedIn or check your projects
- **Branding**: Use consistent colors and styling with your portfolio
- **Mobile First**: Most people check email on mobile devices

---

## 📞 Need Help?

If you encounter any issues:

1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Review browser console for errors
3. Test with different email addresses
4. Verify EmailJS service quota hasn't been exceeded

---

**Happy Emailing! 📧✨**

Your portfolio now has a professional auto-reply system that will impress everyone who contacts you!
