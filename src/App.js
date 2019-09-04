import React from 'react';
import './App.css';
import FormDialog from './FormDialog';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import Header from './Header';
import Main from './Main';

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
    console.log(mapOnInfo)
    this.setState((prevState) => {
      const calendarEvents = prevState.calendarEvents
        .map(event => (event.id === prevState.id
          ? {
            ...event,
            title: mapOnInfo.title,
            end: mapOnInfo.eventTime,
            notes: mapOnInfo.notes,
            start: mapOnInfo.eventTime,
          }
          : event));
      return {
        setOpen: false,
        calendarEvents,
        mapOnInfo: {},
      };
    })
  }

  handleEvent = (info) => {
    const eventObj = info.event;
    const id = this.state.calendarEvents.map(eventUnic => eventUnic.id === +info.event.id ? eventUnic.id : '').find(a => a === +info.event.id);
      if (eventObj.allDay) {
        this.setState({
          setOpen: true,
          id,
          })
        info.jsEvent.preventDefault();
      } 
  }

  handleDelete = () => {
    this.setState(prevState => ({
      setOpen: false,
      calendarEvents: prevState.calendarEvents.filter(todo => todo.id !== prevState.id),
    }));
  }

  handleDateClick = (arg) => {
    console.log(arg.dayEl.style)
    this.setState(prevState => ({
      calendarEvents: [
        ...prevState.calendarEvents,
        {
          timeZone: 'local',
          title: '',
          notes: '',
          start: arg.date,
          allDay: arg.allDay,
          end: arg.date,
          id: Date.now(),
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
    return (
      <div className="App">
          <Header />
          <div className="main__container">
        <Main />
        <div className="main__calendar__n">
          <h4 className="main__calendar_ni">Calendar</h4>
        <FullCalendar 
          className="clendar__main"
          defaultView="dayGridMonth" 
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, bootstrapPlugin]}
          events={this.state.calendarEvents} 
          dateClick={this.handleDateClick}
          eventClick={this.handleEvent}
          eventLimit= 'true'
          header={{
            left: '" " today,prev,next', 
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
          
          buttonText={{
            prevYear: '', 
            prev: 'Back',
            next: 'Next',
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
            list: 'Agenda',
        }}
        />
        </div>
      
        <FormDialog 
          handleChangeEvent={this.handleChangeEvent}
          handleClose={this.handleClose} 
          id={this.state.calendarEvents.map(event => event.id)} 
          setOpen={this.state.setOpen}
          handleDelete={this.handleDelete}
        />
          </div>
      </div>
    );
  }
}

