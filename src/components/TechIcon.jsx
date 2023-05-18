export default ({ tech }) => {

    const { icon } = tech;
    return (
        <div className="techicon">
            <img alt="something" src={icon} />
        </div>
    )
}