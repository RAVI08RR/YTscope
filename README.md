# YTScope - YouTube Channel Analyzer

A modern SaaS application for YouTube channel analytics with complete authentication and onboarding flow.

## 🚀 Features

### ✅ Implemented
- **Authentication System**
  - Email/Password login with bcrypt encryption
  - Google OAuth integration (ready for credentials)
  - JWT-based session management
  - Protected routes with middleware
  - Session persistence

- **Onboarding Flow**
  - 3-step onboarding process
  - Feature showcase
  - YouTube channel connection
  - Progress tracking

- **Dashboard**
  - Modern sidebar navigation
  - Stats overview with growth indicators
  - Recent videos display
  - User profile management
  - Search functionality
  - Notifications

- **UI/UX**
  - Dark theme with orange/purple gradients
  - Smooth animations and transitions
  - Responsive design (mobile + desktop)
  - Glassmorphism effects
  - Hover states and micro-interactions

## 📁 Project Structure

```
ytscope/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/     # NextAuth API routes
│   ├── dashboard/                 # Dashboard page
│   ├── channels/                  # Channels management
│   ├── login/                     # Login page
│   ├── register/                  # Registration page
│   ├── onboarding/                # Onboarding flow
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Landing page
├── components/
│   ├── DashboardLayout.tsx        # Dashboard layout with sidebar
│   ├── SessionProvider.tsx        # NextAuth session wrapper
│   ├── ThemeProvider.tsx          # Theme management
│   └── Navbar.tsx                 # Navigation bar
├── middleware.ts                  # Route protection
├── types/
│   └── next-auth.d.ts            # NextAuth type extensions
└── .env.local                     # Environment variables
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: NextAuth.js
- **Password Hashing**: bcrypt
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Installation

1. **Clone the repository**
```bash
cd /Users/ravi/Downloads/ravi-delopment/ytscope
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

The `.env.local` file is already configured with:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=MWOearpbGLZ1J+j5hzgegtbd25vXpPfm99yNV0qAtRs=

# Google OAuth (add your credentials)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Authentication

### Demo Credentials
- **Email**: demo@ytscope.com
- **Password**: password123

### Google OAuth Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Secret to `.env.local`

## 🛣️ Routes

### Public Routes
- `/` - Landing page
- `/login` - Login page
- `/register` - Registration page

### Protected Routes (require authentication)
- `/dashboard` - Main dashboard
- `/channels` - Channel management
- `/videos` - Video analytics
- `/rankings` - Channel rankings
- `/subscription` - Subscription management
- `/settings` - User settings
- `/onboarding` - First-time user onboarding

## 🔒 Route Protection

The middleware automatically:
- Redirects unauthenticated users to `/login`
- Redirects authenticated users from auth pages to `/dashboard`
- Enforces onboarding completion before accessing dashboard
- Preserves callback URLs for post-login redirects

## 🎨 UI Components

### Login Page
- Email/password form with validation
- Password visibility toggle
- Google OAuth button
- Forgot password link
- Sign up link
- Demo credentials display

### Dashboard Layout
- Collapsible sidebar navigation
- Top header with search
- User menu with dropdown
- Notification bell
- Active route indicators
- Mobile responsive

### Onboarding Flow
- Step 1: Welcome & feature showcase
- Step 2: YouTube channel connection
- Step 3: Completion & redirect to dashboard

## 📝 Development Notes

### Current Implementation
- **User Storage**: In-memory array (temporary)
- **Session**: JWT-based with NextAuth
- **Password**: Bcrypt hashed
- **Theme**: Dark mode by default with toggle

### Next Steps for Production
1. **Database Integration**
   - Add Prisma or your preferred ORM
   - Create user, channel, video tables
   - Migrate in-memory users to database

2. **API Integration**
   - Connect to YouTube Data API
   - Implement real analytics fetching
   - Add data caching layer

3. **Features to Add**
   - Email verification
   - Password reset flow
   - Profile editing
   - Channel analytics charts
   - Video performance tracking
   - Competitor analysis

## 🔧 Customization

### Adding New Protected Routes
Edit `middleware.ts`:
```typescript
const protectedRoutes = [
  "/dashboard",
  "/your-new-route", // Add here
];
```

### Modifying User Schema
Update `types/next-auth.d.ts` and `app/api/auth/[...nextauth]/route.ts`

### Changing Theme Colors
Edit Tailwind classes in components (currently using orange-500 and purple-600)

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
```

### NextAuth Errors
- Ensure `NEXTAUTH_SECRET` is set in `.env.local`
- Check `NEXTAUTH_URL` matches your development URL

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or issues, contact the development team.

---

**Built with ❤️ using Next.js and NextAuth**
