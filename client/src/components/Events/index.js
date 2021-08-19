import Event from "../Event";

const Events = () => {
    const events = [
        {
            name: "Event 1",
            description: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
            startDate: "March 13",
            endDate: "October 23",
            address: "123 N. Fake St. 12345 Nowhere, AZ",
        },
        {
            name: "Event 2",
            description: "description 2",
            startDate: "March 13",
            endDate: "October 23",
            address: "123 N. Fake St. 12345 Nowhere, AZ",
        },
        {
            name: "Event 3",
            description: "description 3",
            startDate: "March 13",
            endDate: "October 23",
            address: "123 N. Fake St. 12345 Nowhere, AZ",
        },
        {
            name: "Event 4",
            description: "description 4",
            startDate: "March 13",
            endDate: "October 23",
            address: "123 N. Fake St. 12345 Nowhere, AZ",
        },
        {
            name: "Event 5",
            description: "description 5",
            startDate: "March 13",
            endDate: "October 23",
            address: "123 N. Fake St. 12345 Nowhere, AZ",
        },
        {
            name: "Event 5",
            description: "description 5",
            startDate: "March 13",
            endDate: "October 23",
            address: "123 N. Fake St. 12345 Nowhere, AZ",
        },
        {
            name: "Event 5",
            description: "description 5",
            startDate: "March 13",
            endDate: "October 23",
            address: "123 N. Fake St. 12345 Nowhere, AZ",
        },
    ];
    return (
        <>
            <h2 className="is-size-3 has-text-centered mb-6">Events</h2>
            <div>

            </div>
            <div className="column is-full" >
                {
                    events.map(({ name, description, startDate, endDate, address }, i) =>
                        <Event
                            key={i}
                            name={name}
                            description={description}
                            startDate={startDate}
                            endDate={endDate}
                            address={address}
                        />
                    )
                }
            </div>
        </>
    );
}

export default Events;