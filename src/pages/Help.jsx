import {
  Search,
  Video,
  CalendarDays,
  User,
  Settings,
  ChevronRight,
  MessageCircle,
  BookOpen,
} from "lucide-react";

import { useState } from "react";

import "./Help.css";

const categories = [
  {
    icon: Video,
    title: "Meetings",
    description: "Create, join and manage meetings.",
    className: "blue",
  },
  {
    icon: CalendarDays,
    title: "Calendar",
    description: "Manage your schedule and events.",
    className: "green",
  },
  {
    icon: User,
    title: "Account",
    description: "Manage your profile and login.",
    className: "purple",
  },
  {
    icon: Settings,
    title: "Settings",
    description: "Customize your application.",
    className: "orange",
  },
];

const questions = [
  "How do I create a meeting?",
  "How do I join a meeting?",
  "How do I schedule a meeting?",
  "How do I invite someone to a meeting?",
  "How do I change my profile?",
  "How do I connect my Google account?",
];

function Help() {
  const [search, setSearch] = useState("");

  const filteredQuestions = questions.filter((question) =>
    question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="help-page">

      {/* Header */}

      <div className="help-header">

        <div>
          <h1>Help & Support</h1>

          <p>
            Find answers and learn how to use the application.
          </p>
        </div>

      </div>


      {/* Search */}

      <div className="help-search">

        <Search size={21} />

        <input
          type="text"
          placeholder="Search help articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            onClick={() => setSearch("")}
            className="clear-search"
          >
            Clear
          </button>
        )}

      </div>


      {/* Categories */}

      <section className="help-section">

        <div className="section-title">

          <h2>
            How can we help?
          </h2>

          <p>
            Browse help topics
          </p>

        </div>


        <div className="help-category-grid">

          {categories.map((category) => {

            const Icon = category.icon;

            return (
              <button
                className="help-category"
                key={category.title}
              >

                <div
                  className={`help-category-icon ${category.className}`}
                >
                  <Icon size={22} />
                </div>

                <div className="help-category-content">

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.description}
                  </p>

                </div>

                <ChevronRight
                  className="category-arrow"
                  size={19}
                />

              </button>
            );
          })}

        </div>

      </section>


      {/* Popular Questions */}

      <section className="help-section">

        <div className="section-title">

          <h2>
            Popular questions
          </h2>

          <p>
            Quick answers to common questions
          </p>

        </div>


        <div className="question-list">

          {filteredQuestions.length > 0 ? (

            filteredQuestions.map((question) => (

              <button
                className="question-item"
                key={question}
              >

                <div className="question-left">

                  <BookOpen size={18} />

                  <span>
                    {question}
                  </span>

                </div>

                <ChevronRight size={18} />

              </button>

            ))

          ) : (

            <div className="no-results">
              No help articles found.
            </div>

          )}

        </div>

      </section>


      {/* Support */}

      <section className="support-card">

        <div className="support-icon">
          <MessageCircle size={24} />
        </div>

        <div className="support-content">

          <h2>
            Still need help?
          </h2>

          <p>
            Can't find what you're looking for?
            Our support team is here to help.
          </p>

        </div>

        <button className="support-button">
          Contact support
        </button>

      </section>

    </div>
  );
}

export default Help;