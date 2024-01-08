function no() {
    alert('I love you too');
    // You can add additional logic or redirect the user as needed
}

document.getElementById('btnYes').addEventListener('mouseenter', function () {
    var btnYes = document.getElementById('btnYes');
    btnYes.style.position = 'absolute';
    btnYes.style.left = Math.random() * 500 + 'px';
    btnYes.style.top = Math.random() * 500 + 'px';
});
