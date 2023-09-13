import { getFeaturedEvents } from "../components/helpers/api-util";
import EventList from "/components/events/event-list"


function Homepage(props) {
  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
   events: featuredEvents
    }
  }
}
export default Homepage