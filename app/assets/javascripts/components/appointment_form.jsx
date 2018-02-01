class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(e){
        const name = e.target.name;
        obj = {};
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit();
    }

    setApptTime(e){
        const attr_name = 'appt_time';
        const obj = {};
        //converts obj[appt_time] to date since only one = sign; if function serving as null check
        if (obj[attr_name] = e.toDate()) {
            this.props.onUserInput(obj);
        }
    }

    render() {
        const inputProps = {
            name: 'appt_time'
        };

        return (
            <div>
                <h2>Make a new appointment</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input name='title' placeholder="Appointment Title"
                           value={this.props.title}
                           onChange={(e) => this.handleChange(e)}
                    />
                    <Datetime input={false} open={true} inputProps={inputProps}
                              value={this.props.appt_time}
                              onChange ={(e) => this.setApptTime(e)}/>
                    <input type="submit" value="Make Appointment" className="submit-button"/>
                </form>
            </div>
        );
    }
}