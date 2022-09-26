import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom"
import Soporte from "../../assets/Soporte.svg"
import Seguridad from "../../assets/seguridad.svg"
import User from "../../assets/User.svg"
import Crecer from "../../assets/Crecer.svg"
import "./HomePage.css"
import TableTest from "../testing/tableTesting";

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
                  <div>
                  <TableTest/>
                  </div>
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


/*import React from "react";
import { Link } from "react-router-dom"
//svg to home
import Bienvenida from "../../assets/Bienvenida.svg"
import Seguridad from "../../assets/seguridad.svg"
import User from "../../assets/User.svg"
import Crecer from "../../assets/Crecer.svg"
import "./HomePage.css"
//components
import TableCoinsMain from "../TableCoins/TableCoinsMain";
const HomePage = () => {

  return (
    <>
      <section className="body">
        <section className="bienvenida">
          <div className="conteinerslogan">  
            <div className="slogan">
              Tu pagina favorita para tus compras de monedas
            </div>
            <div className="InfoBienvenida">
              Descubre criptos, creadas a partir del exchange más destacado del mundo.
            </div>
            <input type="submit" className="ButtonBienvenida" value="Compra ya" />
          </div>
          <div className="contenedorImageWelcome">
            <img src={ Bienvenida } alt="img" />
          </div>
          </section>

          <section className="HomeTable">
            <div className="ContainerTable">
              <div className="Table">
              <TableCoinsMain />

              </div>  
            </div>
            <div className="infocontainer">
              <div className="info">
                Si deseas comprar monedas en nuestra pagina
              </div>
              <input type="submit" className="buttonTable" value="prueba" />
            </div>
          </section>

          <section className="HomeServices">
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
                        <Link to="/Registro">
                            <input type="submit" className="ButtonAttention2" value="Registrate ya" />
                        </Link>
                    </div>
                </section>
                <footer className="HomeFooter">
                    <div className="grupo1">
                        <div className="box">
                            <figure>
                                <a href="#">
                                    <img src={ Bienvenida } alt="" />
                                </a>
                            </figure>
                        </div>
                        <div className="box">
                            <h2>Sobre Nosotros</h2>
                            <p>Sobre nosotros.</p>
                            <p>Carrera profesional</p>
                            <p>contactanos</p>
                            <p>noticias sobre empresas</p>
                        </div>
                        <div className="box">
                            <h2>Políticas</h2>
                            <p>Términos de Servicio</p>
                            <p>Política de Privacidad</p>
                            <p>Política Anti-Spam</p>
                            <p>Política de Cookies</p>
                        </div>
                        <div className="box">
                            <h2>Referencia</h2>
                            <p>Inicio Rápido</p>
                            <p>Interfaz de Programación</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, deleniti.</p>
                        </div>
                        <div className="box">
                            <h2>Siguenos</h2>
                            <p></p>
                        </div>
                    </div>
                    <div className="grupo2">
                        <small>&copy; 2022 <b>Master Exchange</b> - Todos los derechos reservados</small>
                    </div>
                    
                </footer>
               
            </section>
    
    </>
  );



}; 
export default HomePage;*/