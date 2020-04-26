import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Link } from "gatsby"


const TeamComponent = function(props) {
    return (
        <div class="column is-3 is-narrow">
            <OutboundLink
                href={props.link}
                target="_blank"
            >
                <img
                    class={props.class}
                    src={props.image}
                    alt="Imagem do integrante"
                />
                <p class="team-member">{props.name}</p>
            </OutboundLink>
            <Link
                class="team-area"
                to={props.link_area}
            >
                {props.office}
            </Link>
        </div>
    )
}
export default TeamComponent