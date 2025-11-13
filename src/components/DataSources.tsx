import Image from "next/image";

export default function DataSources() {
  const features = [
    {
      title: "Customizable",
      description: "Manage all your pipelines in one place",
      icon: "⚙️",
      items: [
        "Custom connectors for niche or internal sources, built with our Sharkwave SDK",
        "Custom forks of existing connectors with your own modifications",
        "Your Python scripts and data tools like dbt"
      ],
      code: `$ sharkwave add extractor tap-postgres
$ sharkwave add loader target-snowflake

$ cookiecutter https://github.com/sharkwave/sdk \\
  --directory="cookiecutter/tap-template
  # source_name: my-api
$ sharkwave add --custom extractor tap-my-api

$ sharkwave add utility dbt-snowflake
$ sharkwave add --custom utility my-script.py

$ sharkwave run tap-postgres target-snowflake dbt-snowflake
$ sharkwave run tap-my-api target-snowflake my-script.py`,
      links: ["Sharkwave Hub", "Sharkwave SDK"]
    },
    {
      title: "Transparent",
      description: "Know exactly what's going on",
      icon: "🔍",
      items: [
        "Get the full view with detailed pipeline logs",
        "Inspect the source code of any connector, modify them to your liking, or debug and fix an issue faster than any support agent",
        "Centrally manage your configuration so anyone can suggest changes"
      ],
      code: `$ export SHARKWAVE_LOG_LEVEL=debug

$ sharkwave run tap-github target-duckdb

$ cat .sharkwave/logs/elt/github-to-duckdb-hourly/*/*.log

$ git clone https://github.com/SharkwaveLabs/tap-github.git
$ git clone https://github.com/jwills/target-duckdb.git

$ sharkwave add --custom extractor tap-github-fork
  # pip_url: https://github.com/my-org/tap-github.git

$ sharkwave run tap-github-fork target-duckdb`,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Versionable",
      description: "Increase productivity and collaboration",
      icon: "📝",
      items: [
        "Store your pipelines and their configuration in Git and know exactly what is live at any time",
        "Roll back to the last known-good configuration if a change accidentally broke something",
        "Propose changes with confidence and get feedback from your team in pull requests"
      ],
      code: `plugins:
  extractors:
  - name: tap-postgres
    config:
      host: pg.example.com
      user: admin
      password: $PG_PASSWORD
    select: 
      - users.*
  loaders:
  - name: target-snowflake
schedules:
- name: app-to-dw
  interval: @hourly
  extractor: tap-postgres
  loader: target-snowflake`,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Testable",
      description: "Make changes with confidence",
      icon: "🧪",
      items: [
        "Safely experiment with new pipelines, connectors, and configuration changes on your local machine",
        "Manually verify the impact of any changes in isolated feature-branch and staging environments",
        "Automatically test your pipelines in CI, and only deploy to production once everything is green"
      ],
      code: `$ git clone https://github.com/my-org/my-sharkwave-project.git
$ git checkout -b update-postgres

$ sharkwave config tap-postgres set host new-host.example
$ sharkwave select tap-postgres new-table "*"
$ sharkwave run tap-postgres target-snowflake

$ git commit -am "Update postgres host and table"
$ git push origin
$ gh pr create`,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Programmable",
      description: "Integrate deeply with your product",
      icon: "💻",
      items: [
        "Let your users directly connect data sources and manage pipelines from your application code",
        "Define pipeline templates and dynamically instantiate them based on API credentials in your database",
        "Configure connectors at runtime using environment variables or a dynamically generated config file"
      ],
      code: `plugins:
  extractors:
  - name: tap-shopify
  - name: tap-postgres--shopify-configs
    inherit_from: tap-postgres
    select: 
      - shopify_configs.*
  loaders:
  - name: target-snowflake
schedules:
- name: sync-all-shopify
  interval: @hourly
  config_source:
    tap-shopify: tap-postgres--shopify-configs
  extractor: tap-shopify
  loader: target-snowflake`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
    }
  ];

  return (
    <section className="py-10 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-header-accent/10 text-header-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>✨</span>
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-header-text mb-6 leading-tight">
            One Tool for All Your
            <br />
            <span className="text-header-primary italic font-normal">Data Movement</span> Needs
          </h2>
          <p className="text-base md:text-lg text-header-text-light max-w-2xl mx-auto font-light">
            No more point-and-click-and-cross-your-fingers.
            <br />
            Build data pipelines that fit exactly to your needs
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-header-primary/10 to-header-accent/10 rounded-xl flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-header-primary mb-1">FEATURE {String(index + 1).padStart(2, '0')}</div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-header-text">{feature.title}</h3>
                  </div>
                </div>
                <p className="text-base md:text-lg text-header-text-light mb-6 font-light">{feature.description}</p>
                <ul className="space-y-4 mb-6">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-5 h-5 bg-header-accent/10 rounded-lg flex items-center justify-center mt-0.5 group-hover/item:bg-header-accent/20 transition-colors">
                        <svg className="w-3.5 h-3.5 text-header-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-base md:text-lg text-header-text leading-relaxed flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
                {feature.links && (
                  <div className="flex flex-wrap gap-4">
                    {feature.links.map((link, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="inline-flex items-center gap-2 text-base text-header-primary hover:text-header-primary-dark font-medium group/link"
                      >
                        {link}
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
                {!feature.links && (
                  <a href="/documentation" className="inline-flex items-center gap-2 text-base text-header-primary hover:text-header-primary-dark font-medium group/link">
                    Learn more
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Code Block or Image */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                {feature.image ? (
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-header-primary-dark/80 via-header-primary/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-black/95 backdrop-blur-sm rounded-xl p-5 border border-gray-800">
                        <div className="text-xs font-semibold text-header-accent mb-2 uppercase tracking-wide">Code Example</div>
                        <pre className="text-gray-100 text-xs md:text-sm overflow-x-auto leading-relaxed font-mono">
                          <code>{feature.code}</code>
              </pre>
            </div>
          </div>
                  </div>
                ) : (
                  <div className="relative bg-black rounded-2xl p-6 shadow-2xl border border-gray-800 group hover:shadow-3xl transition-all duration-300">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="relative">
                      <div className="text-xs font-semibold text-header-accent mb-3 uppercase tracking-wide">Terminal</div>
                      <pre className="text-gray-100 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                        <code>{feature.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

