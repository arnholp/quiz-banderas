const inicio = document.getElementById('bienvenida')
const banderas = document.getElementById('banderas')
banderas.style.display = 'none'
const primero = document.getElementById('primero')
const segundo = document.getElementById('segundo')
const tercero = document.getElementById('tercero')
const cuarto = document.getElementById('cuarto')
const quinto = document.getElementById('quinto')
const sexto = document.getElementById('sexto')
const septimo = document.getElementById('septimo')
const octavo = document.getElementById('octavo')
const noveno = document.getElementById('noveno')
const decimo = document.getElementById('decimo')
const final = document.getElementById('resultado')

let puntos = 0

segundo.style.display = 'none'
tercero.style.display = 'none'
cuarto.style.display = 'none'
quinto.style.display = 'none'
sexto.style.display = 'none'
septimo.style.display = 'none'
octavo.style.display = 'none'
noveno.style.display = 'none'
decimo.style.display = 'none'
final.style.display = 'none'


const empezar = document.getElementById('btn')
empezar.addEventListener('click', iniciarJuego)


function iniciarJuego() {
    banderas.style.display = 'flex'
    inicio.style.display = 'none'
    let egipto = document.getElementById('egipto')
    let canada = document.getElementById('canada')
    let cuba = document.getElementById('cuba')
    let suiza = document.getElementById('suiza')

    egipto.addEventListener('click', (e) => {
        if (e.target.textContent === 'EGIPTO') {
            egipto.style.background = '#008000'  
            puntos++
        }
    })

    canada.addEventListener('click', (e) => {
        if (e.target.textContent === 'CANADÁ') {
            canada.style.background = '#ff0000'
            egipto.style.background = '#008000'
        } 
    })

    cuba.addEventListener('click', (e) => {
        if (e.target.textContent === 'CUBA') {
            cuba.style.background = '#ff0000'
            egipto.style.background = '#008000'
        }  
    })

    suiza.addEventListener('click', (e) => {
        if (e.target.textContent === 'SUIZA') {
            suiza.style.background = '#ff0000'
            egipto.style.background = '#008000'
        }  
    })

    let btn1 = document.getElementById('btn1')
    btn1.addEventListener('click', segundafase)
}

function segundafase(){
        segundo.style.display = 'flex'
        primero.style.display = 'none'

        let peru = document.getElementById('peru')
        let norCorea = document.getElementById('corea-norte')
        let japon = document.getElementById('japon')
        let ucrania = document.getElementById('ucrania')
    
        peru.addEventListener('click', (e) => {
            if (e.target.textContent === 'PERÚ') {
                peru.style.background = '#ff0000'
                japon.style.background = '#008000'  
            }
        })
    
        norCorea.addEventListener('click', (e) => {
            if (e.target.textContent === 'COREA DEL NORTE') {
                norCorea.style.background = '#ff0000'
                japon.style.background = '#008000'
            } 
        })
    
        japon.addEventListener('click', (e) => {
            if (e.target.textContent === 'JAPON') {
                japon.style.background = '#008000'
                puntos++
            }  
        })
    
        ucrania.addEventListener('click', (e) => {
            if (e.target.textContent === 'UCRANIA') {
                ucrania.style.background = '#ff0000'
                japon.style.background = '#008000'
            }  
        })
    
        let btn2 = document.getElementById('btn2')
        btn2.addEventListener('click', tercerafase)
    
}

function tercerafase() {
    tercero.style.display = 'flex'
    segundo.style.display = 'none'

        let turquia = document.getElementById('turquia')
        let mexico = document.getElementById('mexico')
        let serbia = document.getElementById('serbia')
        let alemania = document.getElementById('alemania')
    
        turquia.addEventListener('click', (e) => {
            if (e.target.textContent === 'TURQUIA') {
                turquia.style.background = '#ff0000'
                alemania.style.background = '#008000'  
            }
        })
    
        mexico.addEventListener('click', (e) => {
            if (e.target.textContent === 'MEXICO') {
                mexico.style.background = '#ff0000'
                alemania.style.background = '#008000' 
            } 
        })
    
        serbia.addEventListener('click', (e) => {
            if (e.target.textContent === 'SERBIA') {
                serbia.style.background = '#ff0000'
                alemania.style.background = '#008000'
            }  
        })

        alemania.addEventListener('click', (e) => {
            if (e.target.textContent === 'ALEMANIA') {
                alemania.style.background = '#008000'
                puntos++
            }  
        })
    
        let btn3 = document.getElementById('btn3')
        btn3.addEventListener('click', cuartafase)
}

function cuartafase() {
    cuarto.style.display = 'flex'
    tercero.style.display = 'none'

        let ecuador = document.getElementById('ecuador')
        let libia = document.getElementById('libia')
        let chile = document.getElementById('chile')
        let grecia = document.getElementById('grecia')
    
        ecuador.addEventListener('click', (e) => {
            if (e.target.textContent === 'ECUADOR') {
                ecuador.style.background = '#ff0000'
                chile.style.background = '#008000'  
            }
        })
    
        libia.addEventListener('click', (e) => {
            if (e.target.textContent === 'LIBIA') {
                libia.style.background = '#ff0000'
                chile.style.background = '#008000'
            } 
        })
    
        chile.addEventListener('click', (e) => {
            if (e.target.textContent === 'CHILE') {
                chile.style.background = '#008000'
                puntos++
            }  
        })
    
        grecia.addEventListener('click', (e) => {
            if (e.target.textContent === 'GRECIA') {
                grecia.style.background = '#ff0000'
                chile.style.background = '#008000'
            }  
        })
    
        let btn4 = document.getElementById('btn4')
        btn4.addEventListener('click', quintafase)
}

function quintafase() {
    quinto.style.display = 'flex'
    cuarto.style.display = 'none'

    let tunez = document.getElementById('tunez')
    let marruecos = document.getElementById('marruecos')
    let españa = document.getElementById('españa')
    let paraguay = document.getElementById('paraguay')

    tunez.addEventListener('click', (e) => {
        if (e.target.textContent === 'TÚNEZ') {
            tunez.style.background = '#ff0000'
            marruecos.style.background = '#008000'  
        }
    })

    marruecos.addEventListener('click', (e) => {
        if (e.target.textContent === 'MARRUECOS') {
            marruecos.style.background = '#008000'
            puntos++
        }  
    })

    españa.addEventListener('click', (e) => {
        if (e.target.textContent === 'ESPAÑA') {
            españa.style.background = '#ff0000'
            marruecos.style.background = '#008000'
        } 
    })

    paraguay.addEventListener('click', (e) => {
        if (e.target.textContent === 'PARAGUAY') {
            paraguay.style.background = '#ff0000'
            marruecos.style.background = '#008000'
        }  
    })

    let btn5 = document.getElementById('btn5')
    btn5.addEventListener('click', sextafase)
}

function sextafase() {
    sexto.style.display = 'flex'
    quinto.style.display = 'none'

    let uruguay = document.getElementById('uruguay')
    let francia = document.getElementById('francia')
    let argentina = document.getElementById('argentina')
    let israel = document.getElementById('israel')

    uruguay.addEventListener('click', (e) => {
        if (e.target.textContent === 'URUGUAY') {
            uruguay.style.background = '#008000'
            puntos++
        }  
    })

    francia.addEventListener('click', (e) => {
        if (e.target.textContent === 'FRANCIA') {
            francia.style.background = '#ff0000'
            uruguay.style.background = '#008000'  
        }
    })

    argentina.addEventListener('click', (e) => {
        if (e.target.textContent === 'ARGENTINA') {
            argentina.style.background = '#ff0000'
            uruguay.style.background = '#008000'
        }  
    })

    israel.addEventListener('click', (e) => {
        if (e.target.textContent === 'ISRAEL') {
            israel.style.background = '#ff0000'
            uruguay.style.background = '#008000'
        } 
    })

    let btn6 = document.getElementById('btn6')
    btn6.addEventListener('click', septimafase)
}

function septimafase() {
    septimo.style.display = 'flex'
    sexto.style.display = 'none'
    let qatar = document.getElementById('qatar')
    let senegal = document.getElementById('senegal')
    let coreaSur = document.getElementById('corea-sur')
    let camboya = document.getElementById('camboya')

    qatar.addEventListener('click', (e) => {
        if (e.target.textContent === 'QATAR') {
            qatar.style.background = '#ff0000'
            coreaSur.style.background = '#008000'  
        }
    })

    senegal.addEventListener('click', (e) => {
        if (e.target.textContent === 'SENEGAL') {
            senegal.style.background = '#ff0000'
            coreaSur.style.background = '#008000'
        }  
    })

    coreaSur.addEventListener('click', (e) => {
        if (e.target.textContent === 'COREA DEL SUR') {
            coreaSur.style.background = '#008000'
            puntos++
        }  
    })

    camboya.addEventListener('click', (e) => {
        if (e.target.textContent === 'CAMBOYA') {
            camboya.style.background = '#ff0000'
            coreaSur.style.background = '#008000'
        } 
    })

    let btn7 = document.getElementById('btn7')
    btn7.addEventListener('click', octavafase)
}

function octavafase() {
    octavo.style.display = 'flex'
    septimo.style.display = 'none'

    let chad = document.getElementById('chad')
    let belgica = document.getElementById('belgica')
    let australia = document.getElementById('australia')
    let rusia = document.getElementById('rusia')

    chad.addEventListener('click', (e) => {
        if (e.target.textContent === 'CHAD') {
            chad.style.background = '#ff0000'
            rusia.style.background = '#008000'  
        }
    })

    belgica.addEventListener('click', (e) => {
        if (e.target.textContent === 'BÉLGICA') {
            belgica.style.background = '#ff0000'
            rusia.style.background = '#008000'
        }  
    })

    rusia.addEventListener('click', (e) => {
        if (e.target.textContent === 'RUSIA') {
            rusia.style.background = '#008000'
            puntos++
        }  
    })

    australia.addEventListener('click', (e) => {
        if (e.target.textContent === 'AUSTRALIA') {
            australia.style.background = '#ff0000'
            rusia.style.background = '#008000'
        } 
    })

    let btn8 = document.getElementById('btn8')
    btn8.addEventListener('click', novenafase)
}

function novenafase() {
    noveno.style.display = 'flex'
    octavo.style.display = 'none'

    let croacia = document.getElementById('croacia')
    let china = document.getElementById('china')
    let honduras = document.getElementById('honduras')
    let italia = document.getElementById('italia')

    croacia.addEventListener('click', (e) => {
        if (e.target.textContent === 'CROACIA') {
            croacia.style.background = '#ff0000'
            china.style.background = '#008000'  
        }
    })

    honduras.addEventListener('click', (e) => {
        if (e.target.textContent === 'HONDURAS') {
            honduras.style.background = '#ff0000'
            china.style.background = '#008000'
        }  
    })

    china.addEventListener('click', (e) => {
        if (e.target.textContent === 'CHINA') {
            china.style.background = '#008000'
            puntos++
        }  
    })

    italia.addEventListener('click', (e) => {
        if (e.target.textContent === 'ITALIA') {
            italia.style.background = '#ff0000'
            china.style.background = '#008000'
        } 
    })

    let btn9 = document.getElementById('btn9')
    btn9.addEventListener('click', decimafase)
}

function decimafase() {
    decimo.style.display = 'flex'
    noveno.style.display = 'none'

    let polonia = document.getElementById('polonia')
    let ghana = document.getElementById('ghana')
    let filipinas = document.getElementById('filipinas')
    let usa = document.getElementById('usa')

    polonia.addEventListener('click', (e) => {
        if (e.target.textContent === 'POLONIA') {
            polonia.style.background = '#ff0000'
            usa.style.background = '#008000'  
        }
    })

    ghana.addEventListener('click', (e) => {
        if (e.target.textContent === 'GHANA') {
            ghana.style.background = '#ff0000'
            usa.style.background = '#008000'
        }  
    })

    usa.addEventListener('click', (e) => {
        if (e.target.textContent === 'ESTADOS UNIDOS') {
            usa.style.background = '#008000'
            puntos++
        }  
    })

    filipinas.addEventListener('click', (e) => {
        if (e.target.textContent === 'FILIPINAS') {
            filipinas.style.background = '#ff0000'
            usa.style.background = '#008000'
        } 
    })

    let btn10 = document.getElementById('btn10')
    btn10.addEventListener('click', faseFinal)
}

function faseFinal() {
    final.style.display = 'flex'
    decimo.style.display = 'none'
    banderas.style.display = 'none'

    let btnReiniciar = document.getElementById('reiniciar')

    let res = document.getElementById('res')
    let res2 = document.getElementById('res2')

    if (puntos <= 5){
        res.innerHTML = 'LO SIENTO'
    }else if (puntos > 6) {
        res.innerHTML = 'GENIAL'
    }

    res2.innerHTML = puntos
    btnReiniciar.addEventListener('click', reiniciar)
}

function reiniciar() {
    location.reload()
}