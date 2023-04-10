import React from "react";
import Style from "./Accueil.module.css"

export default function Accueil() {
    return (<div className={Style.container}>
        <h2>Bienvenue sur Quizly</h2>
        <br />
        <div className={Style.content}>
            <div>
                <div className={Style.annonce}>
                    <h3>Sur Quizly</h3>
                    <p>1 - Créez des quiz </p>
                    <p>2 - Jouez à ceux crées par la communauté </p>
                    <p>3 - Essayez d'obtenir les meilleurs rangs au classement</p>
                </div>
                <img className={`image ${Style.img}`} src="/choisir.png" />
            </div>
            <br />
            <br />
            <br />
            <div>
                <div>
                    <h2>Projet réalisé par Djibril SAMASSA</h2>
                    <p>Un projet rassemblant React Js en Frontend et NodeJS en backend avec l'utilisation de plusieurs librairies comme
                        Mongoose, Axios, React-Router-Dom, Express, JsonWebToken et d'autres technologies
                    </p>
                    <p><a target="/blank" href="https://djibrilsamassa.netlify.app/">Faites un tour sur mon portfolio</a> pour découvrir d'autres projets ou <a href="/quiz">Commencez à jouer dès maintenant</a></p>
                </div>
            </div>
        </div>
    </div>)
}