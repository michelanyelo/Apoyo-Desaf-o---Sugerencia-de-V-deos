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