document.querySelectorAll('a[href$=".ovpn"]') // select all Anchor Element with href ending with ".ovpn"
.forEach(async (el)=>{ // this function is for all elements. Since fetch api and await keyword needed, used the function as asynchronous one.
	let data = await fetch(el.href).then(resp=>resp.text()); // fetching the data from the url. This will get the text from the file.
	data = data.replaceAll("cipher", "data-ciphers"); // replacing "cipher" into "data-ciphers"
	const href = el.href.split("/").slice(-1)[0]; // getting the name of the file.
	el.download = href; // setting the name of the downloading file.
	const blob = new Blob([data], { type: 'text/plain' }); // generates Blob for the file data.
	el.href = window.URL.createObjectURL(blob); // setting the url for the anchor tag to download the modified data.
}) // ending function.