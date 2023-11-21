import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers/convertEventsToDateEvents";


export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );
  const { user } = useSelector( state => state.auth );

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent (calendarEvent) );
  }

  const startSavingEvent = async( calendarEvent ) => {

    if( calendarEvent._id ) {
      dispatch( onUpdateEvent({ ...calendarEvent}) );
    } else {

      const { data } = await calendarApi.post('/events', calendarEvent );
      dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) )
    }
  }

  const startDeletingEvent = () => {
    dispatch( onDeleteEvent() );
  }

  const startLoadingEvents = async() => {
    try {

      const { data } = await calendarApi.get('/events');
      const events = convertEventsToDateEvents( data.eventos );
      dispatch( onLoadEvents( events ) );
      
    } catch (error) {
      console.log('Error cargando eventos')
      console.log("🚀 ~ file: useCalendarStore.js:35 ~ startLoadingEvents ~ error:", error)
      
    }
  }

  return {
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    setActiveEvent,
    startDeletingEvent,
    startLoadingEvents,
    startSavingEvent,
  }
}
