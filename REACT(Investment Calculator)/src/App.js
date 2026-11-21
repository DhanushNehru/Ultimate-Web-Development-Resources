import { useState } from "react";
import Header from "./assets/Components/Header/Header";
import ResultsTable from "./assets/Components/ResultsTable/ResultsTable";
import UserInput from "./assets/Components/UserInput/UserInput";

function App() {
  const [userInput, setUserInput] = useState({});
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    const yearlyData = [];

    if (userInput) {
      let currentSavings = +userInput['current-savings'];
      const yearlyContribution = +userInput['yearly-contribution'];
      const expectedReturn = +userInput['expected-return'] / 100;
      const duration = +userInput['duration'];

      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
    }

    setYearlyData(yearlyData);
  };

  return (
    <div>
      <Header></Header>
      <UserInput onCalculate={calculateHandler}></UserInput>
      {/* Show table when userInput is available and yearlyData has some data */}
      {userInput && yearlyData.length > 0 && (
        <ResultsTable data={yearlyData} initialInvestment={userInput['current-savings']} />
      )}
      {/* Show fallback text if no data is available */}
      {!userInput && <p style={{textAlign:'center'}}>No Investment Calculated Yet</p>}
    </div>
  );
}

export default App;
