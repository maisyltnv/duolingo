import { Check, Crown, Star } from 'lucide-react';
import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import "react-circular-progressbar/dist/styles.css";


type Props = {
    id: number;
    index: number;
    totalCount: number;
    locked?: boolean;
    current?: boolean;
    percentage: number
}
const LessonButton = ({ id, index, totalCount, locked, current, percentage }: Props) => {
    const cycleLength = 8;
    const cycleIndex = index % cycleLength;

    let indentationLevel;
    if (cycleIndex <= 2) {
        indentationLevel = cycleIndex;
    } else if (cycleIndex <= 4) {
        indentationLevel = 4 - cycleIndex;
    } else if (cycleIndex <= 6) {
        indentationLevel = 6 - cycleIndex;
    } else {
        indentationLevel = 8 - cycleIndex;
    }

    const rightPosition = indentationLevel * 40;

    const isFirst = index === 0;
    const isLast = index === totalCount;
    const isCompleted = !current && !locked;

    const Icon = isCompleted ? Check : isFirst ? Crown : Star;

    const href = isCompleted ? `/lesson/${id}` : `/lesson`;

    return (
        <div>
            {id}
        </div>
    )
}

export default LessonButton