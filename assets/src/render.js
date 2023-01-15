class HTML {
    //Need to create a function that when I input the team member it appends the html file
static appendEmployeeCard() {`
<div class="card d-inline-block shadow p-3 mb-5 bg-body-tertiary rounded text-center" style="width: 18rem;">
<div class="card-header bg-primary text-white">$Jarrett<br />👓Manager</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: 1</li>
    <li class="list-group-item">Email: <a href="mailto: jbutler98@hotmail.com"
            class="card-link">jbutler98@hotmail.com</a></li>
    <li class="list-group-item">Office Number: 1</li>
</ul>
</div>`
}
    //Need to create a function that when I input the 
    static generateHTML(answers) {
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
                <h1 class="navbar-text p-3 text-center">${answers.title}</h1>
            </div>
        </nav>
    </header>

    <main class="grid gap-3 text-center">
        <div class="card d-inline-block shadow p-3 mb-5 bg-body-tertiary rounded text-center" style="width: 18rem;">
            <div class="card-header bg-primary text-white">$Jarrett<br />👓Manager</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: 1</li>
                <li class="list-group-item">Email: <a href="mailto: jbutler98@hotmail.com"
                        class="card-link">jbutler98@hotmail.com</a></li>
                <li class="list-group-item">Office Number: 1</li>
            </ul>
        </div>
        <div class="card d-inline-block shadow p-3 mb-5 bg-body-tertiary rounded text-center" style="width: 18rem;">
            <div class="card-header bg-primary text-white">Katie<br />👓Employee</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: 2</li>
                <li class="list-group-item">Email: <a href="mailto: jbutler98@hotmail.com"
                        class="card-link">jbutler98@hotmail.com</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/jarrettbutler" target="_blank"
                        class="card-link">jarrettbutler</a></li>
            </ul>
        </div>
        <div class="card d-inline-block shadow p-3 mb-5 bg-body-tertiary rounded text-center" style="width: 18rem;">
            <div class="card-header bg-primary text-white">Maurice<br />🧑‍🎓Intern</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: 3</li>
                <li class="list-group-item">Email: <a href="mailto: jbutler98@hotmail.com"
                        class="card-link">jbutler98@hotmail.com</a></li>
                <li class="list-group-item">School: Harvard</li>
            </ul>
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