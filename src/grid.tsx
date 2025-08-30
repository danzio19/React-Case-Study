import React from 'react';
import './style.css';

interface Candidate {
    name: string;
    mailReceivedDate: string;
    solutionSentDate?: string; // optional
    isBackgroundColorRed?: boolean; // optional
}
interface GridProps {
    source: Candidate[];
}

const Grid: React.FC<GridProps> = ({ source }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="th">Name</th>
                    <th className="th">Mail Received Date</th>
                    <th className="th">Solution Sent Date</th>
                </tr>
            </thead>
        </table >
    );
};

export default Grid;