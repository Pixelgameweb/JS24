
function out() {
  let value = document.getElementById('input').value
  if (!value)
    return;
  let container=document.createElement('div');
  container.className = "container";
  container.innerHTML = value;
  document.getElementById('out').appendChild(container)
}