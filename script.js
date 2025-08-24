// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact (mailto)
function handleMailto(e) {
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value || '');
  const email = encodeURIComponent(form.email.value || '');
  const message = encodeURIComponent(form.message.value || '');

  const subject = encodeURIComponent('Collaboration Inquiry from Website');
  const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\n${decodeURIComponent(message)}`);
  // TODO: change to her email:
  const to = 'your-email@example.com';

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  return false;
}
window.handleMailto = handleMailto;
