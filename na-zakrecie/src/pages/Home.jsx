import { useNavigate } from "react-router-dom";

export default function Home () {

    const navigate = useNavigate()

    const btnNaZakrecie = (e) => {
        e.preventDefault()
        navigate("/nazakrecie")
    }

    const btnNadRzeczka = (e) => {
        e.preventDefault()
        navigate("/nadrzeczka")
    }

    return (
        <div className="home__container">
            <h1 className="home__name">Domki Gosi</h1>
            <div className="hero__nazakrecie" onClick={btnNaZakrecie}>
                <h1>Na zakręcie</h1>
            </div>
            <p>Wybierz lokalizację</p>
            <div className="hero__nadrzeczka" onClick={btnNadRzeczka}>
                <h1>Nad rzeczką</h1>
            </div>
        </div>
    )
}