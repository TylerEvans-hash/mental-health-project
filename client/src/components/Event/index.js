import Auth from '../../utils/auth';

const Event = ({ name, description, startDate, endDate, address }) => {
    return (
        <div className="event card">
            <div className="columns">
                <div className="card-content column">
                    <p className="title">
                        {name}
                    </p>
                    <p className="subtitle">
                        {startDate} - {endDate}
                    </p>
                    <p className="subtitle">
                        {address}
                    </p>
                </div>
                <div className="card-content column">
                    {description}
                </div>
            </div>
            <footer className="card-footer">

                {


                    Auth.loggedIn() ?
                        (

                            <>
                                <button className="button">Recieve Emails</button>
                            </>

                        )
                        : 
                        (
                            <>
                                <button className="button" title="Disabled button" disabled>Recieve Emails</button>
                            </>
                        )
                }

            </footer>
        </div>
    );
}

export default Event;