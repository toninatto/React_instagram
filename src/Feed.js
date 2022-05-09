export default function Feed () {
    const objetolist =  [ {
        imagep: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        imagef: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/02/legiao_cAB5VJkQYOFz.jpg.jpeg",
        imagel: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        nomelike: "driven",
        numcurt: "100",
        nomee: "Narutin"
    },
    {
        imagep: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        imagef: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/02/legiao_cAB5VJkQYOFz.jpg.jpeg",
        imagel: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        nomelike: "driven",
        numcurt: "100",
        nome: "Narutin"
    }];

    const imglistJsx = objetolist.map(objto => <div class="post">
        <div class="post-title">
        <div class="post-profile">
            <img class="profile" src={objto.imagep} alt="" />
            <h4>{objto.nome}</h4>
        </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div class="post-media">
        <img src={objto.imagef} alt="naruto" />
        </div>
        <div class="post-actions">
        <div class="left-actions">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div class="save-actions">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        </div>
        <div class="post-liked">
        <img class="profile" src={objto.imagel} alt=""/>
        <span>Curtido por <strong>{objto.nomelike}</strong> e <strong>outras {objto.numcurt} pessoas</strong></span>
        </div>
        </div>)

    return (
        <div class="feed">
            {imglistJsx}
        </div>
    );
}