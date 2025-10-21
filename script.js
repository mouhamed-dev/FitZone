


// funtion Oups
    function oups(e) {
        e.preventDefault();
        alert("Oups 😒, les liens ne sont pas encore disponibles.");
        e.stopPropagation();
    }

    function oupsBlog(e) {
        e.preventDefault();
        alert("Oups 😒, l'article n'est pas encore disponible.");
        e.stopPropagation();
    }