import React from "react";
import Header from "./EventsBanner.js"
import Footer from "./Footer.js"
import ProfileCard from "./ProfileCard.js"
import "./WeeklyEventPage.css"

class WeeklyEventPage extends React.Component
{
    static getDerivedStateFromProps(props, state)
    {
        return {
            banner: props.banner,
            reducedBanner: props.reducedBanner,
            type: props.type,
            title: props.title,
            subtitle: props.subtitle,
            description: props.description,
            hostImage: props.hostImage,
            hostName: props.hostName,
            hostMembership: props.hostMembership,
            hostLinkedin: props.hostLinkedin,
            cohostImage: props.cohostImage,
            cohostName: props.cohostName,
            cohostMembership: props.cohostMembership,
            cohostLinkedin: props.cohostLinkedin,
            location: props.location,
            link: props.link,
        };
    }
    render()
    {
        return(
            <div id = "weekly-event-page-body" >
                <Header type = {this.state.type}/>
                <div id = "weekly-event-title-container">
                    <h1 id = "weekly-event-title" >{this.state.title}<br/><span id = "weekly-event-subtitle">{this.state.subtitle}</span></h1>
                    <div id = "title-line1-bend"/>
                    <div id = "title-line2-bend"/>
                    <div id = "title-line1-straight"/>
                    <div id = "title-line2-straight"/>
                </div>
                <br/>
                    <br/>
                        <br/>
                        <br/>
                    <br/>
                <br/>
                <div id = "weekly-event-hosts" >
                    <h1 style = {{transform: "translateX(-50%)", left: "50%", fontSize: "50px", textAlign: "center", color: "white", border: ".5rem solid rgb(204,102,0)", position: "relative", height: "4.5rem", width: "20rem"}}>Event Hosts</h1>
                    <ProfileCard
                        avatar = {this.state.hostImage}
                        name = {this.state.hostName}
                        membership = {this.state.hostMembership}
                        linkedin = {this.state.hostLinkedin}
                    />
                </div>
                <br/>
                    <br/>
                <br/>
                <p id = "weekly-event-description" >{this.state.description}</p>
                <br/>
                    <br/>
                <br/>
                <Footer showImage = {false}/>
            </div>
        );
    }
}
export default WeeklyEventPage;