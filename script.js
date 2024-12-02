document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores del formulario de inicio de sesión
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Muestra el segundo formulario
    document.getElementById('additionalForm').classList.remove('hidden');

    // Aquí podrías hacer algo con los valores, como guardarlos o enviarlos a un servidor
    console.log('Correo:', email);
    console.log('Contraseña:', password);
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores del formulario de pago
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Aquí también podrías hacer algo con estos datos
    console.log('Número de tarjeta:', cardNumber);
    console.log('Fecha de vencimiento:', expiryDate);
    console.log('CVV:', cvv);
});
