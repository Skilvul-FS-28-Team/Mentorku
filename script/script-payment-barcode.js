const paymentBtn = document.getElementById('btn-payment-done');

paymentBtn.addEventListener('click',function(){
  const url = `payment-success.html`;

    window.location.href = url;
})