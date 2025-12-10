class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: white;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .nav-link {
                    transition: all 0.3s ease;
                }
                .nav-link:hover {
                    color: #4f46e5;
                }
                .auth-btn {
                    transition: all 0.3s ease;
                }
                .auth-btn:hover {
                    transform: translateY(-2px);
                }
            </style>
            <nav class="py-4 px-6">
                <div class="container mx-auto flex justify-between items-center">
                    <a href="index.html" class="flex items-center">
                        <i data-feather="coffee" class="w-6 h-6 text-indigo-600 mr-2"></i>
                        <span class="text-xl font-bold text-indigo-700">Canteen Craze</span>
                    </a>
                    
                    <div class="hidden md:flex space-x-8">
                        <a href="index.html" class="nav-link text-gray-700 font-medium">Home</a>
                        <a href="menu.html" class="nav-link text-gray-700 font-medium">Menu</a>
                        <a href="orders.html" class="nav-link text-gray-700 font-medium">My Orders</a>
                        <a href="kot.html" class="nav-link text-gray-700 font-medium">KOT Wallet</a>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <a href="cart.html" class="p-2 rounded-full hover:bg-gray-100">
                            <i data-feather="shopping-cart" class="w-5 h-5 text-gray-700"></i>
                        </a>
                        <div class="guest-only">
                            <a href="login.html" class="auth-btn bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium">Login</a>
                        </div>
                        <div class="auth-only" style="display: none;">
                            <div class="flex items-center space-x-2">
                                <img src="http://static.photos/people/200x200/1" alt="User" class="w-8 h-8 rounded-full">
                                <button onclick="handleLogout()" class="auth-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);