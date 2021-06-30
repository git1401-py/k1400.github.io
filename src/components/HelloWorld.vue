<template>
  <div class="hello">
    <!-- <ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Profile
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          Contact
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        home
      </div>
      <div
        class="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        profile
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
      >
        contact
      </div>
    </div>
    <hr /> -->

    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-7">
          <div class="row align-items-center">
            <form class="d-flex align-items-center">
              <router-link
                class="text-danger fs-1 w-auto h-50 px-3 dgbrand"
                to="/"
                >digikala</router-link
              >
              <div class="mainsearch">
                <div class="form-group has-search">
                  <span
                    class="fa fa-search text-secondary form-control-feedback"
                  ></span>
                  <input
                    type="text"
                    class="form-control text-secondary bg-gradient-success py-3"
                    placeholder="جستجو در دیجی کالا..."
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-5 ps-3">
          <div class="row">
            <div class="col-11 d-flex justify-content-end border-start rounded-start border-secondary">
              <button class="btn btn-outline-secondary px-2 py-3 ms-2">
                ورود به حساب کاربری
              </button>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row align-items-center justify-content-between">
        <div class="col-8">
          <ul
            class="
              list-group list-group-horizontal list-group-flush
              ms-auto
              my-2 my-lg-0
            "
          >
            <li class="list-group-item dropdown mega-dropdown">
              <a
                class="
                  list-group-item-action
                  text-decoration-none
                  dropdown-toggle
                "
                href="#"
                id="everything"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="navbutton"
              >
                <div class="bg-dark line1"></div>
                <div class="bg-dark line2"></div>
                <div class="bg-dark line3"></div>
                دسته بندی کالاها
              </a>
              <ul
                class="dropdown-menu mega-dropdown-menu"
                aria-labelledby="everything"
              >
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Men Collection</li>
                    <div
                      id="carouselExampleFade"
                      class="carousel slide carousel-fade"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item bg-dark active">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 1"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>Summer dress floral prints</small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            49,99 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                        <div class="carousel-item bg-dark">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 2"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>prints floral </small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            49,11 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                        <div class="carousel-item bg-dark">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 3"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>floral dress</small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            33,22 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>

                    <li class="divider"></li>
                    <li>
                      <a href="#"
                        >View all Collection
                        <span
                          class="glyphicon glyphicon-chevron-right pull-right"
                        ></span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Features</li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Carousel Control</a></li>
                    <li><a href="#">Left & Right Navigation</a></li>
                    <li><a href="#">Four Columns Grid</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Fonts</li>
                    <li><a href="#">Glyphicon</a></li>
                    <li><a href="#">Google Fonts</a></li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Plus</li>
                    <li><a href="#">Navbar Inverse</a></li>
                    <li><a href="#">Pull Right Elements</a></li>
                    <li><a href="#">Coloured Headers</a></li>
                    <li><a href="#">Primary Buttons & Default</a></li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Much more</li>
                    <li><a href="#">Easy to Customize</a></li>
                    <li><a href="#">Calls to action</a></li>
                    <li><a href="#">Custom Fonts</a></li>
                    <li><a href="#">Slide down on Hover</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="list-group-item">
              <a
                class="list-group-item-action text-decoration-none active"
                aria-current="page"
                href="#"
                >سوپرمارکت</a
              >
            </li>
            <li class="list-group-item dropdown mega-dropdown">
              <a
                class="
                  list-group-item-action
                  text-decoration-none
                  dropdown-toggle
                "
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                تخفیف ها و پیشنهادها
              </a>
              <ul
                class="dropdown-menu mega-dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Men Collection</li>
                    <div
                      id="carouselExampleFade"
                      class="carousel slide carousel-fade"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item bg-dark active">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 1"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>Summer dress floral prints</small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            49,99 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                        <div class="carousel-item bg-dark">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 2"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>prints floral </small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            49,11 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                        <div class="carousel-item bg-dark">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 3"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>floral dress</small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            33,22 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>

                    <li class="divider"></li>
                    <li>
                      <a href="#"
                        >View all Collection
                        <span
                          class="glyphicon glyphicon-chevron-right pull-right"
                        ></span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Features</li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Carousel Control</a></li>
                    <li><a href="#">Left & Right Navigation</a></li>
                    <li><a href="#">Four Columns Grid</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Fonts</li>
                    <li><a href="#">Glyphicon</a></li>
                    <li><a href="#">Google Fonts</a></li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Plus</li>
                    <li><a href="#">Navbar Inverse</a></li>
                    <li><a href="#">Pull Right Elements</a></li>
                    <li><a href="#">Coloured Headers</a></li>
                    <li><a href="#">Primary Buttons & Default</a></li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Much more</li>
                    <li><a href="#">Easy to Customize</a></li>
                    <li><a href="#">Calls to action</a></li>
                    <li><a href="#">Custom Fonts</a></li>
                    <li><a href="#">Slide down on Hover</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="list-group-item">
              <a class="list-group-item-action text-decoration-none" href="#"
                >  دیجی کالای من</a
              >
            </li>
            <li class="list-group-item dropdown mega-dropdown">
              <a
                class="
                  list-group-item-action
                  text-decoration-none
                  dropdown-toggle
                "
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                دیجی پلاس
              </a>
              <ul
                class="dropdown-menu mega-dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Men Collection</li>
                    <div
                      id="carouselExampleFade"
                      class="carousel slide carousel-fade"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item bg-dark active">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 1"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>Summer dress floral prints</small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            49,99 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                        <div class="carousel-item bg-dark">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 2"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>prints floral </small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            49,11 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                        <div class="carousel-item bg-dark">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 3"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>floral dress</small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            33,22 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>

                    <li class="divider"></li>
                    <li>
                      <a href="#"
                        >View all Collection
                        <span
                          class="glyphicon glyphicon-chevron-right pull-right"
                        ></span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Features</li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Carousel Control</a></li>
                    <li><a href="#">Left & Right Navigation</a></li>
                    <li><a href="#">Four Columns Grid</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Fonts</li>
                    <li><a href="#">Glyphicon</a></li>
                    <li><a href="#">Google Fonts</a></li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Plus</li>
                    <li><a href="#">Navbar Inverse</a></li>
                    <li><a href="#">Pull Right Elements</a></li>
                    <li><a href="#">Coloured Headers</a></li>
                    <li><a href="#">Primary Buttons & Default</a></li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Much more</li>
                    <li><a href="#">Easy to Customize</a></li>
                    <li><a href="#">Calls to action</a></li>
                    <li><a href="#">Custom Fonts</a></li>
                    <li><a href="#">Slide down on Hover</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="list-group-item dropdown mega-dropdown">
              <a
                class="
                  list-group-item-action
                  text-decoration-none
                  dropdown-toggle
                "
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                دیجی پی
              </a>
              <ul
                class="dropdown-menu mega-dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Men Collection</li>
                    <div
                      id="carouselExampleFade"
                      class="carousel slide carousel-fade"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item bg-dark active">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 1"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>Summer dress floral prints</small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            49,99 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                        <div class="carousel-item bg-dark">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 2"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>prints floral </small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            49,11 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                        <div class="carousel-item bg-dark">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 3"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>floral dress</small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            33,22 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>

                    <li class="divider"></li>
                    <li>
                      <a href="#"
                        >View all Collection
                        <span
                          class="glyphicon glyphicon-chevron-right pull-right"
                        ></span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Features</li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Carousel Control</a></li>
                    <li><a href="#">Left & Right Navigation</a></li>
                    <li><a href="#">Four Columns Grid</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Fonts</li>
                    <li><a href="#">Glyphicon</a></li>
                    <li><a href="#">Google Fonts</a></li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Plus</li>
                    <li><a href="#">Navbar Inverse</a></li>
                    <li><a href="#">Pull Right Elements</a></li>
                    <li><a href="#">Coloured Headers</a></li>
                    <li><a href="#">Primary Buttons & Default</a></li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Much more</li>
                    <li><a href="#">Easy to Customize</a></li>
                    <li><a href="#">Calls to action</a></li>
                    <li><a href="#">Custom Fonts</a></li>
                    <li><a href="#">Slide down on Hover</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="list-group-item dropdown mega-dropdown">
              <a
                class="
                  list-group-item-action
                  text-decoration-none
                  dropdown-toggle
                "
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                دیجی کلاب
              </a>
              <ul
                class="dropdown-menu mega-dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Men Collection</li>
                    <div
                      id="carouselExampleFade"
                      class="carousel slide carousel-fade"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item bg-dark active">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 1"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>Summer dress floral prints</small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            49,99 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                        <div class="carousel-item bg-dark">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 2"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>prints floral </small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            49,11 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                        <div class="carousel-item bg-dark">
                          <a href="#">
                            <img
                              src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection"
                              class="d-block w-100"
                              alt="product 3"
                            />
                          </a>
                          <h4 class="text-white">
                            <small>floral dress</small>
                          </h4>
                          <button
                            class="btn btn-primary text-light"
                            type="button"
                          >
                            33,22 €
                          </button>
                          <button
                            href="#"
                            class="btn btn-danger text-light"
                            type="button"
                          >
                            <span class="glyphicon glyphicon-heart"></span> Add
                            to Wishlist
                          </button>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>

                    <li class="divider"></li>
                    <li>
                      <a href="#"
                        >View all Collection
                        <span
                          class="glyphicon glyphicon-chevron-right pull-right"
                        ></span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Features</li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Carousel Control</a></li>
                    <li><a href="#">Left & Right Navigation</a></li>
                    <li><a href="#">Four Columns Grid</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Fonts</li>
                    <li><a href="#">Glyphicon</a></li>
                    <li><a href="#">Google Fonts</a></li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Plus</li>
                    <li><a href="#">Navbar Inverse</a></li>
                    <li><a href="#">Pull Right Elements</a></li>
                    <li><a href="#">Coloured Headers</a></li>
                    <li><a href="#">Primary Buttons & Default</a></li>
                  </ul>
                </li>
                <li class="col-sm-3">
                  <ul>
                    <li class="dropdown-header">Much more</li>
                    <li><a href="#">Easy to Customize</a></li>
                    <li><a href="#">Calls to action</a></li>
                    <li><a href="#">Custom Fonts</a></li>
                    <li><a href="#">Slide down on Hover</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="list-group-item">
              <a
                class="list-group-item-action text-decoration-none active"
                aria-current="page"
                href="#"
                >سوالی دارید؟</a
              >
            </li>
            <li class="list-group-item">
              <a
                class="list-group-item-action text-decoration-none active"
                aria-current="page"
                href="#"
                > فروشنده شوید</a
              >
            </li>
            
          </ul>
        </div>
        <div class="col-4 d-flex justify-content-end ps-4">
          <a class="text-muted">لطفا شهر و استان خود را انتخاب کنید</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    function navbutton() {
      var element = document.getElementsByClassName("nav-button");
      element.classList.add("change");
      if (element.classList.contains("change")) {
        element.classList.remove("change");
      }
    }
    return {
      navbutton,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// $font-family-brand: "Rajdhani", -apple-system, BlinkMacSystemFont, "Segoe UI",
//   "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
//   "Segoe UI Emoji", "Segoe UI Symbol";
//   @import "node_modules/bootstrap/scss/bootstrap";
// .dgbrand{
//   font-family: $font-family-brand;

// }
.mega-dropdown {
  position: static !important;
}
.mega-dropdown-menu {
  padding: 20px 0px;
  width: 100%;
  box-shadow: none;
  -webkit-box-shadow: none;
}
.mega-dropdown-menu > li {
  display: inline-block;
}
.mega-dropdown-menu > li > ul {
  padding: 0;
  margin: 0;
}
.mega-dropdown-menu > li > ul > li {
  list-style: none;
}
.mega-dropdown-menu > li > ul > li > a {
  display: block;
  color: #222;
  padding: 3px 5px;
}
.mega-dropdown-menu > li ul > li > a:hover,
.mega-dropdown-menu > li ul > li > a:focus {
  text-decoration: none;
}
.mega-dropdown-menu .dropdown-header {
  font-size: 18px;
  color: #ff3546;
  padding: 5px 60px 5px 5px;
  line-height: 30px;
}

.mainsearch {
  width: 1000%;
  margin: 50px auto;
}

/* Bootstrap 4 text input with search icon */

.has-search .form-control {
  padding-right: 2.375rem;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}
.line1,
.line2,
.line3 {
  width: 23px;
  height: 3px;
  margin: 5px;
  transition: all 0.4s;
}
.change .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.change .line2 {
  opacity: 0;
}
.change .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
.form-control {
  background-color: rgb(223, 229, 233) !important;
}
.form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(192, 187, 187);
  opacity: 1; /* Firefox */
}

.form-control:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(192, 187, 187);
}

.form-control::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(192, 187, 187);
}
</style>
