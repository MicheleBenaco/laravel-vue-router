<template>

  <div class="row">
    <div class="col-12">
      <ContactsFormComponent></ContactsFormComponent>
    </div>

  </div>
</template>

<script>
import ContactsFormComponent from '../components/ContactsFormComponent.vue';
export default {
  name: "ContactUs",
  components:{ContactsFormComponent}
};
</script>

<style lang="scss" scoped></style>
