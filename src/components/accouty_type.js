class AccountType {
    constructor({ cardSelector = '.card', continueBtnId = 'continue-btn' } = {}) {
        this.cards = document.querySelectorAll(cardSelector);
        this.continueBtn = document.getElementById(continueBtnId);

        this.bindEvents();
    }

    bindEvents() {
        this.cards.forEach(card => {
            card.addEventListener('click', () => this.selectCard(card));
        });

        this.continueBtn.addEventListener('click', () => this.handleContinue());
    }

    selectCard(selectedCard) {
        this.cards.forEach(card => card.classList.remove('selected'));
        selectedCard.classList.add('selected');
        this.continueBtn.classList.add('active');
    }

    handleContinue() {
        if (this.continueBtn.classList.contains('active')) {
            this.cards.forEach(card => {
                if (card.classList.contains('selected')) {
                    const actualUser = card
                        .firstElementChild
                        .nextElementSibling
                        .textContent
                        .toLowerCase();

                    if (actualUser === 'service provider') {
                        window.location.href = 'service_provider_profile_setup.html';
                    } else if (actualUser === 'seller') {
                        window.location.href = 'seller.html';
                    } else if (actualUser === 'buyer') {
                        window.location.href = 'buyer.html';
                    } else if (actualUser === 'buyer & seller') {
                        window.location.href = 'buyer_and_seller.html';
                    }
                }
            });
        }
    }
}

export default AccountType;