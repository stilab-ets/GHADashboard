import React from "react";

const AveragePassedTestsTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const dataEntry = payload[0]

        return (
            <div className="bg-white p-2 border border-gray-300 shadow-md rounded">
                <p className="font-bold text-gray-800">{`${dataEntry.payload.workflow_name}`}</p>
                <p className="text-gray-700">{`Passed tests: ${dataEntry.value.toFixed(2)} (${dataEntry.payload.execution_number} Runs)`}</p>
            </div>
        )
    }

    return null
}

export default AveragePassedTestsTooltip
