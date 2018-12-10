(function(window, undefined) {
  var dictionary = {
    "41417713-47fb-4fdb-bfa6-3383bba24161": "Ajustes",
    "4b663b57-a41e-40e8-b1bb-0741a609d008": "Rutinas",
    "6526649c-c912-4b59-bc42-ea045aff108d": "Registro",
    "04969fcb-eebe-4b2c-a79a-8c59f8457336": "Nuevo ejercicio",
    "e7c97d81-8d7c-49af-999e-657ee439b70b": "ejercicios",
    "8d9b92fb-7391-4f07-b2af-390879e68c9b": "Logro",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Inicio sesion",
    "ab120833-06fe-4539-b322-3115c313cacd": "Perfil",
    "8e1c86f0-27ce-4f42-afd3-004208c28dac": "Busqueda",
    "7ddce4fd-0c75-460c-922d-e15964152892": "Menu Principal",
    "9e7c5569-21e9-4c90-abce-75150a71caa8": "crear rutina",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);