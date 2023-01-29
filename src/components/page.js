import '../styles/page.css'
import { useLocation } from "react-router-dom"
import React from "react"

export default function Page (props) {
    const location = useLocation()

    return (
        <div className="page">
            {React.Children.map(props.children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    language: location.pathname === '/fi' ? 'fi' : 'en'
                })
            }
        })}
        </div>
    )
}