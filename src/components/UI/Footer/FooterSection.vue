<template>
  <div class="container-fluid bg-white text-end">
    <div class="container pt-5">
      <div class="row d-flex align-items-center justify-content-between">
        <div class="text-end">
          <h3 class="text-danger">دیجی کالا</h3>
          تلفن پشتیبانی: ۶۱۹۳۰۰۰۰ - ۰۲۱ |هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی
          شما هستیم.
        </div>
        <div class="text-start"><scroll-top :href="href" /></div>
      </div>
      <div class="row pt-5 border-bottom">
        <div class="col-2 mx-1">
          <div class="cart">
            <img
              class="cart-img-top"
              style="margin: 0 auto"
              src="../../../../public/img/footerTop/14f1.png"
              alt=""
            />
            <div class="cart-body">امکان تحویل اکسپرس</div>
          </div>
        </div>
        <div class="col-2 mx-1">
          <div class="cart">
            <img
              class="cart-img-top"
              style="margin: 0 auto"
              src="../../../../public/img/footerTop/14f2.png"
              alt=""
            />
            <div class="cart-body">امکان پرداخت در محل</div>
          </div>
        </div>
        <div class="col-2 mx-1">
          <div class="cart">
            <img
              class=""
              style="margin: 0 auto"
              src="../../../../public/img/footerTop/14f3.png"
              alt=""
            />
            <div class="cart-body">7 روز هفته، 24 ساعته</div>
          </div>
        </div>
        <div class="col-2 mx-1">
          <div class="cart">
            <img
              class=""
              style="margin: 0 auto"
              src="../../../../public/img/footerTop/14f4.png"
              alt=""
            />
            <div class="cart-body">7 روز ضمانت بازگشت کالا</div>
          </div>
        </div>
        <div class="col-2 mx-1">
          <div class="cart">
            <img
              class=""
              style="margin: 0 auto"
              src="../../../../public/img/footerTop/14f5.png"
              alt=""
            />
            <div class="cart-body">ضمانت اصل بودن</div>
          </div>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-8">
          <div class="row">
            <div class="col-4">
              <ul>
                با دیجی کالا
                <li>اتاق خبر دیجی کالا</li>
                <li>فروش در دیجی کالا</li>
                <li>فرصت های شغلی</li>
                <li>تماس با دیجی کالا</li>
                <li>درباره دیجی کالا</li>
              </ul>
            </div>
            <div class="col-4">
              <ul>
                خدمات مشتریان
                <li>پاسخ به پرسش های متداول</li>
                <li>رویه های بازگردان کالا</li>
                <li>شرایط استفاده</li>
                <li>حریم خصوصی</li>
                <li>گزارش باگ</li>
              </ul>
            </div>
            <div class="col-4">
              <ul>
                راهنمای خرید از دیجی کالا
                <li>نحوه ی ثبت سفارش</li>
                <li>رویه ارسال سفارش</li>
                <li>شیوه های پرداخت</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-4">
          <h5>با ما همراه باشید</h5>
          <h5>از جدیدترین ها با خبر شوید</h5>
          <form class="">
            <div class="form-group d-flex">
              <input
                type="text"
                class="mx-1"
                style="width: 80%"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
              <button class="btn btn-secondary text-white" style="width: 10%">
                ثبت
              </button>
            </div>
          </form>
        </div>
      </div>
 
      <div class="row p-3 rounded-3" style="background: #050e75">

        <div
          class=" d-flex align-items-center justify-content-between"
        >
          <span class="text-light">دریافت اپلیکیشن دیجی کالا</span>
          <install-dialog />
          <span
            class="rounded-3 fs-3"
            style="width: 40px; height: 40px; background: #fff"
            >...</span
          >
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-8">
          <h6 class="text-muted">
            فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
          </h6>
          <!-- <button v-if="notificationsSupported" @click="askPermission">
            Enable notifications >
          </button> -->

          <p class="text-muted">
            دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از
            یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت
            بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های
            معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض
            ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه
            که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
            مشاهده بیشتر
          </p>
        </div>

        <div class="col-4">
          <div class="row">
            <div
              class="col-3 mx-1 border rounded-3"
              style="height: 100px"
            ></div>
            <div
              class="col-3 mx-1 border rounded-3"
              style="height: 100px"
            ></div>
            <div
              class="col-3 mx-1 border rounded-3"
              style="height: 100px"
            ></div>
          </div>
        </div>
      </div>
      <div class="row pt-2 border-top">
        <p class="text-muted">
          استفاده از مطالب فروشگاه اینترنتی دیجی کالا فقط برای مقاصد غیرتجاری و
          با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت نوآوران فن
          آوازه (فروشگاه آنلاین دیجی کالا) می باشد.
        </p>
      </div>
    </div>
    <div class="container-fluid" style="background: #eee">
      <div class="container p-0">
        <div class="row">
          <div class="col-1">مجله اینترنتی دیجی کالا مگ</div>
          <div class="col-1 border-end">بهترین راهکارهای پرداخت</div>
          <div class="col-1 border-end">
            خرید آنلاین مد و لباس از فروشگاه اینترنتی
          </div>
          <div class="col-1 border-end">
            دیجی استایل با همان تجربه از دیجی کالا
          </div>
          <div class="col-1 border-end">
            خدمات ویژه دیجی کالا برای کاربران با اشتراک دیجی پلاس
          </div>
          <div class="col-1 border-end">دیجی کلاب باشگاه مشتریان دیجی کالا</div>
          <div class="col-1 border-end">دانلود کتاب الکترونیک</div>
          <div class="col-1 border-end">
            مرکز نوآوری و فناوری گروه دیجی کالا
          </div>
          <div class="col-1 border-end">
            ثبت آگهی خرید و فروش آنلاین بدون پادرمیانی!
          </div>
          <div class="col-1 border-end">کمدا اپلیکیشنی برای خرید و فروش</div>
          <div class="col-1 border-end">سیستم کسب درآمد دیجی کالا</div>
          <div class="col-1 border-end">سیستم ارسال مرسوله دیجی کالا</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollTop from "./ScrollTop.vue";
import InstallDialog from "./InstallDialog.vue";

export default {
  props: ["href"],
  components: { ScrollTop,InstallDialog },
  data() {
    return {
      notificationsSupported: true,
      
    };
  },
  methods: {
    askPermission() {
      if (this.notificationsSupported) {
        Notification.requestPermission((result) => {
          console.log("result from permission question", result);
          if (result !== "granted") {
            alert("You probably do not like notifications?!");
          } else {
            console.log(
              "A notification will be send from the service worker => This only works in production"
            );
            this.showNotification();
          }
        });
      }
    },
    showNotification() {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready // returns a Promise, the active SW registration
          .then((swreg) =>
            swreg.showNotification("Notifications granted", {
              body: "Here is a first notification",
              icon: "/img/icons/android-chrome-192x192.png",
              image: "/img/autumn-forest.png",
              vibrate: [300, 200, 300],
              badge: "/img/icons/plint-badge-96x96.png",
              // actions: [
              //     { action: 'confirm', title: 'Okay', icon: '/img/icons/android-chrome-192x192.png'},
              //     { action: 'cancel', title: 'Cancel', icon: '/img/icons/android-chrome-192x192.png'}
              // ],
            })
          );
      }
    },
  },
  created() {
    if ("Notification" in window && "serviceWorker" in navigator) {
      this.notificationsSupported = true;
    }
  },
};
</script>

<style></style>
