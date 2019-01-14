self.addEventListener('install',function(){
console.log("SW Installed..");
event.waitUntil(caches.open('static').then(function(cache){
  cache.add('/');
  cache.add('/index.html');
  cache.add('methods.js');
  cache.add('/css/switch.css');
  cache.add('/src/img/arrows.png');
  cache.add('/src/img/black-banner.png');
  cache.add('/src/img/ericsson_logo.png');
  cache.add('/src/img/ericsson_sade.patt');
  cache.add('/src/img/ericsson.patt');
  cache.add('/src/img/ericsson.png');
  cache.add('/src/img/humidity.png');
  cache.add('/src/img/illuminance.png');
  cache.add('/src/img/loudness.png');
  cache.add('/src/img/temperature.png');
  

}));


});

self.addEventListener('activate',function(){
console.log("SW Activate");
});

self.addEventListener('fetch',function(event){
event.respondWith(
caches.match(event.request).then(function(res){
  if(res)
  {
    return res;
  }else
  {
    return fetch(event.request);
  }
})
);
});