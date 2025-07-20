const Status = () => {
    return (
        <>
            <div className="inline-grid *:[grid-area:1/1]">
                <div className="status status-info animate-ping"></div>
                <div className="status status-running"></div>
            </div> Music is running
        </>
    );
}

export default Status;