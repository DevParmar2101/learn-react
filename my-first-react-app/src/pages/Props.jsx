import ProfileCard from "../components/ProfileCard";

function Props() {
    const employees = [
        {
            id: 1,
            name: "Dev Parmar",
            position: "Full Stack Developer",
            city: "Ahmedabad",

        },
        {
            id: 2,
            name: "Rahul Sharma",
            position: "Frontend Developer",
            city: "Mumbai",

        },
        {
            id: 3,
            name: "Ritvik Pandya",
            position: "Trainee",
            city: "Bhopal",

        },
    ];
    return (
        <div>
            <h2>Props Lesson</h2>
            <p>This page is for learning Props.</p>

            {/* Version 1

            <div style={{ marginTop: '25px' }}>
                <ProfileCard />
            </div>

            Version 2

            <ProfileCard
                name="Dev Parmar"
                position="Full Stack Developer"
            />
            <ProfileCard
                name="Rahul Sharma"
                position="Frontend Developer"
                city="Mumbai"
            />
            <ProfileCard
                name="Ritvik Pandya"
                position="Trainee"
                city="Bhopal"
            />*/}

            {employees.map((employee) => (
                <ProfileCard
                    key={employee.id}
                    name={employee.name}
                    position={employee.position}
                    city={employee.city}
                />
            ))}
        </div>
    );
}
export default Props;