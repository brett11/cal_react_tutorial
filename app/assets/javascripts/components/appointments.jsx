class Appointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: this.props.appointments,
            title: 'Team standup meeting',
            appt_time: 'Tomorrow at 9am'
        }
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(obj){
       this.setState(obj);
    }


    render() {
        return (
            <div>
                <AppointmentForm input_title={this.state.title}
                                 input_appt_time={this.state.appt_time}
                                 onUserInput={this.handleUserInput}
                />
                <AppointmentsList appointments={this.state.appointments} />
            </div>
        );
    }
}