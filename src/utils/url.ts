export const getUrl = (path: string) => {
    const base = import.meta.env.BASE_URL;
    const b = base.endsWith('/') ? base : `${base}/`;
    const p = path.startsWith('/') ? path.slice(1) : path;
    return `${b}${p}`;
};
