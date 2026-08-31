import { useState } from "react";

import {
  User,
  Bell,
  Video,
  Palette,
  Shield,
  Lock,
  ChevronRight,
  Save,
} from "lucide-react";

import "./Settings.css";

const settingsMenu = [
  {
    id: "account",
    label: "Account",
    icon: User,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "meetings",
    label: "Meetings",
    icon: Video,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Palette,
  },
  {
    id: "privacy",
    label: "Privacy",
    icon: Shield,
  },
  {
    id: "security",
    label: "Security",
    icon: Lock,
  },
];

function Toggle({ enabled, onChange }) {
  return (
    <button
      type="button"
      className={`settings-toggle ${
        enabled ? "enabled" : ""
      }`}
      onClick={onChange}
      aria-label="Toggle setting"
    >
      <span />
    </button>
  );
}

function Settings() {
  const [activeSection, setActiveSection] =
    useState("account");

  const [meetingReminders, setMeetingReminders] =
    useState(true);

  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [sound, setSound] =
    useState(true);

  const [autoJoin, setAutoJoin] =
    useState(false);

  const [profileName, setProfileName] =
    useState("Your Name");

  const [email, setEmail] =
    useState("your@email.com");

  const renderAccount = () => (
    <>
      <div className="settings-section-header">
        <h2>Account</h2>

        <p>
          Manage your profile information and account details.
        </p>
      </div>

      <div className="settings-form">

        <div className="profile-preview">

          <div className="profile-avatar">
            YN
          </div>

          <div>
            <strong>{profileName}</strong>

            <span>{email}</span>
          </div>

          <button className="change-photo">
            Change photo
          </button>

        </div>


        <div className="settings-field">

          <label>
            Name
          </label>

          <input
            type="text"
            value={profileName}
            onChange={(e) =>
              setProfileName(e.target.value)
            }
          />

        </div>


        <div className="settings-field">

          <label>
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>


        <div className="settings-save-row">

          <button className="save-button">
            <Save size={17} />
            Save changes
          </button>

        </div>

      </div>
    </>
  );


  const renderNotifications = () => (
    <>
      <div className="settings-section-header">
        <h2>Notifications</h2>

        <p>
          Choose how you want to receive notifications.
        </p>
      </div>

      <div className="settings-options">

        <div className="settings-option">

          <div>
            <strong>
              Meeting reminders
            </strong>

            <span>
              Notify me before scheduled meetings.
            </span>
          </div>

          <Toggle
            enabled={meetingReminders}
            onChange={() =>
              setMeetingReminders(
                !meetingReminders
              )
            }
          />

        </div>


        <div className="settings-option">

          <div>
            <strong>
              Email notifications
            </strong>

            <span>
              Receive important updates by email.
            </span>
          </div>

          <Toggle
            enabled={emailNotifications}
            onChange={() =>
              setEmailNotifications(
                !emailNotifications
              )
            }
          />

        </div>


        <div className="settings-option">

          <div>
            <strong>
              Notification sound
            </strong>

            <span>
              Play a sound when you receive a notification.
            </span>
          </div>

          <Toggle
            enabled={sound}
            onChange={() =>
              setSound(!sound)
            }
          />

        </div>

      </div>
    </>
  );


  const renderMeetings = () => (
    <>
      <div className="settings-section-header">
        <h2>Meetings</h2>

        <p>
          Configure your default meeting preferences.
        </p>
      </div>

      <div className="settings-options">

        <div className="settings-option">

          <div>
            <strong>
              Auto join
            </strong>

            <span>
              Automatically join when starting a meeting.
            </span>
          </div>

          <Toggle
            enabled={autoJoin}
            onChange={() =>
              setAutoJoin(!autoJoin)
            }
          />

        </div>


        <div className="settings-option clickable">

          <div>
            <strong>
              Camera settings
            </strong>

            <span>
              Choose your default camera.
            </span>
          </div>

          <ChevronRight size={19} />

        </div>


        <div className="settings-option clickable">

          <div>
            <strong>
              Microphone settings
            </strong>

            <span>
              Choose your default microphone.
            </span>
          </div>

          <ChevronRight size={19} />

        </div>

      </div>
    </>
  );


  const renderAppearance = () => (
    <>
      <div className="settings-section-header">
        <h2>Appearance</h2>

        <p>
          Customize how the application looks.
        </p>
      </div>

      <div className="appearance-options">

        <button className="theme-option active">

          <div className="theme-preview light-preview">
            <div />
          </div>

          <strong>
            Light
          </strong>

          <span>
            Clean and bright
          </span>

        </button>


        <button className="theme-option">

          <div className="theme-preview dark-preview">
            <div />
          </div>

          <strong>
            Dark
          </strong>

          <span>
            Easy on the eyes
          </span>

        </button>


        <button className="theme-option">

          <div className="theme-preview system-preview">
            <div />
          </div>

          <strong>
            System
          </strong>

          <span>
            Follow device setting
          </span>

        </button>

      </div>
    </>
  );


  const renderPrivacy = () => (
    <>
      <div className="settings-section-header">
        <h2>Privacy</h2>

        <p>
          Control your privacy and meeting visibility.
        </p>
      </div>

      <div className="settings-options">

        <div className="settings-option">

          <div>
            <strong>
              Meeting history
            </strong>

            <span>
              Keep a history of your recent meetings.
            </span>
          </div>

          <Toggle
            enabled={true}
            onChange={() => {}}
          />

        </div>


        <div className="settings-option">

          <div>
            <strong>
              Activity visibility
            </strong>

            <span>
              Allow others to see your activity.
            </span>
          </div>

          <Toggle
            enabled={false}
            onChange={() => {}}
          />

        </div>

      </div>
    </>
  );


  const renderSecurity = () => (
    <>
      <div className="settings-section-header">
        <h2>Security</h2>

        <p>
          Manage your account security.
        </p>
      </div>

      <div className="settings-options">

        <div className="settings-option clickable">

          <div>
            <strong>
              Password
            </strong>

            <span>
              Change your account password.
            </span>
          </div>

          <ChevronRight size={19} />

        </div>


        <div className="settings-option clickable">

          <div>
            <strong>
              Two-step verification
            </strong>

            <span>
              Add another layer of security.
            </span>
          </div>

          <ChevronRight size={19} />

        </div>

      </div>
    </>
  );


  const renderContent = () => {
    switch (activeSection) {
      case "notifications":
        return renderNotifications();

      case "meetings":
        return renderMeetings();

      case "appearance":
        return renderAppearance();

      case "privacy":
        return renderPrivacy();

      case "security":
        return renderSecurity();

      default:
        return renderAccount();
    }
  };


  return (
    <div className="settings-page">

      {/* =================================
          HEADER
      ================================= */}

      <div className="settings-page-header">

        <h1>
          Settings
        </h1>

        <p>
          Manage your account and application preferences.
        </p>

      </div>


      {/* =================================
          SETTINGS LAYOUT
      ================================= */}

      <div className="settings-layout">


        {/* Sidebar */}

        <aside className="settings-menu">

          {settingsMenu.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={
                  activeSection === item.id
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveSection(item.id)
                }
              >

                <Icon size={19} />

                <span>
                  {item.label}
                </span>

              </button>
            );
          })}

        </aside>


        {/* Content */}

        <main className="settings-content">

          {renderContent()}

        </main>

      </div>

    </div>
  );
}

export default Settings;