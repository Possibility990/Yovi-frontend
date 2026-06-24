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
            alert('Account type selected! Moving to profile setup...');
        }
    }
}

export default AccountType;