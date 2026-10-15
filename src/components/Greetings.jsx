function Greetings ({ nome, mensagem = "Seja bem vindo(a)" }) {
    return(
    <div className="greeting"> - 
        <span className="greeting_eyebrow">React - Primeiros Passos</span>
        <h1>{nome}, {mensagem}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Facere perferendis maiores blanditiis dolorum enim iusto recusandae, 
        reprehenderit aliquam qui, sit accusamus! Magnam, ipsum minus. Unde, perferendis. 
        Eos ipsum neque molestiae.</p>
    </div>
    );
}
export default Greetings;