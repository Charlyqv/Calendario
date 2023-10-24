

export const CalendarEvent = ({ event }) => {

  const { title, user } = event;
  // console.log("🚀 ~ file: CalendarEvent.jsx:4 ~ CalendarEvent ~ props:", props);
  return (
    <>
      <strong>{ title }</strong>
      <span> - { user.name }</span>
    </>
  )
}
