import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigator() {
    return (
        <div>
            <div className="navigator section">
                <Link to="/garb-monitor">
                    Click to Explore: Instantly Analyze and Classify Your Waste with AI
                </Link>
            </div>
        </div>
    )
}
