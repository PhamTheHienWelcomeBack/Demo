document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('account-button');
    const caretIcon = document.getElementById('caret-icon');
    const formFeature = document.getElementById('form-feature');

    button.addEventListener('click', function() {
        caretIcon.classList.toggle('rotate');
        formFeature.style.display = formFeature.style.display === 'none' || formFeature.style.display === '' ? 'flex' : 'none';
        button.classList.toggle('expanded');
        if (button.classList.contains('expanded')) {
            button.style.width = '160px';
            button.style.borderRadius = '10px 10px 0px 0px';
        } else {
            button.style.width = '100px';
            button.style.borderRadius = '30px';
        }
    });
});