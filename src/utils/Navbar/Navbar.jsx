import "./Navbar2.css"

export default function Navbar() {
    return (
        <>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/login">Ingresar</a>
                        <a href="/market">Market</a>
                        <a href="/dashboard">Dashboard</a>
                        <a href="/register">Register</a>
                        <div className="animation start-home"></div>
                    </nav>
        </>
    )
}