import qrCode from '../../assets/image-qr-code.png';
import "./Card.css"

function Card() {
    return (
        <>

            <div className="card-container">
                <img src={qrCode}></img>
                <p>Improve your front-end skill by building projects</p>
                <small>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</small>
            </div>

        </>
    )
}


export default Card;