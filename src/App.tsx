import * as React from 'react';
import './style.css';
import Grid from './grid';
import dataList from './data.json';
import TodayLimitForm from './TodayLimitForm';

function control(today: Date, limit: number) {

  let wrongRows: number[] = [];

  // get all rows
  const rows = document.querySelectorAll("table tbody tr");

  rows.forEach((row, index) => {
    const cells = row.querySelectorAll("td");
    const mailReceivedDateStr = cells[1].textContent || "";
    const solutionSentDateStr = cells[2].textContent || "";

    const mailReceivedDate = new Date(mailReceivedDateStr);
    const solutionSentDate = solutionSentDateStr === null || solutionSentDateStr === ""
      ? today
      : new Date(solutionSentDateStr);
    console.log(mailReceivedDateStr, solutionSentDateStr);

    // calculate date difference
    const diff = diffInDays(mailReceivedDate, solutionSentDate);
    console.log(diff);
    const shouldBeRed = diff > limit;
    console.log("shouldBeRed:", shouldBeRed);

    // read actual background color
    const actualBgColor = (row as HTMLElement).classList.contains("red-background") ? "red" : "not-red";

    const isRed = actualBgColor === "red";
    console.log("isRed:", isRed);

    if (shouldBeRed !== isRed) {

      wrongRows.push(index + 1);
    }
  });

  // returning both is redundant but kept count as it is specified in the description
  return { wrongCount: wrongRows.length, wrongRows };

}

// helper function to calculate difference of dates in days
function diffInDays(d1: Date, d2: Date): number {
  const msInDay = 1000 * 60 * 60 * 24;
  return Math.floor((d2.getTime() - d1.getTime()) / msInDay);
}

export default function App() {

  let sourceProp = dataList;
  const [wrongCount, setWrongCount] = React.useState<number | null>(null);
  const [wrongRows, setWrongRows] = React.useState<number[]>([]);

  const handleControl = (today: Date, limit: number) => {
    const { wrongCount, wrongRows } = control(today, limit);
    setWrongCount(wrongCount);
    setWrongRows(wrongRows);
  };

  return (
    <div>
      <h1>Dgpays Case Study</h1>
      <TodayLimitForm onSubmit={handleControl} />
      <Grid source={sourceProp} />
      {wrongCount !== null && (
        <p style={{ marginTop: "1rem" }}>
          Wrongly colored rows: <strong>{wrongCount}</strong> <br />
          {wrongRows.length > 0 ? wrongRows.join(", ") : "None"}
        </p>
      )}
    </div>

  );
}
