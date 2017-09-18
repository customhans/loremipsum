var vocab = [
		'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
		'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
		'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
		'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
		'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
		'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
		'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
		'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
		'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
		'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
		'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
		'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
		'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis',
		'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
		'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
		'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
		'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
		'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
		'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
		'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
		'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
		'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
		'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
		'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
		'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
		'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
		'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
		'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
		'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
		'elementum', 'tempor', 'risus', 'cras'
];
var btn = document.querySelector('.create');
var msg = document.querySelector('.output');

btn.addEventListener('click', function () {

    /* Clear output on every new button click */
    msg.textContent = '';

    var outputRaw = '';
    var output = '';

    /* Get amount of requested words */
    var amountWords = Number(document.querySelector('#amount').value);

    /* Get the by-user-requested amount of random words out of array "vocab" */
    for (var i = 0; i <= amountWords; i++) {
        var text = '';
        text = vocab[Math.floor(Math.random() * vocab.length)] + ' ';

        /* Mix in uppercased strings */
        if (Math.random() > 0.8) {
            text = text.charAt(0).toUpperCase() + text.slice(1);
        }

        /* Mix in periods */
        if (Math.random() > 0.9) {
            text = text.replace(text.slice(-1), text.slice(-1) + '.');
        }

        /* If last char of string === '.', remove space before it */
        if (text.slice(-1) === '.') {
            text = text.slice(0, -2) + text.slice(-1) + ' ';
        }
        
        outputRaw += text;
    }

    /* use RegExp replace-method to uppercase every character after '. ' */
    outputRaw = outputRaw.replace(/\.+../g, function (a) {
        return a.toUpperCase();
    })
    
    /* uppercase first letter of text output */
    output = outputRaw.replace(outputRaw.charAt(0), outputRaw.charAt(0).toUpperCase());
    
    msg.textContent = output;
    
})
