const generateHTML = projectDirectory => {
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
     ${appendEmployeeCard(projectDirectory)}
     </main>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
              crossorigin="anonymous"></script>
      </body>
      </html>
`
};
//function that appends the cards into the HTML function
const appendEmployeeCard = function(projectDirectory){
var employees = ``;
        for(let i=0; i<projectDirectory.length; i++){
            employees=employees+`        
            <div class="card d-inline-block shadow p-3 mb-5 bg-body-tertiary rounded text-center" style="width: 18rem;">
                 <div class="card-header bg-primary text-white">${projectDirectory[i].name}<br />${projectDirectory[i].role}</div>
                 <ul class="list-group list-group-flush">
                     <li class="list-group-item">ID: ${projectDirectory[i].id}</li>
                     <li class="list-group-item">Email:  <a href="mailto: ${projectDirectory[i].email}"
                             class="card-link">${projectDirectory[i].email}</a></li>
                      ${appendCustom(projectDirectory[i])}
                 </ul>
                 </div>`
        }
        return employees;
}
//This function takes the role and changes what is imputed into the last block of the Employee card based on there role
const appendCustom = function(projectDirectory) {
var custom = ``;
            if(projectDirectory.officeNumber){
                custom=custom+ `<li class="list-group-item">Office Number:  ${projectDirectory.officeNumber}</li>`;
            } 
            else if(projectDirectory.github){
                custom=custom+ `<li class="list-group-item">Github account:  ${projectDirectory.github}</li>`;
            } 
            else {
                custom=custom+ `<li class="list-group-item">School:  ${projectDirectory.school}</li>`;
            }
        return custom;
}

//do not use any () when exporting as it will invoke it automatically.
module.exports = generateHTML;