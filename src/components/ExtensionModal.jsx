import {
  X,
  CalendarDays,
  BarChart3,
  FileText,
  MessageCircle,
  Video,
  Cloud,
} from "lucide-react";

import "./ExtensionModal.css";

const extensions = [
  {
    title: "Calendar",
    description: "Manage your schedule",
    icon: CalendarDays,
    className: "blue",
  },
  {
    title: "Analytics",
    description: "View meeting insights",
    icon: BarChart3,
    className: "green",
  },
  {
    title: "Notes",
    description: "Take meeting notes",
    icon: FileText,
    className: "purple",
  },
  {
    title: "Chat",
    description: "Message your team",
    icon: MessageCircle,
    className: "orange",
  },
  {
    title: "Meetings",
    description: "Manage your meetings",
    icon: Video,
    className: "cyan",
  },
  {
    title: "Storage",
    description: "Access your files",
    icon: Cloud,
    className: "pink",
  },
];

function ExtensionModal({ open, onClose }) {

  if (!open) {
    return null;
  }

  return (
    <div
      className="extension-overlay"
      onMouseDown={onClose}
    >

      <div
        className="extension-modal"
        onMouseDown={(e) =>
          e.stopPropagation()
        }
      >

        {/* Header */}

        <div className="extension-header">

          <div>
            <h2>Extensions</h2>

            <p>
              Add tools to your workspace
            </p>
          </div>

          <button
            className="extension-close"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>


        {/* Extensions */}

        <div className="extension-grid">

          {extensions.map((extension) => {

            const Icon = extension.icon;

            return (
              <button
                className="extension-item"
                key={extension.title}
                onClick={() =>
                  console.log(
                    `Open ${extension.title}`
                  )
                }
              >

                <div
                  className={`extension-icon ${extension.className}`}
                >
                  <Icon size={22} />
                </div>

                <div className="extension-info">

                  <strong>
                    {extension.title}
                  </strong>

                  <span>
                    {extension.description}
                  </span>

                </div>

              </button>
            );

          })}

        </div>


        {/* Footer */}

        <button className="view-extensions">
          View all extensions

          <span>›</span>
        </button>

      </div>

    </div>
  );
}

export default ExtensionModal;