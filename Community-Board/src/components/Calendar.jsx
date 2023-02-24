import React from "react";
import Event from './Events.jsx'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <Event color='blue'></Event>
                    <td></td>
                    <Event event='Offense Training' color='yellow'></Event>
                    <Event color='blue'></Event>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">9 am</td>
                    <Event event='B' color='blue'></Event>
                    <td></td>
                    <Event color='yellow' location='Home Field'></Event>
                    <Event event='B' color='blue'></Event>
                    <Event event='Team Tactics' color='purple'></Event>
                    <td></td>
                    <Event event='MATCHDAY' color='orange'></Event>
                </tr>
                <tr>
                    <td className="time">10 am</td>
                    <Event color='blue'></Event>
                    <Event event='Defense Training' color='green'></Event>
                    <Event color='yellow'></Event>
                    <Event color='blue'></Event>
                    <Event color='purple' location='Study Room'></Event>
                    <td></td>
                    <Event event='vs. Catalonia' color='orange' location='Away'></Event>
                </tr>
                <tr>
                    <td className="time">11 am</td>
                    <Event event='R' color='blue'></Event>
                    <Event color='green' location='Home Field'></Event>
                    <td></td>
                    <Event event='R' color='blue'></Event>
                    <Event color='purple'></Event>
                    <Event event='General Warm-Up' color='red'></Event>
                    <Event event='Kickoff at 11am' color='orange'></Event>
                </tr>
                <tr>
                    <td className="time">12 pm</td>
                    <Event color='blue'></Event>
                    <Event color='green'></Event>
                    <td></td>
                    <Event color='blue'></Event>
                    <Event color='purple'></Event>
                    <Event color='red' location='Home Field'></Event>
                    <Event color='orange'></Event>
                </tr>
                <tr>
                    <td className="time">1 pm</td>
                    <Event event='E' color='blue'></Event>
                    <td></td>
                    <td></td>
                    <Event event='E' color='blue'></Event>
                    <td></td>
                    <Event color='red'></Event>
                    <Event color='orange'></Event>
                </tr>
                <tr>
                    <td className="time">2 pm</td>
                    <Event color='blue'></Event>
                    <td></td>
                    <td></td>
                    <Event color='blue'></Event>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3 pm</td>
                    <Event event='A' color='blue'></Event>
                    <Event event='Tape Review' color='pink'></Event>
                    <Event event='Tape Review' color='pink'></Event>
                    <Event event='A' color='blue'></Event>
                    <Event event='Tape Review' color='pink'></Event>
                    <Event event='Tape Review' color='pink'></Event>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">4 pm</td>
                    <Event color='blue'></Event>
                    <Event color='pink' location='Theatre'></Event>
                    <Event color='pink' location='Theatre'></Event>
                    <Event color='blue'></Event>
                    <Event color='pink' location='Theatre'></Event>
                    <Event color='pink' location='Theatre'></Event>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">5 pm</td>
                    <Event event='K' color='blue'></Event>
                    <td></td>
                    <td></td>
                    <Event event='K' color='blue'></Event>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Calendar;