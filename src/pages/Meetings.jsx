import {
    ShieldCheck,
    Video,
} from "lucide-react";

import Calendar from "../components/Calendar";

function Meetings() {

    return (
        <div className="meetings-page">

            {/* Date header */}

            <Calendar
                onDateChange={(date) => {
                    console.log("Selected date:", date);
                }}
            />


            {/* Safety */}

            <div className="safety-banner">

                <div className="security-icon">
                    <ShieldCheck size={27} />
                </div>

                <div className="security-content">

                    <strong>
                        Your meeting is safe
                    </strong>

                    <span>
                        No one can join a meeting unless invited
                        or admitted by the host
                    </span>

                </div>

                <button className="learn-button">
                    Learn more
                </button>

            </div>


            {/* Empty state */}

            <div className="empty-state">

                <div className="empty-illustration">

                    <div className="pink-shape"></div>

                    <div className="cup">
                        <div className="cup-handle"></div>
                    </div>

                    <div className="pencil"></div>

                    <div className="laptop">

                        <Video size={40} />

                    </div>

                    <div className="yellow-dot"></div>

                </div>


                <h1>
                    No meetings were scheduled on this day
                </h1>

                <p>
                    Your calendar for this day was clear
                </p>


                <button className="empty-new-button">

                    <Video size={21} />

                    <span>
                        New
                    </span>

                </button>

            </div>

        </div>
    );
}

export default Meetings;