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
            <tbody>
                {source.map((candidate, index) => (
                    <tr key={index} className={candidate.isBackgroundColorRed ? 'red-background' : ''}>
                        <td className="td">{candidate.name}</td>
                        <td className="td">{candidate.mailReceivedDate}</td>
                        <td className="td">{candidate.solutionSentDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Grid;