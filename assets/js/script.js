// IIFE para manejar la asignación del src del iframe
const moduloCuevana = (() => {
    function setMultimedia(url, id) {
        const tipo = document.querySelector(id);
        tipo ? tipo.setAttribute("src", url) : console.log(`No se encontró un iframe con el id ${id}`);
    }

    return {
        getMultimedia: function (url, id) {
            setMultimedia(url, id);
        }
    };
})();

// Clase Multimedia con un atributo protegido usando closures
class Multimedia {
    #url;
    constructor(url) {
        this.#url = url;
        this.getUrl = function () {
            return this.#url;
        };
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase Reproductor que extiende Multimedia
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    // Método para reproducir multimedia
    playMultimedia() {
        moduloCuevana.getMultimedia(this.getUrl(), this.id);
    }

    // Métodos para ajustar el inicio del video
    getInicio(url, id) {
        moduloCuevana.getMultimedia(url, id);
    }

    setInicio(runTime) {
        const newUrl = `${this.getUrl()}&start=${runTime}`;
        this.getInicio(newUrl, this.id);
    }
}

// Crear instancias y reproducir multimedia
const musica = new Reproductor("https://www.youtube.com/embed/4xDzrJKXOOY?si=BVxIW_zSlmXlc-WK", "#musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/LnHJ5vbgBzs?si=eE56gUA2rpsu5EbP", "#peliculas");
const series = new Reproductor("https://www.youtube.com/embed/FDpOQK0Gprc?si=yd4VHnMYsuNRQmzO", "#series");

musica.playMultimedia();
pelicula.playMultimedia();
series.playMultimedia();
series.setInicio(120);