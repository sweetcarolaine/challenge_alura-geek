const API_URL = "${window.location.origin}/products";


function renderProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = ""; 

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p><strong>${product.name}</strong></p>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button class="delete-btn" data-id="${product.id}">Excluir</button>
    `;

    container.appendChild(productCard);
  });

  // Botões excluir
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) =>
    button.addEventListener("click", async (e) => {
      const productId = e.target.dataset.id;
      await deleteProduct(productId);
      loadProducts(); 
    })
  );
}

/* Carregar e exibir produtos */
async function loadProducts() {
  try {
    const products = await fetchProducts();
    if (products) renderProducts(products);
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
}

/* Buscar produtos  */
async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Erro ao buscar produtos.");
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

/* Adicionar novo produto */
async function addProduct(product) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Erro ao adicionar produto.");
    const newProduct = await response.json();
    return newProduct;
  } catch (error) {
    console.error(error);
  }
}

/* Excluir produto */
async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Erro ao deletar produto.");
  } catch (error) {
    console.error(error);
  }
}

// Adicionar no formulário /
document.getElementById("add-product-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("product-name").value;
  const price = parseFloat(document.getElementById("product-price").value);
  const image = document.getElementById("product-image").value;

  const newProduct = { name, price, image };

  await addProduct(newProduct);
  loadProducts(); // Recarregar os produtos 
  e.target.reset(); 
});


document.addEventListener("DOMContentLoaded", loadProducts);
