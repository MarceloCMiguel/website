import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import TeamComponent from "../../components/TeamComponent"

import isadora from "../../images/2020/team/isadora.jpg"
import dennis from "../../images/2020/team/dennis.jpg"
import giovana from "../../images/2020/team/giovana.jpg"
import guilherme from "../../images/2020/team/guilherme.jpg"
import marceloreis from "../../images/2020/team/marceloreis.jpg"
import ramiro from "../../images/2020/team/ramiro.jpg"
import beatrizbernardino from "../../images/2020/team/beatrizbernardino.jpg"

const EquipePage = () => (
    <Layout>
        <SEO title="Equipe 2020" />
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <nav class="breadcrumb is-large is-centered has-dot-separator" aria-label="breadcrumbs">
                        <ul>
                            <li><a href="/2019/team">2019</a></li>
                            <li><a href="/2020/team">2020</a></li>
                        </ul>
                    </nav>
                    <h1 class="title is-2 block-title-bw">Equipe 2020</h1>
                    <article class="tile is-child">
                        <div class="columns is-multiline is-centered">

                            {/* Equipe do Administrativo*/}
                            
                            <TeamComponent name="Guilherme Boldin"
                                           link="https://www.linkedin.com/in/guilherme-boldin-6ba36b165/"
                                           office="Capitão"
                                           link_area="/2020/project/#administrativo"
                                           class="images-team team-leader"
                                           image={guilherme}/>

                            <TeamComponent name="Danilo Dalapria"
                                           link="https://www.linkedin.com/in/danilo-dalapria/"
                                           office="Administrativo"
                                           link_area="/2020/project/#administrativo"
                                           class="images-team"
                                           image={isadora}/>

                             <TeamComponent name="Igor Seramisu"
                                           link="https://www.linkedin.com/in/igor-seramisu"
                                           office="Administrativo"
                                           link_area="/2020/project/#administrativo"
                                           class="images-team"
                                           image={isadora}/>

                            <TeamComponent name="Ramiro Pandullo"
                                           link="https://www.linkedin.com/in/rampandullo30"
                                           office="Administrativo"
                                           link_area="/2020/project/#administrativo"
                                           class="images-team"
                                           image={ramiro}/>


                            {/* Equipe de Controle */}

                            <TeamComponent name="André Annunziato"
                                           link="https://www.linkedin.com/in/andr%C3%A9-annunziato-526ab5169/"
                                           office="Controle"
                                           link_area="/2020/project/#controle"
                                           class="images-team team-leader"
                                           image={isadora}/>


                            <TeamComponent name="Alexandre"
                                           link="https://www.linkedin.com/in/igor-seramisu"
                                           office="Controle"
                                           link_area="/2020/project/#controle"
                                           class="images-team"
                                           image={isadora}/>


                            <TeamComponent name="Enrico Nardi"
                                            link="https://www.linkedin.com/in/enrico-aloisi-nardi-575a09164/"
                                            office="Controle"
                                            link_area="/2020/project/#controle"
                                            class="images-team"
                                            image={isadora}/>


                            <TeamComponent name="Maurício Ando"
                                            link="https://www.linkedin.com/in/maur%C3%ADcio-ando-3106b5164/"
                                            office="Controle"
                                            link_area="/2020/project/#controle"
                                            class="images-team"
                                            image={isadora}/>
                            
                            {/* Equipe de Eletrônica */}

                            <TeamComponent name="Giovana Lemes"
                                           link="https://www.linkedin.com/in/gio-lemes/"
                                           office="Eletrônica"
                                           link_area="/2020/project/#eletronica"
                                           class="images-team team-leader"
                                           image={giovana}/>


                            <TeamComponent name="Anna Beathriz"
                                            link="https://www.linkedin.com/in/anna-beathriz-cipriano-de-mauro-203417151/"
                                            office="Eletrônica"
                                            link_area="/2020/project/#eletronica"
                                            class="images-team"
                                            image={isadora}/>


                            <TeamComponent name="Gabriel Terhorst"
                                            link="https://www.linkedin.com/in/gabriel-terhorst-de-souza-a194a8146/"
                                            office="Eletrônica"
                                            link_area="/2020/project/#eletronica"
                                            class="images-team"
                                            image={isadora}/>


                            <TeamComponent name="Stephanie Liu"
                                            link="https://www.linkedin.com/in/stephanie-liu-469066195/"
                                            office="Eletrônica"
                                            link_area="/2020/project/#eletronica"
                                            class="images-team"
                                            image={isadora}/>

                            {/* Equipe de Mecânica */}

                            <TeamComponent name="Dennis"
                                            link="https://www.linkedin.com/in/stephanie-liu-469066195/"
                                            office="Mecânica"
                                            link_area="/2020/project/#mecanica"
                                            class="images-team team-leader"
                                            image={dennis}/>


                            <TeamComponent name="Beatriz Alexandre"
                                            link="https://www.linkedin.com/in/beatriz-galassi-alexandre-19873a18b/"
                                            office="Mecânica"
                                            link_area="/2020/project/#mecanica"
                                            class="images-team"
                                            image={isadora}/>


                            <TeamComponent name="Isadora Stigliani"
                                            link="https://www.linkedin.com/in/isadora-stigliani-dalberto-65526a19b/"
                                            office="Mecânica"
                                            link_area="/2020/project/#mecanica"
                                            class="images-team"
                                            image={isadora}/>


                            <TeamComponent name="João Guilherme"
                                            link="https://www.linkedin.com/in/stephanie-liu-469066195/"
                                            office="Mecânica"
                                            link_area="/2020/project/#mecanica"
                                            class="images-team"
                                            image={isadora}/>


                            <TeamComponent name="Juan Ruiz"
                                            link="https://www.linkedin.com/in/juan-ruiz-444248180/"
                                            office="Mecânica"
                                            link_area="/2020/project/#mecanica"
                                            class="images-team"
                                            image={isadora}/>

                            <TeamComponent name="Luiz Felipe"
                                            link="https://www.linkedin.com/in/luiz-felipe-lazzaron-682676181/"
                                            office="Mecânica"
                                            link_area="/2020/project/#mecanica"
                                            class="images-team"
                                            image={isadora}/>   

                            
                            <TeamComponent name="Marcelo Lisboa"
                                            link="https://www.linkedin.com/in/marcelo-lisboa-de-castro-reis-14b75a16b/"
                                            office="Mecânica"
                                            link_area="/2020/project/#mecanica"
                                            class="images-team"
                                            image={marceloreis}/>


                            <TeamComponent name="Paulo Chavarelli"
                                            link="https://www.linkedin.com/in/paulo-t-chavarelli-b5a02a170/"
                                            office="Mecânica"
                                            link_area="/2020/project/#mecanica"
                                            class="images-team"
                                            image={isadora}/>


                            <TeamComponent name="Ricardo Peres"
                                            link="https://www.linkedin.com/in/paulo-t-chavarelli-b5a02a170/"
                                            office="Mecânica"
                                            link_area="/2020/project/#mecanica"
                                            class="images-team"
                                            image={isadora}/>

                            {/* Equipe de Software */}

                            <TeamComponent name="Beatriz Bernardino"
                                            link="https://www.linkedin.com/in/beatriz-rianho-bernardino-7198061a4/"
                                            office="Software"
                                            link_area="/2020/project/#software"
                                            class="images-team team-leader"
                                            image={beatrizbernardino}/>


                            <TeamComponent name="Marcelo Cesário"
                                            link="https://www.linkedin.com/in/beatriz-rianho-bernardino-7198061a4/"
                                            office="Software"
                                            link_area="/2020/project/#software"
                                            class="images-team"
                                            image={isadora}/>


                            <TeamComponent name="Nicole Sarvasi"
                                            link="https://www.linkedin.com/in/beatriz-rianho-bernardino-7198061a4/"
                                            office="Software"
                                            link_area="/2020/project/#software"
                                            class="images-team"
                                            image={isadora}/>


                            <TeamComponent name="William Reis"
                                            link="https://www.linkedin.com/in/williamars/"
                                            office="Software"
                                            link_area="/2020/project/#software"
                                            class="images-team"
                                            image={isadora}/>

                        </div>
                    </article>
                </div>
            </div >
        </section >
    </Layout >
)

export default EquipePage
