'use client';

import { useState, useEffect } from 'react';

type Project = {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  createdAt: number;
  upvotes: number;
  upvoters: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  tags?: string[];
};

// College Canteen Order System - Main Initiative
const CANTEEN_INITIATIVE = {
  title: 'College Canteen Order System',
  subtitle: 'Our Flagship Initiative',
  description: 'A smart food ordering platform for college canteen with real-time menu browsing, cart management, and payment integration. Streamlined ordering system for students to browse menus, customize orders, and enjoy seamless transactions.',
  longDescription: 'This platform transforms how students order food from the college canteen. With an intuitive interface, students can browse menus, customize orders, manage their cart, and enjoy seamless payment options. The system includes order history, favorite meals, and personalized recommendations.',
  features: [
    'Real-time menu browsing',
    'Smart cart management',
    'Multiple payment options',
    'Order history & favorites',
    'Rating & reviews system',
    'Customizable meal options',
    'Transaction history',
    'User-friendly interface'
  ],
  github: 'https://github.com',
  demo: 'https://example.com',
  status: 'In Development',
};

// Peer List projects - Student contributions
const PEER_LIST_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Interview Prep AI Bot',
    description: 'An AI-powered bot that conducts mock interviews, gives real-time feedback on answers, and tracks your progress over time.',
    createdBy: 'Rahul Singh',
    createdAt: 1715249600000,
    upvotes: 42,
    upvoters: [],
    tags: ['AI/ML', 'React', 'Node.js'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  },
  {
    id: '2',
    title: 'Campus Resource Exchange Platform',
    description: 'A marketplace for students to share and exchange study materials, lab notes, and resources with one another.',
    createdBy: 'Priya Sharma',
    createdAt: 1715163200000,
    upvotes: 38,
    upvoters: [],
    tags: ['Full-Stack', 'Database', 'Social'],
  },
  {
    id: '3',
    title: 'Competitive Programming Tracker',
    description: 'Track your competitive programming progress with heatmaps, problem difficulty ratings, and peer rankings.',
    createdBy: 'Arjun Gupta',
    createdAt: 1714990800000,
    upvotes: 28,
    upvoters: [],
    tags: ['Data Visualization', 'Analytics', 'Python'],
  },
];

export function InitiativeHub() {
  const [activeTab, setActiveTab] = useState<'browse' | 'create' | 'leaderboard'>('browse');
  const [projects, setProjects] = useState<Project[]>(PEER_LIST_PROJECTS);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [tempProjectId, setTempProjectId] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [firebaseConnected, setFirebaseConnected] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    createdBy: '',
    github: '',
    demo: '',
    tags: '',
  });

  useEffect(() => {
    // Load email from localStorage on mount
    const savedEmail = localStorage.getItem('deadlock_user_email');
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
    
    // Try to connect to Firebase
    checkFirebase();
  }, []);

  function checkFirebase() {
    try {
      // Try to import and check if Firebase works
      setFirebaseConnected(false); // For now, show demo mode
    } catch (error) {
      setFirebaseConnected(false);
    }
  }

  function handleCreateProject(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.createdBy) {
      alert('Please fill in all required fields');
      return;
    }

    const newProject: Project = {
      id: Math.random().toString(36).substring(2, 11),
      title: formData.title,
      description: formData.description,
      createdBy: formData.createdBy,
      createdAt: Date.now(),
      upvotes: 0,
      upvoters: [],
      links: {
        github: formData.github || undefined,
        demo: formData.demo || undefined,
      },
      tags: formData.tags ? formData.tags.split(',').map((tag) => tag.trim()) : [],
    };

    setProjects([newProject, ...projects]);
    setFormData({
      title: '',
      description: '',
      createdBy: '',
      github: '',
      demo: '',
      tags: '',
    });
    setActiveTab('browse');
    alert('Project created successfully! (Demo: stored locally)');
  }

  function handleUpvote(projectId: string) {
    if (!userEmail) {
      setTempProjectId(projectId);
      setShowEmailPrompt(true);
      return;
    }

    setProjects(
      projects.map((project) => {
        if (project.id === projectId) {
          const hasUpvoted = project.upvoters.includes(userEmail);
          return {
            ...project,
            upvotes: hasUpvoted ? project.upvotes - 1 : project.upvotes + 1,
            upvoters: hasUpvoted
              ? project.upvoters.filter((v) => v !== userEmail)
              : [...project.upvoters, userEmail],
          };
        }
        return project;
      })
    );
  }

  function handleEmailSubmit() {
    if (emailInput.trim()) {
      setUserEmail(emailInput);
      // Save email to localStorage for persistence
      localStorage.setItem('deadlock_user_email', emailInput);
      setEmailInput('');
      if (tempProjectId) {
        handleUpvote(tempProjectId);
        setTempProjectId(null);
      }
      setShowEmailPrompt(false);
    }
  }

  const sortedProjects = [...projects].sort((a, b) => b.upvotes - a.upvotes);

  return (
    <>
      {/* College Canteen Order System - Main Initiative */}
      <section id="initiative" className="canteenInitiativeSection">
        <div className="canteenHero">
          <div className="sectionHeading">
            <p className="eyebrow">{CANTEEN_INITIATIVE.subtitle}</p>
            <h2>{CANTEEN_INITIATIVE.title}</h2>
          </div>
          
          <div className="canteenContent">
            <div className="canteenDescription">
              <p className="shortDesc">{CANTEEN_INITIATIVE.description}</p>
              <p className="longDesc">{CANTEEN_INITIATIVE.longDescription}</p>
              
              <div className="featuresList">
                <h3>Key Features</h3>
                <ul>
                  {CANTEEN_INITIATIVE.features.map((feature, idx) => (
                    <li key={idx}>✨ {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="statusBadge">{CANTEEN_INITIATIVE.status}</div>

              <div className="canteenLinks">
                <a
                  href={CANTEEN_INITIATIVE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button buttonPrimary"
                >
                  💻 View Source
                </a>
                <a
                  href={CANTEEN_INITIATIVE.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button buttonSecondary"
                >
                  🔗 Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peer List - Community Projects */}
      <section id="peerlist" className="peerlistSection">
        <div className="sectionHeading">
          <p className="eyebrow">Student Projects Showcase</p>
          <h2>Peer List</h2>
          <p style={{ marginTop: '16px', color: 'var(--muted)', maxWidth: '60ch' }}>
            A platform for students to showcase their projects. Upload your work, discover what others are building, upvote great ideas, and collaborate with fellow builders.
          </p>
        </div>

        {!firebaseConnected && (
          <div style={{ background: 'rgba(47, 187, 255, 0.12)', border: '1px solid rgba(47, 187, 255, 0.3)', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', color: '#7cdcff' }}>
            <strong>Demo Mode:</strong> This is a preview with demo data. Projects are stored locally.
          </div>
        )}

        {/* Tab Navigation */}
        <div className="peerlistTabs">
          <button
            className={`tab ${activeTab === 'browse' ? 'active' : ''}`}
            onClick={() => setActiveTab('browse')}
          >
            🔍 Browse Projects
          </button>
          <button
            className={`tab ${activeTab === 'create' ? 'active' : ''}`}
            onClick={() => setActiveTab('create')}
          >
            ✨ Create Project
          </button>
          <button
            className={`tab ${activeTab === 'leaderboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('leaderboard')}
          >
            🏆 Leaderboard
          </button>
        </div>

        {/* Browse Tab */}
        {activeTab === 'browse' && (
          <div className="tabContent">
            <div className="projectsGrid">
              {projects.length === 0 ? (
                <div className="emptyState">
                  <p>No projects yet. Be the first to create one!</p>
                </div>
              ) : (
                projects.map((project) => {
                  const hasUpvoted = userEmail && project.upvoters.includes(userEmail);
                  return (
                    <article key={project.id} className="panel projectCard">
                      <div className="projectHeader">
                        <h3>{project.title}</h3>
                        <div className="upvoteCounter">
                          <span className="upvoteCount">{project.upvotes}</span>
                          <button
                            className={`upvoteButton ${hasUpvoted ? 'upvoted' : ''}`}
                            onClick={() => handleUpvote(project.id)}
                            title="Upvote this project"
                          >
                            👍
                          </button>
                        </div>
                      </div>

                      <p className="projectDescription">{project.description}</p>

                      <div className="projectMeta">
                        <span className="creator">By {project.createdBy}</span>
                        <span className="date">
                          {new Date(project.createdAt).toISOString().split('T')[0]}
                        </span>
                      </div>

                      {project.tags && project.tags.length > 0 && (
                        <div className="projectTags">
                          {project.tags.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="projectLinks">
                        {project.links?.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                          >
                            💻 GitHub
                          </a>
                        )}
                        {project.links?.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                          >
                            🔗 Demo
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Create Tab */}
        {activeTab === 'create' && (
          <div className="tabContent">
            <article className="panel formCard">
              <form onSubmit={handleCreateProject} className="projectForm">
                <div className="formGrid">
                  <div className="field">
                    <label>Project Title *</label>
                    <input
                      type="text"
                      placeholder="e.g., Interview Prep AI Bot"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>

                  <div className="field">
                    <label>Your Name/GitHub Handle *</label>
                    <input
                      type="text"
                      placeholder="e.g., John Doe"
                      value={formData.createdBy}
                      onChange={(e) => setFormData({ ...formData, createdBy: e.target.value })}
                    />
                  </div>

                  <div className="field" style={{ gridColumn: '1 / -1' }}>
                    <label>Description *</label>
                    <textarea
                      placeholder="What does your project do? What problem does it solve?"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      style={{ minHeight: '120px' }}
                    />
                  </div>

                  <div className="field">
                    <label>GitHub Link</label>
                    <input
                      type="url"
                      placeholder="https://github.com/..."
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    />
                  </div>

                  <div className="field">
                    <label>Demo Link</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={formData.demo}
                      onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
                    />
                  </div>

                  <div className="field" style={{ gridColumn: '1 / -1' }}>
                    <label>Tags (comma-separated)</label>
                    <input
                      type="text"
                      placeholder="e.g., AI/ML, React, Database"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    />
                  </div>
                </div>

                <button type="submit" className="button buttonPrimary">
                  Create Project
                </button>
              </form>
            </article>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="tabContent">
            <div className="leaderboardContainer">
              {sortedProjects.length === 0 ? (
                <div className="emptyState">
                  <p>No projects yet. Create one to get started!</p>
                </div>
              ) : (
                <div className="leaderboardList">
                  {sortedProjects.map((project, index) => (
                    <div key={project.id} className="panel leaderboardItem">
                      <div className="leaderboardRank">
                        <span className="rank">#{index + 1}</span>
                      </div>
                      <div className="leaderboardContent">
                        <h3>{project.title}</h3>
                        <p className="creator">By {project.createdBy}</p>
                      </div>
                      <div className="leaderboardUpvotes">
                        <span className="upvoteCount">{project.upvotes}</span>
                        <span className="upvoteLabel">👍 Upvotes</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Email Prompt Modal */}
        {showEmailPrompt && (
          <div className="emailPromptBackdrop">
            <div className="emailPromptModal">
              <h3>Enter Your Email</h3>
              <p>To upvote projects, please enter your email:</p>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
                className="emailInput"
                autoFocus
              />
              <div className="emailPromptActions">
                <button onClick={handleEmailSubmit} className="button buttonPrimary">
                  Continue
                </button>
                <button onClick={() => setShowEmailPrompt(false)} className="button buttonSecondary">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
