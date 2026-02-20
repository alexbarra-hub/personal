import { trackClick } from '../lib/analytics';

interface Experience {
  role: string;
  company: string;
  period: string;
  icon: string;
}

const experiences: Experience[] = [
  {
    role: 'MBA Candidate',
    company: 'Berkeley Haas',
    period: 'Aug 2024 - Present',
    icon: '🎓',
  },
  {
    role: 'Creator',
    company: 'OFF ALGO',
    period: '2023 - Present',
    icon: '✍️',
  },
  {
    role: 'Various Roles',
    company: 'Consulting & Operations',
    period: '2018 - 2024',
    icon: '💼',
  },
];

export default function Hero() {
  return (
    <div className="min-h-screen px-6 md:px-12 pt-32 pb-20 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Left Column */}
          <div>
            <div className="mb-12">
              <img
                src="/unnamed.jpg"
                alt="Alex"
                className="w-72 h-72 rounded-full object-cover shadow-xl ring-8 ring-white"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-normal text-neutral-900 mb-6 leading-tight">
              I'm Alex Barra
            </h1>

            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              I help teams and businesses grow through thoughtful systems and design, based in California.
            </p>
          </div>

          {/* Right Column */}
          <div className="pt-0 md:pt-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-neutral-900 mb-8 leading-tight">
              Passionate creating great experiences for Digital Product
            </h2>

            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="https://www.linkedin.com/in/alexbarra"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('home', 'talk_with_me')}
                className="px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all"
              >
                Talk with me
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  trackClick('home', 'see_my_work');
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 border border-neutral-300 text-neutral-900 rounded-full hover:bg-neutral-100 transition-all"
              >
                See my work
              </a>
            </div>

            {/* Working Experience */}
            <div>
              <h3 className="text-2xl font-serif font-normal text-neutral-900 mb-8">
                Working experience
              </h3>

              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-2xl">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-neutral-600 mb-1">{exp.role}</div>
                      <div className="font-semibold text-neutral-900">{exp.company}</div>
                    </div>
                    <div className="text-sm text-neutral-500">{exp.period}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-serif font-normal text-neutral-900 mb-8">
                Awards & Recognition
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-neutral-900">W.</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-neutral-600 mb-1">Creator Recognition</div>
                    <div className="font-semibold text-neutral-900">OFF ALGO Featured</div>
                  </div>
                  <div className="text-sm text-neutral-500">2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
