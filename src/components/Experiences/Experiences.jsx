import './Experiences.css'
import React from 'react'

export default function Experiences() {
    return (
        <React.Fragment>
            <div id="experiences" className="experiences">
                <h2>{'<Experiências>'}</h2>

                <div class="rb-container">
                    <ul class="rb">
                        <li class="rb-item" ng-repeat="itembx">
                            <div class="item-title">Desenvolvedor Front-end | Inovação Computação Móvel</div>
                            <div class="timestamp">
                                Cargo atual - início em Mar/22
                            </div>
                            <div className="item-text">
                                Desenvolvimento Front-end utilizando Angular, TypeScript, HTML e SASS.
                            </div>
                        </li>
                        <li class="rb-item" ng-repeat="itembx">
                            <div class="item-title">Desenvolvedor Júnior e Suporte | Logus Soluções</div>
                            <div class="timestamp">
                                Jan/21 - Mar/22
                            </div>
                            <div className="item-text">
                                Desenvolvimento de softwares utilizando HTML, CSS, JavaScript, Delphi e Wordpress - Suporte aos usuários dos sistemas da empresa.
                            </div>
                        </li>
                        <li class="rb-item" ng-repeat="itembx">
                            <div class="item-title">Monitor de programação e robótica | Code 8734</div>
                            <div class="timestamp">
                                Fev/20 - Dez/20
                            </div>
                            <div className="item-text">
                                Experiência em ensino de programação e robótica para vários grupos de crianças
                            </div>
                        </li>
                        <li class="rb-item" ng-repeat="itembx">
                            <div class="item-title"> Técnico de informática | DonnaFlor</div>
                            <div class="timestamp">
                                Ago/19 - Fev/20
                            </div>
                            <div className="item-text">
                                Alterações no front end do e-commerce e manutenção cotidiana nos computadores e sistemas
                            </div>
                        </li>
                        <li class="rb-item" ng-repeat="itembx">
                            <div class="item-title"> Estagiário de TI | Prefeitura Municipal de Formiga</div>
                            <div class="timestamp">
                                Mar/19 - Jul/19
                            </div>
                            <div className="item-text">
                                Manutenção em todos os equipamentos da Prefeitura Municipal de Formiga/MG com mais de 1000 servidores
                            </div>
                        </li>
                        <li class="rb-item" ng-repeat="itembx">
                            <div class="item-title">Monitor de Informática | Escola Municipal José Honorato de Castro</div>
                            <div class="timestamp">
                                Fev/15 - Out/15
                            </div>
                            <div className="item-text">
                                Ensino de informática básica para crianças
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </React.Fragment>
    )
}