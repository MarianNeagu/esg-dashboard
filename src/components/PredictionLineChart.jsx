import React, { useEffect } from 'react'
import MixedChart from "examples/Charts/MixedChart";

function createDataStructure (JsonData, viewType)
{
    let counter = 1;
    let dataStructure = [];
    for(let i = 0; i < JsonData.Industries.length; i++)
      for(let j = 0; j < JsonData.Industries[i].companies.length; j++) // pentru fiecare industrie
        for(let k = JsonData.Industries[i].companies[j].data.length - 1; k >= 0; k--)
          if(JsonData.Industries[i].companies[j].name === viewType.company)
            {
              dataStructure.push({y: JsonData.Industries[i].companies[j].data[k].environment_score, x: counter});
              counter++;
            }
    dataStructure = dataStructure.reverse();
    console.log(dataStructure);
    return dataStructure;
}

function linearRegression(inputArray, xLabel, yLabel) {
    const x = inputArray.map((element) => element[xLabel]);
    const y = inputArray.map((element) => element[yLabel]);
    const sumX = x.reduce((prev, curr) => prev + curr, 0);
    const avgX = sumX / x.length;
    const xDifferencesToAverage = x.map((value) => avgX - value);
    const xDifferencesToAverageSquared = xDifferencesToAverage.map(
      (value) => value ** 2
    );
    const SSxx = xDifferencesToAverageSquared.reduce(
      (prev, curr) => prev + curr,
      0
    );
    const sumY = y.reduce((prev, curr) => prev + curr, 0);
    const avgY = sumY / y.length;
    const yDifferencesToAverage = y.map((value) => avgY - value);
    const xAndYDifferencesMultiplied = xDifferencesToAverage.map(
      (curr, index) => curr * yDifferencesToAverage[index]
    );
    const SSxy = xAndYDifferencesMultiplied.reduce(
      (prev, curr) => prev + curr,
      0
    );
    const slope = SSxy / SSxx;
    const intercept = avgY - slope * avgX;
    return (x) => intercept + slope * x;
  }
  
  function generatePredicted(JsonData, viewType){
    let arrayPredicted = []
    let predicter = linearRegression(createDataStructure(JsonData, viewType), "x", "y");
    arrayPredicted.push(predicter(12) + 0.5);
    arrayPredicted.push(predicter(13) + 1);
    arrayPredicted.push(predicter(14) + 2);
    arrayPredicted.push(predicter(15) + 0.5);
    return arrayPredicted;
  }

export default function PredictionLineChart({JsonData, viewType}) {


    useEffect(()=>{
        console.log(createDataStructure(JsonData,viewType))
        // let predicter = linearRegression(createDataStructure(JsonData, viewType), "x", "y");
        console.log(generatePredicted(JsonData, viewType));
    },[])


  return (

      
      <>
      <MixedChart
        icon={{ color: "info", component: "leaderboard" }}
        title="Prediction for the next year"
        description="Insights are done quarterly"
        chart={{
            
          labels: ["Q1 2022", "Q2 2022", "Q3 2022", "Q4 2022"],
          datasets: [
            {
              chartType: "gradient-line",
              label: "Environment",
              color: "info",
              data: generatePredicted(JsonData, viewType),
            }
            // {
            //   label: "Social",
            //   color: "primary",
            //   data: extractDataAnalysis_soc(JsonData, viewType.company),
            // },
            // {
            //   label: "Governance",
            //   color: "dark",
            //   data: extractDataAnalysis_gov(JsonData, viewType.company),
            // },
          ],
        }}
        />
        
      </>
  )
}
