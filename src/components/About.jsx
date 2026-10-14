import React from 'react';

export default function About() {
  return (
    <section id="about" className="section light-block about-editorial-section" data-theme="light">
      <div className="content-wrapper">
        
        {/* Section Metadata */}
        <div className="section-meta-row scroll-reveal">
          <span className="section-num">01</span>
          <span className="section-tag">WHO I AM • PHILOSOPHY</span>
        </div>

        {/* Large Editorial Statement */}
        <h2 className="section-headline scroll-reveal">
          TURNING TECHNICAL RIGOR INTO RELIABLE SOFTWARE.
        </h2>

        {/* Two-Column Editorial Narrative */}
        <div className="about-editorial-grid">
          <div className="about-col-left scroll-reveal">
            <p className="about-lead-paragraph">
              I'm <strong>Gnaneshwaran</strong>, an undergraduate Computer Science and Engineering student specializing in <strong>Artificial Intelligence and Machine Learning</strong> at <em>VELS Institute of Science, Technology & Advanced Studies (VISTAS)</em>, graduating in 2028.
            </p>
            <p className="about-body-paragraph">
              My engineering focus centers on building reliable applications that connect solid backend architectures with practical machine learning. Rather than treating AI as a black box, I develop end-to-end pipelines: from data extraction and semantic chunking to vector similarity ranking and responsive frontend interfaces.
            </p>
            <p className="about-body-paragraph">
              I debug methodically, communicate clearly, and write maintainable code using Java, Spring Boot, Python, FastAPI, and React.
            </p>

            <div className="about-pull-quote">
              <p>“Understand how applications function from the database row to the rendered pixel — then optimize for stability and clarity.”</p>
            </div>
          </div>

          <div className="about-col-right scroll-reveal">
            <div className="editorial-card-principles">
              <h3 className="principles-title">HOW I APPROACH PROBLEMS</h3>

              <div className="principle-item">
                <span className="principle-index">01</span>
                <div className="principle-text">
                  <h4>Methodical Architecture</h4>
                  <p>Design typed models, predictable REST APIs, and structured services before writing implementation details.</p>
                </div>
              </div>

              <div className="principle-item">
                <span className="principle-index">02</span>
                <div className="principle-text">
                  <h4>Grounded Applied AI</h4>
                  <p>Combine high-dimensional embeddings and statistical cosine similarity with verified domain data to prevent hallucination.</p>
                </div>
              </div>

              <div className="principle-item">
                <span className="principle-index">03</span>
                <div className="principle-text">
                  <h4>Rigorous Verification</h4>
                  <p>Validate endpoints with Postman, verify model inference times, and maintain clean Git collaboration standards.</p>
                </div>
              </div>

              <div className="education-stat-pill">
                <span className="stat-pill-label">ACADEMIC RECORD</span>
                <span className="stat-pill-value">B.Tech CSE (AI & ML) • CGPA 7.5</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
