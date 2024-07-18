import slide1 from "./../assets/images/img1.jpg"
import slide2 from "./../assets/images/img2.jpg"
import './Testimonio.css'

function Testimonio() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <h2 className="text-center">Testimonio</h2>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner testimonio">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block mx-auto img-testimonio" alt="Cliente 1" />
                    <h3 className="p-2">María</h3>
                    <p><i className="bi bi-quote"></i> ¡Siempre encuentro todo lo que necesito y más en Plaza Vea! Excelente servicio y variedad.</p>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block mx-auto img-testimonio" alt="Cliente 2" />
                    <h3 className="p-2">Pedro</h3>
                    <p><i className="bi bi-quote"></i> La frescura de los productos y la amabilidad del personal hacen de Plaza Vea mi supermercado de confianza.</p>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Testimonio