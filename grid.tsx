import React from 'react';

interface Candidate {
    name: string;
    mailReceivedDate: string;
    solutionSentDate?: string; // optional
    isBackgroundColorRed?: boolean; // optional
}
interface GridProps {
    source: Candidate[];
}
