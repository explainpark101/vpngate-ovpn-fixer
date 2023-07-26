document.querySelectorAll('a[href$=".ovpn"]').forEach(async (el)=>{
	let data = await fetch(el.href).then(resp=>resp.text());
	data = data.replaceAll("cipher", "data-ciphers");
	const href = el.href.split("/").slice(-1)[0];
	el.download = href;
	const blob = new Blob([data], { type: 'text/plain' });
	el.href = window.URL.createObjectURL(blob);
})