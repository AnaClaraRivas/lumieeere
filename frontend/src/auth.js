// src/auth.js
export function salvarSessao(usuario) {
  localStorage.setItem("usuario", JSON.stringify(usuario));
}

export function pegarSessao() {
  const raw = localStorage.getItem("usuario");
  return raw ? JSON.parse(raw) : null;
}

export function limparSessao() {
  localStorage.removeItem("usuario");
}
