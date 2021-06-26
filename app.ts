


var document = document ?? undefined;

const isim = document?.querySelector("#isim") as HTMLInputElement;
const yas  = document?.querySelector("#yas")  as HTMLInputElement;
const form = document?.querySelector("form")!;

const selamla = document?.querySelector(".selamla")! as HTMLDivElement;//unlem isareti dogrulugu tartisilir

interface arayuz_insan {
    isim: string,
    yas : number,
}

class insan implements arayuz_insan {
    
    constructor(public isim: string, public yas: number) {}

    selam() {
        return `Merhaba ${this.isim}! Bugün nasılsın?`;
    }
}

//let ahmet = new insan("ahmet", 20);
//console.log(ahmet.selam() );

form?.addEventListener("submit", e => {

    
    e.preventDefault();

    const form_insan = new insan(isim.value, yas.valueAsNumber);

    selamla.innerText = form_insan.selam();

    console.log(selamla);

    form.reset();
});



interface joker<T> {
    veri: T,
    no: number,
}

const kart: joker<string> = {
    veri: "yazi",
    no: 5
}

const kart2: joker<boolean> = {
    veri: true,
    no: 3,
}



// enum (inam)

enum model {
    mercedes=1, bmw, fiat, sahin, volvo, audi, dogan, toyota
}

const benim_arabam = {
    yil: 2021,
    marka: model.toyota
}

console.log(model[benim_arabam.marka]);
console.log(benim_arabam.marka);