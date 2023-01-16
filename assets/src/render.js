class HTML {
    //Need to create a function that when I input the team member it appends the html file
    static appendEmployeeCard(projectDirectory) {return `
    <div class="card d-inline-block shadow p-3 mb-5 bg-body-tertiary rounded text-center" style="width: 18rem;">
    <div class="card-header bg-primary text-white">${projectDirectory.name}<br />${projectDirectory.role}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${projectDirectory.id}</li>
        <li class="list-group-item">Email: <a href="mailto: ${projectDirectory.email}"
                class="card-link">${projectDirectory.email}</a></li>
         ${this.appendCustom(projectDirectory.role)}
    </ul>
    </div>`
        }
    //Need to create a function that when I input the role it will give that section for the specific role
    static appendCustom(projectDirectory) {
        const role={
            manager: `<li class="list-group-item">Office Number: ${projectDirectory.officeNumber}</li>`,
            engineer: `<li class="list-group-item">Office Number: ${projectDirectory.github}</li>`,
            intern: `<li class="list-group-item">Office Number: ${projectDirectory.school}</li>`,
        }
        return role[projectDirectory]
    }
    static generateHTML() {
    return `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlphaTeam</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <nav class="navbar-brand bg-body-tertiary">
            <div class="container-fluid bg-danger text-white">
                <h1 class="navbar-text p-3 text-center">My Team</h1>
            </div>
        </nav>
    </header>

    <main class="grid gap-3 text-center">
        ${this.appendEmployeeCard}
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
</body>
</html>
        `
}
}
module.exports = HTML;

