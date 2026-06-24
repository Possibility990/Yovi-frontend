 class ServiceProvider{
    constructor(){
        this.bio = document.getElementById('bio');
        this.charCount = document.getElementById('charCount');
        this.addEventListeners();

    }

    addEventListeners(){
        this.bio.addEventListener('input', () => {
            const length = this.bio.value.length;
            this.charCount.innerText = `${length} / 160 characters`;
        });

        document.getElementById('profileForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Profile saved! Moving to the next step...');
        });

    }
      
}

export default ServiceProvider;