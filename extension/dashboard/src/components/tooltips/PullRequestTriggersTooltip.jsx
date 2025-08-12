import {formatNumber} from "../../utils/formatNumber";

const PullRequestTriggersTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const sortedPayload = [...payload].sort((a, b) => b.value - a.value);

        return (
            <div className="bg-white p-2 border border-gray-300 shadow-md rounded">
                <p className="font-bold text-gray-800">{`Month: ${label}`}</p>
                {sortedPayload.map((entry, index) => (
                    <p
                        key={`item-${index}`}
                        className="text-gray-700"
                        style={{ color: entry.stroke }}
                    >
                        {`${entry.name}: ${formatNumber(entry.value)} PRs`}
                    </p>
                ))}
            </div>
        );
    }

    return null;
};

export default PullRequestTriggersTooltip;