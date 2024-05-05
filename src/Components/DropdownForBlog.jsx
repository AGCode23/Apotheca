import React from "react";

const DropdownForBlog = () => {
  return (
    <div>
      {/* Start of dropdown bootstrap */}
      <div className="main-blog-button">
        <div class="dropdown button-box-blog">
          <button
            class="dropdown-toggle button-1-blog"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All Topics
          </button>
          <ul class="dropdown-menu custom-dropdown-width">
            <li>
              <a class="dropdown-item" href="/blog/common-disease">
                Common Diseases
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/blog">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/blog">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End of dropdown bootstrap */}
    </div>
  );
};

export default DropdownForBlog;
