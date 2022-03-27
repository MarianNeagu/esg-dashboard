import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import React, { Component } from 'react';



export default function CustomBarChart({JsonData, viewType}) {
    const extractScore = (letter,  viewType, JsonData) => {
        let total = -1;
        
        for(let i = 0; i < JsonData.Industries.length; i++)
          for(let j = 0; j < JsonData.Industries[i].companies.length; j++) // pentru fiecare industrie
              if(JsonData.Industries[i].companies[j].name === viewType.company)
              {
                if(letter === "E")
                    total = JsonData.Industries[i].companies[j].data[0].environment_score;
                else if(letter === "S")
                    total = JsonData.Industries[i].companies[j].data[0].social_score;
                else if(letter === "G")
                total = JsonData.Industries[i].companies[j].data[0].governance_score;
              }
        return total;
    }
    

  return (
    <VerticalBarChart
            icon={{ color: "info", component: "leaderboard" }}
            title="Current ESG"
            chart={{
                labels: ["Environment", "Social", "Governance"],
                datasets: [{
                label: "Sales by age",
                color: "info",
                data: [extractScore("E", viewType, JsonData), extractScore("S", viewType, JsonData), extractScore("G", viewType, JsonData)],
                }],
            }}
            />
  )
}


