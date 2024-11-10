const books = [
    { id: 1, title: "JavaScript Basics", author: "John Doe", genre: "Programming", price: 19.99 },
    { id: 2, title: "CSS for Beginners", author: "Jane Smith", genre: "Design", price: 14.99 },
    { id: 3, title: "HTML Essentials", author: "Emily Jones", genre: "Programming", price: 12.99 },
    { id: 4, title: "Web Development Guide", author: "Chris Lee", genre: "Programming", price: 24.99 },
];

let cart = [];


function displayBooks() {
    const bookList = document.getElementById("book-list");
    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Price:</strong> $${book.price.toFixed(2)}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    const cartItem = cart.find(item => item.id === bookId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...book, quantity: 1 });
    }
    alert(`${book.title} added to cart`);
}


function viewCart() {
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            cartItems.innerHTML += `
                <div>
                    <p><strong>${item.title}</strong> - $${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
            `;
        });
    }
    cartModal.style.display = "flex";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}


function checkout() {
    alert("Proceeding to checkout. Thank you for your purchase!");
    cart = [];
    closeCart();
    //displayBooks();
}

window.onload = displayBooks;
