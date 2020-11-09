<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-card text-white">
        <div class="text-h6">System Single Page Application</div>
        <div class="text-subtitle2">Login</div>
      </q-card-section>

      <q-separator />
        <div class="q-pa-md" style="max-width: 400px">

          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="name"
              label="Nome de Usuario"
              hint="Informe seu usuario"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Usuario não Inserido']"
            />

            <q-input
              filled
              type="password"
              v-model="senha"
              label="Senha"
              hint="Informe sua Senha"
              lazy-rules
              :rules="[ val => val && val.length > 5 || 'Senha não Inserida']"
            />

            <q-toggle v-model="accept" label="Eu aceito a licença e os termos" />

            <div class="flex flex-center">
              <q-btn label="Cadastrar" to="#" color="primary" flat class="q-ml-sm" />
              <q-btn label="Entrar" type="submit" color="primary"/>
            </div>
          </q-form>

        </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ComponentLogin',
  data () {
    return {
      name: null,
      senha: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Você precisa aceitar a licença e os termos primeiro'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Sucess'
        })
      }
    }
  }
}
</script>

<style lang="sass">

.bg-card
 background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)

</style>
