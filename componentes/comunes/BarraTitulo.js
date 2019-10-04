import Link from 'next/link'

const links = [
				{id:"1",url:"/",nombre:"Home"},
				{id:"2",url:"/calc",nombre:"Calculadora"}
				]

export default()=>(
			  <nav>
			    <div className="nav-wrapper">
			      <a href="/" className="brand-logo">ZafiroReact</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			      	{
			      		links.map(link=>{
			      			return (
			      			 <li key={link.id}>
			      					<Link href={link.url}><a>{link.nombre}</a></Link>
			      				</li>
			      				)
			      		})
			      	}
			       
			      </ul>
			    </div>
			  </nav>

		

	)