# Instruções Importantes

Devido a problemas técnicos no sistema de email, **todos os estudantes deverão seguir cuidadosamente as instruções abaixo:**

1. Crie uma pasta chamada **Exercicios_JS_Avancados**.  
2. Dentro dela, adicione os **10 exercícios abaixo** (um arquivo `.js` para cada exercício).  
3. Crie também um arquivo **README.md** contendo:
   - Seu **nome completo**
   - Seu **número**
   - Sua **turma**
4. Exporte o projeto completo para o **GitHub**.  
5. Envie o **link do repositório no privado do WhatsApp**.  

**Quem enviar o link no grupo terá o exercício automaticamente cancelado.**

---

## Exercícios de JavaScript Avançado

### 1. Top 3 números mais repetidos
Recebe um array e retorna os 3 valores mais frequentes e suas contagens.

**Exemplo:**
```js
Entrada: [1,2,2,3,3,3,4,4,4,4,5,5,5]
Saída: [{numero: 4, vezes: 4}, {numero: 5, vezes: 3}, {numero: 3, vezes: 3}]
```

---

### 2. Flatten profundo
Implementa `flatten(array)` que transforma arrays aninhados em um só nível.

**Exemplo:**
```js
Entrada: [1,[2,[3,[4]]]]
Saída: [1,2,3,4]
```

---

### 3. Deep clone sem `structuredClone`
Clona um objeto com qualquer nível de profundidade sem usar `JSON.stringify`.

**Exemplo:**
```js
Entrada: const obj = { nome: "Ana", endereco: { cidade: "Luanda" } }
Saída esperada: Uma cópia independente de obj (modificar a cópia não altera o original)
```

---

### 4. Conversor de objetos aninhados
Transforma um objeto aninhado em um objeto plano com chaves separadas por ponto.

**Exemplo:**
```js
Entrada: { user: { name: "Ana", age: 20 } }
Saída: { "user.name": "Ana", "user.age": 20 }
```

---

### 5. Fila de Promises
Cria uma função que recebe várias funções que retornam `Promise` e executa uma após a outra.

**Exemplo:**
```js
async function teste() {
  const f1 = () => new Promise(r => setTimeout(() => r("Primeira"), 1000));
  const f2 = () => new Promise(r => setTimeout(() => r("Segunda"), 500));
}
// Saída esperada: executa f1, depois f2, respeitando a ordem
```

---

### 6. Jogo da memória
Cria um tabuleiro de cartas (pares iguais) e lógica para virar/desvirar com limite de tentativas.

**Exemplo:**
```js
Entrada: 8 cartas (4 pares)
O aluno deve implementar o jogo para mostrar cartas viradas e esconder novamente após 1 segundo se forem diferentes.
```

---

### 7. Mini ranking
Recebe uma lista de jogadores `{ nome, pontos }` e mostra o ranking dinâmico no DOM.

**Exemplo:**
```js
Entrada: [
  { nome: "Ana", pontos: 120 },
  { nome: "Carlos", pontos: 200 },
  { nome: "Beatriz", pontos: 150 }
]
Saída esperada: lista ordenada no DOM (1º Carlos, 2º Beatriz, 3º Ana)
```

---

### 8. Simulador de download
Mostra uma barra de progresso que avança lentamente até 100% e no fim mostra “Download completo”.

**Exemplo:**
```js
Exibir uma barra que cresce de 0 a 100% usando setInterval e muda o texto para "Download completo" ao terminar.
```

---

### 9. Validação assíncrona
Campo de texto “username”: após digitar, verifica com `setTimeout` se o nome já existe (simulando API).

**Exemplo:**
```js
Entrada: username = "admin"
Saída: mensagem "Nome já em uso" (simulado com setTimeout de 2 segundos)
```

---

### 10. Modo escuro
Alternar entre tema claro/escuro e salvar preferência no `localStorage`.

**Exemplo:**
```js
Botão que altera o tema da página e mantém a escolha mesmo após recarregar o site.

obs:usem o local ou session Storage...
```

---

**Ronaldo Bernardo**  
*Dev FullStack*  
*(Pavlov Claymor 2022)*