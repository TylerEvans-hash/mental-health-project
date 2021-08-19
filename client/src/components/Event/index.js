import Auth from '../../utils/auth';

const Event = ({ name, description, startDate, endDate, address }) => {
    return (
        <div class="event card">
            <div class="columns">
                <div class="card-content column">
                    <p class="title">
                        {name}
                    </p>
                    <p class="subtitle">
                        {startDate} - {endDate}
                    </p>
                    <p class="subtitle">
                        {address}
                    </p>
                </div>
                <div class="card-content column">
                    {description}
                </div>
            </div>
            <footer class="card-footer">

                {


                    Auth.loggedIn() ?
                        (

                            <>
                                <button class="button">Recieve Emails</button>
                            </>

                        )
                        : 
                        (
                            <>
                                <button class="button" title="Disabled button" disabled>Recieve Emails</button>
                            </>
                        )
                }

            </footer>
        </div>
    );
}

export default Event;