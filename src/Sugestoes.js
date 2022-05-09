export default function Sugestoes () {
   const imagenslist =  [ {
     image: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
     nome: "bad.vibes.memes",
     razao: "Segue você"
   },
   {
    image: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
    nome: "chibirdart",
    razao: "Segue você"
   },
   {
    image: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
    nome: "razoesparaacreditar",
    razao: "Novo no Instagram"
   },
   {
    image: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
    nome: "adorable_animals",
    razao: "Segue você"
   },
   {
    image: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
    nome: "smallcutecats",
    razao: "Segue você"
   }];
    
   const imglistJsx = imagenslist.map(imagem => <div class="sugestao">
        <div class="usuario">
        <img src={imagem.image} alt=""/>
        <div class="texto">
        <div class="nome">{imagem.nome}</div>
        <div class="razao">{imagem.razao}</div>
        </div>
        </div>
        <div class="seguir">Seguir</div>
        </div>)
        ;


  
  return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          
          {imglistJsx}
          
        </div>
    )
}