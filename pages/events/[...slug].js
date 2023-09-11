import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";


function FiltredEventsPage() {
    const router = useRouter();
    const filtreData = router.query.slug;

    if (!filtreData) {
        return <p className="center">Loading...</p>
    }

    const filtredYear = filtreData[0];
    const filtredMonth = filtreData[1];

    const numYear = +filtredYear;
    const numMonth = +filtredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12
    ) {
        return (
            <Fragment>
                <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });
    console.log("filteredEvents:", filteredEvents);

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const date = new Date(numYear, numMonth - 1)

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
}

export default FiltredEventsPage;