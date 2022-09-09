const size = '16px'

export default function Code(){

    return (
        <div>
            <h1>Variaveis</h1>
            <h2>Existem 3 tipos de variaveis, uma pode ser utilizada em qualquer parte do codigo e as outras duas somente no bloco onde estão presente.</h2>

            <h3>Var - Escopo global, Redeclaravel e Mutavel.</h3>
                <code style={{fontSize:size}}>
                    var a = 12; - Declaração. <br/>
                    var a = 500; - Redeclaração. <br/>
                    a = 300; - mutabilidade/atualização.
                </code>
            
            <h3>Let - Escopo de bloco, Não Redeclaravel e Mutavel.</h3>
                <code style={{fontSize:size}}>
                    let b = 13;<br/>
                    let b = 500; - Não ira funcionar.<br/>
                    b = 300; - Irá funcionar.
                </code>

            <h3>Const - Escopo de bloco, Não Redeclaravel e Imutavel. </h3>        
                <code style={{fontSize:size}}>
                    const c = 14;<br/>
                    const c = 500; - Não ira funcionar.<br/>
                    c = 300; - Tambem não ira funcionar. 
                </code>

            <p>
                A variavel do tipo const permite que valores dentro de objetos sejam atualizados desde que seja de forma individual.<br/>
                Ex.: <br/>
                    {`const pessoa = {nome: 'Jorge', sobrenome:'Alves'};`}<br/> 
                    {`pessoa.nome = 'Luiz;' ou pessoa['nome']= 'luiz' - Funciona`}<br/>
                    {`pessoa =  {nome: 'Luiz', sobrenome: 'Santos} - Não Funciona`}
            </p>
        </div>
    )
}