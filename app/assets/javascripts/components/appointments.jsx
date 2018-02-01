class Appointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: this.props.appointments,
            title: 'Team standup meeting',
            appt_time: 'Tomorrow at 9am'
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleUserInput(obj){
       this.setState(obj);
    }

    handleFormSubmit(){
       const appointment = {title: this.state.title, appt_time: this.state.appt_time};
       $.ajax({
            type: "POST",
            url: '/appointments',
            beforeSend: $.rails.CSRFProtection,
            data: {
                appointment: appointment,
            },
            success: function(data){
                this.addNewAppointment(data);
            }.bind(this)
        });
    }

    addNewAppointment(appointmentJSON){
        // this add on approach enforces immutability
        //var appointments = React.addons.update(this.state.appointments, {$push: [appointment]});
        const appointments = this.state.appointments.concat(appointmentJSON);
        this.setState({appointments: appointments.sort((a, b) => {
            return new Date(a.appt_time) - new Date(b.appt_time);
        })});
    }


    render() {
        return (
            <div>
                <AppointmentForm title={this.state.title}
                                 appt_time={this.state.appt_time}
                                 onUserInput={this.handleUserInput}
                                 onFormSubmit={this.handleFormSubmit}
                />
                <AppointmentsList appointments={this.state.appointments} />
            </div>
        );
    }
}