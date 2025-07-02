function submitOrder() {
  const type = document.getElementById('type').value;
  const fabric = document.getElementById('fabric').value;
  const color = document.getElementById('color').value;
  const size = document.getElementById('size').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const area = document.getElementById('area');
  const deliveryCharge = area.value;
  const areaText = area.options[area.selectedIndex].text;
  const totalPrice = 450 + parseInt(deliveryCharge);

  const message = `Deen Dritan Order:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Address: ${address}%0A
Area: ${areaText}%0A
T-shirt Type: ${type}%0A
Fabric: ${fabric}%0A
Color: ${color}%0A
Size: ${size}%0A
Price: 450 BDT + ${deliveryCharge} Tk Delivery = ${totalPrice} BDT%0A
(Please send your design image in this chat)`;

  const url = `https://wa.me/8801516586359?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
