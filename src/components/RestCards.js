const RestCard = (props) => {
    const { name, cuisines, rating, time, image } = props;
    return (
        <div className='Res-cards'>
            <img className='pic' src={image} alt={name} />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating} stars</h4>
            <h4>{time}</h4>
        </div>
    );
};

export default RestCard;