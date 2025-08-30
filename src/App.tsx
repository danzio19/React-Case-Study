import * as React from 'react';
import './style.css';
import Grid from './grid';
import dataList from './data.json';

function control(today: Date, limit: number) {
  let wrongCount = 0;

  // get all rows
  const rows = document.querySelectorAll("table tbody tr");

  rows.forEach((row) => {
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
      wrongCount++;
    }
  });

  return wrongCount;
}

// helper function to calculate difference of dates in days
function diffInDays(d1: Date, d2: Date): number {
  const msInDay = 1000 * 60 * 60 * 24;
  return Math.floor((d2.getTime() - d1.getTime()) / msInDay);
}

export default function App() {

  let sourceProp = dataList;

  React.useEffect(() => {
    const today = new Date();
    const limit = 5;
    const wrongCount = control(today, limit);
    console.log(`Number of wrong background colors: ${wrongCount}`);
  }, []);

  return (
    <div>
      <h1>Dgpays Case Study </h1>
      <Grid source={sourceProp} />
    </div>
  );
}
