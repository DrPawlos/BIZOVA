

# Product Requirements Document (PRD)
**Project:** IT Business Web Platform
**Owner:** Enter Tech Inc. (You)
**Tech Stack:** Next.js, Supabase, Stripe, Twilio, Resend, OpenAI, Vercel
**Tools:** TipTap Editor


# **1. Purpose**

Build a modern, secure, and scalable platform for an IT services company.
The platform allows the business owner to:

* Manage appointments
* Chat with clients
* Create and manage blog posts
* Send emails/SMS
* Showcase portfolio work
* Present service offerings
* Publish business information
  The goal is to streamline client engagement, lead generation, and content management in one unified system.

---

# **2. Core User Types**

### **2.1 Visitors**

* View landing page
* Read blogs
* View portfolio
* Browse services
* Book an appointment
* Contact the business via chat or form

### **2.2 Admin (You)**

* Full access to Dashboard
* Manage blogs (create, edit, publish, archive)
* Manage appointments
* Respond to chats
* Manage portfolio entries
* Manage service list
* Trigger email/SMS notifications
* Analytics & insights

---

# **3. Core App Sections**

## **3.1 Landing Page (Public)**

**Purpose:** Convert visitors into leads.

**Sections:**

* Hero section (headline + CTA)
* About section
* Services overview
* Featured portfolio items
* Latest blog posts
* Contact form
* Appointment booking button
* Footer with social/contact links

**Integrations:**

* Appointment booking widget
* Email submission via Resend
* Optional AI FAQ chatbot via OpenAI

---

## **3.2 Authentication (Public)**

**Purpose:** Secure access to dashboard.

**Features:**

* Supabase Auth (Email/password + optional OAuth)
* Forgot/reset password
* Session management
* Protect dashboard routes
* Redirect logic

---

## **3.3 Dashboard (Protected)**

**Purpose:** Internal admin panel for business management.

### **Dashboard Modules**

1. **Blog Manager**

   * Create/edit posts with TipTap
   * Attach images (Supabase Storage)
   * Save as draft or publish
   * SEO fields: title, excerpt, keywords
   * Post scheduling (optional)

2. **Appointments Manager**

   * View appointments
   * Approve/reject
   * Send SMS/email confirmation
   * Option to integrate Stripe for paid consultations

3. **Chat**

   * One-to-one chat with clients
   * Real-time via Supabase Realtime
   * Attachments
   * Typing indicators
   * Email/SMS fallback notifications

4. **Portfolio Manager**

   * Add portfolio items
   * Images, description, category
   * Publish/unpublish

5. **Services Manager**

   * Manage list of IT services
   * Pricing
   * Description, icons
   * Publish/unpublish

6. **Email/SMS Tools**

   * Send custom messages to a client
   * Templates
   * Logs, statuses

7. **Analytics** (Optional v2)

   * Blog stats
   * Appointment stats
   * Stripe revenue
   * Leads generated

---

## **3.4 Blogs (Public)**

**Purpose:** Content marketing & SEO.

**Features:**

* Blog listing page
* Single blog page
* Featured posts
* Search + category filter
* SEO-friendly URLs

---

## **3.5 Portfolio (Public)**

**Purpose:** Show past IT work.

**Features:**

* Grid layout of portfolio items
* Detail page for each project
* Images gallery
* Tags/categories

---

## **3.6 Services (Public)**

**Purpose:** Explain offerings and drive conversions.

**Features:**

* List of services with pricing
* Single service detail page
* CTA to book appointment or chat

---

# **4. Non-Functional Requirements**

### **4.1 Performance**

* Deploy on Vercel
* Image optimization (Next/Image)
* Fast blog rendering with ISR (Incremental Static Regeneration)

### **4.2 Security**

* RLS policies for Supabase
* Protected admin routes
* Audit logs for blog changes (optional)

### **4.3 Reliability**

* Automatic backups in Supabase
* Message delivery logs for Twilio/Resend

### **4.4 Scalability**

* Modular architecture
* Database schema optimized for growth

---

# **5. Integrations**

### **Supabase**

* Auth
* Database (blogs, appointments, messages, services, portfolio)
* Storage (media)
* Realtime for chat
* RLS policies

### **Twilio**

* SMS for confirmations & notifications
* VoIP calling

### **Stripe**

* Paid consultations
* Subscription (optional v2)

### **Resend**

* Transactional emails
* New appointment email
* New message email

### **OpenAI**

* Auto-generate blog ideas
* Chatbot responses (optional)
* Smart email content suggestions

---

# **6. Database Overview (Simple v1)**

### **Tables**

* `profiles`
* `blogs`
* `blog_images`
* `appointments`
* `messages`
* `message_attachments`
* `portfolio_items`
* `services`
* `email_logs`
* `sms_logs`
* `chats`
* `audit_logs`







