function get<T = unknown>(key: string): T | null {
    const data = localStorage.getItem(key);

    if (data === null) {
        return null;
    }

    return JSON.parse(data);
}

function set<T = unknown>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
}

function remove(key: string): void {
    localStorage.removeItem(key);
}

const storage = {
    get,
    set,
    remove,
};

export default storage;
