import ClaseComponent from '../componentes/ClaseComponent'

/*function index(){
	return (
	<h1>¡Hola mundo!</h1>
	)
}*/

/* const index = ()=>{
	return (
	<h1>¡Hola mundo! </h1>
	)
}

export default index */

const MiComponente = ()=>(
	<div>
		<h2>Lista de Productos</h2>
		<ul>
		<li>Harina</li>
		<li>Pasta</li>
		<li>Arroz</li>

		</ul>
	</div>
)

const Saludo = (props)=>(
	<div>
		<p>Estas son las ideas en React,de <b>{props.nombre}</b></p>
	</div>
	)


const matematicas = [{
  "id": 1,
  "first_name": "Jimmie",
  "last_name": "Vineall",
  "sexo": "Male",
  "foto": "https://robohash.org/quiafacereaperiam.bmp?size=50x50&set=set1"
}, {
  "id": 2,
  "first_name": "Hadria",
  "last_name": "Severwright",
  "sexo": "Female",
  "foto": "https://robohash.org/temporanisicommodi.jpg?size=50x50&set=set1"
}, {
  "id": 3,
  "first_name": "Cari",
  "last_name": "True",
  "sexo": "Female",
  "foto": "https://robohash.org/consequunturetvoluptates.jpg?size=50x50&set=set1"
}, {
  "id": 4,
  "first_name": "Werner",
  "last_name": "Hamberston",
  "sexo": "Male",
  "foto": "https://robohash.org/culpamagnamdolorem.bmp?size=50x50&set=set1"
}, {
  "id": 5,
  "first_name": "Sheeree",
  "last_name": "Ruslen",
  "sexo": "Female",
  "foto": "https://robohash.org/etutnumquam.png?size=50x50&set=set1"
}, {
  "id": 6,
  "first_name": "Ellene",
  "last_name": "Gabe",
  "sexo": "Female",
  "foto": "https://robohash.org/istenonvoluptas.png?size=50x50&set=set1"
}, {
  "id": 7,
  "first_name": "Cecile",
  "last_name": "Nutbean",
  "sexo": "Female",
  "foto": "https://robohash.org/corporisquiaexcepturi.jpg?size=50x50&set=set1"
}, {
  "id": 8,
  "first_name": "Hugibert",
  "last_name": "Skerman",
  "sexo": "Male",
  "foto": "https://robohash.org/molestiasilloconsequatur.png?size=50x50&set=set1"
}, {
  "id": 9,
  "first_name": "Emalee",
  "last_name": "Goodsir",
  "sexo": "Female",
  "foto": "https://robohash.org/quiscorruptieius.jpg?size=50x50&set=set1"
}, {
  "id": 10,
  "first_name": "Kevyn",
  "last_name": "Mainland",
  "sexo": "Female",
  "foto": "https://robohash.org/nisietquasi.bmp?size=50x50&set=set1"
}]

const ciencias = [{
  "id": 1,
  "first_name": "Maddy",
  "last_name": "Ruoff",
  "sexo": "Female",
  "foto": "https://robohash.org/dolorautrerum.jpg?size=50x50&set=set1"
}, {
  "id": 2,
  "first_name": "Bealle",
  "last_name": "Adran",
  "sexo": "Male",
  "foto": "https://robohash.org/esseoccaecatipariatur.jpg?size=50x50&set=set1"
}, {
  "id": 3,
  "first_name": "Carlie",
  "last_name": "Hazlehurst",
  "sexo": "Male",
  "foto": "https://robohash.org/quisitet.png?size=50x50&set=set1"
}, {
  "id": 4,
  "first_name": "Lauree",
  "last_name": "Esmonde",
  "sexo": "Female",
  "foto": "https://robohash.org/deseruntiureut.png?size=50x50&set=set1"
}, {
  "id": 5,
  "first_name": "Florie",
  "last_name": "Alexsandrowicz",
  "sexo": "Female",
  "foto": "https://robohash.org/sintitaqueipsum.png?size=50x50&set=set1"
}, {
  "id": 6,
  "first_name": "Elsi",
  "last_name": "Tandy",
  "sexo": "Female",
  "foto": "https://robohash.org/etitaqueearum.bmp?size=50x50&set=set1"
}, {
  "id": 7,
  "first_name": "Dari",
  "last_name": "Haggish",
  "sexo": "Female",
  "foto": "https://robohash.org/quietsaepe.jpg?size=50x50&set=set1"
}, {
  "id": 8,
  "first_name": "Justinn",
  "last_name": "Grafom",
  "sexo": "Female",
  "foto": "https://robohash.org/dolorequiexcepturi.jpg?size=50x50&set=set1"
}, {
  "id": 9,
  "first_name": "Carmel",
  "last_name": "McNea",
  "sexo": "Female",
  "foto": "https://robohash.org/doloremsitquia.bmp?size=50x50&set=set1"
}, {
  "id": 10,
  "first_name": "Gothart",
  "last_name": "Meakin",
  "sexo": "Male",
  "foto": "https://robohash.org/totamquasratione.png?size=50x50&set=set1"
}]


export default ()=>(
	<div>
	<h1>¡Hola mundo! </h1>
	<p>Este es mi sitio web creado desde React</p>
	<MiComponente/>
	<Saludo nombre="Pedro"/>
	<Saludo nombre="Gabriel"/>
	<Saludo nombre="Pedro Gabriel"/>
	<ClaseComponent nombre="Matematicas" clases={matematicas}/>
	<ClaseComponent nombre="Ciencias" clases={ciencias}/>
	</div>
	
	)