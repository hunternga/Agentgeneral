import { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./Calendar.css";

const DAY_NAMES = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];

function startOfWeek(date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  result.setDate(result.getDate() - result.getDay());
  return result;
}

function addDays(date, amount) {
  const result = new Date(date);
  result.setDate(result.getDate() + amount);
  return result;
}

function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function Calendar({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = useMemo(() => new Date(), []);

  const weekStart = useMemo(
    () => startOfWeek(selectedDate),
    [selectedDate]
  );

  const dates = useMemo(() => {
    return DAY_NAMES.map((_, index) =>
      addDays(weekStart, index)
    );
  }, [weekStart]);

  const selectedLabel = selectedDate.toLocaleDateString(
    "en-US",
    {
      weekday: "short",
      month: "short",
      day: "numeric",
    }
  );

  const selectDate = (date) => {
    setSelectedDate(date);
    onDateChange?.(date);
  };

  const previousWeek = () => {
    selectDate(addDays(selectedDate, -7));
  };

  const nextWeek = () => {
    selectDate(addDays(selectedDate, 7));
  };

  const goToday = () => {
    selectDate(new Date());
  };

  return (
    <div className="meet-calendar">

      {/* LEFT SIDE */}

      <div className="calendar-current">

        <span className="calendar-current-date">
          {selectedLabel}
        </span>

        <CalendarDays
          className="calendar-icon"
          size={23}
        />

        <button
          type="button"
          className="calendar-today"
          onClick={goToday}
        >
          Today
        </button>

      </div>


      {/* RIGHT SIDE */}

      <div className="calendar-navigation">

        <button
          type="button"
          className="calendar-nav-arrow"
          onClick={previousWeek}
          aria-label="Previous week"
        >
          <ChevronLeft size={23} />
        </button>


        <div className="calendar-dates">

          {dates.map((date, index) => {

            const selected = sameDay(
              date,
              selectedDate
            );

            const isToday = sameDay(
              date,
              today
            );

            return (
              <button
                type="button"
                key={date.toISOString()}
                className={[
                  "calendar-date",
                  selected
                    ? "calendar-date-selected"
                    : "",
                  isToday
                    ? "calendar-date-today"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => selectDate(date)}
              >

                <span className="calendar-day">
                  {DAY_NAMES[index]}
                </span>

                <span className="calendar-number">
                  {date.getDate()}
                </span>

              </button>
            );
          })}

        </div>


        <button
          type="button"
          className="calendar-nav-arrow"
          onClick={nextWeek}
          aria-label="Next week"
        >
          <ChevronRight size={23} />
        </button>

      </div>

    </div>
  );
}

export default Calendar;