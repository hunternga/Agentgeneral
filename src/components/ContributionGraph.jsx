import { useMemo } from "react";
import "./ContributionGraph.css";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const WEEKDAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

function ContributionGraph() {
  const weeks = useMemo(() => {
    const result = [];

    // Last 365 days
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Start from Sunday
    const start = new Date(today);
    start.setDate(start.getDate() - 364);
    start.setDate(start.getDate() - start.getDay());

    for (let week = 0; week < 53; week++) {
      const currentWeek = [];

      for (let day = 0; day < 7; day++) {
        const date = new Date(start);

        date.setDate(
          start.getDate() +
          week * 7 +
          day
        );

        if (date > today) {
          currentWeek.push(null);
          continue;
        }

        // Demo contribution data
        const random = Math.random();

        let count = 0;

        if (random > 0.72) {
          count = Math.floor(Math.random() * 4) + 1;
        }

        if (random > 0.90) {
          count = Math.floor(Math.random() * 8) + 5;
        }

        currentWeek.push({
          date,
          count,
        });
      }

      result.push(currentWeek);
    }

    return result;
  }, []);

  const totalContributions = useMemo(() => {
    return weeks
      .flat()
      .filter(Boolean)
      .reduce(
        (total, item) => total + item.count,
        0
      );
  }, [weeks]);

  const getLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 4) return 2;
    if (count <= 7) return 3;
    return 4;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="contribution-card">

      {/* Header */}

      <div className="contribution-header">

        <div>
          <h2>
            {totalContributions} contributions
          </h2>

          <p>
            in the last year
          </p>
        </div>

      </div>


      {/* Graph */}

      <div className="contribution-container">

        {/* Month labels */}

        <div className="contribution-months">

          {MONTHS.map((month) => (
            <span key={month}>
              {month}
            </span>
          ))}

        </div>


        <div className="contribution-body">

          {/* Weekday labels */}

          <div className="weekday-labels">

            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>

          </div>


          {/* Grid */}

          <div className="contribution-grid">

            {weeks.map((week, weekIndex) => (

              <div
                className="contribution-week"
                key={weekIndex}
              >

                {week.map((item, dayIndex) => {

                  if (!item) {
                    return (
                      <div
                        key={dayIndex}
                        className="contribution-cell empty"
                      />
                    );
                  }

                  const level = getLevel(
                    item.count
                  );

                  return (
                    <div
                      key={dayIndex}
                      className={`contribution-cell level-${level}`}
                      title={`${item.count} contributions on ${formatDate(item.date)}`}
                    />
                  );
                })}

              </div>

            ))}

          </div>

        </div>


        {/* Footer */}

        <div className="contribution-footer">

          <span>
            Learn how we count contributions
          </span>

          <div className="contribution-legend">

            <span>Less</span>

            <i className="level-0"></i>
            <i className="level-1"></i>
            <i className="level-2"></i>
            <i className="level-3"></i>
            <i className="level-4"></i>

            <span>More</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContributionGraph;