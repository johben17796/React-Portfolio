export default function Project(projects) {
//run renderProjectPiece on all projects in the array, then stick those onto the projectmount on the project page.
function renderProjectPiece(project) {
    const title = project.title;
    const link = project.link;
    return (
        <>
            <div className="card">
                <div>
                    {title}
                </div>
                <div>
                    <link href={link} />
                </div>
            </div>
        </>
    );
};
function renderProjectsModule(projectArray) {
    const module = [];
    for (let i = 0; i < projectArray.length; i++) {
        const newCard = renderProjectPiece(projectArray[i]);
        module.push(newCard);
    }
    return module;
};
const theArray = [
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
]
renderProjectsModule(theArray);
}

