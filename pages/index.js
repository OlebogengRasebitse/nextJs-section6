import EventList from "/components/events/event-list"
import { getFeaturedEvents } from "../dummy-data"

function Homepage() {
  const futureEvents = getFeaturedEvents()

  return (
    <div>
         <h1>Home Page</h1>
      <EventList items={futureEvents} />
   
    </div>
  )
}

export async function getFeaturedEvents () {
  return {
    props: {
      featuredEvents : 
    }
  }
}
export default Homepage