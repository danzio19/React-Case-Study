import React, { useState } from "react";

type Props = {
    onSubmit: (today: Date, limit: number) => void;
};

const TodayLimitForm: React.FC<Props> = ({ onSubmit }) => {
    const [todayStr, setTodayStr] = useState<string>("");
    const [limit, setLimit] = useState<number>(5);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const today = todayStr ? new Date(todayStr) : new Date();
        onSubmit(today, limit);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
            <label>
                Today:{" "}
                <input
                    type="date"
                    value={todayStr}
                    onChange={(e) => setTodayStr(e.target.value)}
                />
            </label>
            <label style={{ marginLeft: "1rem" }}>
                Limit:{" "}
                <input
                    type="number"
                    value={limit}
                    onChange={(e) => setLimit(Number(e.target.value))}
                />
            </label>
            <button type="submit" style={{ marginLeft: "1rem" }}>
                Run Control
            </button>
        </form>
    );
};

export default TodayLimitForm;
