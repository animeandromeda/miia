import origins from '../config.js';

const checkOrigin = (req, res, next) => {
    const origin = req.get('referer');
    console.log(origin)
    try {
        if (isTrusted(origin)) {
            console.log(`CHK\x1b[32m \x1b[1m206\x1b[0m \x1b[32mAllowed\x1b[0m ${origin}`);
            next();
        } else {
            console.warn(`CHK\x1b[31m \x1b[1m206\x1b[0m \x1b[31mDenied\x1b[0m ${origin ? origin : 'not valid referer'}`);
            res.status(200).redirect('/warn')
        }
    } catch (error) {
        res.status(500).json('server error')
    }
}

function isTrusted(url) {
    if (url === undefined) return false;
    for (const origin of origins.trusted) {
        if (url === origin) return true;
    }
    return false;
}

export default checkOrigin