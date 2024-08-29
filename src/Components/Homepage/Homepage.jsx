import React from 'react';
import { Link } from 'react-router-dom';
import "./Homepage.css";

function Homepage() {
    return (
        <div className='homepage'>
            <h1>Welcome to the Teachers Gallery...</h1>
            <div className="card1">
                <img src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?w=263&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Tanmay Sir" />
                <h1>Tanmay Sir</h1>
                <p>Lorem ipsum dolor sit amet consectetur...</p>
                <Link to="/teacher/tanmay-sir">
                    <button>Learn More</button>
                </Link>
            </div>
            <div className="card1">
                <img src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?w=263&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Sasmita Mam" />
                <h1>Sasmita Mam</h1>
                <p>Lorem ipsum dolor sit amet consectetur...</p>
                <Link to="/teacher/sasmita-mam">
                    <button>Learn More</button>
                </Link>
            </div>
            <div className="card1">
                <img src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?w=263&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Anugya Mam" />
                <h1>Anugya Mam</h1>
                <p>Lorem ipsum dolor sit amet consectetur...</p>
                <Link to="/teacher/anugya-mam">
                    <button>Learn More</button>
                </Link>
            </div>
            <div className="card1">
                <img src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?w=263&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Anugya Mam" />
                <h1>Sonali Mam</h1>
                <p>Lorem ipsum dolor sit amet consectetur...</p>
                <Link to="/teacher/anugya-mam">
                    <button>Learn More</button>
                </Link>
            </div>
            <div className="card1">
                <img src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?w=263&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Anugya Mam" />
                <h1>Naba Mam</h1>
                <p>Lorem ipsum dolor sit amet consectetur...</p>
                <Link to="/teacher/anugya-mam">
                    <button>Learn More</button>
                </Link>
            </div>
            <div className="card1">
                <img src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?w=263&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Anugya Mam" />
                <h1>Anugya Mam</h1>
                <p>Lorem ipsum dolor sit amet consectetur...</p>
                <Link to="/teacher/anugya-mam">
                    <button>Learn More</button>
                </Link>
            </div>
        </div>
    );
}

export default Homepage;
