import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom"
import Soporte from "../../assets/Soporte.svg"
import Seguridad from "../../assets/seguridad.svg"
import User from "../../assets/User.svg"
import Crecer from "../../assets/Crecer.svg"
import "./HomePage.css"
import Footer from "../../utils/Footer/Footer";

const HomePage = () => {

 
  return (
    <>
        <div className="body">
          <section className="bienvenida">
            <div className="conteinerslogan">  
              <div className="slogan">
                Tu pagina favorita para tus compras de monedas
              </div>
              <div className="InfoBienvenida">
                Descubre criptos, creadas a partir del exchange más destacado del mundo.
              </div>
            </div>
            
            </section>

            <section className="HomeTable">
              <div className="ContainerTable">
                <div className="Table">
                  <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/02/Screenshot-2019-02-28-at-13.35.27.png" alt="" />
                </div>  
              </div>
            </section>

            <section className="HomeServices">
              
            <div className="titleServices">¿Qué ofrecemos?</div>
            <div className="WrapperServices">
              <div className="conteinerServicesLeft">
                <div className="conteinerImgServices">
                  <img src={ User } alt="" />
                </div>
                <div className="conteinerTitleServices">
                  <div className="TitleServicesLeft">
                    Experiencia de Usuario
                  </div>
                </div>
                <div className="conteinerInfoServices">
                  <div className="infoServices">
                    Brindamos un servicio de atención al cliente en línea sin interrupciones de 7 días x 24 horas para garantizar el funcionamiento sin problemas de las transacciones de cada usuario.
                  </div>
                </div>
              </div>
              <div className="conteinerServices">
              
                <div className="conteinerImgServices">
                  <img src={ Seguridad } alt="" />
                </div>
                <div className="conteinerTitleServices">
                  <div className="TitleServices">
                    Seguridad
                  </div>
                </div>
                <div className="conteinerInfoServices">
                  <div className="infoServices">
                    Llevamos a cabo la estructura multimodular que cumple con el requisito de la estructura lógica de vigilancia de TI en la industria financiera, lo que garantiza el funcionamiento estable de nuestro sistema.
                  </div>
                </div>
              </div>
              <div className="conteinerServicesRight">
                <div className="conteinerImgServices">
                  <img src={ Crecer } alt="" />
                </div>
                <div className="conteinerTitleServices">
                  <div className="TitleServicesRight">
                    Probabilidades de crecer
                  </div>
                </div>
                <div className="conteinerInfoServices">
                  <div className="infoServices">
                    Consigue grandes rendimientos, disfruta de nuevos tokens antes que nadie, únete a nuestro fondo de minería o usa tus activos de cripto para liquidar un préstamo de bajo interés.
                  </div>
                </div>
              </div>
              <div className="conteinerServices4">
                <div className="conteinerImgServices">
                    <img src={ Soporte }  />
                </div>
                <div className="conteinerTitleServices">
                  <div className="TitleServices4">
                    Soporte Rapido
                  </div>
                </div>
                <div className="conteinerInfoServices">
                  <div className="infoServices">
                    Respondemos los problemas cuando nos necesitan. Deja de esperar semanas por una respuesta.
                  </div>
                </div>
              </div>
              </div>
            </section>
                  
            <section className="HomeAttention">
              <div className="conteinerAttentionTitle">
                <div className="AttentionTitle">
                  ¿Qué esperas para comprar?
                </div>
              </div>
              <div className="conteinerButtonAttention">
              <Link to="/Login">
                              <input type="submit" className="ButtonAttention1" value="inicia sesion ya" />
                          </Link>
                          <Link to="/register">
                              <input type="submit" className="ButtonAttention2" value="Registrate ya" />
                          </Link>
                      </div>
                  </section>

                  <section>
                  <footer className="HomeFooter">
                      
                      <Footer/>
                      <div className="grupo2">
                          <small>&copy; 2022 <b>Master Exchange</b> - Todos los derechos reservados</small>
                      </div>
                      
                  </footer>
                  
              </section>
            </div>
    
      </>
    
  
  );


}; 
export default HomePage;
