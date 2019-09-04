import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './FormDialog.css';

export default class FormDialog extends React.Component {
  state = {
    title: '',
    eventDate: '',
    eventTime: '',
    notes: '',
  }

  handleDateChange = (date) => {
    this.setState(prevState => ({
      ...prevState,
      eventDate: date,
    }));
  }

  handleDateChange__time = (date) => {
    this.setState(prevState => ({
      ...prevState,
      eventTime: date,
    }));
  }

  handleSubmit = () => {
    const { handleChangeEvent } = this.props;
    const { mapOnInfo } = this.state;
    console.log(mapOnInfo)
    handleChangeEvent(this.state);
    this.setState({
      eventDate: '',
      eventTime: '',
      notes: '',
      title: '',
    })
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      notes: value,
    }));
  }

  handleChange__title = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      title: value,
    }));
  }

  handleFullWidthChange = (event) => {
    this.setState({
      mapOnInfo: {
        setFullWidth: event.target.checked,
      },
    })
  }

  render() {
    const { handleClose, setOpen, handleChangeEvent, fullWidth, color, handleDelete } = this.props;

    return (
      <div>
        <Dialog 
          handleChangeEvent={handleChangeEvent}
          open={setOpen} 
          onClose={handleClose} 
          fullWidth={fullWidth}
          color={color}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogContent>
            <button className="dialog__button" type='button' onClick={handleClose}>x</button>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="event name"
              onChange={this.handleChange__title}
              value={this.state.title}
              name="title"
              type="text"
              fullWidth
            />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          name="eventDate"
          id="date-picker-inline"
          label="event date"
          value={this.state.eventDate}
          onChange={this.state.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
    </MuiPickersUtilsProvider>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="event time"
            name="eventTime"
            value={this.state.eventTime}
            onChange={this.handleDateChange__time}
            KeyboardButtonProps={{
              'aria-label': 'event time',
            }}
          />
      </Grid>
    </MuiPickersUtilsProvider>
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="notes"
      onChange={this.handleChange}
      value={this.state.notes}
      name="notes"
      type="text"
      fullWidth
    />
      </DialogContent>
          <DialogActions>
            <Button 
            onClick={() => handleDelete()} 
            color="primary"
            classname="button__Cansel">
              Cancel
            </Button>
            <button 
              onClick={this.handleSubmit}
              className="button__Save"
            >
              Save
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
