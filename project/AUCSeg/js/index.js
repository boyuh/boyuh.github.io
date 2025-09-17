document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabs li");
    const tabContents = document.querySelectorAll(".tab-pane");

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // Remove the 'is-active' class from all tabs and contents
        tabs.forEach((item) => item.classList.remove("is-active"));
        tabContents.forEach((content) => content.classList.remove("is-active"));

        // Add the 'is-active' class to the clicked tab and its corresponding content
        tab.classList.add("is-active");
        const tabContent = document.querySelector(`#${tab.getAttribute("data-tab")}`);
        tabContent.classList.add("is-active");
      });
    });
  });