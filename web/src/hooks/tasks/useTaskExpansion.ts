'use client';

import { useState } from "react";

export const useTaskExpansion = (
    initialDepth: number, 
    defaultExpanded = true
) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    const toggleExpand = () => setIsExpanded(!isExpanded);
    return { isExpanded, toggleExpand };
}

