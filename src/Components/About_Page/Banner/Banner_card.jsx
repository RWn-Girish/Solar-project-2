import "../../../Components/About_Page/Banner/Banner_card.css"

function Banner_card({ title, image, description }) {
    return (
        <div className="banner_card  p-4">
            <div className="Card_text d-flex align-items-center gap-5">
                {image}
                <h2 className="fw-bold">{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    );
}

export default Banner_card;