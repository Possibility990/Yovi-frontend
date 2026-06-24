
class OTPVerification {
    constructor({ inputSelector = '.otp-input', verifyBtnId = 'verify-btn', timerDisplayId = 'timer', countdown = 54 } = {}) {
        this.inputs = document.querySelectorAll(inputSelector);
        this.verifyBtn = document.getElementById(verifyBtnId);
        this.timerDisplay = document.getElementById(timerDisplayId);
        this.timeLeft = countdown;
        this.timerInterval = null;

        this.startTimer();
        this.bindInputEvents();
        this.verifyBtn.addEventListener('click', () => this.handleVerify());
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                this.timerDisplay.parentElement.innerHTML =
                    '<a href="#" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Resend code</a>';
            } else {
                this.timeLeft--;
                this.timerDisplay.innerText = `${this.timeLeft}s`;
            }
        }, 1000);
    }

    bindInputEvents() {
        this.inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => this.handleInput(e, input, index));
            input.addEventListener('keydown', (e) => this.handleKeydown(e, index));
        });
    }

    handleInput(e, input, index) {
        if (e.target.value) {
            input.classList.add('filled');
            if (index < this.inputs.length - 1) {
                this.inputs[index + 1].focus();
            }
        } else {
            input.classList.remove('filled');
        }
        this.checkInputs();
    }

    handleKeydown(e, index) {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            this.inputs[index - 1].focus();
        }
    }

    checkInputs() {
        const allFilled = Array.from(this.inputs).every(input => input.value.length === 1);
        this.verifyBtn.classList.toggle('active', allFilled);
    }

    handleVerify() {
        if (this.verifyBtn.classList.contains('active')) {
            alert('Verification successful!');
        }
    }
}

export default OTPVerification;