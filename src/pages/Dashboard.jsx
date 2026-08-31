import {
  CalendarDays,
  Video,
  Phone,
  Users,
  Plus,
  ArrowUpRight,
  Clock3,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";

import "./Dashboard.css";
import ContributionGraph from "../components/ContributionGraph";

const meetings = [
  {
    time: "10:00 AM",
    title: "Team Standup",
    people: "8 participants",
  },
  {
    time: "11:30 AM",
    title: "Client Discussion",
    people: "4 participants",
  },
  {
    time: "03:00 PM",
    title: "Project Review",
    people: "6 participants",
  },
];

const activities = [
  "Meeting with Design Team",
  "Client call completed",
  "Project review scheduled",
];

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* =================================
          PAGE HEADER
      ================================= */}

      <div className="dashboard-header">

        <div>
          <h1>Good morning 👋</h1>

          <p>
            Here's what's happening with your meetings today.
          </p>
        </div>

        <button className="dashboard-new-button">
          <Plus size={20} />
          <span>New</span>
        </button>

      </div>


      <ContributionGraph />

      {/* =================================
          DASHBOARD GRID
      ================================= */}

      <div className="dashboard-grid">


        {/* =================================
            CARD 1
        ================================= */}

        <div className="dashboard-card stat-card">

          <div className="card-top">

            <div className="card-icon blue">
              <CalendarDays size={21} />
            </div>

            <button className="card-more">
              <MoreHorizontal size={20} />
            </button>

          </div>

          <div className="stat-content">

            <span className="stat-label">
              Meetings
            </span>

            <strong className="stat-number">
              24
            </strong>

            <span className="stat-description">
              Total meetings this month
            </span>

          </div>

        </div>


        {/* =================================
            CARD 2
        ================================= */}

        <div className="dashboard-card stat-card">

          <div className="card-top">

            <div className="card-icon green">
              <Video size={21} />
            </div>

            <button className="card-more">
              <MoreHorizontal size={20} />
            </button>

          </div>

          <div className="stat-content">

            <span className="stat-label">
              Meetings Today
            </span>

            <strong className="stat-number">
              06
            </strong>

            <span className="stat-description">
              3 meetings remaining
            </span>

          </div>

        </div>


        {/* =================================
            CARD 3
        ================================= */}

        <div className="dashboard-card stat-card">

          <div className="card-top">

            <div className="card-icon purple">
              <Phone size={21} />
            </div>

            <button className="card-more">
              <MoreHorizontal size={20} />
            </button>

          </div>

          <div className="stat-content">

            <span className="stat-label">
              Calls
            </span>

            <strong className="stat-number">
              12
            </strong>

            <span className="stat-description">
              Calls this week
            </span>

          </div>

        </div>


        {/* =================================
            CARD 4
        ================================= */}

        <div className="dashboard-card stat-card">

          <div className="card-top">

            <div className="card-icon orange">
              <Users size={21} />
            </div>

            <button className="card-more">
              <MoreHorizontal size={20} />
            </button>

          </div>

          <div className="stat-content">

            <span className="stat-label">
              Contacts
            </span>

            <strong className="stat-number">
              48
            </strong>

            <span className="stat-description">
              People in your network
            </span>

          </div>

        </div>


        {/* =================================
            UPCOMING MEETINGS
        ================================= */}

        <div className="dashboard-card upcoming-card">

          <div className="card-heading">

            <div>
              <h2>Upcoming meetings</h2>

              <p>
                Your schedule for today
              </p>
            </div>

            <button className="view-button">
              View all
              <ChevronRight size={17} />
            </button>

          </div>


          <div className="meeting-list">

            {meetings.map((meeting) => (

              <div
                className="meeting-row"
                key={meeting.title}
              >

                <div className="meeting-time">
                  <Clock3 size={16} />
                  <span>{meeting.time}</span>
                </div>

                <div className="meeting-info">

                  <strong>
                    {meeting.title}
                  </strong>

                  <span>
                    {meeting.people}
                  </span>

                </div>

                <button className="meeting-arrow">
                  <ArrowUpRight size={18} />
                </button>

              </div>

            ))}

          </div>

        </div>


        {/* =================================
            QUICK ACTIONS
        ================================= */}

        <div className="dashboard-card quick-card">

          <div className="card-heading">

            <div>
              <h2>Quick actions</h2>

              <p>
                Get started quickly
              </p>
            </div>

          </div>


          <div className="quick-actions">

            <button className="quick-action">

              <div className="quick-icon green">
                <Video size={20} />
              </div>

              <div>
                <strong>
                  New
                </strong>

                <span>
                  Start an instant meeting
                </span>
              </div>

              <ArrowUpRight size={18} />

            </button>


            <button className="quick-action">

              <div className="quick-icon blue">
                <ArrowUpRight size={20} />
              </div>

              <div>
                <strong>
                  Join meeting
                </strong>

                <span>
                  Enter a meeting code
                </span>
              </div>

              <ArrowUpRight size={18} />

            </button>


            <button className="quick-action">

              <div className="quick-icon purple">
                <CalendarDays size={20} />
              </div>

              <div>
                <strong>
                  Schedule
                </strong>

                <span>
                  Plan a future meeting
                </span>
              </div>

              <ArrowUpRight size={18} />

            </button>

          </div>

        </div>


        {/* =================================
            CALENDAR
        ================================= */}

        <div className="dashboard-card calendar-card">

          <div className="card-heading">

            <div>
              <h2>Calendar</h2>

              <p>
                October 2026
              </p>
            </div>

            <button className="view-button">
              Open
              <ChevronRight size={17} />
            </button>

          </div>


          <div className="mini-calendar">

            <div className="mini-calendar-days">

              {[
                "SUN",
                "MON",
                "TUE",
                "WED",
                "THU",
                "FRI",
                "SAT",
              ].map((day) => (
                <span key={day}>
                  {day}
                </span>
              ))}

            </div>


            <div className="mini-calendar-numbers">

              {[
                "",
                "",
                "",
                "",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
              ].map((number, index) => (

                <span
                  key={index}
                  className={
                    number === "17"
                      ? "calendar-today"
                      : ""
                  }
                >
                  {number}
                </span>

              ))}

            </div>

          </div>

        </div>


        {/* =================================
            ACTIVITY
        ================================= */}

        <div className="dashboard-card activity-card">

          <div className="card-heading">

            <div>
              <h2>Recent activity</h2>

              <p>
                Latest updates
              </p>
            </div>

            <button className="card-more">
              <MoreHorizontal size={20} />
            </button>

          </div>


          <div className="activity-list">

            {activities.map((activity, index) => (

              <div
                className="activity-row"
                key={activity}
              >

                <div className="activity-dot"></div>

                <div>
                  <strong>
                    {activity}
                  </strong>

                  <span>
                    {index + 1} hour
                    {index === 0 ? "" : "s"} ago
                  </span>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;