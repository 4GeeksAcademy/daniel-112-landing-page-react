
import React from "react";

function Card() {
    return (

            <div className="card" style={{width: "18rem"}}>
                <img src="src/img/500x325.jpg" className="card-img-top" alt="imagen-relleno" />
                <div className="card-body">
                    <h4 className="card-title text-center">Card title</h4>
                    <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis officiis autem ea eius consequatur ex?</p>
                </div>
                <div class="card-footer text-body-secondary text-center">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>

    );
};


export default Card;