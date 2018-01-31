class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setApptTime = this.setApptTime.bind(this);
    }

    handleChange(e){
        var name = e.target.name;
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
        var obj = {};
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
                <form onSubmit={this.handleSubmit}>
                    <input name='title' placeholder="Appointment Title"
                           value={this.props.title}
                           onChange={this.handleChange}
                    />
                    <Datetime input={false} open={true} inputProps={inputProps}
                              value={this.props.appt_time}
                              onChange ={this.setApptTime}/>
                    <input type="submit" value="Make Appointment" className="submit-button"/>
                </form>
            </div>
        );
    }
}