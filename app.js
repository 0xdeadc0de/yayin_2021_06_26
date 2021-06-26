"use strict";
var document = document !== null && document !== void 0 ? document : undefined;
var isim = document === null || document === void 0 ? void 0 : document.querySelector("#isim");
var yas = document === null || document === void 0 ? void 0 : document.querySelector("#yas");
var form = document === null || document === void 0 ? void 0 : document.querySelector("form");
var selamla = document === null || document === void 0 ? void 0 : document.querySelector(".selamla"); //unlem isareti dogrulugu tartisilir
var insan = /** @class */ (function () {
    function insan(isim, yas) {
        this.isim = isim;
        this.yas = yas;
    }
    insan.prototype.selam = function () {
        return "Merhaba " + this.isim + "! Bug\u00FCn nas\u0131ls\u0131n?";
    };
    return insan;
}());
//let ahmet = new insan("ahmet", 20);
//console.log(ahmet.selam() );
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var form_insan = new insan(isim.value, yas.valueAsNumber);
    selamla.innerText = form_insan.selam();
    console.log(selamla);
    form.reset();
});
var kart = {
    veri: "yazi",
    no: 5
};
var kart2 = {
    veri: true,
    no: 3,
};
// enum (inam)
var model;
(function (model) {
    model[model["mercedes"] = 1] = "mercedes";
    model[model["bmw"] = 2] = "bmw";
    model[model["fiat"] = 3] = "fiat";
    model[model["sahin"] = 4] = "sahin";
    model[model["volvo"] = 5] = "volvo";
    model[model["audi"] = 6] = "audi";
    model[model["dogan"] = 7] = "dogan";
    model[model["toyota"] = 8] = "toyota";
})(model || (model = {}));
var benim_arabam = {
    yil: 2021,
    marka: model.toyota
};
console.log(model[benim_arabam.marka]);
console.log(benim_arabam.marka);
