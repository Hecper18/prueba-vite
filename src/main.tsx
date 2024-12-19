import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Video = ({title, description, uploadDate, duration}) => {
    const second = duration % 60;
    const minutes = Math.floor(duration / 60);
    
    return (
    <div>
        <h3>{title}</h3>
        <div>
            <span>
                {minutes}:{second}
            </span>
            <span>{uploadDate.toLocalDateString()}</span>
        </div>
        <p>{description}</p>
    </div>
    );
}

const App = (
    <div>
        <h1>Desarrollo útil</h1>
    <Video
        title='Componentes'
        duration={2760}
        uploadDate={new Date(2022,1,25)}
        description='Componentes de React'
    ></Video>
    <Video
        title='useState'
        duration={3145}
        uploadDate={new Date(2022,2,3)}
        description='Como utilizar los estados de React'
    ></Video>
    </div>
);

const container = document.getElementById("root");

// ReactDOM.render(app, container);
container.render(<App/>)