import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class FormDialog extends React.Component {
  state = {
    mapOnInfo: { 
      fullWidth: true,
      setFullWidth: true,
      maxWidth: 'sm',
      setMaxWidth: 'sm',
      title: '',
    }
  }

  handleSubmit = () => {
    const { onSubmit, calendarEvents } = this.props;
    const { mapOnInfo } = this.state;
    console.log(calendarEvents)
    onSubmit(mapOnInfo, calendarEvents.id);
  }
    
  handleMaxWidthChange = (event) => {
    const { value } = event.target;

    this.setState({
      mapOnInfo: {
        setMaxWidth: value,
      },
    })
  }

  handleFullWidthChange = (event) => {
    this.setState({
      mapOnInfo: {
        setFullWidth: event.target.checked,
      },
    })
  }

  render() {
    const { handleClose, setOpen, handleChangeEvent, fullWidth, maxWidth } = this.props;

    return (
      <div>
        <Dialog 
          handleChangeEvent={handleChangeEvent}
          open={setOpen} 
          onClose={handleClose} 
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Event</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Entered your event"
              type="email"
              fullWidth
            />
             <form 
              onCange={this.handleSubmit}
              noValidate>
              <FormControl>
                <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                <Select
                  value={maxWidth}
                  onChange={this.handleMaxWidthChange}
                  inputProps={{
                    name: 'max-width',
                    id: 'max-width',
                  }}
                >
                  <MenuItem value={false}>false</MenuItem>
                  <MenuItem value="xs">xs</MenuItem>
                  <MenuItem value="sm">sm</MenuItem>
                  <MenuItem value="md">md</MenuItem>
                  <MenuItem value="lg">lg</MenuItem>
                  <MenuItem value="xl">xl</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Switch checked={this.fullWidth} onChange={this.handleFullWidthChange} value="title" />
                }
                label="Full width"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button 
            // onClick={() => handleDelete(handleChangeEvent)} 
            color="primary">
              Cancel
            </Button>
            <Button 
              onClick={this.handleSubmit}
              // onClick={handleClose} 
              color="primary"
            >
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
