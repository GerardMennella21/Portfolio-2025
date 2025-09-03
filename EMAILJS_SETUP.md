# EmailJS Setup Guide

## Overview
The contact form now uses EmailJS to send emails directly from the frontend without requiring a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Free plan includes 200 emails/month

### 2. Connect Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup wizard to authenticate your email

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use these variables in your template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (gerardmennella21@gmail.com)

### 4. ✅ Configuration Complete
The EmailJS credentials are already configured using environment variables:
- Service ID: `service_833ac8b`
- Template ID: `template_itfnl1f` 
- Public Key: `Rimlfgnas_dgOfwbe`

These are stored securely in `.env` file and excluded from git commits.

## Template Example
```
Subject: Portfolio Contact: {{subject}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from gerardmennella.dev contact form
```

## Benefits
- ✅ Direct email delivery (no opening user's email client)
- ✅ Professional appearance
- ✅ Form validation and error handling
- ✅ Success/failure feedback to users
- ✅ 200 free emails/month
- ✅ No backend server required
- ✅ Secure API key handling