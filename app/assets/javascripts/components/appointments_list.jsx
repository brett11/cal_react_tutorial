class AppointmentsList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                {this.props.appointments.map(appointment => {
                    return (
                        <Appointment appointment={appointment} key={appointment.id}/>
                    );})}
            </div>
        );
    }
}
