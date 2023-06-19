
const getById = (id) => { return document.getElementById(id) };

/* botones header */
const botonInicio = getById("botonInicio");
const botonSobreMi = getById("botonSobreMi");
const botonCV = getById("botonCV");
const botonProyectos = getById("botonProyectos")
const argProgramaButton = getById('argProgramaButton');
const linkedinButton = getById('linkedinButton');
const githubButton = getById('githubButton');

/* contenedores */
const paginaContainer = getById("paginaContainer");
const inicioContainer = getById('InicioPage');
const sobreMiContainer = getById('SobreMiPage');
const skillsContainer = getById('SkillsPage');
const proyectosContainer = getById('ProyectosPage');
const ingresarContainer = getById('IngresarPage');
const allPages = getById('all-pages');

/* edicion inputs */
const subtituloValue = getById("subtituloValue");
const descValue = getById("descTituloValue");
const sobreMiValue = getById("sobreMiValue");
const experienciaValue = getById("experienciaValue");
const educacionValue = getById("educacionValue");

const titulo = getById("titulo");
const tituloDescripcion = getById("tituloDescripcion");
const descripcionSobreMi = getById("descripcionSobreMi");
const experiencia = getById("experiencia");
const educacion = getById("educacion");

const SubtituloDiv = getById("EditarSubtituloDiv");
const DescripcionDiv = getById("EditarDescripcionDiv");
const SobreMiDiv = getById("EditarSobreMiDiv");
const ExperienciaDiv = getById("EditarExperienciaDiv");
const EducacionDiv = getById("EditarEducacionDiv");


const SubtituloDiv2 = getById("EditarSubtituloDiv2");
const DescripcionDiv2 = getById("EditarDescripcionDiv2");
const SobreMiDiv2 = getById("EditarSobreMiDiv2");
const ExperienciaDiv2 = getById("EditarExperienciaDiv2");
const EducacionDiv2 = getById("EditarEducacionDiv2");

const emailInput = getById('emailInput');
const passwordInput = getById('passwordInput');
const botonIniciarSesion = getById('botonIniciarSesion');
const botonIngresar = getById("botonIngresar");
const errorInicioSesion = getById("errorInicioSesion");

/* logos edicion y guardar*/

const editarSubtitulo = getById("EditarSubtitulo");
const editarDescripcion = getById("EditarDescripcion");
const editarSobreMi = getById("EditarSobreMi");
const editarExperiencia = getById("EditarExperiencia");
const editarEducacion = getById("EditarEducacion");


const guardarSubtitulo = getById("GuardarSubtitulo");
const guardarDescripcion = getById("GuardarDescripcion");
const guardarSobreMi = getById("GuardarSobreMi");
const guardarExperiencia = getById("GuardarExperiencia");
const guardarEducacion = getById("GuardarEducacion");

/* carrousel skills */

const carrouselContainer = getById('carrouselContainer');
const carrousel1 = getById('carrousel1');
const carrousel2 = getById('carrousel2');
const carrousel3 = getById('carrousel3');

const goBackButton = getById('goBackButton');
const goFowardButton = getById('goFowardButton');

let email = "";
let password = "";
let linkedin = "";
let github = "";

let localEmail = "";
let localSesion = "";

/* fetch inicial para cargar y traer datos de usuario */
const datosUsuario = {
    id: 1,
    nombre: "Mara",
    apellido: "Schneider",
    educacion: "Tecnicatura en programación - UTN Regional Delta En curso",
    experienciaLaboral: " Actualmente trabajo como Frontend Developer para CDT - Soluciones tecnológicas, allí cuento con un equipo genial de personas que colaboran de forma organizada para llegar a los objetivos propuestos.",
    infoSobreUsuario: "Mi interés en la tecnología comenzó en 2021, cuando vi una publicación de instagram de Junior Achievement. Ellos ofrecían becas para capacitar chicos en Soporte IT nivel trainee y luego de varios meses en cuarentena decidí que no era mala idea probar estudiar algo nuevo, por lo cual me postulé. Para mi asombro quedé seleccionada y, luego de 6 meses de realizar cursos técnicos y fortalecer mis habilidades blandas con excelentes profesores, me animé a buscar un trabajo relacionado. Otra de mis sorpresas fue quedar seleccionada en las entrevistas para el puesto que ocupo actualmente: Analista Programadora, o dicho de otra forma 'Full Stack Developer', si bien mi trabajo está enfocado en el lado Frontend de la programación, sigo capacitándome para desempeñarme en ambos lados. ¡Disfruto mucho de diseñar y crear páginas web!",
    sesion: false,
    email: "mara@gmail.com",
    password: "argprograma",
    tituloProfesional: "Full Stack Developer Jr",
    descripcionTituloProfesional: "Actualmente desempeñándome como Frontend Developer, aprendiendo cosas nuevas y produciendo trabajo de calidad.",
    linkedin: "https://ar.linkedin.com/in/schneider-mara",
    github: "https://github.com/MaraSchneider7"
};

if (localEmail === "") {
    //fetch('http://localhost:8080/usuario/agregarUsuario', {
        fetch('http://b6uwm2qh0tdur846c7rd-mysql.services.clever-cloud.com/usuario/agregarUsuario', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(datosUsuario),
        mode: "cors",
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("ERROR");
        }
    })
        .then(data => {
            localEmail = localStorage.setItem('email', JSON.stringify(data.email));
            titulo.textContent = data.tituloProfesional;
            tituloDescripcion.textContent = data.descripcionTituloProfesional;
            descripcionSobreMi.textContent = data.infoSobreUsuario
            experiencia.textContent = data.experienciaLaboral;
            educacion.textContent = data.educacion;
            subtituloValue.value = data.tituloProfesional;
            descValue.value = data.descripcionTituloProfesional;
            sobreMiValue.value = data.infoSobreUsuario
            experienciaValue.value = data.experienciaLaboral;
            educacionValue.value = data.educacion;

            email = data.email;
            password = data.password;
            linkedin = data.linkedin;
            github = data.github;
        })
        .catch((error) => console.error("FETCH ERROR:", error));
} else {
    fetch('http://b6uwm2qh0tdur846c7rd-mysql.services.clever-cloud.com/usuario/obtenerUsuario')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("ERROR");
            }
        })
        .then(data => {
            localStorage.setItem('email', JSON.stringify(data.email));
            titulo.textContent = data.tituloProfesional;
            tituloDescripcion.textContent = data.descripcionTituloProfesional;
            descripcionSobreMi.textContent = data.infoSobreUsuario
            experiencia.textContent = data.experienciaLaboral;
            educacion.textContent = data.educacion;
            subtituloValue.value = data.tituloProfesional;
            descValue.value = data.descripcionTituloProfesional;
            sobreMiValue.value = data.infoSobreUsuario
            experienciaValue.value = data.experienciaLaboral;
            educacionValue.value = data.educacion;
            email = data.email;
            password = data.password;
            linkedin = data.linkedin;
            github = data.github;
        })
        .catch((error) => console.error("FETCH ERROR:", error));
}



/* logica para iniciar sesion */

botonIniciarSesion.addEventListener('click', () => {
    const body = {
        "id": 1,
        "sesion": true
    }

    if (emailInput.value === email && passwordInput.value === password) {
        errorInicioSesion.style.display = "none";
        fetch('http://b6uwm2qh0tdur846c7rd-mysql.services.clever-cloud.com/usuario/editarUsuario', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(body),
            mode: "cors",
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("ERROR");
            }
        })
            .then(data => {
                if (data.sesion === true) {
                    localSesion = localStorage.setItem("sesion", JSON.stringify(data.sesion));
                    botonIngresar.textContent = "Salir";
                    setPage("perfilEdicion");
                } else {
                    console.log("Hubo un error iniciando sesion")
                }
            })

    } else {
        errorInicioSesion.style.display = "initial";
    }
})

/* Redirección de botón Argentina Programa */


if (argProgramaButton) {
    argProgramaButton.addEventListener('click', () => {
        window.open('https://www.argentina.gob.ar/economia/conocimiento/argentina-programa', '_blank');
    })
}

/* Redirección de botones linkedin y github */


if (linkedinButton) {
    linkedinButton.addEventListener('click', () => {
        window.open(linkedin, '_blank');
    })
}


if (githubButton) {
    githubButton.addEventListener('click', () => {
        window.open(github, '_blank');
    })
}


/* Cambiar el contenido de la página */

const setPage = (id) => {


    switch (id) {
        case "botonInicio": {
            allPages.style.display = "block";
            ingresarContainer.style.display = "none";
            paginaContainer.scrollIntoView()
        }
            break;
        case "botonSobreMi": {
            allPages.style.display = "block";
            ingresarContainer.style.display = "none";
            sobreMiContainer.scrollIntoView()
        }
            break;
        case "botonCV": {
            allPages.style.display = "block";
            ingresarContainer.style.display = "none";
            skillsContainer.scrollIntoView()
        }
            break;
        case "botonProyectos": {
            allPages.style.display = "block";
            ingresarContainer.style.display = "none";
            proyectosContainer.scrollIntoView()
        }
            break;
        case "botonIngresar": {
            allPages.style.display = "none";
            ingresarContainer.style.display = "flex";
        }
            break;
        case "perfilEdicion": {
            allPages.style.display = "initial";
            ingresarContainer.style.display = "none";
            editarSubtitulo.style.display = "initial";
            editarDescripcion.style.display = "initial";
            editarSobreMi.style.display = "initial";
            editarExperiencia.style.display = "initial";
            editarEducacion.style.display = "initial";
        }
            break;
        default: {
            inicioContainer.scrollIntoView()
            break;
        }
    }
}

if (localStorage.getItem("sesion") === "true") {
    botonIngresar.textContent = "Salir";
    setPage("perfilEdicion");
}

botonInicio.addEventListener('click', () => {
    setPage("botonInicio");
})

botonSobreMi.addEventListener('click', () => {
    setPage("botonSobreMi");
})


botonCV.addEventListener('click', () => {
    setPage("botonCV");
})

botonProyectos.addEventListener('click', () => {
    setPage("botonProyectos");
})

/* logica para cerrar sesion */
botonIngresar.addEventListener('click', () => {
    if (botonIngresar.textContent === "Salir") {
        fetch('http://b6uwm2qh0tdur846c7rd-mysql.services.clever-cloud.com/usuario/editarUsuario', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({ id: 1, sesion: false }),
            mode: "cors",
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("ERROR");
            }
        })
            .then(data => {
                location.reload()
                localStorage.setItem("sesion", JSON.stringify(data.sesion))
            })
        botonIngresar.textContent = "Ingresar";
    } else if (botonIngresar.textContent === "Ingresar") {
        setPage("botonIngresar");
    }
})


/* Carrousel de skills */


let valueCarrousel = 1
carrousel2.style.display = "none"
carrousel3.style.display = "none"
carrousel1.style.display = "block"
const rest1ToValue = goBackButton.addEventListener('click', () => {
    valueCarrousel = valueCarrousel - 1
    if (valueCarrousel < 1) {
        valueCarrousel = 3;
    }
    getImage()
})
const add1ToValue = goFowardButton.addEventListener('click', () => {
    valueCarrousel = valueCarrousel + 1
    if (valueCarrousel > 3) {
        valueCarrousel = 1;
    }
    getImage()
})
const getImage = () => {
    switch (valueCarrousel) {
        case 1: carrousel2.style.display = "none"
            carrousel3.style.display = "none"
            carrousel1.style.display = "block"
            break;
        case 2: carrousel1.style.display = "none"
            carrousel3.style.display = "none"
            carrousel2.style.display = "block"
            break;
        case 3: carrousel1.style.display = "none"
            carrousel2.style.display = "none"
            carrousel3.style.display = "block"
            break;
        default: carrousel2.style.display = "none"
            carrousel3.style.display = "none"
            carrousel1.style.display = "block"
            break;
    }
}


// modo edicion de inputs

editarSubtitulo.addEventListener('click', () => {
    SubtituloDiv.style.display = "none";
    SubtituloDiv2.style.display = "flex";
    guardarSubtitulo.style.display = "initial";
})
editarDescripcion.addEventListener('click', () => {
    DescripcionDiv.style.display = "none";
    DescripcionDiv2.style.display = "flex";
    guardarDescripcion.style.display = "initial";
})
editarSobreMi.addEventListener('click', () => {
    SobreMiDiv.style.display = "none";
    SobreMiDiv2.style.display = "flex";
    guardarSobreMi.style.display = "initial";
})
editarExperiencia.addEventListener('click', () => {
    ExperienciaDiv.style.display = "none";
    ExperienciaDiv2.style.display = "flex";
    guardarExperiencia.style.display = "initial";
})
editarEducacion.addEventListener('click', () => {
    EducacionDiv.style.display = "none";
    EducacionDiv2.style.display = "flex";
    guardarEducacion.style.display = "initial";
})

guardarSubtitulo.addEventListener('click', () => {
    const body = { id: 1, tituloProfesional: subtituloValue.value }
    fetch('http://b6uwm2qh0tdur846c7rd-mysql.services.clever-cloud.com/usuario/editarUsuario', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(body),
        mode: "cors",
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("ERROR");
        }
    })
        .then(data => {
            if (data.sesion === true) {
                titulo.textContent = data.tituloProfesional;
                editarSubtitulo.style.display = "initial";
                guardarSubtitulo.style.display = "none";
                SubtituloDiv.style.display = "flex";
                SubtituloDiv2.style.display = "none";
            } else {
                console.log("Hubo un error modificando el titulo profesional")
            }
        })
})

guardarDescripcion.addEventListener('click', () => {
    const body = { id: 1, descripcionTituloProfesional: descValue.value }
    fetch('http://b6uwm2qh0tdur846c7rd-mysql.services.clever-cloud.com/usuario/editarUsuario', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(body),
        mode: "cors",
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("ERROR");
        }
    })
        .then(data => {
            if (data.sesion === true) {
                tituloDescripcion.textContent = data.descripcionTituloProfesional;
                editarDescripcion.style.display = "initial";
                guardarDescripcion.style.display = "none";
                DescripcionDiv.style.display = "flex";
                DescripcionDiv2.style.display = "none";
            } else {
                console.log("Hubo un error modificando la descripcion del titulo profesional")
            }
        })
})

guardarSobreMi.addEventListener('click', () => {
    const body = { id: 1, infoSobreUsuario: sobreMiValue.value }
    fetch('http://b6uwm2qh0tdur846c7rd-mysql.services.clever-cloud.com/editarUsuario', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(body),
        mode: "cors",
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("ERROR");
        }
    })
        .then(data => {
            if (data.sesion === true) {
                descripcionSobreMi.textContent = data.infoSobreUsuario;
                editarSobreMi.style.display = "initial";
                guardarSobreMi.style.display = "none";
                SobreMiDiv.style.display = "flex";
                SobreMiDiv2.style.display = "none";
            } else {
                console.log("Hubo un error editando la informacion del usuario")
            }
        })
})

guardarExperiencia.addEventListener('click', () => {
    const body = { id: 1, experienciaLaboral: experienciaValue.value }
    fetch('http://b6uwm2qh0tdur846c7rd-mysql.services.clever-cloud.com/usuario/editarUsuario', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(body),
        mode: "cors",
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("ERROR");
        }
    })
        .then(data => {
            if (data.sesion === true) {
                experiencia.textContent = data.experienciaLaboral;
                editarExperiencia.style.display = "initial";
                guardarExperiencia.style.display = "none";
                ExperienciaDiv.style.display = "flex";
                ExperienciaDiv2.style.display = "none";
            } else {
                console.log("Hubo un error iniciando sesion")
            }
        })
})

guardarEducacion.addEventListener('click', () => {
    const body = { id: 1, educacion: educacionValue.value }
    fetch('http://b6uwm2qh0tdur846c7rd-mysql.services.clever-cloud.com/usuario/editarUsuario', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(body),
        mode: "cors",
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("ERROR");
        }
    })
        .then(data => {
            if (data.sesion === true) {
                educacion.textContent = data.educacion;
                editarEducacion.style.display = "initial";
                guardarEducacion.style.display = "none";
                EducacionDiv.style.display = "flex";
                EducacionDiv2.style.display = "none";
            } else {
                console.log("Hubo un error iniciando sesion")
            }
        })
})



