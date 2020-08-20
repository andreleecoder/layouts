function showlist(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showlist('Google', 'André', 'Rafael', 'lee');
