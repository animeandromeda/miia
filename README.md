<h2 class="miia">Miaa</h2>
    <p>Miia &egrave; uno stub che ti aiuter&agrave; a proteggere le tue risorse video.</p>
    <p>L'idea &egrave; quella di validare l'header di refer per permettere solo ai client autorizzati l'accesso ad una
        specifica risorsa.</p>
    <p>
        In futuro verr&agrave; implementato un sitema basato su token.
    </p>
    <p>
        Popola il file <em>config.js</em> con gli host abilitati.
    </p>

<h2 class="miia">Docs</h2>
        <ul>
            <li>
                <strong>GET /</strong>
                <p>Return => html con presentazione dello stub</p>
            </li>
            <li>
                <strong>GET /docs</strong>
                <p>Return => html con questa pagina</p>
            </li>
            <li>
                <strong>GET /stream/:anime/:ep</strong>
                <p>Return => 206</p>
                <p>Salva nella cartella <strong>anime</strong> le tue serie. (La cartella pu&ograve; essere un symlink)
                </p>
                <div>Ogni sotto directory conterr&agrave; il nome della serie che matcher&agrave; il primo parametro
                    nell'url
                    <strong>/:anime</strong>
                </div>
                <div>All'interno di ogni directory saranno presenti gli episodi che matcheranno il secondo parametro di
                    url
                    <strong>/:ep</strong>
                </div>
                <p>Esempio: anime -> MiniDra -> 01.mp4</p>
                <p>=> /stream/MiniDra/01.mp4</p>
            </li>
            <li>
                <strong>GET /warn</strong>
                <p>Return => 206 video con un messaggio di avviso: segnala che non sei autorizzato</p>
            </li>
        </ul>

        <p>
            <strong>config.js</strong>
        <div>Aggiungi una voce all'array trusted per ogni host/url che vuoi abilitare</div>
        </p>
        <p>
            <strong>Proxy</strong>
        <div>Miia funziona al meglio se servita da un reverse proxy come nginx con un simile blocco:</div>
        <pre>

# 

Lightweight. Fast. Scalable. Miia stub.  

Only 90 LOC, based on tinyhttp ensures high performance and concurrency.  
Small footprint, only 2 dependecies.

## Setup

```sh
pnpm i
```

## Run

```sh
node app.js
```

<img src="https://i.ibb.co/vDNtpny/miia.png" width="500">
