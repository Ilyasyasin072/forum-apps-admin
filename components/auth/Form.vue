<template>
 <div>
   <v-card
     class="mx-auto mb-5 center"
     max-width="500"
     style="margin-top: 150px; box-shadow: none; background: none;"
   >
     <v-card-title class="text-h6 font-weight-regular justify-space-between">
       <span style="font-weight: bold; font-size: 20px;">Login Admin</span>
       <br>
       <v-label style="font-size: 12px">
         Welcome to Happy Forum please put your login this apps
       </v-label>
     </v-card-title>
     <ul v-if="error">
      <li v-for="err in error" :key="err" v-bind:style="{color: 'red'}">
        <v-alert
        type="success" color="red" v-html="err"
      ></v-alert>
      </li>
    </ul>
     <v-window>
       <v-window-item>
         <v-card-text>
           <v-row>
             <v-col cols="4">
               <v-subheader style="font-weight: bold; line-height: 50px">E-mail</v-subheader>
             </v-col>
             <v-col cols="8">
               <v-text-field
                 label="E-mail"
                 type="email"
                 v-model="email"
               ></v-text-field>
             </v-col>
           </v-row>
           <v-row>
             <v-col cols="4">
               <v-subheader style="font-weight: bold; line-height: 50px">Password</v-subheader>
             </v-col>
             <v-col cols="8">
               <v-text-field
                 label="Password"
                 type="password"
                 v-model="password"
               ></v-text-field>
             </v-col>
           </v-row>
           <v-row>
             <v-col style="text-align: right;">
               <v-subheader style="font-weight: bold;">Forgot Password ? </v-subheader>
             </v-col>
           </v-row>
           <br>
           <v-divider></v-divider>
           <br>
           <v-row>
             <v-col cols="3" offset="9" style="text-align: right;">
               <v-subheader style="font-weight: bold; font-size: 20px; cursor:pointer;" @click="submit()">
                 <v-btn class="btn-login">
                   <span class="text-login">Login</span>
                 </v-btn>
               </v-subheader>
             </v-col>
           </v-row>
         </v-card-text>
         <v-card-title style="font-size: 20px">
           <v-label style="font-weight: bold;" class="text-center ma-15">Don't haven a account ?</v-label><span style="font-weight: bold; cursor:pointer; font-size: 20px" @click="this.$router.push('/register')">Sign Up</span>
         </v-card-title>
       </v-window-item>
     </v-window>
   </v-card>
 </div>
</template>


<script>
export default {
  data: ()=>({
    message: 'Form Auth',
    email: null,
    password: null,
    hideLoading: true,
    error: [],
  }),
  mounted() {
    
  },
  methods: {
    submit() {
      this.error = [];

      if(!this.email == '' && !this.password == '') {
        if(this.email != 'admin@gmail.com' && this.password != 'demo') {
          this.error.push('Anda Bukan Admin')
        } else {
          this.$store.dispatch('user/login/actionLogin', { email: this.email, password: this.password});
          this.$router.go('/');
        }
      }
      
      if(this.email == '' || this.email === null || this.email === undefined) {
        this.error.push('Email TIdak Boleh Kosong')
      }

      if(this.password == '' || this.password === null || this.password === undefined) {
        this.error.push('Password TIdak Boleh Kosong')
      }
    }
  },
}
</script>