< !DOCTYPE html >
    <html>
        <head>
            <title>Nishanth's Jewelry Collection</title>
            <style>
                body {font - family: 'Helvetica Neue', sans-serif; padding: 20px; background-color: #f9f9f9; }
        h1 {text - align: center; color: #333; margin-bottom: 30px; }
        #list {display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
        .item {
                    background: white;
            border: 1px solid #ddd;
            padding: 15px;
            width: 250px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.2s;
        }
        .item:hover {transform: translateY(-5px); }
        img {width: 100%; height: 200px; object-fit: cover; border-radius: 5px; margin-bottom: 10px; }
        h3 {font - size: 18px; margin: 10px 0; color: #444; }
        p {color: #d4af37; font-weight: bold; font-size: 18px; }
        a {
                    display: inline-block;
            margin-top: 10px;
            text-decoration: none;
            color: white;
            background-color: #333;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 14px;
        }
        a:hover {background - color: #555; }
    </style>
        </head>
        <body>

            <h1>✨ Nishanth's Exclusive Collection ✨</h1>
            <div id="list"></div>

            <script src="data.js"></script>

            <script>
                const container = document.getElementById('list');

                // Check if products are loaded
        if (typeof products !== 'undefined') {
                    products.forEach(p => {
                        const div = document.createElement('div');
                        div.className = 'item';
                        div.innerHTML = `
                    <img src="${p.image}" alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p>₹${p.price}</p>
                    <a href="product.html?id=${p.id}">View Details</a>
                `;
                        container.appendChild(div);
                    });
        } else {
                    container.innerHTML = "<p>Loading products...</p>";
        }
    </script>

        </body>
    </html>