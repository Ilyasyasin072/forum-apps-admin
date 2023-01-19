<template>
    <v-col cols="12" md="12">
      <v-row>
        <v-col cols="6" style="background-color: #b2b2b2">
          <Carausel/>
        </v-col>
        <v-col cols="6" style="background-color: white; height: 900px; overflow-x: hidden;">
          <Form/>
        </v-col>
      </v-row>
    </v-col>
</template>

<script>
import Form from "../../components/auth/Form";
import Carausel from "../../components/fitur/Carausel";
export default {
  name: 'LoginPage',
  components: {
    Form,
    Carausel,
    'component-form-auth': Form,
  },
}
</script>
