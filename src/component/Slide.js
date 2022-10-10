import styles from "../Styles/Slide.module.css";
function Slide(){
    return (
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://static.wixstatic.com/media/b1081b44801546e0b25bb0261591fb76.jpg/v1/crop/x_0,y_1046,w_5760,h_1749/fill/w_1848,h_561,al_c,q_85,usm_0.66_1.00_0.01/b1081b44801546e0b25bb0261591fb76.jpg" className={styles.image}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Bienvenido a ReactMeals!!</h5>
        <p>Conoce las mejores recetas tradicionales que nuestro chef tiene para ti</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://portal.marriott.com/tyoys-yokohama-bay-sheraton-hotel-and-towers-dining/resourcefiles/home-main-images/sheraton-yokohama-seasonal-menu.jpg?version=7142022112128" className={styles.image}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Disfruta De lo mejor!!</h5>
        <p>Enamorate de los mejores platillos, cocinados por el mejor chef de Europa</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/R.dd1952465d91b4e03d141ae032a5d980?rik=lkpZQPLIZc4Pbw&riu=http%3a%2f%2fcdn.ikyu.com%2fcontents%2fdg%2fguide%2facc9%2f00001469%2fimg%2fh_1.jpg&ehk=SduZGRjMk2eAgwQ3y%2fl%2b%2fRjtymn%2b3mcG8Jb%2bKKtgG3I%3d&risl=&pid=ImgRaw&r=0" className={styles.image}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Los mejores platillos de Europa</h5>
        <p>Deleita tu paladar con los mejores platillos tradicionales de Europa</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}
export default Slide;