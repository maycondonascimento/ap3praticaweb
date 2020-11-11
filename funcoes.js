var posicao = 0;
var start = 0;
var respcorreta = 0;
var respA, respB, respC, respD;
var verifica, verfica_status;
var pergunta, resposta, respostas;
var imgperg;

var perguntas = [
    {
      pergunta: "Como deve ser declarado um título da página?",
      a: "&lt;html title='Título aqui'&gt;&lt;/html&gt;",
      b: "&lt;title&gt;Título aqui&lt;/title&gt;",
      c: "&lt;title title='titulo'&gt;",
      d: "&lt;html&gt;&lt;title title='titulo'&gt;&lt;/html&gt;",
      correta: "B",
      graf: "img/1.png"
      },
    {
        pergunta: "Qual a forma correta de se criar um link? ",
        a: "&lt;a href='link'&gt;link aqui&lt;/a&gt;",
        b: "&lt;span href='link'&gt;Link aqui&lt;/span&gt;",
        c: "&lt;link rel='Link' value='Link aqui'&gt;",
        d: "&lt;a href='link'&gt;&lt;span&gt;link aqui&lt;/span&gt;&lt;/a&gt;",
        correta: "A",
        graf: "img/2.jpg"
      },
    {
        pergunta: "Como devemos chamar um script css?",
        a: "&lt;link rel='stylesheet' href='link css'&gt;",
        b: "&lt;script href='link css'&gt;",
        c: "&lt;a href='link css'&gt;&lt;/a&gt;",
        d: "&lt;link rel='stylesheet' href=&lt;a 'link css'&gt;&lt;/a&gt;",
        correta: "A",
        graf: "img/3.jpg"
      },
    {
        pergunta: "Qual a forma correta de se criar uma imagem? ",
        a: "&lt;img&gt;link imagem&lt;/img&gt;",
        b: "&lt;figure src='link imagem'&gt;&lt;/figure&gt;",
        c: "&lt;img src='link imagem'&gt;",
        d: "&lt;img&gt;&lt;a href='link imagem'&gt;&lt;/a&gt;&lt;/img&gt;",
        correta: "C",
        graf: "img/4.jpg"
      },
      {
          pergunta: "Como devemos chamar um script JS?",
          a: "&lt;link rel='script' href='link'&gt;",
          b: "&lt;script src='link script'&gt;",
          c: "&lt;script&gt;&lt;a href='link script'&gt;&lt;/a&gt;&lt;/script&gt;",
          d: "&lt;script src='link script'&gt;&lt;/script&gt;",
          correta: "D",
          graf: "img/5.jpg"
        },
        {
            pergunta: "Qual a forma correta de se criar uma lista? ",
            a: "&lt;li&gt;&lt;item&gt;&lt;/item&gt;&lt;/li&gt;",
            b: "&lt;list&gt;&lt;item&gt;&lt;/item&gt;&lt;/list&gt;",
            c: "&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;",
            d: "&lt;list&gt;&lt;li&gt;&lt;/li&gt;&lt;/list&gt;",
            correta: "C",
            graf: "img/6.jpg"
          },
          {
              pergunta: "Qual tag abaixo não pertence ao HMTL?",
              a: "&lt;color&gt;&lt;/color&gt;",
              b: "&lt;span&gt;&lt;/span&gt;",
              c: "&lt;br&gt;",
              d: "&lt;img&gt;&lt;/img&gt;",
              correta: "A",
              graf: "img/7.png"
            },
            {
                pergunta: "Qual tag abaixo pertence ao corpo de uma tabela?",
                a: "&lt;tf&gt;",
                b: "&lt;thead&gt;",
                c: "&lt;footer&gt; ",
                d: "&lt;header&gt; ",
                correta: "B",
                graf: "img/8.jpeg"
              },
              {
                  pergunta: "Qual atributo devemos utilizar para inserir propriedades CSS?",
                  a: "css-style=''",
                  b: "style=''",
                  c: "css=''",
                  d: "style-css=''",
                  correta: "B",
                  graf: "img/9.jpg"
                },
                {
                    pergunta: "Qual tag abaixo pertence a um menu de navegação? ",
                    a: "&lt;menu&gt;",
                    b: "&lt;title&gt;",
                    c: "&lt;item&gt;",
                    d: "&lt;nav&gt;",
                    correta: "D",
                    graf: "img/10.png"
                  },
                  {
                      pergunta: "No HTML todos sabemos que a tecla ENTER não cria espaços nem quebra linhas, ele usa um codigo especifico para quebra de linhas. Como se chama.",
                      a: "&lt;tag&gt; &lt;/tag&gt;",
                      b: "&lt;br&gt; &lt;/br&gt;",
                      c: "&lt;link&gt; &lt;/link&gt;",
                      d: "&lt;enter&gt; &lt;/enter&gt;",
                      correta: "B",
                      graf: "img/11.png"
                    },
                    {
                        pergunta: "No HTML existe uma herança de títulos, De h1 até um certo número. Assinale a alternativa correta.",
                        a: "H1 á H4",
                        b: "H1 á H5",
                        c: "H1 á H6",
                        d: "H1 á H7",
                        correta: "C",
                        graf: "img/12.jpg"
                      }  
];

function buscaElements(x){
    return document.getElementById(x);
  }

function IniciaQuiz(){
  divinic = buscaElements("dquestoes");
  divinic.innerHTML = "<div id='imgquestoes'><img src='img/html-quiz.jpg'></div>";
  divinic.innerHTML += "<h3>Teste seu conhecimento em HTML respondendo a 12 Perguntas sobre a linguagem!</h3><br>";
  divinic.innerHTML += "<h3>Clique no botão Iniciar abaixo e ao final do Quiz, veja sua pontuação...</h3><br><br>";
  divinic.innerHTML += "<h3>Boa sorte!</h3>";
  divinicbt = buscaElements("wdquestoes");
  divinicbt.innerHTML = "<button onclick='Fverificaquiz()'>INICIAR</button>";
}  

function Fverificaquiz(){
    if(start == 0){
      start = 1;
      divinic = buscaElements("dquestoes");
      divinicbt = buscaElements("wdquestoes");
      divinicbt.innerHTML = "";
      divinic.innerHTML = "";
    }
    else {
      posicao++;
    }
    
    verifica = buscaElements("dquestoes");

    if(posicao >= perguntas.length){
        verifica.innerHTML = "<h4>Você Acertou "+respcorreta+" de "+perguntas.length+" Perguntas</h4><br><br><br><br>";
        verifica.innerHTML += "<h4>Unigranrio... Vá além da sala de aula!</h4>";
        verifica.innerHTML += "<a href='https://portal.unigranrio.edu.br' target='_blank'><img src='img/unigranrio.png'></a>";
        buscaElements("progresso").innerHTML = "Parabéns, Quiz Concluído!";
        btfinal = buscaElements("wdquestoes");
        btfinal.innerHTML = "<button onclick='Fverificaquiz()' id='btprinp'>REINICIAR</button>";
        posicao = 0;
        start = 0;
        respcorreta = 0;
        return false;
    }
 
    pergunta = perguntas[posicao].pergunta;
    respA = perguntas[posicao].a;
    respB = perguntas[posicao].b;
    respC = perguntas[posicao].c;
    respD = perguntas[posicao].d;
    imgperg = perguntas[posicao].graf;


    verifica.innerHTML = "<div id='imgquestoes'><img src="+imgperg+"></div>";
    verifica.innerHTML += "<h3>"+pergunta+"</h3>";
    verifica.innerHTML += "<div   id='rA'><label> <input type='radio' name='lresp' value='A' onclick='VerResposta()' id='rA1'> "+respA+"</label></div><br>";
    verifica.innerHTML += "<div  id='rB'><label> <input type='radio' name='lresp' value='B' onclick='VerResposta()' id='rB1'> "+respB+"</label></div><br>";
    verifica.innerHTML += "<div  id='rC'><label> <input type='radio' name='lresp' value='C' onclick='VerResposta()' id='rC1'> "+respC+"</label></div><br>";
    verifica.innerHTML += "<div   id='rD'><label> <input type='radio' name='lresp' value='D' onclick='VerResposta()' id='rD1'> "+respD+"</label></div><br><br>";
    

    buscaElements("progresso").innerHTML = (posicao+1)+" / "+perguntas.length;

    
  }


  function VerResposta(){

    respostas = document.getElementsByName("lresp");

    for(var i=0; i<respostas.length; i++){
        if(respostas[i].checked){
            resposta = respostas[i].value;
        }
    }
    
    if(resposta == perguntas[posicao].correta){
      var la = document.getElementById('rA1');
      la.setAttribute("disabled", "disabled");
      var lb = document.getElementById('rB1');
      lb.setAttribute("disabled", "disabled");
      var lc = document.getElementById('rC1');
      lc.setAttribute("disabled", "disabled");
      var ld = document.getElementById('rD1');
      ld.setAttribute("disabled", "disabled");
      respcorreta++;
      iddiv = 'r'+resposta;
      document.getElementById(iddiv).style.backgroundColor = 'rgb(79 255 79)';
    }
    else {
      var la = document.getElementById('rA1');
      la.setAttribute("disabled", "disabled");
      var lb = document.getElementById('rB1');
      lb.setAttribute("disabled", "disabled");
      var lc = document.getElementById('rC1');
      lc.setAttribute("disabled", "disabled");
      var ld = document.getElementById('rD1');
      ld.setAttribute("disabled", "disabled");
      iddiv = 'r'+perguntas[posicao].correta;
      document.getElementById(iddiv).style.backgroundColor = 'rgb(79 255 79)';
      iddivselc = 'r'+resposta;
      document.getElementById(iddivselc).style.backgroundColor = 'rgb(242 36 56)';
    }
    btcontinua = buscaElements("wdquestoes");
    btcontinua.innerHTML = "<button onclick='Fverificaquiz()' id='btprinp'>Continuar</button>";
      iddivsel = 'r'+resposta;
      document.getElementById(iddivsel).style.boxShadow = '0em .1em 0.4em .4em rgba(225,243,7,.5)';
  }

  window.addEventListener("load", IniciaQuiz);