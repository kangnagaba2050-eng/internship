// About section ka dynamic data array
const services = [
    {
        title: "Training",
        description: "Providing industry-oriented training to students.",
        icon: "🎓"
          },
    {
        title: "Development",
        description: "Building modern websites and web applications.",
        icon: "💻"
    },
    {
        title: "Innovation",
        description: "Working on innovative ideas and real-world solutions.",
        icon: "🚀"
    },
    {
        title: "Internship",
        description: "Helping students grow through internship & mentorship.",
        icon: "👥"
    }
];

const servicesContainer = document.getElementById("servicesContainer");


servicesContainer.innerHTML =
 services.map(
    (service) => 
    <div class="service-card" onclick="moveServiceSlider(this)">
        <div class="icon">${service.icon}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    </div>
`);


