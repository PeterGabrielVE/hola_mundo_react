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

export default ()=>(
	<div>
	<h1>¡Hola mundo! </h1>
	<p>Este es mi sitio web creado desde React</p>
	<MiComponente/>
	<Saludo nombre="Pedro"/>
	<Saludo nombre="Gabriel"/>
	<Saludo nombre="Pedro Gabriel"/>
	</div>
	)