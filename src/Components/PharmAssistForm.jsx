import React from "react";
import styles from "./PharmAssistForm.module.css";

const PharmAssistForm = () => {
  return (
    <div className={styles.formMainContainer}>
      <div className={styles.formContainer}>
        <form class="row g-3">
          <div class="col-md-6">
            <label
              for="inputName"
              class={`form-label ${styles.customFormLabel}`}
            >
              Name
            </label>
            <input type="name" class="form-control" id="inputName" />
          </div>
          <div class="col-md-6">
            <label
              for="inputEmail"
              class={`form-label ${styles.customFormLabel}`}
            >
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail" />
          </div>
          <div class="col-12">
            <label
              for="inputTitle"
              class={`form-label ${styles.customFormLabel}`}
            >
              Title
            </label>
            <input
              type="text"
              class="form-control"
              id="inputTitle"
              placeholder="Title here.."
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class={`form-label ${styles.customFormLabel}`}
            >
              Question
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
          </div>
          <div class="mb-3">
            <label
              for="formFileMultiple"
              class={`form-label ${styles.customFormLabel}`}
            >
              Upload Prescription File (if applicable)
            </label>
            <input
              class="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label
                class={`form-check-label ${styles.customFormCheckLabel}`}
                for="gridCheck"
              >
                Confirm your agreement by checking the box below after reviewing
                and consenting to our <a href="#">terms and conditions.</a>
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PharmAssistForm;
