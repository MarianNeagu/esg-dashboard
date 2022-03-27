import React, { Component } from 'react';
import styled from 'styled-components';
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart"
import esg_data from "../Data/esg_data"




// function dataExtract (esgData, companyName) {
//   for(i=0; i < esgData)
// }


export default function CustomLineChart({company}) {
   
  const extractEnvironmentScore = (jsonData, companyName) => {
    let dataExtract = []
  
    for(let i = 0; i < jsonData.Industries.length; i++)
    {
      
      for(let j = 0; j < jsonData.Industries[i].companies.length; j++) // pentru fiecare industrie
        for(let k = jsonData.Industries[i].companies[j].data.length - 1; k >= 0; k--)
          if(jsonData.Industries[i].companies[j].name === companyName)
            {
              dataExtract.push(jsonData.Industries[i].companies[j].data[k].environment_score);
              
            }
    }
    // console.log(dataExtract);
    return dataExtract;
    
  };
  const extractSocialScore = (jsonData, companyName) => {
    let dataExtract = []
  
    for(let i = 0; i < jsonData.Industries.length; i++)
    {
      
      for(let j = 0; j < jsonData.Industries[i].companies.length; j++) // pentru fiecare industrie
        for(let k = jsonData.Industries[i].companies[j].data.length - 1; k >= 0; k--)
          if(jsonData.Industries[i].companies[j].name === companyName)
            dataExtract.push(jsonData.Industries[i].companies[j].data[k].social_score);
  
    }
    return dataExtract;
  };
  const extractGovernanceScore = (jsonData, companyName) => {
    let dataExtract = []
  
    for(let i = 0; i < jsonData.Industries.length; i++)
    {
      
      for(let j = 0; j < jsonData.Industries[i].companies.length; j++) // pentru fiecare industrie
        for(let k = jsonData.Industries[i].companies[j].data.length - 1; k >= 0; k--)
          if(jsonData.Industries[i].companies[j].name === companyName)
            dataExtract.push(jsonData.Industries[i].companies[j].data[k].governance_score);
  
    }
    return dataExtract;
  };

    // console.log(dataExtract(esg_data, "BMW"));
    return (
      
      <>
      <DefaultLineChart
        icon={{ color: "info", component: "leaderboard" }}
        title="History of ESG"
        description="Insights are done quarterly"
        chart={{
          labels: ["Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019", "Q1 2020", "Q2 2020", "Q3 2020", "Q4 2020", "Q1 2021","Q2 2021","Q3 2021","Q4 2021"],
          datasets: [
            {
              label: "Environment",
              color: "info",
              data: extractEnvironmentScore(esg_data, company),
            },
            {
              label: "Social",
              color: "primary",
              data: extractSocialScore(esg_data,company),
            },
            {
              label: "Governance",
              color: "dark",
              data: extractGovernanceScore(esg_data,company),
            },
          ],
        }}
        />
        
      </>
    );
}

