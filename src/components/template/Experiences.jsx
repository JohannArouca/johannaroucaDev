import './Experiences.css'
import React from 'react'

export default props =>
    <React.Fragment>
        <div id="experiences" className="experiences">
            <h2>Experiências</h2>

            <div class="rb-container">
                <ul class="rb">
                    <li class="rb-item" ng-repeat="itembx">
                        <div class="item-title">Desenvolvedor Júnior e Suporte</div>
                        <div class="timestamp">
                            Logus Soluções | Cargo atual - início em Jan/21
                        </div>
                        <div className="item-text">
                            Desenvolvimento de softwares utilizando HTML, CSS, JavaScript, Delphi e Wordpress - Suporte aos usuários dos sistemas da empresa.
                        </div>
                    </li>
                    <li class="rb-item" ng-repeat="itembx">
                        <div class="item-title">Monitor de programação e robótica</div>
                        <div class="timestamp">
                            Code 8734 | Fev/20 - Dez/20
                        </div>
                        <div className="item-text">
                            Experiência em ensino de programação e robótica para vários de grupos de crianças   
                        </div>
                    </li>
                    <li class="rb-item" ng-repeat="itembx">
                        <div class="item-title"> Estagiário de TI</div>
                        <div class="timestamp">
                            DonnaFlor | Ago/19 - Fev/20
                        </div>
                        <div className="item-text">
                            Alterações no front end do e-commerce e manutenção cotidiana nos computadores e sistemas  
                        </div>
                    </li>
                    <li class="rb-item" ng-repeat="itembx">
                        <div class="item-title"> Estagiário de TI</div>
                        <div class="timestamp">
                            Prefeitura Municipal de Formiga | Mar/19 - Jul/19
                        </div>
                        <div className="item-text">
                            Manutenção em todos os equipamentos da Prefeitura Municipal de Formiga/MG com mais de 1000 servidores  
                        </div>
                    </li>
                    <li class="rb-item" ng-repeat="itembx">
                        <div class="item-title">Monitor de Informática</div>
                        <div class="timestamp">
                            Escola Municipal José Honorato de Castro | Fev/15 - Out/15
                        </div>
                        <div className="item-text">
                            Ensino de informática básica para crianças  
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </React.Fragment>