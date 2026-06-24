class SignupForm {
    constructor() {
        this.passwordInput = document.getElementById('password');
        this.segments = document.querySelectorAll('.strength-segment');
        this.strengthText = document.getElementById('strengthText');

        this.passwordInput.addEventListener('input', () => this.updateStrength());
        document.getElementById('signupForm').addEventListener('submit', (e) => this.handleSubmit(e));
    }

    togglePassword(id) {
        const input = document.getElementById(id);
        input.type = input.type === 'password' ? 'text' : 'password';
    }

    calculateStrength(val) {
        let strength = 0;
        if (val.length >= 8) strength++;
        if (/[A-Z]/.test(val)) strength++;
        if (/[0-9]/.test(val)) strength++;
        if (/[^A-Za-z0-9]/.test(val)) strength++;
        return strength;
    }

    updateStrength() {
        const val = this.passwordInput.value;

        this.segments.forEach(s => s.style.backgroundColor = 'transparent');

        if (!val.length) {
            this.strengthText.innerText = '';
            return;
        }

        const strength = this.calculateStrength(val);
        const levels = {
            weak:   { max: 2, color: 'var(--error-color)',   label: 'Weak password',   count: 1 },
            fair:   { max: 3, color: 'var(--warning-color)', label: 'Fair password',   count: 3 },
            strong: { max: 4, color: 'var(--success-color)', label: 'Strong password', count: 4 },
        };

        const level = strength <= 2 ? levels.weak : strength === 3 ? levels.fair : levels.strong;

        [...this.segments].slice(0, level.count).forEach(s => s.style.backgroundColor = level.color);
        this.strengthText.innerText = level.label;
        this.strengthText.style.color = level.color;
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Account creation simulated!');
    }
}

export default SignupForm;