class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #1e1b4b;
                }
                .footer-link {
                    transition: all 0.3s ease;
                }
                .footer-link:hover {
                    color: #a5b4fc;
                }
            </style>
            <footer class="text-white py-12">
                <div class="container mx-auto px-6">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4">Canteen Craze</h3>
                            <p class="text-indigo-200">Sachivalaya's official online canteen ordering system.</p>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Quick Links</h4>
                            <ul class="space-y-2">
                                <li><a href="index.html" class="footer-link text-indigo-200">Home</a></li>
                                <li><a href="menu.html" class="footer-link text-indigo-200">Menu</a></li>
                                <li><a href="about.html" class="footer-link text-indigo-200">About Us</a></li>
                                <li><a href="contact.html" class="footer-link text-indigo-200">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Help</h4>
                            <ul class="space-y-2">
                                <li><a href="faq.html" class="footer-link text-indigo-200">FAQ</a></li>
                                <li><a href="terms.html" class="footer-link text-indigo-200">Terms</a></li>
                                <li><a href="privacy.html" class="footer-link text-indigo-200">Privacy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Contact</h4>
                            <ul class="space-y-2">
                                <li class="flex items-center">
                                    <i data-feather="mail" class="w-4 h-4 mr-2"></i>
                                    <span class="text-indigo-200">support@canteencraze.com</span>
                                </li>
                                <li class="flex items-center">
                                    <i data-feather="phone" class="w-4 h-4 mr-2"></i>
                                    <span class="text-indigo-200">+91 9876543210</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-300">
                        <p>© 2023 Canteen Craze Express. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);