import img1 from '../../../assets/juguetes.png';
import img2 from '../../../assets/kiosco.png';
import img3 from '../../../assets/tabaqueria.png';
import '../carrousel/carrousel.css'

const Carrousel = () => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img3} className="carrousel_img d-block w-100" alt="Tabaqueria" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="carrousel_img d-block w-100" alt="Kiosco" />
                </div>
                <div className="carousel-item">
                    <img src={img1} className="carrousel_img d-block w-100" alt="juguetes" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carrousel