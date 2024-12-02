import Project from "../components/Project";
import projectBox from "../components/projectBox";
export default function PortfolioPage () {
    return (
        <Project projects={[
            // this doesn't work yet !!! :(
                {
                    title: "preworkGuide",
                    link: "https://github.com/johben17796/prework-study-guide"
                },
                {
                    title: "EmployeeManager",
                    link: "https://github.com/johben17796/Employee-Manager"
                },
                {
                    title: "VehicleBuilder",
                    link: "https://github.com/johben17796/Vehicle-Builder"
                },
                {
                    title: "ReadMeGenerator",
                    link: "https://github.com/johben17796/README-Generator"
                },
                {
                    title: "weatherDashboard",
                    link: "https://github.com/johben17796/weather-API-Dashboard"
                },
                {
                    title: "ReactPortfolio",
                    link: "https://github.com/johben17796/React-Portfolio"
                }
        ]}
     />
        
    );
}
