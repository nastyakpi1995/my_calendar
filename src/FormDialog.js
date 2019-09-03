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
      color: 'white',
      changeBacground: 'black',
      title: '',
    }
  }

  handleSubmit = () => {
    const { handleChangeEvent } = this.props;
    const { mapOnInfo } = this.state;
    console.log(mapOnInfo)
    handleChangeEvent(mapOnInfo);
  }
    
  handlecolorChange = (event) => {
    const { value } = event.target;

    this.setState({
      mapOnInfo: {
        fullWidth: true,
        setFullWidth: true,
        color: 'black',
        title: '',
        changeBacground: value,
      },
    })
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      mapOnInfo: {
        fullWidth: true,
        setFullWidth: true,
        color: 'black',
        changeBacground: 'white',
        [name]: value,
      },
    });
  }

  handleFullWidthChange = (event) => {
    this.setState({
      mapOnInfo: {
        fullWidth: true,
        color: 'black',
        changeBacground: 'white',
        title: '',
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
          <DialogTitle id="form-dialog-title">New Event</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Edit event
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Eddit name"
              onChange={this.handleChange}
              value={this.state.title}
              name="title"
              type="text"
              fullWidth
            />
             <form 
              onCange={this.handleSubmit}
              noValidate>
              <FormControl>
                <InputLabel htmlFor="max-width">color</InputLabel>
                <Select
                  value={color}
                  onChange={this.handlecolorChange}
                  inputProps={{
                    name: 'max-width',
                    id: 'max-width',
                  }}
                >
                  <MenuItem value={false}>false</MenuItem>
                  <MenuItem value="xs">blue</MenuItem>
                  <MenuItem value="sm">red</MenuItem>
                  <MenuItem value="md">white</MenuItem>
                  <MenuItem value="lg">yellow</MenuItem>
                  <MenuItem value="xl">green</MenuItem>
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
            onClick={() => handleDelete()} 
            color="primary">
              Delete
            </Button>
            <Button 
              onClick={this.handleSubmit}
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
