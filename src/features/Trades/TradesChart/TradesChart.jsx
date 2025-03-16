import { useQuery } from "@tanstack/react-query";
import React from "react";

const TradesChart = () => {
  const  { data: tradesData } = useQuery({
    queryKey: ["Trades"],
    queryFn: GetTradesApi,
  })

  const prices = tradesData.map(item => item.price)
  const timestamps = tradesData.map(item => new Date(item.time).)
  
  return (
    <div>

    </div>
  )
};

export default TradesChart;
