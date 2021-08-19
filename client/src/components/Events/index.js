import Event from "../Event";

const Events = () => {
    const events = [
        {
            name: "Event 1",
            description: "description 1",
            startDate: "March 13",
            endDate: "October 23",
        },
        {
            name: "Event 2",
            description: "description 2",
            startDate: "March 13",
            endDate: "October 23",
        },
        {
            name: "Event 3",
            description: "description 3",
            startDate: "March 13",
            endDate: "October 23",
        },
        {
            name: "Event 4",
            description: "description 4",
            startDate: "March 13",
            endDate: "October 23",
        },
        {
            name: "Event 5",
            description: "description 5",
            startDate: "March 13",
            endDate: "October 23",
        },
        {
            name: "Event 5",
            description: "description 5",
            startDate: "March 13",
            endDate: "October 23",
        },
        {
            name: "Event 5",
            description: "description 5",
            startDate: "March 13",
            endDate: "October 23",
        },
    ];
    return (
        <>
            <h2 className="is-size-3 has-text-centered mb-6">Events</h2>
            <div className="column is-full" >
                {
                    events.map(({ name, description, startDate, endDate }, i) =>
                        <Event
                            key={i}
                            name={name}
                            description={description}
                            startDate={startDate}
                            endDate={endDate}
                        />
                    )
                }
            </div>
        </>
    );
}

export default Events;