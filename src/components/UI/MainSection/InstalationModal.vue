<template>
  <div
    class="modal fade"
    id="permitionInstal"
    aria-hidden="true"
    aria-labelledby="permitionInstalLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="permitionInstalLabel">Modal 1</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Show a second modal and hide this one with the button below.
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-primary"
            data-bs-target="#installationModal"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
          >
            Open second modal
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="installationModal"
    aria-hidden="true"
    aria-labelledby="installationModalLabel2"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="installationModalLabel2">Modal 2</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Hide this modal and show the first with the button below.
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-primary"
            data-bs-target="#permitionInstal"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
          >
            Back to first
          </button>
        </div>
      </div>
    </div>
  </div>
  <a
    class="btn btn-primary"
    data-bs-toggle="modal"
    href="#permitionInstal"
    role="button"
    >Open first modal</a
  >
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default {
  created() {
    // var myModal = document.getElementById('permitionInstal');
    //   myModal.modal('show');
    // myModal.show();

    // return {
    //   myModal,
    // };
  },
};
</script>

<style></style>
