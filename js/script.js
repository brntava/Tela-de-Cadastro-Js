const c = document.getElementById('cep');
const e = document.getElementById('logradouro');
const b = document.getElementById('bairro');
const l = document.getElementById('localidade');

c.addEventListener('blur', async () => {
    let req = await fetch(`https://viacep.com.br/ws/${c.value}/json/`)
    let json = await req.json()
    e.value = json.logradouro;
    b.value = json.bairro;
    l.value = json.localidade;
})



