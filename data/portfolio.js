export const portfolioData = {
  // 1. Basic Info & SEO
  name: "Sweety",
  seo: {
    title: "Sweety | Full Stack Developer",
    description: "Personal portfolio showcasing projects, skills and development journey.",
    url: "https://your-vercel-url.vercel.app", // Replace with your actual deployed URL
  },

  // 2. Hero Section
  hero: {
    roles: [
      "Full Stack Developer",
      "AI Engineer",
      "Frontend Engineer",
      "Multi-Agent Systems",
      "Problem Solver"
    ],
    description: "I build scalable, intelligent web applications and multi-agent AI systems that solve real-world problems. Let's create something extraordinary together.",
    resumeUrl: "/sweety resume.pdf", // Path to your resume in the public folder
    image: "/profile.png" // Path to your profile image in the public folder
  },

  // 3. About Section
  about: {
    description1: "I’m a passionate Software Engineer and AI Innovator. I specialize in building Multi-Agent Systems and Generative AI solutions that orchestrate complex workflows and solve real-world problems.",
    description2: "Beyond traditional full-stack development, my journey is driven by participating in competitive hackathons and engineering next-generation AI healthcare assistants and business orchestrators.",
    image: "/profile.png",
    stats: [
      { type: "number", value: 3, plus: true, label: "Hackathon Wins", theme: "purple" },
      { type: "number", value: 5, plus: true, label: "Projects Built", theme: "indigo" },
      { type: "text", value: "AI Agents", label: "Core Expertise", theme: "emerald" },
      { type: "text", value: "Gen AI", label: "Focus Area", theme: "orange" }
    ]
  },

  // 4. Timeline / Journey Section
  timeline: [
    {
      title: "B.Tech CSE (Hons) | Specialization in AI & Analytics",
      subtitle: "GLA University, Mathura",
      date: "Aug 2025 - Present",
      logo: "/gla.png",
      color: "text-indigo-400",
      shadow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
      border: "hover:border-indigo-500/50",
      dot: "bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.9)]"
    },
    {
      title: "Class XII (82.8%)",
      subtitle: "Hardayal Public School",
      date: "2023 - 2024",
      logo: "/hps.jpg", 
      icon: "🏫",
      color: "text-pink-400",
      shadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
      border: "hover:border-pink-500/50",
      dot: "bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.9)]"
    },
    {
      title: "Class X (97.8%)",
      subtitle: "Hardayal Public School",
      date: "2021 - 2022",
      logo: "/hps.jpg",
      icon: "🎓",
      color: "text-emerald-400",
      shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      border: "hover:border-emerald-500/50",
      dot: "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.9)]"
    },
  ],

  // 5. Skills Section
  skills: [
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500/50",
      pill: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "AI & Automation",
      items: ["Generative AI", "AI Agents", "Multi-Agent Systems", "Workflow Automation"],
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
      hoverBorder: "hover:border-purple-500/50",
      pill: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      title: "Frontend",
      items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
      gradient: "from-emerald-500/10 to-teal-500/10",
      border: "border-emerald-500/20",
      hoverBorder: "hover:border-emerald-500/50",
      pill: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      title: "Backend & Databases",
      items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB"],
      gradient: "from-orange-500/10 to-red-500/10",
      border: "border-orange-500/20",
      hoverBorder: "hover:border-orange-500/50",
      pill: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
      title: "Tools & Core Concepts",
      items: ["Git", "GitHub", "VS Code", "Vercel", "Data Structures", "OOP", "DBMS"],
      gradient: "from-zinc-500/10 to-zinc-400/10",
      border: "border-zinc-500/20",
      hoverBorder: "hover:border-zinc-500/50",
      pill: "bg-zinc-bg text-slate-700 dark:text-zinc-300 border-glass-border"
    },
  ],

  // 6. Projects Section
  projects: [
    {
      title: "FounderOS AI | Multi-Agent Business Orchestrator",
      description: "Built a multi-agent AI system enabling specialized AI agents to collaborate, delegate tasks, and execute complex business workflows. Designed agent-to-agent communication, workflow orchestration, and task delegation pipelines for automated business processes.",
      tech: ["AI Agents", "Next.js", "Node.js", "Workflow Orchestration"],
      image: "/founder os.jpg",
      github: "https://github.com/Sweety3106/orchestratorbuildathon",
      live: "https://orchestratorbuildathon.vercel.app/",
      gradient: "from-indigo-500/20 to-cyan-500/20",
      hoverBorder: "hover:border-indigo-500/50",
      pillColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    },
    {
      title: "HostelFlow (Hostel Management System)",
      description: "Developed a full-stack hostel management system with issue reporting, real-time tracking, and role-based access for students and admins. Implemented live chat, notifications, and an admin dashboard for assigning tasks efficiently.",
      tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "WebSockets"],
      image: "/hostel flow.png",
      github: "https://github.com/Sweety3106/Hostel__issue_tracking_system",
      live: "https://hostel-issue-tracking-system-fg3tbxp83.vercel.app/",
      gradient: "from-pink-500/20 to-rose-500/20",
      hoverBorder: "hover:border-pink-500/50",
      pillColor: "bg-pink-500/10 text-pink-400 border-pink-500/20"
    },
    {
      title: "NirogAI (AI Healthcare Assistant)",
      description: "Developed an AI-powered healthcare assistant for symptom analysis, triage classification, and preliminary diagnosis support. Features include AI-generated clinical reports (SOAP notes), follow-up questioning, and a structured doctor portal.",
      tech: ["Generative AI", "Python", "React", "Next.js", "APIs"],
      image: "/nirog ai.jpg",
      github: "https://github.com/Sweety3106/Nirog-AI",
      live: "https://gray-meadow-085af1100.2.azurestaticapps.net/",
      gradient: "from-emerald-500/20 to-teal-500/20",
      hoverBorder: "hover:border-emerald-500/50",
      pillColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
  ],

  // 7. Achievements Section
  achievements: [
    {
      title: "Intel Certification",
      description: "Successfully completed the certification program by Intel, demonstrating proficiency in modern computing and AI technologies.",
      icon: "🚀",
      image: "/intel.png",
      gradient: "from-blue-600/20 to-indigo-500/20",
      border: "group-hover:border-blue-500/50"
    },
    {
      title: "NEC Certification",
      description: "Achieved certification from NEC, highlighting skills in advanced IT solutions and networking infrastructure.",
      icon: "🌐",
      image: "/nec.png",
      gradient: "from-indigo-500/20 to-violet-500/20",
      border: "group-hover:border-indigo-500/50"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      description: "Successfully earned the AZ-900 certification, demonstrating foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      icon: "☁️",
      image: "/az900.jpg",
      gradient: "from-blue-600/20 to-cyan-500/20",
      border: "group-hover:border-blue-500/50"
    },
    {
      title: "Runner-Up — Phantasia Hackathon",
      description: "Secured 2nd position among multiple competing teams by building an innovative tech solution under time constraints.",
      icon: "🥈",
      image: "/phantasia.jpg",
      gradient: "from-blue-500/20 to-purple-500/20",
      border: "group-hover:border-blue-500/50"
    },
    {
      title: "Top 20 — Solo Hackathon (Google Developers Group)",
      description: "Ranked among top 20 participants in an individual hackathon organized by GDG, demonstrating strong problem-solving and development skills.",
      icon: "⭐",
      image: "/gen ai.jpg",
      gradient: "from-yellow-500/20 to-orange-500/20",
      border: "group-hover:border-yellow-500/50"
    },
    {
      title: "Top 9 — Build With TRAE Hackathon, New Delhi | Solo",
      description: "Selected among the Top 9 projects while competing against around 90 developers and AI builders; independently built FounderOS AI, a multi-agent business orchestration system.",
      icon: "🏆",
      image: "/build with trae.jpg",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "group-hover:border-purple-500/50"
    },
  ],

  // 8. Contact Section
  contact: {
    email: "sweetyadav3369@gmail.com",
    github: "https://github.com/Sweety3106",
    linkedin: "https://linkedin.com/in/sweety-527189382/",
    message: "Feel free to reach out for internships, collaborations or project discussions."
  },

  // 9. Footer Section
  footer: {
    copyright: `© ${new Date().getFullYear()} Sweety — Built with Next.js & Framer Motion`
  }
};
