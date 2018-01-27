class AppointmentForm extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h2>Make a new appointment</h2>
                <form>
                    <input name='title' placeholder="Appointment Title"/>
                    <input name="appt_time" placeholder="Appointment Time"/>
                    <input type="submit" value="Make Appointment"/>
                </form>
            </div>
        );
    }
}