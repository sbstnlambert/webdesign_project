const toggleButton = document.getElementsByClassName('toggleButton')[0];
const navBarlinks = document.getElementsByClassName('navBarLinks')[0];

toggleButton.addEventListener('click', () =>{
    navBarlinks.classList.toggle('active');
})