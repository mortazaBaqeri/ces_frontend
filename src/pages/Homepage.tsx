import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as  L from 'leaflet';


const Homepage = () => {
    useEffect(() => {
        const map = L.map('map').setView([5.0580933, 16.9414341], 3);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }, []);
    const [buttonPressed, setButtonPressed] = useState(false);

    const {language} = useParams();

    const [formData, setFormData] = useState({
        weight: '',
        width: '',
        height: '',
        depth: '',
        content: ''
    });

    const handleChange = () => {
        // const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData
        }));
    };

    const handleButtonClick = () => {
        setButtonPressed(true);
        // Save the parameters or perform search action here
        console.log(formData);
        setTimeout(() => setButtonPressed(false), 200); // Reset button style after 200ms
    };

    return (
        <>
            <div className="main-page">
                <div id="map" className="map-area"></div>
                <div className="parcel-form">
                    <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    placeholder={language == "en" ? "Weight(kg)" : "Gewig(kg)"}
                    onChange={handleChange}
                    className="custom-input parcel-form-input"
                    />

                    <input
                    type="text"
                    name="width"
                    value={formData.width}
                    placeholder={language == "en" ? "Width(cm)" : "Breedte(cm)"}
                    onChange={handleChange}
                    className="custom-input parcel-form-input"
                    />

                    <input
                    type="text"
                    name="height"
                    value={formData.height}
                    placeholder={language == "en" ? "Height(cm)" : "Hoogte(cm)"}
                    onChange={handleChange}
                    className="custom-input parcel-form-input"
                    />

                    <input
                    type="text"
                    name="depth"
                    value={formData.depth}
                    placeholder={language == "en" ? "Depth(cm)" : "Diepte(cm)"}
                    onChange={handleChange}
                    className="custom-input parcel-form-input"
                    />
                </div>
                <div className="login-form">
                    <select name="content" id="" className="custom-select-input">
                        <option value="liveAnimals">{language == "en" ? "Live Animals" : "Lewendig Dier"}</option>
                        <option value="refridgerated">{language == "en" ? "Refridgerated" : "Gekoeld"}</option>
                        <option value="weapon">{language == "en" ? "Weapon" : "Wapen"}</option>
                        <option value="recordDelivery">{language == "en" ? "Record Delivery" : "Rekord Aflewering"}</option>
                        <option value="cautiousParcel">{language == "en" ? "Cautious Parcel" : "Versigtig Pakket"}</option>
                    </select>

                    <button
                    className={buttonPressed ? 'button-pressed custom-button' : 'custom-button'}
                    onClick={handleButtonClick}
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}

export default Homepage;