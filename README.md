# 🚀 Deadlock Devs | RIT

**A community-driven platform for innovation, collaboration, and student projects at RIT.**

Welcome to Deadlock Devs, a vibrant community of developers and tech enthusiasts at Rochester Institute of Technology. We're focused on building innovative solutions while fostering collaboration and learning among students.

---

## 🎯 Our Vision

Deadlock Devs exists to empower students through hands-on development experiences, collaborative projects, and real-world problem-solving. We believe in the power of collective innovation and peer learning.

### Our Flagship Initiative: College Canteen Order System
A smart food ordering platform for the college canteen with real-time menu browsing, cart management, and seamless payment integration.

**Features:**
- ✅ Real-time menu browsing
- ✅ Smart cart management
- ✅ Multiple payment options
- ✅ Order history & favorites
- ✅ Rating & reviews system
- ✅ Customizable meal options
- ✅ Transaction history
- ✅ User-friendly interface

**Status:** In Development  
**[View Source](https://github.com/Mr-dhruv-sony/Deadlock-Dev) | [Live Demo](#)**

---

## 📋 Peer List: Student Project Showcase

Peer List is our community platform where students showcase their projects, collaborate with peers, and build their portfolios. Similar to [peerlist.io](https://peerlist.io/), it's a hub for innovation and collective growth.

### Key Features:
- 🌟 **Project Showcase** - Display your projects with description, tags, and links
- 👍 **Upvoting System** - Support projects you believe in
- 🏆 **Leaderboard** - Track top projects by community support
- 💬 **Collaboration** - Connect with other developers
- 📊 **Project Analytics** - See upvote trends and engagement

### Featured Projects:
1. **Interview Prep AI Bot** (42 upvotes) - By Rahul Singh
   - Tags: AI/ML, REACT, NODE.JS
   - An intelligent AI-powered interview preparation platform

2. **Campus Resource Exchange Platform** (38 upvotes) - By Priya Sharma
   - Tags: FULL-STACK, DATABASE, SOCIAL
   - Connect and share resources with campus community

3. **Competitive Programming Tracker** (28 upvotes) - By Arjun Gupta
   - Tags: DATA VISUALIZATION, ANALYTICS, PYTHON
   - Track progress and compete with fellow programmers

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.2.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework (custom theme)
- **Turbopack** - High-performance bundler

### Backend & Services
- **Firebase** - Authentication, Realtime Database, Cloud Storage
- **Node.js** - JavaScript runtime

### Development Tools
- **ESLint** - Code quality
- **Git** - Version control

---

## 📁 Project Structure

```
deadlock-dev/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── join/          # Join endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── InitiativeHub.tsx  # College Canteen & Peer List sections
│   ├── JoinForm.tsx       # Join form component
│   └── SiteLogo.tsx       # Logo component
├── lib/                   # Utility functions
│   ├── firebase.ts        # Firebase configuration
│   └── hub-data.ts        # Data utilities
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
└── README.md             # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mr-dhruv-sony/Deadlock-Dev.git
   cd Deadlock-Dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Add your Firebase configuration:
   NEXT_PUBLIC_API_KEY=your_api_key
   NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_PROJECT_ID=your_project_id
   NEXT_PUBLIC_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_APP_ID=your_app_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Usage

### Navigation
- **Manifesto** - Our core values and mission
- **Events** - Upcoming Deadlock Devs events
- **Our Initiative** (Dropdown)
  - College Canteen - Our flagship food ordering platform
  - Peer List - Student project showcase
- **Join** - Connect with our community

### Features

#### College Canteen Order System
Browse real-time menus, add items to cart, customize your orders, and enjoy seamless payment. Rate and review your favorite meals.

#### Peer List - Project Showcase
1. **Browse Projects** - Explore student projects and innovations
2. **Create Project** - Add your own project to showcase
3. **Leaderboard** - See trending projects ranked by community upvotes

#### Upvoting System
- Click the heart icon on any project card to upvote
- Enter your email (saved locally) to vote
- Track your favorite projects

---

## 🔧 Development

### Running Tests
```bash
npm test
```

### Build for Production
```bash
npm run build
npm start
```

### Code Quality
```bash
npm run lint
```

---

## 📱 Responsive Design

The platform is fully responsive and works beautifully on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (720px+)
- 🖥️ Desktop (1080px+)

---

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2fbbff` (Vibrant accent)
- **Soft Blue**: `#7cdcff` (UI elements)
- **Primary Red**: `#ff345a` (Actions/alerts)
- **Soft Red**: `#ff7a8f` (Secondary actions)
- **Dark Background**: `#070b11` (Main background)
- **Deep Background**: `#04070c` (Secondary background)

### Typography
- Hero headings: `clamp(3.5rem, 8vw, 7.5rem)`
- Section headings: `clamp(2.2rem, 5vw, 3.8rem)`
- Body text: Responsive sizing with 1.8 line-height

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Code Standards
- Use TypeScript for type safety
- Follow ESLint rules
- Write clear, descriptive commit messages
- Test your changes before submitting PRs

---

## 📧 Contact & Community

- **Email**: deadlock@rit.edu (example)
- **GitHub**: [Mr-dhruv-sony/Deadlock-Dev](https://github.com/Mr-dhruv-sony/Deadlock-Dev)
- **Website**: [deadlock.rit.edu](https://deadlock.rit.edu)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- All contributing members of Deadlock Devs
- Rochester Institute of Technology
- Our community of student innovators and builders

---

## 🎓 About Deadlock Devs

Deadlock Devs is more than just a club—it's a movement. We're building a community where technical excellence meets creative innovation. Whether you're a beginner taking your first steps in coding or an experienced developer looking to make an impact, there's a place for you here.

**Join us in building the future! 🚀**

---

**Last Updated**: May 2026  
**Version**: 1.0.0
