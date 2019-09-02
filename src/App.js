import React from 'react';
import './App.css';
import FormDialog from './FormDialog';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import Header from './Header';

import './App.css' // webpack must be configured to do this

export default class DemoApp extends React.Component {
  state = {
    setOpen: false,
    open: false, 
    calendarEvents: [],
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

  handleChangeEvent = (mapOnInfo, id) => {
    console.log(mapOnInfo, id)
    this.setState(prevState => ({
      calendarEvent: prevState.calendarEvents.map(
        eventUnic => ({ 
        ...eventUnic, 
        title: mapOnInfo.title,
        })),
      setOpen: false,
    }));  
  }
  

  handleEvent = (info) => {
    const eventObj = info.event;
      if (eventObj.allDay) {
        this.setState(prevState => ({
          setOpen: true,
          // calendarEvents: prevState.calendarEvents.map(
          // eventUnic => ({ 
          // ...eventUnic, 
          // title: eventUnic.id === +info.event.id ? Date.now() : eventUnic.title}))
          }))
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
          calendarEvents={this.state.calendarEvents} 
          setOpen={this.state.setOpen}
        />

        <header className="App-header">
         
        </header>
      </div>
    );
  }
}
