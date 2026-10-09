const CACHE_NAME = "tardis-soundboard-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./background.png",
    "./TARDIS.mp3",
    "./Dalek.mp3",
    "./Cyberman.mp3",
    "./Theme.mp3",
    "./Vortex.mp3",
    "./Sonic.mp3"
];

self.addEventListener("install", function(event) {

    event.waitUntil(

        caches.open(CACHE_NAME).then(function(cache) {

            return cache.addAll(FILES_TO_CACHE);

        })

    );

});

self.addEventListener("fetch", function(event) {

    event.respondWith(

        caches.match(event.request).then(function(response) {

            return response || fetch(event.request);

        })

    );

});
