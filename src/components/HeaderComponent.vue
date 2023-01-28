<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary text-center">
      <div class="container-flui text-center">
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              v-for="(link, index) in menuLinks"
              :key="index"
            >
              <router-link
                active-class="active"
                :to="{ name: link.routeName }"
                class="nav-link text-center"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menuLinks: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Projects",
          routeName: "projects",
        },
        {
          label: "AboutUs",
          routeName: "AboutUs",
        },
        {
          label: "ContactUs",
          routeName: "ContactUs",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
