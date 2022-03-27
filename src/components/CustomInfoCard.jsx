import React, { Component } from 'react';
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";


const extractScore = (letter, JsonData, viewType) => {
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

// medie q anul asta
// medie q anul trecut
// crestere anul asta fata de anul trecut

const returnProcentual = (letter, JsonData, viewType) => {
    let lastYear = 0;
    let currentYear = 0;

    for(let i = 0; i < JsonData.Industries.length; i++)
      for(let j = 0; j < JsonData.Industries[i].companies.length; j++) // pentru fiecare industrie
          if(JsonData.Industries[i].companies[j].name === viewType.company)
          {
            if(letter === "E")
            {
                lastYear = JsonData.Industries[i].companies[j].data[4].environment_score;
                currentYear = JsonData.Industries[i].companies[j].data[0].environment_score;
                // console.log(lastYear, currentYear);
            }
            else if(letter === "S")
            {
                lastYear = JsonData.Industries[i].companies[j].data[4].social_score;
                currentYear = JsonData.Industries[i].companies[j].data[0].social_score;
                // console.log(lastYear, currentYear);
            }
            else if(letter === "G")
            {
                lastYear = JsonData.Industries[i].companies[j].data[4].governance_score;
                currentYear = JsonData.Industries[i].companies[j].data[0].governance_score;
                // console.log(lastYear, currentYear);
            }
          }
    
    let procent = (currentYear - lastYear) / lastYear * 100;
    return procent;
    // lastYearAverage = ;
}

export default function CustomInfoCard({letter, JsonData, viewType}) {

  return (
            <DefaultInfoCard
                color={letter === "S" ? "error" : letter === "E" ? "info" : "dark"}
                icon={<div>{letter}</div>}
                title={extractScore(letter, JsonData, viewType).toString()}
                description={returnProcentual(letter, JsonData, viewType).toString().substring(0,5) + "% compared to last year"}
                value={letter === "E" ? "Environment" : letter === "S" ? "Social" : "Governance"}
            />
        );
}
