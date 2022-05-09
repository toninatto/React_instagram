function UsuarioItem (props) {
  return (
    <div class="usuario">
          <img src={props.image} alt="" />
          <div class="texto">
            <strong>{props.user}</strong>
            {props.nome}
          </div>
        </div>
  )

}


export default function Usuario () {
    return (
        <UsuarioItem image="https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg" 
          user="catanacomics" 
          nome="Catana"/>
    )
}