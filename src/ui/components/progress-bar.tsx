const ProgressBar = ({ progressValue } : { progressValue: string }) => {
    console.log(progressValue);
    return (
        <progress
            className="progress progress-success w-full mt-2 rounded-2xl"
            value={progressValue}
            max="100"
        ></progress>
    );
}

export default ProgressBar;