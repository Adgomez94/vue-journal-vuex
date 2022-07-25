<template>
    <span class="login100-form-title p-b-41">
    Crear Cuenta
  </span>
  <form @submit.prevent="onSubmit" class="login100-form validate-form p-b-33 p-t-5">

    <div class="wrap-input100 validate-input" data-validate = "Enter username">
      <input v-model="userForm.name" class="input100" type="text" placeholder="Name" required>
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate = "Enter email">
      <input v-model="userForm.email" class="input100" type="text" placeholder="Correo" required>
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <input v-model="userForm.password" class="input100" type="password" placeholder="Contraseña" required>
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button type="submit" class="login100-form-btn">
        Crear Una Cuenta
      </button>

    </div>

    <div class="container-login100-form-btn m-t-32">
        <router-link :to="{ name: 'login'}">¿No tienes cuenta?</router-link>
    </div>
  </form>
</template>

<script>
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import userAuth from '../composables/useAuth'

export default {

  setup() {

    const router = useRouter()
    const { createAuth } = userAuth()

    const userForm = ref({
      name: '',
      email: '',
      password: ''
    })

    return {
      userForm,
      onSubmit: async() =>{
        const res = await createAuth(userForm.value)
        console.log(res)
        if(!res.ok) Swal.fire('error','hay un problem', 'error')
        else router.push({name:'no-entry'})
      }
    }
  }
}
</script>

<style>

</style>