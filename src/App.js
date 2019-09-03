import React from 'react';
import './App.css';
import FormDialog from './FormDialog';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import Header from './Header';

import './App.css';

export default class DemoApp extends React.Component {
  state = {
    setOpen: false,
    open: false, 
    calendarEvents: [],
    id: '',
  }

  componentWillMount() {
      if (localStorage.getItem('calendarEvents')) {
        this.setState({
          calendarEvents: JSON.parse(localStorage.getItem('calendarEvents')),
        });
      }
    }
  
    componentDidUpdate() {
      localStorage.setItem('calendarEvents', JSON.stringify(this.state.calendarEvents));
    }

  handleChangeEvent = (mapOnInfo) => {
    console.log(mapOnInfo.title)
    this.setState(prevState => ({
      calendarEvent: prevState.calendarEvents.map(
        eventUnic => ({ 
        ...eventUnic, 
        title: eventUnic.id === prevState.id ? mapOnInfo.title : eventUnic.title,
        })),
      setOpen: false,
    }));  
  }

  
  handleDelete = () => {
    this.setState(prevState => ({
      setOpen: false,
      calendarEvents: prevState.calendarEvents.filter(todo => todo.id !== prevState.id),
    }));
  }

  handleEvent = (info) => {
    const eventObj = info.event;
    const id = this.state.calendarEvents.map(eventUnic => eventUnic.id === eventObj.id ? eventUnic.id : '').find(a => a === eventObj.id);

      if (eventObj.allDay) {
        this.setState(prevState => ({
          setOpen: true,
          id,
          // calendarEvents: prevState.calendarEvents.map(
          // eventUnic => ({ 
          // ...eventUnic, 
          // title: eventUnic.id === +info.event.id ? Date.now() : eventUnic.title}))
          }))
          // handleChangeEvent(id)

        info.jsEvent.preventDefault();
      } else {
          this.setState({
            setOpen: false,
          });
      }
  }

  handleDateClick = (arg) => {
    this.setState(prevState => ({
      calendarEvents: [
        ...prevState.calendarEvents,
        {
          timeZone: 'local',
          title: prevState.title,
          start: arg.date,
          allDay: arg.allDay,
          end: new Date(),
          id: Date.now(),
          bacground: arg.dayEl.style.backgroundColor = 'blue',
        },
      ],
    }));
  }

  handleClickOpen = () => {
    this.setState({
      setOpen: true,
    })
  }

  handleClose = () =>{
    this.setState({
      setOpen: false,
    })
  }

  render() {
    console.log(this.state.calendarEvents)
    return (
      <div className="App">
        <Header />
        <FullCalendar 
          defaultView="dayGridMonth" 
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
          events={this.state.calendarEvents} 
          dateClick={this.handleDateClick}
          eventClick={this.handleEvent}
          header={{
            left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
        />
        <FormDialog 
          onSubmit={this.handleChangeEvent}
          handleClose={this.handleClose} 
          id={this.state.calendarEvents.map(event => event.id)} 
          setOpen={this.state.setOpen}
          handleDelete={this.handleDelete}
        />
        <button type="button" onClick={this.handleDelete} >fdsfd</button>
      </div>
    );
  }
}
