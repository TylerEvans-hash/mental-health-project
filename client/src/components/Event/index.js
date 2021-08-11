

const Event = ({name, description}) => {
    return (
        <div className="card" style={{ width: "30%", margin: "30px auto" }}>
            <header className="card-header">
                <p className="card-header-title">
                    {name}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <span>{description}</span>
                </div>
            </div>
        </div>
    );
}

export default Event;