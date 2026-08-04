import carousel3 from "../images/hospital_slider.png";

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="http://blog.sambav.com/wp-content/uploads/2018/01/benefits-of-online-doctor-appointment-system.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://t3.ftcdn.net/jpg/04/96/80/34/360_F_496803433_TeCu85tBSH36XkKklQ4Eu6Zc5EbZQgs5.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};

export default Carousel;
