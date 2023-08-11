import "./HeroBanner.scss"
import HeroRegisterForm from "./../UserRegisterForm/UserRegisterForm"

export default function HeroBanner() {
    return (<div className="hero-banner-container">
        <div className="hero-banner-top-layer">
            <div className="hero-banner-form-container">
                <HeroRegisterForm/>
            </div>
        </div>
    </div>)
} 