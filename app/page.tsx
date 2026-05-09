import { JoinForm } from '@/components/JoinForm';
import { SiteLogo } from '@/components/SiteLogo';
import { InitiativeHub } from '@/components/InitiativeHub';

const siteMap = [
  {
    id: '01',
    title: 'Hero',
    description: 'Identity, value proposition, and immediate recruitment call-to-action.',
  },
  {
    id: '02',
    title: 'Manifesto / About',
    description: 'The philosophy behind breaking academic deadlock through execution-first learning.',
  },
  {
    id: '03',
    title: 'Events',
    description: 'Hack nights, build sprints, contest preparation, and demo reviews.',
  },
  {
    id: '04',
    title: 'Innovation Hub Preview',
    description: 'Upcoming platform for posting ideas, upvoting concepts, and forming build teams.',
  },
  {
    id: '05',
    title: 'Join / Contact',
    description: 'Entry requirements, application pathway, and faculty-facing contact channel.',
  },
];

const events = [
  {
    title: 'Rapid Prototype Sprints',
    description:
      '48-hour build cycles around practical products, AI workflows, and campus problems worth solving.',
    accent: 'blue',
  },
  {
    title: 'Competitive Coding Drills',
    description:
      'Timed problem-solving sessions that sharpen algorithmic thinking and interview-grade discipline.',
    accent: 'red',
  },
  {
    title: 'System Build Reviews',
    description:
      'Architecture walkthroughs, code critique, and deployment review aligned with industry standards.',
    accent: 'blue',
  },
];

const hubIdeas = [
  {
    tag: 'AI/ML',
    title: 'Placement Interview Simulator',
    description: 'Mock panel engine with feedback analytics.',
  },
  {
    tag: 'Full-Stack',
    title: 'Campus Resource Exchange',
    description: 'Student-built discovery layer for labs, notes, and tools.',
  },
  {
    tag: 'Systems',
    title: 'Contest Tracker',
    description: 'Rankings, practice heatmaps, and peer accountability.',
  },
];

const stack = [
  {
    title: 'Frontend',
    description:
      'Next.js with React and TypeScript for fast iteration, routing, and strong deployment ergonomics.',
  },
  {
    title: 'Backend',
    description:
      'Node.js API routes or a lightweight Express service for admin workflows and future hub extensions.',
  },
  {
    title: 'Data + Auth',
    description: 'Firebase for authentication, Firestore, storage, and rapid MVP delivery with real-time collaboration potential.',
  },
  {
    title: 'Deployment',
    description: 'Vercel for frontend delivery, Firebase services for backend data, and GitHub for CI and contribution control.',
  },
];

const features = [
  'Idea board with category tags for AI/ML, full-stack, tooling, and research-backed products.',
  'Upvote and validation system to surface serious ideas fast.',
  'Contributor matching for developers, designers, researchers, and operators.',
  'Progress visibility through milestones, demo status, and repository links.',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="noise" />

      <header className="topbar">
        <div className="brand">
          <SiteLogo />
          <div>
            <p className="eyebrow">Roorkee Institute of Technology</p>
            <h1>Deadlock Devs</h1>
          </div>
        </div>

        <nav>
          <a href="#manifesto">Manifesto</a>
          <a href="#events">Events</a>
          <div className="navDropdown">
            <a href="#initiative" className="navDropdownTrigger">Our Initiative ▼</a>
            <div className="navDropdownMenu">
              <a href="#initiative">College Canteen</a>
              <a href="#peerlist">Peer List</a>
            </div>
          </div>
          <a href="#join">Join</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div>
          <p className="kicker">A Movement of Student Builders</p>
          <h2>
            We are <span style={{background: 'linear-gradient(90deg, #ff345a, #ff7a8f)', padding: '8px 16px', borderRadius: '12px', display: 'inline-block', marginLeft: '8px'}}>hundreds of hackers</span>
            <br />
            breaking deadlock through execution.
          </h2>
          <p className="lead">
            Deadlock Devs exists for students done waiting for theory to matter. We prototype fast, compete hard, and ship industry-grade systems that earn real recognition.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#join-form">
              Join the Collective
            </a>
            <a className="button buttonSecondary" href="#initiative">
              See What We're Building
            </a>
          </div>

          <div className="metricsGrid">
            <article className="metricCard">
              <strong>01</strong>
              <span>Execution culture, not attendance culture.</span>
            </article>
            <article className="metricCard">
              <strong>02</strong>
              <span>Shipped projects that matter, on your GitHub.</span>
            </article>
            <article className="metricCard">
              <strong>03</strong>
              <span>Placement-ready portfolios through real work.</span>
            </article>
          </div>
        </div>
      </section>

      <section id="sitemap" style={{ display: 'none' }}>
        <SectionHeading eyebrow="Site Map" title="Structure built for clarity and pressure." />
        <div className="cardGrid siteMapGrid">
          {siteMap.map((item) => (
            <article className="panel infoCard" key={item.id}>
              <span className="cardId">{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="manifesto">
        <SectionHeading eyebrow="Manifesto" title="We reject passive learning as a finishing point." />
        <div className="manifestoLayout">
          <article className="panel manifestoCard">
            <p>
              Deadlock Devs was built against a pattern that too many technical students know too well: consume theory, repeat theory,
              and wait for competence to appear later. That pattern creates hesitation, weak portfolios, and graduates who know the syntax
              of ambition without the discipline of execution. We are here to break that deadlock.
            </p>
            <p>
              This collective operates on a different contract. We learn by building under pressure, by shipping prototypes that can be
              tested, criticized, rebuilt, and improved. We train problem solving through competitive programming, product thinking through
              rapid ideation, and engineering judgment through real development workflows in AI/ML and full-stack systems.
            </p>
            <p>
              Our standard is not participation. Our standard is visible output: code repositories, deployed projects, technical depth,
              and teams that can collaborate like a serious development unit. For faculty, that means stronger institutional reputation,
              stronger placement narratives, and stronger evidence of student capability. For students, it means moving from passive
              coursework to demonstrable readiness. Deadlock Devs exists to turn potential into proof.
            </p>
          </article>

          <aside className="panel quoteCard">
            <p className="quote">Stop rehearsing competence. Build it.</p>
            <p className="quoteMeta">Internal directive, Deadlock Devs</p>
          </aside>
        </div>
      </section>

      <section id="events">
        <SectionHeading eyebrow="Our Programs" title="Build together. Get better. Ship hard." />
        <div className="cardGrid tripleGrid">
          {events.map((event) => (
            <article className={`panel infoCard accent-${event.accent}`} key={event.title}>
              <div style={{ width: '100%', height: '160px', background: 'linear-gradient(135deg, rgba(47,187,255,0.2), rgba(255,52,90,0.2))', borderRadius: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                🚀
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="hub">
        <SectionHeading eyebrow="Project Innovation Hub" title="The next layer of the platform." />
        <div className="hubLayout">
          <article className="panel hubNarrative">
            <p>
              The Innovation Hub is the collective&apos;s execution engine: a platform where students can post project ideas, upvote the
              most promising concepts, assemble collaborators, and move from interest to implementation without waiting for permission.
            </p>
            <ul className="featureList">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>

          <aside className="panel terminalPanel">
            <div className="terminalBar">
              <span />
              <span />
              <span />
            </div>
            <div className="hubIdeas">
              {hubIdeas.map((idea) => (
                <article key={idea.title}>
                  <p className="tag">{idea.tag}</p>
                  <h3>{idea.title}</h3>
                  <p>{idea.description}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="outcomes">
        <SectionHeading eyebrow="Outcome Pitch" title="What is the outcome of this collective, and why should students join?" />
        <article className="panel outcomeCard">
          <p>
            The outcome is measurable career readiness. Deadlock Devs equips students with deployed projects, stronger GitHub
            portfolios, sharper problem-solving ability, and direct exposure to modern engineering practices used in high-value
            internships and placements. Students should join because this collective closes the gap between academic knowledge and
            industry performance. It trains them to build in teams, communicate technical decisions, ship under deadlines, and graduate
            with proof of ability rather than claims of interest.
          </p>
        </article>
      </section>

      <section id="stack">
        <SectionHeading eyebrow="MVP Stack" title="Fast, modern, and scalable from day one." />
        <div className="cardGrid quadGrid">
          {stack.map((item) => (
            <article className="panel infoCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <InitiativeHub />

      <section id="join">
        <SectionHeading eyebrow="Join / Contact" title="For students who want output. For faculty who want results." />
        <div className="joinGrid">
          <article className="panel joinCard">
            <h3>Entry Signal</h3>
            <p>Open to disciplined builders, problem-solvers, and operators ready to work in public and improve fast.</p>
          </article>
          <article className="panel joinCard">
            <h3>Faculty Value</h3>
            <p>A visible pipeline of credible student projects, stronger placement narratives, and a sharper technical identity for RIT.</p>
          </article>
          <article className="panel joinCard">
            <h3>Contact Channel</h3>
            <p>Email: rdxdhruv0@gmail.com</p>
            <p>Location: Roorkee Institute of Technology</p>
            <a className="button buttonPrimary" href="mailto:rdxdhruv0@gmail.com">
              Open Contact
            </a>
          </article>
        </div>
      </section>

      <section id="join-form">
        <SectionHeading eyebrow="Join Form" title="Submit your profile. We will review it and reach out." />
        <div className="joinFormLayout">
          <article className="panel formIntroCard">
            <p className="eyebrow">Intake Protocol</p>
            <h3>Basic details. Clear intent. Serious signal.</h3>
            <p>
              Fill the form with your contact details, branch, interests, and skills. Submissions are formatted and sent to the
              Deadlock Devs intake inbox for review.
            </p>
            <p>
              This is not a passive signup list. It is an application channel for students who want to build, compete, and ship.
            </p>
          </article>

          <article className="panel formCard">
            <JoinForm />
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>Deadlock Devs | Midnight / Neon execution culture for RIT.</p>
      </footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="sectionHeading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
