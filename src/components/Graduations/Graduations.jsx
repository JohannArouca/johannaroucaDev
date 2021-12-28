import './Graduations.css'
import React from 'react'

export default props =>
    <React.Fragment>
        <div id="graduations" className="graduations">
            <h2>{'<Formações>'}</h2>

            <h3>{'<Graduação>'}</h3>

            <div class="rb-container">
                <ul class="rb">
                    <li class="rb-item" ng-repeat="itembx">
                        <div class="item-title">Engenharia da Computação</div>
                        <div class="timestamp">
                            Mar/16 - Abr/21
                        </div>
                        <div className="item-text">
                            Graduação em Engenharia da Computação pela UEMG - Universidade do Estado de Minas Gerais.
                        </div>
                    </li>
                </ul>
            </div>

            <h3>{'<Cursos>'}</h3>

            <div class="rb-container">
                <ul class="rb">
                    <li class="rb-item" ng-repeat="itembx">
                        <div class="item-title">Curso Web Moderno Completo com JavaScript 2021 + Projetos</div>
                        <div class="timestamp">
                            Set/21 - Nov/21
                        </div>
                        <div className="item-text">
                            Curso de desenvolvimento web da Cod3r realizado durante o segundo semestre de 2021.
                        </div>
                    </li>
                    <li class="rb-item" ng-repeat="itembx">
                        <div class="item-title">Intensivo de Design Gráfico</div>
                        <div class="timestamp">
                            Dez/20 - Jan/21
                        </div>
                        <div className="item-text">
                            Curso intensivo de Design Gráfico da Collab Design   
                        </div>
                    </li>
                    <li class="rb-item" ng-repeat="itembx">
                        <div class="item-title">HTTP: Entendendo a web por baixo dos panos</div>
                        <div class="timestamp">
                            Mar/19 - Abr/19
                        </div>
                        <div className="item-text">
                            Curso sobre o protocolo HTTP feito da Alura.  
                        </div>
                    </li>
                    <li class="rb-item" ng-repeat="itembx">
                        <div class="item-title">Desenvolvedor de Jogos Eletrônicos</div>
                        <div class="timestamp">
                            Ago/16 - Nov/16
                        </div>
                        <div className="item-text">
                            Curso do UAITEC sobre desenvolvimento de jogos eletrônicos.  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </React.Fragment>