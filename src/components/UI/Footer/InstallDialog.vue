<template>
  <div
    v-if="installDialog"
    class="modal fade"
    style="direction: ltr"
    id="permitionInstal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="permitionInstalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="permitionInstalLabel">نصب اپلیکیشن</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>آیا میخواهید برنامه فوشگاه دیجی کالا را نصب کنید؟</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            انصراف
          </button>
          <button type="button" class="btn btn-primary" @click="installApp">
            نصب
          </button>
        </div>
      </div>
    </div>
  </div>
  <a
    v-if="true"
    class="btn btn-primary"
    id="modalbtn"
    data-bs-toggle="modal"
    href="#permitionInstal"
    role="button"
    >Android/IOS</a
  >
</template>

<script>

export default {
  data() {
    return {
      deferredPrompt: null,
      installDialog: true,
      isMobileChecked:
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          navigator.userAgent
        ),
    };
  },
  methods: {
    installApp() {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult === "accepted") {
          this.installDialog = false;
        }else{
          this.installDialog = false;
        }
      });
    },
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      if(this.isMobileChecked){
          this.installDialog = true;
      }
    });
  },
};
</script>

<style></style>
