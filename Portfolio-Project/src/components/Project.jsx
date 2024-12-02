export default function Project(projects) {
    return (
        <>
        <li>
            {projects.map((project) => project)}
        </li>
        </>
    );
}

