import React from 'react'
import { Tooltip, XAxis, YAxis, Legend, CartesianGrid, Bar, BarChart } from "recharts"
const ChartBar = () => {
    const data = [
        { name: "Jan", value: "20" },
        { name: "Feb", value: "30" },
        { name: "March", value: "40" },
        { name: "April", value: "50" },
        { name: "May", value: "60" },
        { name: "June", value: "70" },
        { name: "July", value: "80" },
        { name: "Aug", value: "90" },
        { name: "Sep", value: "100" },
        { name: "Oct", value: "110" },
        { name: "Nov", value: "120" },
        { name: "Dec", value: "130" },
    ]
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h6>Appointment overview</h6>
                <p>24.5 M</p>
            </div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </div>
    )
}

export default ChartBar