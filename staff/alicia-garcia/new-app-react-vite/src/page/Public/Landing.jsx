import Logo from "../../components/lib/Logo"
import "./Landing.css"

const Landing = () => {
    return <div className="landing__content">
        <h1 className="landing__title">YOGA TERAPIA</h1>
        <Logo size={"lg"} />
        <h2 className="landing__subtitle">Yoga terapeutico</h2>
    </div>
}

export default Landing