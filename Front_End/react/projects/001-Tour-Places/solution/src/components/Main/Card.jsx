


const Card = (data) => {
    console.log(data);
    const {title, image, desc} = data;
    return(
        <div className="cards">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <img src={image} alt="" />
          <div className="card-over">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis quo repellat architecto cupiditate temporibus exercitationem magnam vero. Perspiciatis repellat aut eligendi eveniet ex quo nam harum maxime sint unde.</p>
          </div>
        </div>
    )
}


export default Card;