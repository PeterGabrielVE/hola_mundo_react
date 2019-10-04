import Header from '../componentes/comunes/Header'
import BarraTitulo from '../componentes/comunes/BarraTitulo'

export default ()=>(

	<div>
		<Header/>
		<BarraTitulo/>
		<h1>Pagina de la Calculadora</h1>
		<div className="z-depth-2 light-blue lighthen-2 white-text center-align resultado">Area de numeros</div>
			<div style={{textAlign:"center"}}>
				<a className="waves-effect waves-light btn">0</a>
				<a className="waves-effect waves-light btn">1</a>
				<a className="waves-effect waves-light btn">2</a>
			</div>
			<style jsx>{
				`
				.resultado{
					width:300px;
					margin:0 auto;
					font-size:32px;
					margin-botom:10px;
				}

				`
			}

			</style>
		</div>


	)