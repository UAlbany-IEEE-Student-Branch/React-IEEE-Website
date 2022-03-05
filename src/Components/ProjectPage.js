import Header from "../Components/EventsBanner.js"
import Footer from "../Components/Footer.js"
import ArrowForward from "./images/arrowforward.png"
import ArrowBackward from "./images/arrowbackward.png"
import ProfileCard from "./ProfileCard.js"
import "./ProjectPage.css"
import React from "react"
import $ from 'jquery'

class ProjectPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            mainBanner: undefined,
            reducedBanner: undefined,
            colorPattern: undefined,
            images: undefined,
            projectName: undefined,
            description: undefined,
            avatar: undefined,
            name: undefined,
            membership: undefined,
            githublink: undefined,
            linkedinlink: undefined,
        };
    }

    static getDerivedStateFromProps(props, state)
    {
        var pattern = props.colorPattern;
        if(pattern === undefined || pattern === "" || pattern === "default")
        {
            pattern = ["rgb(25, 25, 25)", "rgb(90, 90, 90)", "rgb(90, 90, 90)", "white"];
        }
        else if(pattern === "dark")
        {
            pattern = ["rgb(58, 58, 58)", "rgb(90, 90, 90)", "rgb(150, 150, 150)", "black"];
        }
        else if(pattern === "balanced")
        {
            pattern = ["rgb(58, 58, 58)", "white", "white", "black"];
        }
        return{
            mainBanner: props.mainBanner,
            reducedBanner: props.reducedBanner,
            colorPattern: pattern,
            images: props.images,
            projectName: props.projectName,
            description: props.description,
            avatar: props.avatar,
            name: props.name,
            membership: props.membership,
            githublink: props.github,
            linkedinlink: props.linkedin
        };
    }
    render()
    {
        var currentimage = 0;
        var images = this.state.images;
        var colorPattern = this.state.colorPattern;

        if(this.state.reducedBanner === undefined || this.state.reducedBanner === "")
        {
            this.state.reducedBanner = this.state.mainBanner;
        }

        function setup()
        {
            for(let i = 0; i < images.length; i++)
            {
                var element = document.getElementById("img" + i.toString());
                element.src = images[i];
                if(i === 0)
                    element.className = "displayimg";
                else
                    element.className = "filledimg";
            }
            if(images === undefined || images === "")
            {
                document.getElementById("arrowbackward").style.visibility = "hidden";
                document.getElementById("arrowforward").style.visibility = "hidden";
                $("#featureimages").css({"visibility": "hidden", "width": "0px", "height": "100px"});
            }
            else if(images.length === 1)
            {
                document.getElementById("arrowbackward").style.visibility = "hidden";
                document.getElementById("arrowforward").style.visibility = "hidden";
            }
            else if(images.length < 1)
            {
                document.getElementById("arrowbackward").style.visibility = "hidden";
                document.getElementById("arrowforward").style.visibility = "hidden";
                $("#featureimages").css({"visibility": "hidden", "width": "0px", "height": "100px"});
            }
            $("#project-body").css({"backgroundColor": colorPattern[1]});
            $("#pagemaindescription").css({"color": colorPattern[3]});
        }

        function rotateImageFoward()
        {
            var prevelement = document.getElementById("img" + currentimage.toString());
            if(currentimage === (images.length - 1))
                currentimage = 0;
            else
                currentimage++;
            var element = document.getElementById("img" + currentimage.toString());

            element.className = "displayimg";
            element.style.animation = "fadein 1s";
            prevelement.className = "filledimg";
            prevelement.style.animation = "fadeout 1s";
        }

        function rotateImageBackward()
        {
            var prevelement = document.getElementById("img" + currentimage.toString());
            if(currentimage === 0)
                currentimage = images.length - 1;
            else
                currentimage--;
            var element = document.getElementById("img" + currentimage.toString());

            element.className = "displayimg";
            element.style.animation = "fadein 1s";
            prevelement.className = "filledimg";
            prevelement.style.animation = "fadeout 1s";
        }

        $(window).on('load', function()
        {
            setup()
        });

        return(
        <div id = "project-body" style={{backgroundColor: colorPattern[1]}}>
            <Header banner = {this.state.mainBanner} type = "project" color = {colorPattern[0]}/>

            <div className = "normal" id = "pagemaindescription">
                <h1 className = "normal" id = "pagemaindescriptiontitle">
                    {this.state.projectName}
                </h1>
                <p className = "normal" id = "pagemaindescriptionbody">
                    {this.state.description}
                </p>
            </div>
            <br/>
                <br/>
                    <br/>
                <br/>
            <br/>
            <div style = {{width: "100%", backgroundColor: colorPattern[2], padding: "20px"}}>
                <div className = "normal" id = "featureimages" style = {{backgroundColor: colorPattern[2]}}>
                    <img id = "img0" className = "emptyimg" alt = "Sample image1"/>
                    <img id = "img1" className = "emptyimg" alt = "Sample image2"/>
                    <img id = "img2" className = "emptyimg" alt = "Sample image3"/>
                    <img id = "img3" className = "emptyimg" alt = "Sample image4"/>
                    <img id = "img4" className = "emptyimg" alt = "Sample image5"/>
                    <img id = "img5" className = "emptyimg" alt = "Sample image6"/>
                    <img className = "normal" id = "arrowbackward" src = {ArrowBackward} alt = "arrowback" onClick = {rotateImageBackward.bind(this)}/>
                    <img className = "normal" id = "arrowforward" src = {ArrowForward} alt = "arrowforward" onClick = {rotateImageFoward.bind(this)}/>
                </div>
            </div>
            <ProfileCard
                avatar = {this.state.avatar}
                name = {this.state.name}
                membership = {this.state.membership}
                github = {this.state.githublink}
                linkedin = {this.state.linkedinlink}
                textColor = {colorPattern[3]}
            />
            <br/>
                <br/>
                    <br/>
                <br/>
            <br/>
            <Footer/>
        </div>
    );
    }
}
export default ProjectPage;
  