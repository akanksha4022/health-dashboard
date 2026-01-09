import React, { useState } from 'react'
//create form and update states then create modal and fake button to see its working or not then join with appointments
const AppointmentForm = () => {
    const [form, setForm] = useState({
            patient:"",
            doctor:"",
            date:"",
            time:""
    })

    const handleChanges = (e)=>{
        const {name, value} = e.target;
        setForm(prev => {
            console.log("PREV STATE:", prev);
            console.log("CHANGED FIELD:", name, "=", value);

            return {
            ...prev,
            [name]: value
            };
        });
    }

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
    <h1 className="text-xl font-semibold text-stone-800 mb-6 text-center">
        Appointment Registration
    </h1>
    <form  className="space-y-4">
        <div>
        <label className="block text-sm font-medium text-stone-600 mb-1">
            Patient Name
        </label>
        <input
            type="text"
            name="patientname"
            value={form.patient}
            placeholder="Enter patient name"
            onChange={handleChanges}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div>
        <label className="block text-sm font-medium text-stone-600 mb-1">
            Assigned Doctor
        </label>
        <input
            type="text"
            name="doctorname"
            value={form.doctor}
            placeholder="Enter doctor name"
            onChange={handleChanges}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block text-sm font-medium text-stone-600 mb-1">
            Date
            </label>
            <input
            type="date"
            name="assigneddate"
            value={form.date}
            onChange={handleChanges}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-stone-600 mb-1">
            Time
            </label>
            <input
            type="time"
            name="assignedtime"
            value={form.time}
            onChange={handleChanges}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
        <button
            type="button"
            className="px-4 py-2 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 transition"
        >
            Cancel
        </button>

        <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
            Submit
        </button>
        </div>

    </form>
</div>

  )
}

export default AppointmentForm
