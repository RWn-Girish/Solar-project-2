import "../../../Components/About_Page/Banner/Banner_card.css"

function Banner_card({ title, image, description }) {
    return (
        <div className="banner_card p-4">
            <div className="card_text d-flex justify-content-center p-3">
                {image}
            </div>
                <h2 className="fw-bold m-0">{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Banner_card;