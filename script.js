function verSenha() {
  const senhaInput = document.getElementById("senha");
  senhaInput.type = senhaInput.type === "password" ? "text" : "password";
}
const translations = {
    pt: {
      titulo: "Seja bem-vindo ao Catálogo Online",
      login: "Login",
      matricula: "Matrícula:",
      senha: "Senha:",
      info: "Após o login, você será direcionado ao acervo online da biblioteca.",
      acessar: "Acessar",
      esqueceu: "Esqueceu a senha?",
      trocar: "Trocar senha",
      primeiro: "Primeiro acesso",
      idioma: "Idioma:",
      direitos: "Todos os direitos reservados.",
      navegadores: "Navegadores - versões mínimas:",
      suporte: "🎧 Suporte"
    },
    en: {
      titulo: "Welcome to the Online Catalog",
      login: "Login",
      matricula: "Enrollment:",
      senha: "Password:",
      info: "After logging in, you will be redirected to the library's online collection.",
      acessar: "Access",
      esqueceu: "Forgot password?",
      trocar: "Change password",
      primeiro: "First access",
      idioma: "Language:",
      direitos: "All rights reserved.",
      navegadores: "Browsers - minimum versions:",
      suporte: "🎧 Support"
    },
    es: {
      titulo: "Bienvenido al Catálogo en Línea",
      login: "Inicio de sesión",
      matricula: "Matrícula:",
      senha: "Contraseña:",
      info: "Después de iniciar sesión, serás dirigido al catálogo en línea de la biblioteca.",
      acessar: "Acceder",
      esqueceu: "¿Olvidó su contraseña?",
      trocar: "Cambiar contraseña",
      primeiro: "Primer acceso",
      idioma: "Idioma:",
      direitos: "Todos los derechos reservados.",
      navegadores: "Navegadores - versiones mínimas:",
      suporte: "🎧 Soporte"
    }
  };

  function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = translations[lang][key];
    });
  }