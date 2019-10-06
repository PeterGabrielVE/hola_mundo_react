class Calculadora extends React.Component{

	state = {
		res:""
	}

	onDigit = (digit)=>{
		//console.log(digit)
		const expresion = this.state.res + digit
		this.setState({
			res:expresion
		})
	}

	ejecutarOperacion = ()=>{
		const resultados = eval(this.state.res)
		this.setState({
			res:resultados
		})
	}

	alertar = ()=>{
		alert('Hola desde un método de clase')
	}

//<a className="waves-effect waves-light btn" onClick={()=>this.onDigit("0")}>0</a>
//<a className="waves-effect waves-light btn" onClick={()=>this.setState({res:"1"})}>1</a>

	render(){
		const alerta2 = ()=>alert('Hola desde alerta 2')
		return (
			<div>
				<div className="z-depth-2 light-blue lighthen-2 white-text center-align resultado">
				{this.state.res || "0"}</div>
					<div className="calc-container blue lighten-3 hoverable z-depth-2">
						{
							["0","1","2","3","4","5","6","7","8","9","."].map(digit=>{
								return (
									<a className="waves-effect waves-light btn" onClick={()=>this.onDigit(digit)}>{digit}</a>
									)
							})
						}
						<div className="operadores center-align">
						{
							["+","-","/","*"].map(digit=>{
								return (
									<a className="waves-effect waves-light btn deep-orange darken-1" onClick={()=>this.onDigit(digit)}>{digit === "" ? "C":digit}</a>
									)
							})
						}
						<a className="waves-effect waves-light btn deep-orange darken-1" onClick={()=>this.setState({res:""})}>C</a>
					</div>
					<a className="waves-effect waves-light btn deep-orange darken-1" onClick={this.ejecutarOperacion}>=</a>
					</div>
					
					<style jsx>{
						`
						.resultado{
							width:300px;
							margin:0 auto;
							font-size:32px;
							margin-botom:10px;
						}

						.calc-container{
							width:300px;
							margin:0 auto;
							text-align:center;
							padding:12px;

						}
						.calc-container a{
							margin:5px;

						}

						.operadores{
							border:1px solid #ccc;
							padding:10px;
							margin-top:20px;
						}

						`
					}

					</style>
				</div>

			)
	}

}

export default Calculadora;