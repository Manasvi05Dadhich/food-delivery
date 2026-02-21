import React from 'react';
import ReactDOM from 'react-dom/client';
const logo = new URL('./assets/anya.jpg', import.meta.url);
import './style.css';
import AppBar from './components/Appbr';

const RestCard = () => {
    return <div className='Res-cards'>
        <img className='pic' src="https://minimalistbaker.com/wp-content/uploads/2015/08/AMAZING-Vegan-Ramen-with-just-10-ingredients-Simple-methods-plant-based-SO-delicious-vegan-recipe-ramen-soup-healthy-dinner.jpg" alt="pic" />
        <h3>Meghna foods</h3>
        <h4>Japanese and korean</h4>
        <h4>4.5 stars</h4>
        <h4>15-20 mins</h4>
    </div>
}

const Body = () => {
    return <div className='body'>
        <div className='search'>search</div>
        <div className='cards'>
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard /><RestCard />
            <RestCard /><RestCard /><RestCard /><RestCard />
            <RestCard /><RestCard /><RestCard /><RestCard /><RestCard />
        </div>
    </div>
}


const Applayout = () => {
    return <div className="App">
        <AppBar />
        <Body />
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);   