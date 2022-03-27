import React from 'react'
import ProfilesList from "examples/Lists/ProfilesList";



export default function InvestorInfoCard({viewType}) {


    return (
        <ProfilesList
        title="Aggregators"
        profiles={[
            {
            name: viewType.industry === "Automotive" ? "Bloomberg" : "Refinitiv" ,
            description: viewType.industry === "Automotive" ? "Din cauza scumpirii petrolului, se vor fabrica cu 10% mai putine cauciucuri." : "Din cauza crizei de chip-uri, se vor fabrica cu 15% mai putine procesoare",
            action: {
                
            },
            },
        
    ]}
    />
    )
    
        
    // else 
}
