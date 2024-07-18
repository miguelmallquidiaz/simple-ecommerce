import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/LogoPlazaVea.svg";
import { agregarCarrito } from "../utils";

function MainNav() {
    const [cantidadCarrito, setCantidadCarrito] = useState(0);

    useEffect(() => {
        const actualizarCantidadCarrito = () => {
            const carrito = JSON.parse(sessionStorage.getItem("carritocompras")) || [];
            let totalCantidad = 0;
            carrito.forEach(item => {
                totalCantidad += item.cantidad;
            });
            setCantidadCarrito(totalCantidad);
        };

        // Actualizar la cantidad inicial al cargar el componente
        actualizarCantidadCarrito();

        // Escuchar el evento personalizado para actualizar la cantidad cuando cambie el carrito
        window.addEventListener("carritoActualizado", actualizarCantidadCarrito);

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            window.removeEventListener("carritoActualizado", actualizarCantidadCarrito);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-danger sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" width="128" height="45" className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/tienda">Tienda</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/carrito">
                                <i className="bi bi-basket"></i> Carrito Tienda
                                {cantidadCarrito > 0 && <span className="badge bg-secondary ms-1">{cantidadCarrito}</span>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNav;
