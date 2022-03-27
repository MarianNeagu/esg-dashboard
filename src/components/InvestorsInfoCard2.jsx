import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import bloombergLogo from "../assets/images/logos/bloomberg.svg"
import refinitivLogo from "../assets/images/logos/refinitiv.svg"
import React from 'react'

export default function InvestorsInfoCard2({viewType}) {
  return (
    <DefaultInfoCard
        icon={<div style = {{color:"black"}}>{viewType.industry === "Automotive" ? "B" : "R"}</div>}
        title={viewType.industry === "Automotive" ? "Bloomberg" : "Refinitiv"}
        value={viewType.industry === "Automotive" ? "The rise in costs for gas will bring to itself a decrease in car parts aquisition by at least 10%. ":"Following the repercursions of the semiconductor crysis, the prcessor production will be declined by 15 per cent. \n E will grow while S will suffer a hit."}
        />
  )
}


