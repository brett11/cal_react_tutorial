class Appointments extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <AppointmentForm />
                <AppointmentsList appointments={this.props.appointments} />
            </div>
        );
    }
}