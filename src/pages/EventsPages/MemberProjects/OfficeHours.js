import ProjectPage from "../../../Components/ProjectPage";

function OfficeHours()
{
    //To configure project page, change the following properties accordingly
    let banner = "/images/2021-2022/projects/Office-Hours/banner.png"
    let profileImage = "/images/2021-2022/projects/Office-Hours/jun-won_oh.jfif"
    //Featured images on project page. Limited to 6 images
    let images =
    [
        "/images/2021-2022/projects/Office-Hours/pic1.png",
        "/images/2021-2022/projects/Office-Hours/pic2.png",
        "/images/2021-2022/projects/Office-Hours/pic3.png",
    ]

    let github = "https://github.com/JunWonOh/Office-Hours-MLH";
    let linkedin = "https://www.linkedin.com/in/jun-won-oh-733053200/";

    let projectName = "Office Hours"
    let description = "A free, easy to use video conferencing website. Great for low bandwidth calls, as well as collaborating on diagrams through an interactive white board.";
    return(
        <ProjectPage
            mainBanner = {banner}
            colorPattern = "default"
            images = {images}
            github = {github}
            linkedin = {linkedin}
            avatar = {profileImage}
            name = "Jun Won Oh"
            membership = "Ex Social Media Director"
            projectName = {projectName}
            description = {description}
        />
    );
}
export default OfficeHours;