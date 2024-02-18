import React, { useState, useEffect } from 'react';

const arrowLeft = `svg`;
const arrowRight = `svg`;

const MonthCalendar = () => {
    const month = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
        "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const currentYear = new Date().getFullYear();
    const currentMonthIndex = new Date().getMonth();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(month[currentMonthIndex]);

    const handleYearChange = (increment: any) => {
        setSelectedYear(prevYear => prevYear + increment);
    };

    const handleMonthChange = (increment: any) => {
        const currentIndex = month.indexOf(selectedMonth);
        const newIndex = (currentIndex + increment + month.length) % month.length;
        setSelectedMonth(month[newIndex]);
    };

    const handleConfirm = () => {
        const monthIndex = month.indexOf(selectedMonth);
        const dtStart = new Date(selectedYear, monthIndex, 1).toISOString().split('T')[0];
        const dtEnd = new Date(selectedYear, monthIndex + 1, 0).toISOString().split('T')[0];
        console.log({ dtStart, dtEnd });
    };

    return (
        <div id="all">
            <div id="year">
                <button id="yearArrowLeft" className='arrowLeft' onClick={() => handleYearChange(-1)}>{arrowLeft}</button>
                <select id="currentYear" value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                    <option value={currentYear - 3}>{currentYear - 3}</option>
                    <option value={currentYear - 2}>{currentYear - 2}</option>
                    <option value={currentYear - 1}>{currentYear - 1}</option>
                    <option value={currentYear}>{currentYear}</option>
                    <option value={currentYear + 1}>{currentYear + 1}</option>
                    <option value={currentYear + 2}>{currentYear + 2}</option>
                    <option value={currentYear + 3}>{currentYear + 3}</option>
                </select>
                <button id="yearArrowRight" className='arrowRight' onClick={() => handleYearChange(1)}>{arrowRight}</button>
            </div>
            <div id="month">
                <button id="monthArrowLeft" className='arrowLeft' onClick={() => handleMonthChange(-1)}>{arrowLeft}</button>
                <select id="currentMonth" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                    {month.map((m, index) => (<option key={index} value={m}>{m}</option>))}
                </select>
                <button id="monthArrowRight" className='arrowRight' onClick={() => handleMonthChange(1)}>{arrowRight}</button>
            </div>
            <button id="confirm" onClick={handleConfirm}>Confirmar</button>
        </div>
    );
};

export default MonthCalendar;
