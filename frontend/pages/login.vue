<template>
  <v-container>
    <h1>ログイン</h1>
    <v-form 
      @submit.prevent="login"
      ref="form"
    >
      <v-text-field
        id="email"
        label="メールアドレス"
        v-model="user.email"
        :rules="emailRules"
      />
      <v-text-field
        id="password"
        type="password"
        label="パスワード"
        v-model="user.password"
        :rules="passwordRules"
      />
      <v-btn id="submit" type="submit">ログイン</v-btn>
    </v-form>
    <div>
      <label id="error" class="error">{{error}}</label>
    </div>
  </v-container>
</template>

<script>
// NuxtJS 2.8.xのTypeScriptサポートドキュメントによると
// https://develop365.gitlab.io/nuxtjs-2.8.X-doc/ja/guide/typescript/
// vue-property-decoratorや vue-class-componentを利用したサンプルの記載がある。
// これは、JavaScript版のVue.JSやNuxt.JSの実装と大きく異なるため、
// 今の段階では採用を見送る。
// 開発者自身がVue.JSやNuxt.JSに慣れるか、
// Vue.JSやNuxt.JSでドキュメント含めTypeScriptが第一級のサポート言語となった段階で
// 段階的にTypeScript対応の検討を行う。
// 現段階では、最低限のTypeScript化を行い、基本的な実装スタイルはJavaScript版に沿う形にする
export default {
  layout: "top",
  data() {
    return {
      user: {
        email:"",
        password:""
      },
      error: "",
      hasError: false,
      emailRules: [
        v => !!v || "メールアドレスを入力してください",
      ],
      passwordRules: [
        v => !!v || "パスワードを入力してください",
      ],
    }
  },
  methods: {
    async login() {
      try {
        if (this.$refs.form.validate()) {
          await this.$auth.loginWith("local", { data: this.user })
          // TODO 要調査
          // nuxt/authの説明によると、
          // loginWith()で正常応答が返った後、
          // 自動的に"/"にリダイレクトするはずだが、
          // 自動リダイレクトしないので明示的にリダイレクトする
          this.$router.push("/")
        }
      } catch (err) {
        this.error = "ログインできませんでした。ユーザ名またはパスワードが間違っています。"
        this.hasError = true
      }
    },
  }
}
</script>