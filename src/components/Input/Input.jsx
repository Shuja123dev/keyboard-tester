import React from "react";
import './Input.css';
const Input = ({ maxLength, onInputClick, max, label, checked, onClick, icon, placeholder, type, onChange, name, day, disabled, className = "" }) => {
    return (
        <>
            <div className={`${className} input-container 
           ${className === "big-sized" ? "big-sized" : ""} `}>
                {label && <label className="input_label">{label}</label>}
                <div className="input-border">
                    <input className="input"
                        placeholder={placeholder}
                        maxLength={maxLength}
                        type={type}
                        max={max}
                        onChange={onChange}
                        name={name}
                        disabled={disabled}
                        checked={checked}
                        onClick={onInputClick}
                    />
                    {icon && <img className="input-icon" onClick={onClick} src={icon}></img>}
                </div>
                <div className="day_container">{day}</div>
            </div>
        </>
    )
}
export default Input
